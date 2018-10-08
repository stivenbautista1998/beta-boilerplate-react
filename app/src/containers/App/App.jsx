import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../styles/main.scss';
import '!file-loader?name=[name].[ext]!../../../public/favicon.ico';
import Button from '../../components/button/button';
import FancyButton from '../../components/fancy-button/fancy-button';
import img from '../../../public/media/img/sao.jpg';
import { personas } from '../../persona.json';
// import video from '../../../public/media/video/peli.mp4';

function ListClient(props) {
  ListClient.propTypes = {
    persona: PropTypes.array
  };
  const { persona } = props;
  if (!persona) {
    return null;
  }
  const result = persona.map((item) => (
    <li key={item.id}>
      {item.firtName}
      -
      {item.lastName}
    </li>));

  return <ul>{result}</ul>;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImg: ''
      // isLoading: false,
    };
  }

  componentDidMount() {
    // this.setState({ isLoading: true });

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
        <Button label="Boton Normal =)" />
        <FancyButton label="Fancy Button =)" />
        <img src={img} alt=" content of sao" />
        <ListClient persona={personas} />
        {/* <video autoPlay controls>
          <source src={video} type='video/mp4' />
        </video> */}
        <img src={urlImg} alt="is button" />
      </Fragment>
    );
  }
}
