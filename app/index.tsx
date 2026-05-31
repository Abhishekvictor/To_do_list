import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"
import { Checkbox } from "expo-checkbox"

type ToDoType = {
  id: number;
  title: string;
  isDone: boolean;
};


export default function Index() {

  const todoData = [
    {
      id: 1,
      title: "Todo 1",
      isDone: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isDone: false,
    },
    {
      id: 3,
      title: "Todo 3",
      isDone: true,
    },
    {
      id: 4,
      title: "Todo 4",
      isDone: false,
    },
    {
      id: 5,
      title: "Todo 5",
      isDone: false,
    },
    {
      id: 6,
      title: "Todo 6",
      isDone: false,
    },
  ];
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { }}>
          <Ionicons name="menu" size={24} color={'black'}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Image source={{ uri: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg' }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.searchbar}>
        <Ionicons name="search" size={20} color={'black'} ></Ionicons>
        <TextInput placeholder="Search" style={styles.searchInput} clearButtonMode="always"></TextInput>
      </View>

      <FlatList data={todoData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <View style={styles.todoinfoContainer}>

              <Checkbox value={item.isDone} color={ item.isDone ? '#9083ed' : undefined }></Checkbox>
              <Text style={[styles.todotext , item.isDone && {textDecorationLine:'line-through'} ]} >{item.title}</Text>

            </View>

            <TouchableOpacity onPress={() => (alert("Delete" + item.id))}>
              <Ionicons name="trash" size={24} color={'black'}></Ionicons>

            </TouchableOpacity>

          </View>


        )}
      />

      {/* this is the footer  */}

      <KeyboardAvoidingView style={styles.footer} behavior="padding" keyboardVerticalOffset={20}>
        {/* Adding new task  */}
        <TextInput placeholder="Add new Task" style={styles.newtodoInput}></TextInput>
        <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={26} color={'#333'}></Ionicons>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    gap: 10,
    margin: 10,

  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333'



  },
  todoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'



  },
  todoinfoContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',


  },
  todotext:{
    fontSize:16,
    color:'#333'
  },
  footer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'

  },
  addButton:{
    backgroundColor:'#dfdcf5',
    borderRadius:20,
    marginLeft:10,
    


  },
  newtodoInput:{
    backgroundColor:'#fff',
    flex:1,
    fontSize:16,
    padding:16,
    borderRadius:20,
    shadowColor:'blue',
    elevation:2

  }
  

})
