import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                    <link rel="icon" type="image/png" href="favicon.png" />
                    <link rel="manifest" href="site.webmanifest" />
                    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
                    <link rel="shortcut icon" href="favicon.png" />
                    <meta name="msapplication-TileColor" content="#003a3c" />
                    <meta name="msapplication-config" content="browserconfig.xml" />
                    <meta name="theme-color" content="#003a3c" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700;800&display=swap" rel="stylesheet" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}