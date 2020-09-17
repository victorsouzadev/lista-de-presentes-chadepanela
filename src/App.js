import React from 'react';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'

// import './App.css';
import firebase from './Firebase'

import {
  Container,
  Grid
} from 'semantic-ui-react'
import { createMedia } from "@artsy/fresnel";


const AppMedia = createMedia({
  breakpoints: {
    mobile: 200,
    tablet: 716,
    computer: 1200,
    //    largeScreen: 1200,
    //    widescreen: 1920
  }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const styleDiv = {
  minHeight: '1000px',
  height: '100%',
  // background: 'linear-gradient(180deg, #FFFFFF 50%, #EEEEEE 50%)'
};


// function listaPresentes() {
//   firebase.database().ref('Lista/').set({
//     0: ['Cortina Blackout', 0],
//     1: ['Lençóis para cama queen', 0],
//     2: ['Toalhas de banho', 0],
//     3: ['Edredons', 0],
//     4: ['Travesseiros', 0],
//     5: ['Geladeira', 0],
//     6: ['Forno', 0],
//     7: ['Batedeira', 0],
//     8: ['Microondas', 0],
//     9: ['Tábuas para corte', 0],
//     10: ['Aparelhos de jantar', 0],
//     11: ['Panela de Pressão', 0],
//     12: ['Jogo de panelas', 0],
//     13: ['Jogo de copos', 0],
//     14: ['Jogo de sobremesa', 0],
//     15: ['Jogo de taças', 0],
//     16: ['Sanduicheira', 0],
//     17: ['Talheres', 0],
//     18: ['Cuscuzeira', 0],
//     19: ['Garrafa de Café', 0],
//     20: ['Jarras para suco e água', 0],
//     21: ['Liquidificador', 0],
//     22: ['Travessas', 0],
//     23: ['Formas de bolo', 0],
//     24: ['Frigideira', 0],
//     25: ['Tapetes', 0],
//     26: ['Ferro de passar', 0],
//     27: ['Ventilador', 0],
//   });
// }

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      lista: []
    }


  }

  componentDidMount() {
    this.getListaDatabase()


  }

  async getListaDatabase() {
    await firebase.database().ref('Lista/').on("value", dataSnapshot => {
      var lista = [];
      dataSnapshot.forEach(child => {
        lista.push(child.val());
      });
      this.setState({
        lista: lista
      })
    });
  }


  DesktopContainer() {

    return (




      <Container >
        <Grid columns={4} padded>
          {this.state.lista.map((presente, index) => (
            <Grid.Column key={index}>
              <Card name={presente[0]} quantidade={presente[1]} path={'Lista/' + index} />
            </Grid.Column>
          ))}
        </Grid>

      </Container>


    )
  }

  MobileContainer() {

    return (
      <Container>
        <Grid  centered columns={1} padded>
          {this.state.lista.map((presente, index) => (
            <Grid.Column  key={index}>
              <Card name={presente[0]} quantidade={presente[1]} path={'Lista/' + index} />
            </Grid.Column>
          ))}
        </Grid>

      </Container>
    )
  }
  TabletContainer() {

    return (
      <Container >
        <Grid columns={3} padded>
          {this.state.lista.map((presente, index) => (
            <Grid.Column key={index}>
              <Card name={presente[0]} quantidade={presente[1]} path={'Lista/' + index} />
            </Grid.Column>
          ))}
        </Grid>

      </Container>
    )
  }


  render() {
    return (
      <div style={{}}>
        <Header></Header>

        <div style={styleDiv}>
        <style>{mediaStyles}</style>
        <MediaContextProvider>

          <Media at="mobile">
          {this.MobileContainer()}
          </Media>

          <Media at="tablet">
          {this.TabletContainer()}
          </Media>
          <Media as={Media} greaterThanOrEqual="computer">
            {this.DesktopContainer()}
          </Media>

        </MediaContextProvider>
        </div>


        <Footer></Footer>




      </div>

    );
  }

}


export default Home
