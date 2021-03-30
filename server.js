// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const configs = {
    forcarHTTPS: true, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
    port: process.env.PORT || 3000
}

app.prepare().then(() => {
    const server = express();

    if (configs.forcarHTTPS) { //Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
        server.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
            if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
                res.redirect(301, `https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
            else //Se a requisição já é HTTPS
                next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
        });
    }

    server.get('*', (req, res) => handle(req, res));

    server.listen(configs.port, () => {
        console.log(`Escutando na ${configs.port}!`);
    });
})