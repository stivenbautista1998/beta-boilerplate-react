import React, { Component, Fragment } from "react";
import styles from './styles/main.scss';

import '!file-loader?name=[name].[ext]!../public/favicon.ico';

import Button from "./button/button";
import FancyButton from "./fancy-button/fancy-button";
import video from '../public/media/peli.mp4';
import img from '../public/media/sao.jpg';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Button label="Boton Normal =)" />
                <FancyButton label="Fancy Button =)" />
                <img src={img} alt="image sao"/>
                <video autoPlay controls>
                    <source src={video} type='video/mp4' />
                </video>
            </Fragment>
        )
    }
}