import Link from 'next/link';
import { Row, Col, Image } from 'react-bootstrap';
import { FaUserMd } from 'react-icons/fa';

import styles from '../styles/components/Members.module.css';

export interface Member {
    id: number;
    title: string;
    specialist: string;
    description: string;
    treatments: string;
    university: string;
    image: string;
    cover: string;
    articleImage: string;
    url: string;
}

interface MembersProps {
    member: Member;
}

const Members: React.FC<MembersProps> = ({ member }) => {
    return (
        <Col className={`${styles.memberContainer} col-11 text-center`} lg={4} >
            <div className={`${styles.memberItem} pt-3 pb-3`}>
                <Row className={styles.memberImageRow}>
                    <Col className={styles.memberImageCol}>
                        <Image fluid className={styles.memberImage} alt={member.title} src={member.image} />
                    </Col>
                </Row>

                <Row className={`${styles.memberCescriptionRow} pt-3 pb-3`}>
                    <Col>
                        <h3 className={styles.memberTitle}>{member.title}</h3>
                        <h6 className={styles.memberSubTitle}>{member.specialist}</h6>
                    </Col>
                </Row>

                <Row className={styles.memberButtonRow}>
                    <Col>
                        <Link
                            href={`/members/${member.url}`}
                        >
                            <a>
                                Conhecer mais <FaUserMd size={20} />
                            </a>
                        </Link>
                    </Col>
                </Row>
            </div>

        </Col>
    )
}

export default Members;