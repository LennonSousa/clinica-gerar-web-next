import { useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

function Page404() {
    return (
        <article>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <h2 className="article-title">Página não encontrada</h2>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={7} className="article-text">
                        <p>Você está tentando acessar uma página inexistente em nosso site.</p>
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
                        <Image fluid rounded src="/assets/images/undraw_page_not_found_su7k.svg" alt="Página não encontrada." />
                    </Col>
                </Row>
            </Container>
        </article>
    );
}

export default Page404;