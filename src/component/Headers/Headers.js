import React, {Component} from "react"
import {
    Navbar,
    Container,
    Nav,
    Form,
    Button,
    NavDropdown
} from "react-bootstrap";

import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import {
    setLanguage,
    getLanguage,
    translate,
} from 'react-switch-lang';

class Headers extends Component {

    handleSetLanguage = (key) => () => {
        setLanguage(key);
    };


    render() {
        const {t} = this.props;
        return (
            <div>
            <Navbar sticky="top" collapseOnSelect expand="md" className="navbar-expand-lg fixed-top scrolling-navbar navbar-dark bg-dar" >
                <Container>
                    <Navbar.Toggle aria-controls="responcive-navbar-nav"/>
                    <Navbar.Collapse id="responcive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'} to = "/">{t('navbar.glavn')}</NavLink>
                            <NavDropdown title={t('navbar.directory')}  id="direct-dropdown" hidden={!this.props.isAuth}>
                                    <NavDropdown.Item href="/about">Приборы</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item  href="/">Организации</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Улицы</NavDropdown.Item>
                            </NavDropdown>

                            <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'} to = "/project">{t('navbar.project')}</NavLink>
                            <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'} to ="/dashboard" hidden={!this.props.isAuth}>{t('navbar.dashboard')}</NavLink>
                            <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'} to ="/cabinet" hidden={!this.props.isAuth}>{t('navbar.cabinet')}</NavLink>
                            <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'} to ={"/about"}>{t('navbar.kontact')}</NavLink>
                        </Nav>

                        <Form inline>
                          <NavDropdown variant="success" id={"lng-dropdown"} title={getLanguage().toUpperCase()}>
                              <NavDropdown.Item onClick={this.handleSetLanguage('ru')} id={"lng_ru"} title={"RU"}>RU</NavDropdown.Item>
                              <NavDropdown.Item onClick={this.handleSetLanguage('en')} id={"lng_en"} title={"EN"}>EN</NavDropdown.Item>
                              <NavDropdown.Item onClick={this.handleSetLanguage('pl')} id={"lng_pl"} title={"PL"}>PL</NavDropdown.Item>
                          </NavDropdown>
                            <NavLink to={"/auth"} hidden={this.props.isAuth}>
                            <Button className="btn-primary my-2 my-sm-0">{t('navbar.login')}</Button>
                            </NavLink>
                            <NavLink to={"/logout"} hidden={!this.props.isAuth} >
                                <Button className="btn-success my-2 my-sm-0">{t('navbar.logout')}</Button>
                            </NavLink>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log(new Date(localStorage.getItem('expirationDate')))
    //console.log(new Date(state.auth.expData))
    return{
        isAuth: !!state.auth.token,
        stDate: new Date(state.auth.expData)
    }
}

export default connect(mapStateToProps) (translate(Headers));
