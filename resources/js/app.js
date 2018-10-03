
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

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
            <Route path="/display-item" component={DisplayItem} />
            <Route path="/edit/:id" component={EditItem} />
        </Route>
    </Router>,
    document.getElementById("example")
);

