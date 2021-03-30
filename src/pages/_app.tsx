import Head from 'next/head'
import { useRouter } from 'next/router';

import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader activeLink={router.pathname} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

export const getServerSideProps = async ({ req, res, next }) => {
  if (res) {
    console.log(res)
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
      res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
    else //Se a requisição já é HTTPS
      next();
  }
}
