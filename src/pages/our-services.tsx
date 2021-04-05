import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';

import PageTop from '../components/PageTop';

import styles from '../styles/pages/OurServices.module.css';

function ServicesPage() {
    return (
        <>
            <NextSeo
                title="Clínica Gerar | Nossos Serviços"
                description="Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida."
                openGraph={{
                    url: 'https://clinicageraritz.com.br/our-services',
                    title: 'Clínica Gerar | Nossos Serviços',
                    description: 'Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida.',
                    images: [
                        {
                            url: 'https://clinicageraritz.com.br/assets/images/services-cover.jpg',
                            alt: 'Og Image Alt',
                        },
                        { url: 'https://clinicageraritz.com.br/assets/images/services-cover.jpg' },
                    ],
                }}
            />

            <BreadcrumbJsonLd
                itemListElements={[
                    {
                        position: 1,
                        name: 'Início',
                        item: 'https://clinicageraritz.com.br',
                    },
                    {
                        position: 2,
                        name: 'Nossos serviços',
                        item: 'https://clinicageraritz.com.br/our-services',
                    },
                ]}
            />

            <PageTop backgroundImage="/assets/images/services-cover.jpg" isBackgroundCenter title="Nossos serviços" />

            <article>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <h2 className="article-title">Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida.</h2>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col sm={6} className="article-text">
                            <p>Aqui na Clínica Gerar Imperatriz nós oferecemos vários serviços, exames e consultas para você que busca qualidade de vida, ótimo
                                atendimento e profissionais competentes.</p>
                        </Col>
                    </Row>

                    <Row id="service-ginecologia" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className={styles.serviceItemDiv}>
                                        <Row className="justify-content-center">
                                            <Col sm={4} className={styles.serviceItemColImg}>
                                                <Image fluid src="/assets/images/our-services/service-ginecologia.jpg" className={styles.serviceItemImg} alt="Ginecologia" />
                                            </Col>

                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Ginecologia
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Ginecologia é a especialização da Medicina que cuida do diagnóstico e tratamento da saúde da mulher, desde a infância até a terceira idade.
                                                            É função básica do Ginecologista (médico especializado em ginecologia) cuidar de todo tipo de doença do sistema reprodutor feminino.</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-obstetricia" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className={styles.serviceItemDiv}>
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Obstetrícia
                                            </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>O obstetra realiza consultas, orienta e aconselha a
                                                        mulher e familiares ao longo do período gestacional, realiza o parto e cuida da mulher e da criança durante o puerpério.
                                                        Ele cuida dos exames, avalia o histórico família, receita medicamentos e vitaminas e cuida de todos os procedimentos
                                                        necessários para detectar possíveis problemas com a mãe ou o bebê
                                                            </p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col sm={4} className={styles.serviceItemColImg}>
                                                <Image fluid src="/assets/images/our-services/service-obstetricia.jpg" className={styles.serviceItemImg} alt="Obstetrícia" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-ultrassonografia" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className={styles.serviceItemDiv}>
                                        <Row className="justify-content-center">
                                            <Col sm={4} className={styles.serviceItemColImg}>
                                                <Image fluid src="/assets/images/our-services/service-ultrassonografia.jpg" className={styles.serviceItemImg} alt="Ultrassonografia" />
                                            </Col>

                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Ultrassonografia
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>A ultrassonografia (ou ecografia) é um método inócuo e relativamente barato de produzir em tempo real
                                                        imagens em movimento das estruturas e órgãos do interior do corpo. Em virtude de ser um exame de realização
                                                        muito simples, costuma ser usado para fins preventivos, diagnósticos ou como acompanhamento de tratamentos.
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-fetal" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className={styles.serviceItemDiv}>
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Medicina Fetal
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Nossa função é de ser um complemento para a atividade do obstetra. Uma vez que a doença é
                                                        diagnosticada a partir do pré-natal, ou há suspeita de uma condição de anomalia, é importante ter
                                                        um médico especializado no assunto. Há também a possibilidade da avaliação da parte genética, que
                                                        é realizada por um geneticista
                                                            </p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col sm={4} className={styles.serviceItemColImg}>
                                                <Image fluid src="/assets/images/our-services/service-medicina-fetal.jpg" className={styles.serviceItemImg} alt="Medicina fetal" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-reproducao" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className={styles.serviceItemDiv}>
                                        <Row className="justify-content-center">
                                            <Col sm={4} className={styles.serviceItemColImg}>
                                                <Image fluid src="/assets/images/our-services/service-reproducao-humana.jpg" className={styles.serviceItemImg} alt="Reprodução Humana" />
                                            </Col>

                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Reprodução Humana
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Técnicas voltadas à manipulação de espermatozoides e óvulos, bem como técnicas de fertilização in vitro.</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row id="service-plastica" className="justify-content-center mt-3 mb-5">
                        <Col sm={10}>
                            <Row className="justify-content-center">
                                <Col>
                                    <div className={styles.serviceItemDiv}>
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Row>
                                                    <Col className="article-sub-title">
                                                        Cirurgia Plástica
                                            </Col>
                                                </Row>

                                                <Row>
                                                    <Col className="article-text">
                                                        <p>Procedimento que visa aperfeiçoar o corpo e agregar melhorias tanto funcionais como na autoestima.</p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col sm={4} className={styles.serviceItemColImg}>
                                                <Image fluid src="/assets/images/our-services/service-cirurgia-plastica.jpg" className={styles.serviceItemImg} alt="Cirurgia Plástica" />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </article>
        </>
    );
}

export default ServicesPage;