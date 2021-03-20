import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const Formulario = ({ moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, guardarConsultarApi }) => {
   
    const [ criptomonedas, guardarCriptomonedas ] = useState ([]);

    const obtenerMoneda = moneda => {
        guardarMoneda(moneda);
    }

    const obtenercriptomoneda = cripto => {
        guardarCriptomoneda(cripto);
    }

    const cotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            mostrarAlerta();
            return;
        }
        else{
            guardarConsultarApi ( true );
        }
    }

    const mostrarAlerta = () => {
        Alert.alert (
            'Error...',
            'Ambos campos son obligatorios',
            [
                { text: 'OK'}
            ]

        )
    }

    //Uso de axios para consumir API get
    useEffect (() => {
        const consultarApi = async () => {
            const urlApi = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(urlApi);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarApi();
    }, []);

    return (

        <View>
            <Text style= {styles.label}>Moneda</Text>
                <Picker
                    selectedValue = { criptomoneda } //Lo que va en el state
                    onValueChange = { cripto => obtenercriptomoneda (cripto) }
                >

                    <Picker.Item label="- Seleccione -" value=""/>
                    <Picker.Item label="Dolar Estadounidense" value="USD"/>
                    <Picker.Item label="Peso Mexicano" value="MXN"/>
                    <Picker.Item label="Euro" value="EUR"/>
                    <Picker.Item label="Libra Esterlina" value="GBP"/>

                </Picker>
            <Text style= {styles.label}>CriptomoneDA</Text>

            <Picker
                selectedValue = { moneda }
                onValueChange = { moneda => obtenerMoneda (moneda) }
            >

                <Picker.Item label="- Seleccione -" value=""/>
                { criptomonedas.map( cripto => (
                    <Picker.Item key = {cripto.CoinInfo.Id} label = {cripto.CoinInfo.FullName} value= {cripto.CoinInfo.Name }/>
                ) ) }

            </Picker>

            <TouchableHighlight style = {styles.btnCotizar}
            onPress = { () => cotizarPrecio()}
            >
                <Text style = {styles.txtCotizar}>Cotizar</Text>
            </TouchableHighlight>

        </View>
    );
}

const styles = StyleSheet.create({
label: {
fontFamily: 'Lato-Black',
fontSize: 20,
marginVertical: 20,
textTransform: 'uppercase'
},
btnCotizar: {
backgroundColor: '#5e49e2',
padding: 10,
marginTop: 30,
borderRadius: 10,
},
txtCotizar: {
color: '#FFF',
textAlign: 'center',
textTransform: 'uppercase',
fontSize: 18,
fontFamily: 'Lato-Black',

}
});

export default Formulario;
