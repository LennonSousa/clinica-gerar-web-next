// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const configs = {
    caminho: "build", //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
    forcarHTTPS: true, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
    port: process.env.PORT || 3000
}

app.prepare().then(() => {
    const server = express();

    server.use((req, res, next) => {
        const hostname = req.hostname === 'www.clinicageraritz.com.br' ? 'clinicageraritz.com.br' : req.hostname;

        if (req.headers['x-forwarded-proto'] === 'http' || req.hostname === 'www.clinicageraritz.com.br') {
            res.redirect(301, `https://${hostname}${req.url}`);
            return;
        }

        res.setHeader('strict-transport-security', 'max-age=31536000; includeSubDomains; preload');
        next();
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(configs.port, () => {
        console.log(`Escutando na ${configs.port}!`);
    });
})