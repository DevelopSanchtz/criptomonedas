import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  View,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';


const App = () => {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState ('');
  const [ consultarApi, guardarConsultarApi ] = useState (false);
  const [ resultado, guardarResultado ] = useState({});
  const [ cargando, guardarCargando ] = useState (false);

  

  useEffect ( () => {
    const cotizarCriptomoneda = async () => {
      if(consultarApi === true) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${moneda}&tsyms=${criptomoneda}`;
        const resultado = await axios.get(url);
        guardarCargando(true);
        
      setTimeout(() => {
        guardarResultado(resultado.data.DISPLAY[moneda][criptomoneda]);
        guardarConsultarApi(false);
        guardarCargando(false);
      }, 3000);
        
      }
    }
      cotizarCriptomoneda();
  }, [consultarApi] );

  const componente = cargando ? <ActivityIndicator size = "large" color="#5E49E2" /> 
  : <Cotizacion resultado = {resultado} />

  return (
    <>
      <Header />

      <View >
        <Image style={styles.imagen}
          source = { require('./assets/img/cryptomonedas.png')}
        />
      </View>

      <View style={styles.contenido}>
        <Formulario
          moneda = { moneda }
          criptomoneda = { criptomoneda }
          guardarMoneda = { guardarMoneda }
          guardarCriptomoneda = { guardarCriptomoneda }
          consultarApi = { consultarApi}
          guardarConsultarApi = { guardarConsultarApi }
        />
      
      </View>

      <View style = {{marginTop: 15}}>
        {componente}
      </View>

    </>
  );

};

const styles = StyleSheet.create({
imagen: {
  width: '100%',
  height: 150,
  marginHorizontal: '2.5%'
},
contenido: {
  marginHorizontal: '2.5%'
}
});

export default App;
