import { useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

function Page404() {
    useEffect(() => {

    }, []);

    return (
        <article>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <h2 className="article-title">Erro inesperado</h2>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={7} className="article-text">
                        <p>Ocorreu um erro inesperado no servidor, talvez seja necessário tentar novamente
                            mais tarde.</p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Link href='/'>
                            <a>
                                Clique aqui para voltar à página inicial <FaArrowRight size={18} />
                            </a>
                        </Link>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5 mb-5">
                    <Col sm={5}>
                        <Image fluid rounded src="/assets/images/undraw_server_down_s4lk.svg" alt="Erro inesperado no servidor." />
                    </Col>
                </Row>
            </Container>
        </article>
    );
}

export default Page404;