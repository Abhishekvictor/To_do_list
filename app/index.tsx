import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"
import { Checkbox } from "expo-checkbox"
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const [todos, settodo] = useState<ToDoType[]>(todoData);
  const [todotext, settodotext] = useState<string>('')

  const addtodo = async ()=>{
    const newtodo ={
      id: Math.random(),
      title:todotext,
      isDone:false

    }
try{

settodo([...todos, newtodo]);
  await AsyncStorage.setItem("Mytodo", JSON.stringify(todos))
  settodotext('');

}catch(erro){
  console.log(error)
}
  
    // todos.push(newtodo)
    // settodo(todos)
    // settodotext('')
  }
  return (

    // header section

    // Profile and menu bar
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

        {/* search bar  */}
      </View>
      <View style={styles.searchbar}>
        <Ionicons name="search" size={20} color={'black'} ></Ionicons>
        <TextInput placeholder="Search" style={styles.searchInput} clearButtonMode="always"></TextInput>
      </View>

      {/* list of todo task */}

      <FlatList data={[...todos].reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Todolist todo={item}></Todolist>


        )}
      />

      {/* this is the footer  */}

        {/* Adding new task button  */}
      <KeyboardAvoidingView style={styles.footer} behavior="padding" keyboardVerticalOffset={20}>
        <TextInput placeholder="Add new Task" style={styles.newtodoInput} value={todotext} onChangeText={(text) => settodotext(text)} autoCorrect={false}></TextInput>
       
       {/* todo task name input field */}
        <TouchableOpacity style={styles.addButton} onPress={()=>(addtodo())}>
          <Ionicons name="add" size={26} color={'#333'}></Ionicons>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

// List of Todo item
//   Component of todolist

const Todolist = ({ todo }: { todo: ToDoType }) => (
  <View style={styles.todoContainer}>
    <View style={styles.todoinfoContainer}>

      <Checkbox value={todo.isDone} color={todo.isDone ? '#9083ed' : undefined}></Checkbox>
      <Text style={[styles.todotext, todo.isDone && { textDecorationLine: 'line-through' }]} >{todo.title}</Text>

    </View>

    <TouchableOpacity onPress={() => (alert("Delete" + todo.id))}>
      <Ionicons name="trash" size={24} color={'black'}></Ionicons>

    </TouchableOpacity>

  </View>

)



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
  todotext: {
    fontSize: 16,
    color: '#333'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  addButton: {
    backgroundColor: '#dfdcf5',
    borderRadius: 20,
    marginLeft: 10,



  },
  newtodoInput: {
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 16,
    padding: 16,
    borderRadius: 20,
    shadowColor: 'blue',
    elevation: 2

  }


})
