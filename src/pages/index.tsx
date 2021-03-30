import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Carousel, Image, Modal, Button } from 'react-bootstrap';
import { FaRegEnvelope, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

import OurService from '../components/OurServices';
import Members from '../components/Members';

// Datas
import landingSlides from '../data/landingSlides';
import membersList from '../data/members';
import visitUsList from '../data/visitUsSlides';

import styles from '../styles/pages/LandingPage.module.css';

export default function Home() {
  const [modalScheduleMode, setModalScheduleMode] = useState<"on-line" | "whatsapp">("on-line");
  const [showModalSchedule, setShowModalSchedule] = useState(false);

  const handleClose = () => setShowModalSchedule(false);
  const handleShow = (mode: "on-line" | "whatsapp") => { setModalScheduleMode(mode); setShowModalSchedule(true); };

  return (
    <>
      <header className={styles.landingPageHeader}>
        <Carousel indicators={true} nextLabel="" prevLabel="" interval={3500} fade={true}>
          {
            landingSlides.map((slide, index) => {
              return <Carousel.Item key={index} style={{ backgroundColor: '#003A3C' }}>
                <div className={styles.headerCarouselCol} style={{ backgroundImage: `url(${slide.cover})` }}>
                  <Container className={styles.headerCarouselCaptionContainer}>
                    <Row className={`${styles.headerCarouselCaptionRow} justify-content-center align-items-center text-center`}>
                      <Col className="col-10" sm={8}>
                        <div style={{ backgroundColor: slide.color }} className={styles.headerCarouselCaptionContent}>
                          <Row className={`${styles.headerCarouselCaptionContentRow} justify-content-center align-items-center`}>
                            <Col sm={10}>
                              <h1 className={styles.visitUsTitleH1}>{slide.title}</h1>
                            </Col>
                            <Col sm={10}>
                              <p className={styles.headerCarouselCaptionContentP}>{slide.description}</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
            })
          }
        </Carousel>
      </header>

      <section className={styles.middleContainer}>
        <div className={`${styles.middleWaves} ${styles.top}`} >
          <div className={styles.headerImgBottomReverseFront} style={{ backgroundImage: `url(/assets/images/header-carousel-bottom.svg)` }}></div>
          <div className={styles.headerImgBottom} style={{ backgroundImage: `url(/assets/images/header-carousel-bottom.svg)` }}></div>
          <div className={styles.headerImgBottomReverse} style={{ backgroundImage: `url(/assets/images/header-carousel-bottom.svg)` }}></div>
        </div>

        <Container className={styles.middleSection}>
          <Row>
            <div className="section-col-back block-with-text">
              <h1>Agende uma consulta</h1>
            </div>
            <Col className="section-col">
              <h1>Agende uma consulta</h1>
              <p className="title-dark">Você pode marcar uma consulta pelo whatsapp ou por e-mail.</p>
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <Image fluid className="image-doctors" src="/assets/images/undraw_doctors_hwty.svg" alt="Marcar uma consulta." />
            </Col>

            <Col className="col-mark pt-2 pb-5" sm={7}>
              <Row className="justify-content-end">
                <Col sm={8}>
                  <p className="title-light"><FaRegEnvelope size={24} />{` `}Agendamento on-line</p>
                </Col>

                <Col sm={8}>
                  <p className="sub-title">Você preenche os seus dados, escolhe o dia e marca a sua consulta. Tudo muito fácil e rápido.</p>
                </Col>

                <Col sm={8}>
                  <button className="button-standard" onClick={(e) => { handleShow("on-line") }} type="button">Agendar agora</button>
                </Col>
              </Row>

              <Row className="justify-content-end mt-5">
                <Col sm={8}>
                  <p className="title-light"><FaWhatsapp size={24} />{` `}Por whatsapp</p>
                </Col>

                <Col sm={8}>
                  <p className="sub-title">Você conversa diretamente com um de nossos atendentes e pode tirar todas as suas dúvidas agora mesmo.</p>
                </Col>

                <Col sm={8}>
                  <button className="button-standard" onClick={(e) => { handleShow("whatsapp") }} type="button">Agendar por whatsapp</button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <article className={`${styles.servicesArticle} section-top`}>
        <Container>
          <Row>
            <div className="section-col-back block-with-text">
              <h1>Nossos serviços</h1>
            </div>

            <Col className="section-col">
              <h1>Nossos serviços</h1>
              <p className="title-dark">Oferecemos os melhores serviços para você.</p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <OurService ourService={
              {
                id: 1,
                title: 'Ginecologia',
                image: '/assets/images/service-02-icon.svg'
              }
            } />

            <OurService ourService={
              {
                id: 2,
                title: 'Obstetrícia',
                image: '/assets/images/service-03-icon.svg'
              }
            } />

            <OurService ourService={
              {
                id: 3,
                title: 'Ultrassonografia',
                image: '/assets/images/service-01-icon.svg'
              }
            } />

            <OurService ourService={
              {
                id: 1,
                title: 'Medicina fetal',
                image: '/assets/images/service-04-icon.svg'
              }
            } />

            <OurService ourService={
              {
                id: 2,
                title: 'Reprodução humana',
                image: '/assets/images/service-05-icon.svg'
              }
            } />

            <OurService ourService={
              {
                id: 3,
                title: 'Cirurgia plástica',
                image: '/assets/images/service-06-icon.svg'
              }
            } />
          </Row>
        </Container>
      </article>

      <article className="section-top">
        <Container>
          <Row>
            <div className="section-col-back block-with-text">
              <h1>Equipe</h1>
            </div>

            <Col className="section-col">
              <h1>Nossa Equipe</h1>
              <p className="title-dark">A equipe mais capacidada para lhe atender.</p>
            </Col>
          </Row>
        </Container>
      </article>

      <article style={{ backgroundImage: `url(/assets/images/team-container-top.svg)` }} className={styles.teamArticle}>
        <Container>
          <Row className="justify-content-center">
            {
              membersList.map((member, index) => {
                return <Members key={index} member={member} />
              })
            }
          </Row>
        </Container>
      </article>

      <article className={`${styles.newsArticle} pt-5 pb-5`}>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <Row>
                <Col className="pt-3 pb-3">
                  <h1>Endometriose</h1>
                </Col>
              </Row>

              <Row>
                <Col className={`${styles.newsArticleText} pt-3 pb-3`}>
                  <p>A Endometriose é uma doença inflamatória provocada por células do endométrio (parte interna do útero),
                  que em vez de serem expelidas especialmente no ciclo menstrual, migram ou apegam-se em áreas como nos
                  ovários, intestino, bexiga, ureter, na cavidade abdominal e diversos outros locais fixando-se e
                                    multiplicando nessas regiões.</p>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Image fluid src="/assets/images/articles/endometriose-01.jpg" className={styles.newsArticleImage} alt="Artigo sobre endometriose" />
            </Col>
          </Row>

          <Row>
            <Col className={`${styles.newsArticleButton} pt-4`}>
              <Link
                href='/articles/endometriose'
              >
                <a>
                  Saber mais <FaArrowRight size={18} />
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </article>

      <article style={{ backgroundImage: `url(/assets/images/visit-us-container-top.svg)` }} className={`${styles.mapArticle} pt-5 pb-5`}>
        <Container>
          <Row>
            <div className="section-col-back block-with-text">
              <h1>Nossa localização</h1>
            </div>

            <Col className="section-col">
              <h1>Nossa localização</h1>
              <p className="title-dark">Venha nos fazer uma visita.</p>
            </Col>
          </Row>

          <Row className={`${styles.mapRow} justify-content-center`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.3941023620146!2d-47.47589118523426!3d-5.508366996005753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c55f418bc77fe9%3A0xc465381318cc0b35!2sCl%C3%ADnica%20Gerar%20Imperatriz!5e0!3m2!1spt-BR!2sbr!4v1617052248694!5m2!1spt-BR!2sbr"
              style={{ width: '100%', minHeight: 500, border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </Row>
        </Container>
      </article>

      <article className={`${styles.visitUsArticle} pt-5 pb-5`}>
        <div style={{ backgroundImage: `url(/assets/images/visit-us-background.jpg)` }} className={`${styles.visitUsContainerBackground} mt-5 pb-5`} >
          <Container>
            <Row>
              <div className="section-col-back block-with-text">
                <h1 className={styles.visitUsTitleBackH1}>Venha nos conhecer</h1>
              </div>

              <Col className="section-col">
                <h1 className={styles.visitUsTitleH1}>Venha nos conhecer</h1>
                <p className="title-dark">Conheça um pouco mais a Clínica Gerar.</p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Carousel className={styles.visitUsArticleCarousel} indicators={true} nextLabel="" prevLabel="" interval={5000}>
                {
                  visitUsList.map((item, index) => {
                    return <Carousel.Item
                      className={styles.visitUsArticleCarrouselItem}
                      key={index}
                      title={item.title}
                      style={{ backgroundImage: `url(${item.cover})` }}
                    >
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  })
                }
              </Carousel>
            </Row>
          </Container>
        </div>
      </article>

      <article className={`${styles.worksArticle} section-top`}>
        <Container>
          <Row>
            <div className="section-col-back block-with-text">
              <h1>Nossos convênios</h1>
            </div>

            <Col className="section-col">
              <h1>Nossos convênios</h1>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col sm={3} className="mt-5">
              <Image src="/assets/images/convenios-unimed.svg" fluid alt="Convênio Unimed" />
            </Col>

            <Col sm={3} className="mt-5">
              <Image src="/assets/images/convenios-bradesco.svg" fluid alt="Convênio Bradesco" />
            </Col>

            <Col sm={3} className="mt-5">
              <Image src="/assets/images/convenios-cassi.svg" fluid alt="Convênio Cassi" />
            </Col>
          </Row>
        </Container>
      </article>

      <Modal show={showModalSchedule} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ color: "#003A3C", fontWeight: 600 }}>
            {
              modalScheduleMode === "on-line" ? "Agendamento on-line" : "Agendamento por whatsapp"
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mt-4 mb-4 justify-content-center align-items-center text-center">
            <Col sm={5} className="mb-3">
              <Row className="justify-content-center mb-2">
                <Col className="col-8">
                  <Image src="/assets/images/team-01.jpg" alt="Marcar uma consulta com o Dr. Evaldo Reis Silva" fluid roundedCircle />
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6>Dr. Evaldo Reis Silva</h6>
                </Col>
              </Row>

              <Row>
                <Col>
                  {
                    modalScheduleMode === "on-line" ? <button className="button-standard" onClick={(e) => {
                      e.preventDefault();
                      window.open('https://www.doctoralia.com.br/z/EAPEkA', '_blank');
                    }} type="button">Agendar agora</button> :
                      <button className="button-standard" onClick={(e) => {
                        e.preventDefault();
                        window.open('https://api.whatsapp.com/send?phone=+5599991091718', '_blank');
                      }} type="button">Whatsapp</button>
                  }
                </Col>
              </Row>
            </Col>

            <Col sm={5} className="mb-3">
              <Row className="justify-content-center mb-2">
                <Col className="col-8">
                  <Image src="/assets/images/team-02.jpg" alt="Marcar uma consulta com a Dra. Cristina Célia Andrade" fluid roundedCircle />
                </Col>
              </Row>

              <Row>
                <Col>
                  <h6>Dra. Cristina C. Andrade</h6>
                </Col>
              </Row>

              <Row>
                <Col>
                  {
                    modalScheduleMode === "on-line" ? <button className="button-standard" onClick={(e) => {
                      e.preventDefault();
                      window.open('https://www.doctoralia.com.br/cristina-celia-andrade-alves/ginecologista/imperatriz', '_blank');
                    }} type="button">Agendar agora</button> :
                      <button className="button-standard" onClick={(e) => {
                        e.preventDefault();
                        window.open('https://api.whatsapp.com/send?phone=+5599988090998', '_blank');
                      }} type="button">Whatsapp</button>
                  }
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
                </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}