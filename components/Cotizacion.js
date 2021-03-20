import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) return null;

    return (
        <View style = {styles.resultado}>

            <Text style = {styles.texto}>
                <Text style = {[styles.texto, styles.precio]}>
                    {resultado.PRICE}
                </Text>
            </Text>

            <Text style = {styles.texto}>Precio más alto del día: {' '}
                <Text style = {styles.span}>
                    {resultado.HIGHDAY}
                </Text>
            </Text>

            <Text style = {styles.texto}>Precio más bajo del día: {' '}
                <Text style = {styles.span}>
                    {resultado.LOWDAY}
                </Text>
            </Text>

            <Text style = {styles.texto}>Últimas 24 horas: {' '}
                <Text style = {styles.span}>
                    {resultado.CHANGEPCT24HOUR} %
                </Text>
            </Text>

            <Text style = {styles.texto}>Última actualización: {' '}
                <Text style = {styles.span}>
                    {resultado.LASTUPDATE}
                </Text>
            </Text>

        </View>

    );
}

const styles = StyleSheet.create ({
resultado: {
    backgroundColor: '#5E49E2',
    padding: 20

},
texto : {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    marginBottom: 15,
    fontSize: 18
},
precio: {
    fontSize: 35,
    
},
span: {
    fontFamily: 'Lato-Black'
}
});

export default Cotizacion;

