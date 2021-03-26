import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import { FaUserMd } from 'react-icons/fa';

import './styles.css';

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
        <Col className="member-container col-11 text-center" lg={4} >
            <div className="member-item pt-3 pb-3">
                <Row className="member-image-row">
                    <Col className="member-image-col">
                        <Image fluid className="member-image" src={member.image} />
                    </Col>
                </Row>

                <Row className="member-description-row pt-3 pb-3">
                    <Col>
                        <h3 className="member-title">{member.title}</h3>
                        <h6 className="member-sub-title">{member.specialist}</h6>
                    </Col>
                </Row>

                <Row className="member-button-row">
                    <Col>
                        <Link to={`/members/${member.url}`} >Conhecer mais <FaUserMd size={20} /></Link>
                    </Col>
                </Row>
            </div>

        </Col>
    )
}

export default Members;