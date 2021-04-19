import { Container, Row, Col, Image } from 'react-bootstrap';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';

function Endometriose() {

    return (
        <>
            <NextSeo
                title="Clínica Gerar | Endometriose"
                description="A Endometriose é uma doença inflamatória provocada por células do endométrio."
                openGraph={{
                    url: 'https://clinicageraritz.com.br/articles/endometriose',
                    title: 'Clínica Gerar | Endometriose',
                    description: 'A Endometriose é uma doença inflamatória provocada por células do endométrio.',
                    type: 'article',
                    article: {
                        publishedTime: '2021-03-21T23:04:13Z',
                        modifiedTime: '2021-03-22T18:04:43Z',
                        section: 'Section I',
                        authors: [
                          'https://clinicageraritz.com.br/members/dr-evaldo',
                        ],
                        tags: ['Endometriose', 'Ciclo menstrual', 'Útero'],
                      },
                    images: [
                        {
                            url: 'https://clinicageraritz.com.br/assets/images/articles/endometriose-01.jpg',
                            alt: 'Endometriose',
                        },
                        { url: 'https://clinicageraritz.com.br/assets/images/articles/endometriose-01.jpg' },
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
                        name: 'Endometriose',
                        item: 'https://clinicageraritz.com.br/articles/endometriose',
                    },
                ]}
            />

            <article>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <h2 className="article-title">Endometriose</h2>
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col sm={7} className="article-text">
                            <p>A Endometriose é uma doença inflamatória provocada por células do endométrio (parte interna do útero),
                            que em vez de serem expelidas especialmente no ciclo menstrual, migram ou apegam-se em áreas como nos ovários,
                                intestino, bexiga, ureter, na cavidade abdominal e diversos outros locais fixando-se e multiplicando nessas regiões.</p>

                            <p>
                                A Endometriose é uma doença relativamente comum, que atinge uma a cada seis mulheres em período reprodutivo. Não se sabe
                                sobre sua origem, mas tem maior chance de ocorrer se houver outros casos na família.
                                </p>
                        </Col>

                        <Col sm={5}>
                            <Image fluid rounded src="/assets/images/articles/endometriose-01.jpg" alt="Diagnóstico da Endometriose" />
                        </Col>
                    </Row>

                    <Row className="mt-5 mb-5">
                        <Col className="article-text">
                            <p>
                                Há queixas comuns: menstruações dolorosas, chegando a limitar as atividades diárias, dores intensas durante o ato sexual,
                                dores pélvicas não relacionadas com ciclo menstrual, infertilidade, e outras queixas relacionadas às áreas de fixação
                                das células do endométrio: sintomas intestinais e sintomas urinários cíclicos, isto é, relacionados às menstruações.
                            </p>

                            <p>
                                O grande problema dessa doença é o tempo de confirmação do seu diagnóstico clínico, que se dar em torno dos 25 aos 35 anos de
                                idade, embora a paciente já tenha essa doença desde as primeiras menstruações. Estima-se que há um atraso de diagnóstico em
                                torno de 08 anos, o que pode ser prejudicial a essa mulher, inclusive no aspecto reprodutivo.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="article-text">
                            <h4>Diagnóstico</h4>
                            <p>O diagnóstico é clínico. A história clínica associada a um bom exame físico com palpação do abdome, e se já tem vida sexual,
                                fazer um exame especular e um toque vaginal na busca de sinais da doença. </p>

                            <p>
                                Exames complementares de imagem são importantes: ultrassonografia pélvica com preparo intestinal e ressonância nuclear magnética.
                                </p>

                        </Col>
                    </Row>

                    <Row className="justify-content-center mb-5">
                        <Col sm={4} className="mb-4">
                            <Image fluid rounded src="/assets/images/articles/endometriose-diagnostico-01.jpg" alt="Diagnóstico da Endometriose" />
                        </Col>
                        <Col sm={4}>
                            <Image fluid rounded src="/assets/images/articles/endometriose-diagnostico-02.jpg" alt="Diagnóstico da Endometriose" />
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col className="article-text">
                            <p>Existe basicamente 03 formas de endometriose: a superficial - de difícil diagnóstico pelos exames de imagem;
                                a profunda - com boa acurácia os exames de imagem; e a do ovário (endometrioma) - muito bem individualizada pela ultrassonografia.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={9} className="article-text">
                            <h4>Tratamento</h4>
                            <p>Hoje em dia o tratamento cirúrgico está reservado para casos especiais e realizado por profissional especializado.
                                O foco maior está no tratamento clínico. </p>

                            <p>
                                O tratamento clínico visa reduzir os sintomas da paciente, visa bloquear o crescimento da doença, assim como prevenir a
                                recorrência da doença. Deve ser de baixo custo, pois é um tratamento prolongado, e não afetar a fertilidade desta mulher.
                                </p>

                            <p>
                                O tratamento cirúrgico tem indicação somente quando há falha no tratamento clínico, quando a doença apesar do tratamento
                                clínico estiver em progressão, ou quando há desejo de engravidar e este torna-se uma alternativa para o caso. Também
                                propõe-se a cirurgia em casos de doença periureteral, doença apendicular.</p>
                        </Col>

                        <Col sm={3}>
                            <Row className="justify-content-center mb-5">
                                <Col>
                                    <Image fluid rounded src="/assets/images/articles/endometriose-tratamento-01.jpg" alt="Tratamento clínico da Endometriose" />
                                </Col>
                            </Row>

                            <Row className="justify-content-center mb-5">
                                <Col>
                                    <Image fluid rounded src="/assets/images/articles/endometriose-tratamento-02.jpg" alt="Tratamento cirúrgico da Endometriose" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col className="article-text">
                            <h4>Para finalizar:</h4>
                            <p><strong>1</strong> Este é um texto de orientação para pessoas leigas; não tem a pretensão de ser texto de literatura médica;</p>

                            <p><strong>2</strong> Cuidado com as adolescentes que tem cólica menstrual limitante, devem ser investigadas com critério;</p>

                            <p><strong>3</strong> Procurar ginecologista com formação e especialização em endometriose;</p>

                            <p><strong>4</strong> Se a indicação for cirúrgica cercar-se de uma boa equipe médica, especialmente multiespecializada.</p>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col className="article-text text-end" style={{ fontStyle: "italic" }}>
                            <p>Evaldo Reis Silva
                            Médico Ginecologista
                            CRM-MA 2123 TEGO 310/02</p>
                        </Col>
                    </Row>


                </Container>
            </article>
        </>
    );
}

export default Endometriose;