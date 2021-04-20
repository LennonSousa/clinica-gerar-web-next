import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Card, Row, Col } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { DefaultSeo, NextSeo, LogoJsonLd, LocalBusinessJsonLd, CorporateContactJsonLd, SocialProfileJsonLd } from 'next-seo';

import SEO from '../data/next-seo-config';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isAcceptedTerms, setIsAcceptedTerms] = useState(false);

  useEffect(() => {
    if (Cookies.get('clinica-gerar-terms') === "accepted") {
      setIsAcceptedTerms(true);
    }
  }, []);

  function handleAcceptTerms() {
    Cookies.set('clinica-gerar-terms', 'accepted', {
      expires: 365,
    });

    setIsAcceptedTerms(true);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />

      <NextSeo canonical="https://clinicageraritz.com.br/" />

      <LogoJsonLd
        logo="https://clinicageraritz.com.br/assets/images/clinica-gerar-logo.png"
        url="https://clinicageraritz.com.br"
      />

      <LocalBusinessJsonLd
        type="HealthAndBeautyBusiness"
        id="https://clinicageraritz.com.br"
        name="Clínica Gerar Imperatriz"
        description="A Clínica Gerar de Imperatriz a mais de década oferece serviços especializados em Ginecologia, Obstetrícia, Medicina Fetal, Reprodução Humana."
        url="https://clinicageraritz.com.br"
        telephone="+55-99-99109-1718"
        address={{
          streetAddress: 'Av. Bernardo Sayão, 3650, Medical Center, 5º andar, Sala 501',
          addressLocality: 'Imperatriz',
          addressRegion: 'MA',
          postalCode: '65903075',
          addressCountry: 'BR',
        }}
        geo={{
          latitude: '-5.508367',
          longitude: '-47.473702',
        }}
        images={[
          'https://clinicageraritz.com.br/assets/images/visit-us/entrada.jpg',
          'https://clinicageraritz.com.br/assets/images/atendimento.jpg',
          'https://clinicageraritz.com.br/assets/images/visit-us/medicos.jpg',
          'https://clinicageraritz.com.br/assets/images/visit-us/recepcao.jpg',
          'https://clinicageraritz.com.br/assets/images/visit-us/sala-procedimentos.jpg',
          'https://clinicageraritz.com.br/assets/images/visit-us/ultrassom.jpg',
        ]}
        priceRange='300'
        openingHours={[
          {
            opens: '08:00',
            closes: '12:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
            ],
          },
          {
            opens: '14:00',
            closes: '18:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
            ],
          },
        ]}
      />

      <CorporateContactJsonLd
        url="https://clinicageraritz.com.br/"
        logo="https://clinicageraritz.com.br/assets/images/clinica-gerar-logo.png"
        contactPoint={[
          {
            telephone: '+55-99-99109-1718',
            contactType: 'reservations',
            contactOption: 'TollFree',
            areaServed: ['BR'],
            availableLanguage: ['Portuguese'],
          },
          {
            telephone: '+55-99-98809-0998',
            contactType: 'reservations',
            contactOption: 'TollFree',
            areaServed: ['BR'],
            availableLanguage: ['Portuguese'],
          },
        ]}
      />

      <SocialProfileJsonLd
        type="Organization"
        name="Clínica Gerar Imperatriz"
        url="https://clinicageraritz.com.br"
        sameAs={[
          'https://www.instagram.com/clinicagerar/',
        ]}
      />

      <PageHeader activeLink={router.pathname} />
      <Component {...pageProps} />

      {
        !isAcceptedTerms && <div
          aria-live="polite"
          aria-atomic="true"
          className="terms-card"
        >
          <Card>
            <Card.Header>Termos de uso</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Text>
                    Ao continuar no site, você aceita os
                    <Link href='/terms' >
                      <a> termos de uso e políticas de privacidade.</a>
                    </Link>
                  </Card.Text>
                </Col>
                <Col sm={2}>
                  <button className="button-standard" onClick={handleAcceptTerms} type="button">Aceitar</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      }

      <Footer />
    </>
  )
}

export default MyApp;
