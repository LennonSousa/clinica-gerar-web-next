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
