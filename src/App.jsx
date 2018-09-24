import React, { Component, Fragment } from "react";
import styles from './styles/main.scss';
import Button from "./button/button";
import FancyButton from "./fancy-button/fancy-button";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Button label="Boton Normal" />
                <FancyButton label="Fancy Button =)" />
            </Fragment>
        )
    }
}