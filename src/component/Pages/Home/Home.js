import React, {Component} from "react";
import './Home.css'
//import {faHome} from '@fortawesome/free-solid-svg-icons'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Card, CardDeck, Container} from "react-bootstrap";

import {
    translate,
} from 'react-switch-lang';

class Home extends Component {
    render () {

        const {t} = this.props;
        //console.log(h('card1.header'));
        return (
            <Container fluid={"sm"}>
                <CardDeck>
                    <Card  bg={"info"} className=" m-4 bg-light">
                        <Card.Img varian={"top"} src={"database.jpg"}/>

                        <Card.Header>{t("home.card1.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t('home.card1.text')}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                    <Card bg={"info"} className=" m-4 bg-light">
                        <Card.Img varian={"bottom"} src={"servers.jpg"}/>
                        <Card.Header>{t("home.card2.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t("home.card2.text")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className=" m-4 bg-light">
                        <Card.Img varian={"top"} src={"REST.jpeg"}/>
                        <Card.Header>{t("home.card3.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t("home.card3.text")}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Container>
        )
    }
}
/*Home.propTypes = {
    t: PropTypes.func.isRequired,
};*/


export default translate(Home);
