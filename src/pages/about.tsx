import { Container, Row, Col, Image } from 'react-bootstrap';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';

import PageTop from '../components/PageTop';

function About() {

    return (
        <>
            <NextSeo
                title="Clínica Gerar | Sobre nós"
                description="Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida."
                openGraph={{
                    url: 'https://clinicageraritz.com.br/contact',
                    title: 'Clínica Gerar | Sobre nós',
                    description: 'Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida.',
                    images: [
                        {
                            url: 'https://clinicageraritz.com.br/assets/images/capa-sobre.jpg',
                            alt: 'Clínica Gerar Contato',
                        },
                        { url: 'https://clinicageraritz.com.br/assets/images/capa-sobre.jpg' },
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
                        name: 'Sobre nós',
                        item: 'https://clinicageraritz.com.br/about',
                    },
                ]}
            />

            <PageTop backgroundImage="/assets/images/capa-sobre.jpg" isBackgroundCenter title="Sobre nós" />

            <article>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <h2 className="article-title">Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida.</h2>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col className="article-text">
                            <p>A Clínica Gerar de Imperatriz a mais de década oferece serviços especializados em Ginecologia,
                            Obstetrícia, Medicina Fetal, Reprodução Humana para a população imperatrizense e de toda grande
                            área de abrangência que esta cidade pujante serve, incluindo centro-sul do Maranhão, Sul do
                                Pará e Norte do Tocantins, englobando mais de 1 milhão de pessoas.</p>

                            <p>
                                Somos muito gratos pela confiança no nosso trabalho. Vamos seguir melhorando e antenado com as necessidades desta população.
                                </p>

                            <p>
                                Uma das principais marcas da Clínica Gerar de Imperatriz é a de não se acomodar na prestação de serviços,
                                oferendo, cada vez mais, o que há de moderno e de evidência médica na assistência à mulher e aos casais desejosos de engravidar.
                            </p>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col sm={9} className="article-text">
                            <p>Outra marca que a Clínica Gerar de Imperatriz se orgulha é o de valorizar a consulta médica, momento mais importante para
                            investigação e determinação do quadro clínico da paciente, humanizando a atenção e compartilhando com a mesma tudo que
                                diz respeito ao seu quadro clínico.</p>

                            <p>
                                A sociedade muda com o passar do tempo. A relação médica também tem mudado. O compartilhamento do quadro clínico de
                                uma pessoa, as explicações e as opções de sua condução devem ser expostas de maneira clara e objetiva para que a
                                decisão seja consensuada, exceto em casos de urgência e emergência médica onde a ação médica tem impacto decisivo
                                para salvaguardar a vida de alguém.
                                </p>
                        </Col>

                        <Col sm={3}>
                            <Image fluid rounded src="/assets/images/our-services/service-medicina-fetal.jpg" alt="A clínica gerar" />
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col sm={4}>
                            <Image fluid rounded src="/assets/images/visit-us/medicos.jpg" alt="A clínica gerar médicos" />
                        </Col>

                        <Col sm={8} className="article-text">
                            <p>Além da confiança da paciente no profissional de sua escolha, existe uma figura importante que é o Termo de Consentimento
                            Livre e Esclarecido que todos devem dar ciência para a continuidade da prestação dos serviços médicos. Repito,
                                excetuando-se alguns casos de urgência e emergência. </p>

                            <p>
                                Uma nova etapa a Clínica Gerar de Imperatriz se prepara para seguir, agora em novas acomodações no Medical Center de Imperatriz.
                                Local moderno, seguro e com comodidades maior pra todos os clientes. Estamos de portas abertas para bem receber você e os seus.
                                </p>

                            <p>
                                Grande abraço!
                                </p>
                        </Col>
                    </Row>
                </Container>
            </article>
        </>
    );
}

export default About;