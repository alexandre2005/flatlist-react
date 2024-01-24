import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView} from "react-native";

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      filmes: [
        {nome: 'Homem Aranha 3'},
        {nome: 'As Aventuras de Pi'},
        {nome: 'Dragon Ball Super:Broly'},
        {nome: 'Homem Aranha 3'},
        {nome: 'As Aventuras de Pi'},
        {nome: 'Dragon Ball Super:Broly'},
        {nome: 'Homem Aranha 3'},
        {nome: 'As Aventuras de Pi'},
        {nome: 'Dragon Ball Super:Broly'},
        {nome: 'Homem Aranha 3'},
        {nome: 'As Aventuras de Pi'},
        {nome: 'Dragon Ball Super:Broly'},
      ]
    }
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        
      <FlatList
      // horizontal
      data={this.state.filmes}
      renderItem={({item}) => 
        <View style={styles.containerFilmes}>

          <Text style={styles.titleFilmes}>{item.nome}</Text>

        </View>
      }
      
      />

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFilmes: {
    backgroundColor: 'orange',
    height: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  titleFilmes: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})