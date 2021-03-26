import React from 'react';
import Link from 'next/link';
import { Row, Col, Image } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';

import styles from '../styles/components/OurServices.module.css';

export interface OurService {
    id: number;
    title: string;
    image: string;
}

interface OurServicesProps {
    ourService: OurService;
}

const OurServices: React.FC<OurServicesProps> = ({ ourService }) => {
    return (
        <Col className={`${styles.serviceCol} col-11 mt-3 mb-3`} md={6} lg={3} >
            <div className={styles.serviceContainer}>
                <div className={styles.serviceContainerBackground}></div>
                <div className={styles.serviceContainerBackgroundHidden}></div>
                <div className={styles.serviceContent} style={{ backgroundImage: 'url(/assets/images/our-services-background.svg)' }} >
                    <Row className={`${styles.serviceContentRow} justify-content-center align-items-center`}>
                        <Col className="col-5" sm={5}>
                            <Image className={styles.serviceContentIcon} src={ourService.image} alt={ourService.title} fluid />
                        </Col>
                        <Col sm={10}>
                            <h3 className={styles.serviceContentTitle}>{ourService.title}</h3>
                        </Col>
                        <Col sm={10}>
                            <Link href="/our-services">
                                <a className={`${styles.serviceContentMore} nav-link`}>
                                    Saber mais <FaAngleRight size={20} />
                                </a>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>

        </Col>
    )
}

export default OurServices;