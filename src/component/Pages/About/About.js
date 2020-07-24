import React, {Component} from "react";
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faAddressCard, faCity, } from '@fortawesome/free-solid-svg-icons'
import {translate} from "react-switch-lang";

class About  extends Component {

render() {
    const {t} = this.props;
    return (
        <div className="container container_about bg-dark ">
            <div className="row mt-4 text-white">
                <div className="col-6 text-right"><FontAwesomeIcon icon={faCoffee}/></div>
                <div className="col-6 text-left">{t('kontact.title')}</div>
            </div>
            <div className="row  mt-4 text-white">
                <div className="col-2 text-right"><FontAwesomeIcon icon={faCity}/></div>
                <div className="col-10 text-left">{t('kontact.city')}</div>
            </div>
            <div className="row mt-4 text-white">
                <div className="col-2 text-right"><FontAwesomeIcon icon={faPhone}/></div>
                <div className="col-10 text-left">{t('kontact.phone')}</div>
            </div>
            <div className="row mt-4 mb-5 text-white">
                <div className="col-2 text-right"><FontAwesomeIcon icon={faAddressCard}/></div>
                <div className="col-10 text-left"><a className="mail text-white "
                                                     href="mailto:admin@citypay.org.ua"><u>admin@citypay.org.ua</u></a>
                </div>
            </div>
        </div>
    )
    }
}

export default translate(About);
