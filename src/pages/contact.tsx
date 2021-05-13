import { useState } from 'react';
import { Container, Row, Col, Form, Spinner, Modal, Button, Image } from 'react-bootstrap';
import { FaMapSigns, FaPhoneAlt, FaRegEnvelope, FaWhatsapp, FaRegPaperPlane } from 'react-icons/fa';
import { Formik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';

import PageTop from '../components/PageTop';

import styles from '../styles/pages/Contact.module.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Obrigatório!'),
    email: Yup.string().email('E-mail inválido').required('Obrigatório!'),
    phone: Yup.string().required('Obrigatório!'),
    message: Yup.string().required('Obrigatório!')
});

function Contact() {
    const [isSendingMessage, setIsSendingMessage] = useState(false);
    const [isSentSuccessful, setIsSentSuccessful] = useState(false);

    const [showModalMessage, setShowModalMessage] = useState(false);

    const handleClose = () => setShowModalMessage(false);
    const handleShow = () => setShowModalMessage(true);

    return (
        <>
            <NextSeo
                title="Clínica Gerar | Contato"
                description="Estamos prontos para lhe atender."
                openGraph={{
                    url: 'https://clinicageraritz.com.br/contact',
                    title: 'Clínica Gerar | Contato',
                    description: 'Somos especialistas em Obstetrícia, Ginecologia e Reprodução Humana Assistida.',
                    images: [
                        {
                            url: 'https://clinicageraritz.com.br/assets/images/capa-contato.jpg',
                            alt: 'Clínica Gerar Contato',
                        },
                        { url: 'https://clinicageraritz.com.br/assets/images/capa-contato.jpg' },
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
                        name: 'Contato',
                        item: 'https://clinicageraritz.com.br/contact',
                    },
                ]}
            />

            <PageTop backgroundImage="/assets/images/capa-contato.jpg" isBackgroundCenter title="Contato" />

            <article>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <h2 className="article-title">Estamos prontos para lhe atender.</h2>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col className="mt-5" sm={4}>
                            <div className={styles.contactItemDiv}>
                                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                                    <Col>
                                        <Row className="pt-4">
                                            <Col><FaMapSigns size={28} /></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col><h3>Nosso endereço</h3></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col>
                                                <p>Av. Bernardo Sayão, 3650</p>
                                                <p>Medical Center, 5º andar, sala 501</p>
                                                <p>Bairro Três Poderes</p>
                                                <p>Imperatriz - MA</p>
                                                <p>65903-075</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col className="mt-5" sm={4}>
                            <div className={styles.contactItemDiv}>
                                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                                    <Col>
                                        <Row className="pt-4">
                                            <Col><FaPhoneAlt size={28} /></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col><h3>Nossos telefones</h3></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col>
                                                <p>Secretária Dr. Evaldo Reis Silva</p>
                                                <p><FaWhatsapp /> 99 99109-1718</p>
                                                <p className="mt-4">Secretária Dra. Cristina Célia Andrade</p>
                                                <p><FaWhatsapp /> 99 98809-0998</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>
                        </Col>

                        <Col className="mt-5" sm={4}>
                            <div className={styles.contactItemDiv}>
                                <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
                                    <Col>
                                        <Row className="pt-4">
                                            <Col><FaRegEnvelope size={28} /></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col><h3>Nossos e-mails</h3></Col>
                                        </Row>
                                        <Row className="pt-4">
                                            <Col>
                                                <p>cliente@clinicageraritz.com.br</p>
                                                <p>financeiro@clinicageraritz.com.br</p>
                                                <br />
                                                <br />
                                                <br />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </article>

            <section className="mt-5 mb-5">
                <Container>
                    <Row>
                        <Col><h2 className="article-title">Você também pode enviar um e-mail por aqui mesmo.</h2></Col>
                    </Row>

                    <Row className="mb-4">
                        <Col><h5>Preencha o formulário abaixo e envie a mensagem.</h5></Col>
                    </Row>

                    <Row>
                        <Col>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone: '',
                                    message: ''
                                }}
                                onSubmit={async values => {
                                    setIsSendingMessage(true);

                                    try {
                                        if (process.env.NEXT_PUBLIC_SERVICE_ID &&
                                            process.env.NEXT_PUBLIC_TEMPLATE_ID && process.env.NEXT_PUBLIC_USER_ID) {
                                            emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, values, process.env.NEXT_PUBLIC_USER_ID)
                                                .then((result) => {
                                                    setIsSentSuccessful(true);

                                                    setIsSendingMessage(false);

                                                    handleShow();

                                                    values.name = "";
                                                    values.email = "";
                                                    values.phone = "";
                                                    values.message = "";
                                                }, (error) => {
                                                    setIsSentSuccessful(false);
                                                    setIsSendingMessage(false);

                                                    handleShow();
                                                });
                                        }
                                        else {
                                            setIsSentSuccessful(false);
                                            setIsSendingMessage(false);

                                            handleShow();
                                        }

                                    }
                                    catch (err) {
                                        setIsSentSuccessful(false);
                                        setIsSendingMessage(false);

                                        handleShow();
                                    }
                                }}
                                validationSchema={validationSchema}
                            >
                                {({ handleChange, handleSubmit, values, errors, isValid }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col sm={6}>
                                                <Form.Group className="mb-4" controlId="formContactName">
                                                    <Form.Label>Nome</Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={handleChange}
                                                        value={values.name}
                                                        name="name"
                                                        isInvalid={!!errors.name}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formContactEmail">
                                                    <Form.Label>Seu e-mail</Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={handleChange}
                                                        value={values.email}
                                                        name="email"
                                                        isInvalid={!!errors.email}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group className="mb-4" controlId="formContactPhone">
                                                    <Form.Label>Seu telefone</Form.Label>
                                                    <Form.Control type="text"
                                                        onChange={handleChange}
                                                        value={values.phone}
                                                        name="phone"
                                                        isInvalid={!!errors.phone}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>

                                            <Col sm={6}>
                                                <Form.Group controlId="formContactMessage">
                                                    <Form.Label>Sua menssagem</Form.Label>
                                                    <Form.Control type="text"
                                                        as="textarea"
                                                        rows={3}
                                                        onChange={handleChange}
                                                        value={values.message}
                                                        name="message"
                                                        isInvalid={!!errors.message}
                                                        style={{ resize: 'none' }}
                                                    />
                                                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className={`${styles.contactFormRowButton} justify-content-end mt-3`}>
                                            <Col sm={3}>
                                                <button className="button-standard" disabled={isValid ? false : true} type="submit">{
                                                    isSendingMessage ? <>Enviando <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    /></> : <><FaRegPaperPlane /> Enviar mensagem</>
                                                }</button>
                                            </Col>
                                        </Row>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Modal show={showModalMessage} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title style={{ color: "#003A3C", fontWeight: 600 }}>{isSentSuccessful ? "Sua mensagem foi enviada com sucesso!" : "Erro ao enviar mensagem."}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mt-4 mb-4 justify-content-center align-items-center text-center">
                        <Col sm={5}>
                            {
                                isSentSuccessful ? <Image fluid src="/assets/images/undraw_message_sent_1030.svg" alt="Mensagem enviada com sucesso!" /> :
                                    <Image fluid src="/assets/images/undraw_page_not_found_su7k.svg" alt="Mensagem não enviada!" />
                            }
                        </Col>

                        <Col className="mt-5" sm={5}>
                            {
                                isSentSuccessful ? <><Row>
                                    <Col>
                                        <h6>Iremos retornar o mais breve possível.</h6>
                                    </Col>
                                </Row>

                                    <Row>
                                        <Col>
                                            <h6>Obrigado.</h6>
                                        </Col>
                                    </Row></> :
                                    <><Row>
                                        <Col>
                                            <h6>Infelizmente a sua mensagem não foi enviada.</h6>
                                        </Col>
                                    </Row>
                                        <Row>
                                            <Col>
                                                <h6>Tente enviar por outro meio ou tente novamente mais tarde.</h6>
                                            </Col>
                                        </Row>
                                    </>
                            }
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tudo bem!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Contact;