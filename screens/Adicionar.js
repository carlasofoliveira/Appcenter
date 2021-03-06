import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { ListItem } from "react-native-elements";

const list = [
  {
    title: "Iniciativa",
    component: "Iniciativas",
  },
  {
    title: "Evento",
    component: "Novo evento",
  },
  {
    title: "Entidade",
    component: "Nova entidade",
  },
  {
    title: "Voluntário",
    component: "Voluntarios",
  },
  {
    title: "Recurso",
    component: "Novo Recurso",
  },
  {
    title: "Ideia",
    component: "Ideias",
  },
];
export default AdicionarLista = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {list.map((item, i) => (
        <ListItem 
        containerStyle={{backgroundColor:"#EEF5FF", }}
          key={i}
          bottomDivider
          style={{backgroundColor:'undefined'}}
          style={{ marginBottom: 9, paddingTop:-8, marginStart:15, marginTop:5}}
          button
          onPress={() =>
            navigation.navigate(item.component)
          }
        >
          <ListItem.Content>
            <ListItem.Title style={{color:"#345481"}}>
              {item.title}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron  />
        </ListItem>
      ))}
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF5FF",
    justifyContent: "center",
    paddingLeft: 6,
    paddingRight: 6,
  },
  content:{
    backgroundColor: "#EEF5FF",
  },
  
  back: {
    backgroundColor: "#EEF5FF",
  },
  listitem:{
    color:"#345481",
      },
});
