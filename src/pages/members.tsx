import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Container, Row, Col, Image } from 'react-bootstrap';

import PageTop from '../components/PageTop';
import { Member } from '../components/Members';

// Datas
import membersList from '../data/members';

function Members() {
    const router = useRouter();
    const [member, setMember] = useState<Member>()

    useEffect(() => {
        const memberFound = membersList.find(item => { return item.url === router.query.member });

        if (memberFound) {
            setMember(memberFound);
        }
    }, [router.query.member]);

    return (
        <>
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
        </>
    );
}

export default Members;