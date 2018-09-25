import React, { Component, Fragment } from "react";
import styles from './styles/main.scss';
import Button from "./button/button";
import FancyButton from "./fancy-button/fancy-button";
import img from '../public/images/sao.jpg';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Button label="Boton Normal" />
                <FancyButton label="Fancy Button =)" />
                <img src={img} alt="image sao"/>
            </Fragment>
        )
    }
}