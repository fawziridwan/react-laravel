import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
import PropTypes from "prop-types";

class Master extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#" className="class navbar-brand">
                                AppDividend
                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#" />
                                Page 1
                            </li>
                            <li>
                                <a href="#" />
                                Page 2
                            </li>
                            <li>
                                <a href="#" />
                                Page 3
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Master;
