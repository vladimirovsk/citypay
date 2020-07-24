import React from "react";
import {Component} from "react";
import {Button, Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";
import {translate} from "react-switch-lang";

class Project extends Component {
    render() {
        const {t} = this.props;
        return (
            <Container>
                <Row>
                    <Col md="9" className="text-left meProject">
                        <ListGroup>

                            <ListGroup.Item className="bg-white mt-3"><Media>
                                <img  width={150} height={110} alt={t('project.row1.title')} className="mr-3" src={"REST_API.png"} />
                                <Media.Body>
                                    <h5 className={"text-center"}>{t('project.row1.title')}</h5>
                                    <p>{t('project.row1.text')}</p>
                                    <Button variant={"outline-primary"} >
                                        <a rel="external" href="https://teplo.od.ua/cabinet">{t('project.link')}</a>
                                    </Button>
                                </Media.Body>
                            </Media></ListGroup.Item>

                            <ListGroup.Item className="bg-white mt-3"><Media className={" m-3 "}>
                                <img width={150} height={140} alt={t('project.row2.title')} className="mr-3" src={"TGO_CABINET.png"} />
                                <Media.Body>
                                    <h5 className={"text-center"}>{t('project.row2.title')}</h5>
                                    <p>{t('project.row2.text')}
                                    </p>
                                    <Button variant={"outline-primary"} >
                                        <a rel="external" href="https://teplo.od.ua/cabinet">{t('project.link')}</a>
                                    </Button>
                                </Media.Body>
                            </Media></ListGroup.Item>

                            <ListGroup.Item className="bg-white mt-3"><Media className={" m-3 "}>
                                <img width={150} height={130} alt={t('project.row3.title')} className="mr-3" src={"AVR.jpeg"} />
                                <Media.Body>
                                    <h5 className={"text-center"}>{t('project.row3.title')}</h5>
                                    <p>{t('project.row3.text')}
                                    </p>
                                    <Button variant={"outline-primary"}>
                                        <a rel="external" href="http://heatmeter.itservis.od.ua">{t('project.link')}</a>
                                    </Button>
                                </Media.Body>
                            </Media></ListGroup.Item>
                            <ListGroup.Item className="bg-white mt-3"><Media className={" m-3 "}>
                                <img width={150} height={150} alt={t('project.row4.title')} className="mr-3" src={"GKH.jpg"} />
                                <Media.Body>
                                    <h5 className={"text-center"}>{t('project.row4.title')}</h5>
                                    <p>{t('project.row4.text')}
                                    </p>
                                    <Button variant={"outline-primary"}>
                                        <a rel="external" href="http://csip.itservis.od.ua/">{t('project.link')}</a>
                                    </Button>
                                </Media.Body>
                            </Media></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md="3">
                        <Card className="mt-3">
                            <Card.Title className="text-center mt-4">{t('project.category.title')}</Card.Title>
                        <ListGroup variant={"flush"}>
                            <ListGroup.Item>{t('project.category.list.row1.title')}</ListGroup.Item>
                            <ListGroup.Item>{t('project.category.list.row2.title')}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <Card className={"mt-3"}>
                            <Card.Body>
                                <Card.Title>{t('project.vidjet.title')}</Card.Title>
                                <Card.Text>
                                    {t('project.vidjet.text')}

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
        )
    }
}

export default translate(Project)
