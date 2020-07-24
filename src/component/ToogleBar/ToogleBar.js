import React, {Component} from "react";
import {NavLink} from "react-bootstrap";

class ToogleBar extends Component {

    render() {
        return (
            <div className = "sidebar-fixed position-fixed">
                <div className="list-group list-group-flush">
                    <NavLink className="list-group-item waves-effect mb-3 nav-link active" to="#"><i className="fa fa-user">Организации</i ></NavLink>
                    <NavLink className="list-group-item waves-effect mb-3 nav-link " to="#"><i className="fa fa-bank">Банки</i></NavLink>
                    <NavLink className="list-group-item waves-effect mb-3 nav-link" to="#"><i className="fa fa-money">Оплаты</i></NavLink>
                </div>
            </div>
        )
    }
}

export default ToogleBar;
