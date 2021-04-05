import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';

import PageTop from '../../components/PageTop';

// Datas
import membersList from '../../data/members';

function Members({ member }) {
    const { isFallback } = useRouter();

    return (
        <>
            {
                isFallback ? <article>
                    <Container>
                        <Row style={{ minHeight: 500, justifyContent: 'center', alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>
                            <Col>
                                <h1>Aguarde...</h1>
                            </Col>
                        </Row>
                    </Container>
                </article> : <article>
                    <NextSeo
                        title={`Clínica Gerar | ${member?.title}`}
                        description={member?.specialist}
                        openGraph={{
                            url: `https://clinicageraritz.com.br/members/${member?.url}`,
                            title: `Clínica Gerar | ${member?.title}`,
                            description: member?.specialist,
                            type: 'profile',
                            profile: {
                                firstName: member?.title,
                                gender: 'male',
                            },
                            images: [
                                {
                                    url: member?.image,
                                    alt: member?.title,
                                },
                                {
                                    url: member?.articleImage,
                                    alt: member?.title,
                                },
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
                                name: member?.title,
                                item: `https://clinicageraritz.com.br/members/${member?.url}`,
                            },
                        ]}
                    />

                    <PageTop
                        backgroundImage={member ? member.cover : ''}
                        isBackgroundCenter={false}
                        title={member ? member.title : ''} />

                    <article>
                        <Container>
                            <Row className="mt-5 justify-content-center">
                                <Col sm={9}>
                                    <h2 className="article-title">{`Sou especialista em ${member?.specialist}`}</h2>
                                </Col>
                            </Row>

                            <Row className="mt-5 mb-5 justify-content-center">
                                <Col className="article-text" sm={5}>
                                    <p>{member?.description}</p>
                                </Col>
                                <Col className="article-text" sm={4}>
                                    <Image className="membersArticleImage" rounded fluid src={member ? member.articleImage : ''} alt={member ? member.title : ''} />
                                </Col>
                            </Row>

                            <Row className="mt-5 mb-5 justify-content-center">
                                <Col sm={9}>
                                    <h2 className="article-title">Tratamentos</h2>
                                </Col>
                                <Col className="article-text" sm={9}>
                                    <p>{member?.treatments}</p>
                                </Col>
                            </Row>

                            <Row className="mt-5 mb-5 justify-content-center">
                                <Col className="article-text" sm={9}>
                                    <p>{`Formação: ${member?.university}`}</p>
                                </Col>
                            </Row>
                        </Container>
                    </article>
                </article>
            }
        </>
    );
}

export default Members;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = membersList.map(member => {
        return {
            params: { member: member.url }
        }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { member } = context.params;

    const memberFound = membersList.find(item => { return item.url === member });

    return {
        props: {
            member: memberFound,
        }
    }
}