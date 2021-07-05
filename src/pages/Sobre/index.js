import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, Image} from 'react-native';


export default class Sobre extends Component{

    constructor(props){
        super(props);
        this.state ={
            data: []
        }
    }

    loadUsers = () =>{

        fetch("https://randomuser.me/api/?results=100")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.results || []
                })
            })

    }

    componentDidMount(){
        this.loadUsers();
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                data={this.state.data}
                renderItem={({item}) => (

                    <View style={styles.line}>
                        <Image
                            source={{uri: item.picture.thumbnail}}
                            style={styles.avatar} 
                        />

                        <View style={styles.info}>
                            <Text style={styles.email}>{item.email}</Text>
                            <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                        </View>

                    </View>

                )}
                keyExtractor={item => item.email}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        marginTop: 10,
        marginLeft:10,
        backgroundColor: '#FFF',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    line:{
        height: 50,
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
    },
    avatar:{
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        alignSelf: "center"
    },
    info:{
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    name:{
        fontSize: 12,
    },
    email:{
        fontSize: 14,
        fontWeight: "bold"
    }
})