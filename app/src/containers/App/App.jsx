import React, { Component, Fragment } from "react";
import styles from '../../styles/main.scss';
import '!file-loader?name=[name].[ext]!../../../public/favicon.ico';
import Button from "../../components/button/button";
import FancyButton from "../../components/fancy-button/fancy-button";
import img from '../../../public/media/img/sao.jpg';
import { personas } from '../../persona.json';
// import video from '../../../public/media/video/peli.mp4';

function ListClient(props) {
  var result = props.persona.map(item => {
    return <li key={item.id}>{item.firtName} - {item.lastName}</li>
  });

  return (
    <ul>
      {result}
    </ul>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImg: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
    .then((response) => response.blob())
    .then((response) => {
      const objectURL = URL.createObjectURL(response);
      console.log(objectURL);
      this.setState({ urlImg: objectURL, isLoading: false });
    }).catch((err) => {
      console.log('no pudo: ' + err);
    });
  }

  render() {
    console.log("pass: " + process.env.DB_PASS);
    return (
      <Fragment>
        <Button label="Boton Normal =)" />
        <FancyButton label="Fancy Button =)" />
        <img src={img} alt="image sao"/>
        <ListClient persona={personas} />
        {/* <video autoPlay controls>
          <source src={video} type='video/mp4' />
        </video> */}
        <img src={this.state.urlImg} alt="my Image button"/>
      </Fragment>
    )
  }

}
