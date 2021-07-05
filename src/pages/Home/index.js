import React from 'react';
import {View, Text, Button, StyleSheet, Image, TextInput} from 'react-native';

export default function Home({navigation}){
    return(
        <View style={styles.container}>

            <Text style={{color:'#FFF', marginTop: 50, fontWeight: 'bold', fontSize: 16}}>BEM VINDO AO NOSSO GERENCIADOR DE USUÁRIOS</Text>

            <Image
            source={require('../Home/logo.png')}
            style={styles.logo}
            />
            
            <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            />

            <TextInput
            style={styles.input}
            placeholder="Digite sua Senha"
            secureTextEntry={true}
            />

            <Button 
            title="Login"
            onPress={ () => navigation.navigate('Sobre')}
            styles={styles.botao}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#2c3e50'
    },
    logo:{
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 100,
        
    },
    input:{
        marginTop: 10,
        width: 300,
        backgroundColor:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    botao:{
        width: 300,
        height: 42,
        backgroundColor:'#3498db',
        marginTop: 10,
        borderRadius:4,
        alignItems: 'center',
        justifyContent:'center'
    }
})