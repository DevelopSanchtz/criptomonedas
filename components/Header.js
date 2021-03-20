import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';


const Header = () => (
    <Text style={styles.encabezado}>Criptomonedas</Text>
);

const styles = StyleSheet.create({
encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    textAlign: 'center',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30
}
});

export default Header;
