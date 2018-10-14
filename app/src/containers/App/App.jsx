import React, { Component, Fragment } from 'react';
import './style.scss';

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!../../../public/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

import Button from '../../components/button/button';
import FancyButton from '../../components/fancy-button/fancy-button';
import Header from '../../components/Header';
// import video from '../../../public/media/video/peli.mp4';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImg: ''
      // isLoading: false,
    };
  }

  componentDidMount() {
    fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
      .then((response) => response.blob())
      .then((response) => {
        const objectURL = URL.createObjectURL(response);
        this.setState({ urlImg: objectURL });
      }).catch((err) => {
        const error = new Error(err.message);
        throw error;
      });
  }

  render() {
    const { urlImg } = this.state;
    return (
      <Fragment>
        <Header />
        <Button label="Boton Normal =)" />
        <FancyButton label="Fancy Button =)" />
        <img src={urlImg} alt="is button" />
      </Fragment>
    );
  }
}
