/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import Example from "./components/Example";
import Master from "./components/Master";
import CreateItem from "./components/CreateItem";

render(<Example />, document.getElementById("example"));
require("./components/Example");
render(<Master />, document.getElementById("example"));

render(
    <Router history={browserHistory}>
        <Route path="/" component={Master}>
            <Route path="/add-item" component={CreateItem} />
        </Route>
    </Router>,
    document.getElementById("example")
);