import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from '../styles/components/PageTop.module.css';

interface PageHeaderProps {
    backgroundImage: string;
    isBackgroundCenter: boolean;
    title: string;
}

const PageTop: React.FC<PageHeaderProps> = ({ backgroundImage, isBackgroundCenter, title }) => {
    return (
        <>
            <header className={styles.topHeader} style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPositionY: isBackgroundCenter ? 'center' : '30%'
            }}
            >
                <Container style={{ height: '100%' }}>
                    <Row style={{ height: '100%', alignItems: 'flex-end' }}>
                        <Col>
                            <div className={styles.topHeaderDiv}>
                                <Row>
                                    <div className="section-col-back block-with-text">
                                        <h1 className={styles.topHeaderBackH1}>{title}</h1>
                                    </div>
                                    <Col className="article-header-col">
                                        <h1 className={styles.topHeaderH1}>{title}</h1>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

            <section>
                <Container>
                    <Row className="mb-5">
                        <Col>
                            <div className={styles.topHeaderDivBottom}></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default PageTop;