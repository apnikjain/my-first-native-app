import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import GoalItem from "./components/GoalItems"
import GoalInput from "./components/GoalInput"


export default function App() {
  const [courseGoals, setCourseGoal] = useState([]) 
  const [addModal, setAddModal] = useState(false)
  const addGoalHandler = (goaltittle) =>{
    setCourseGoal(currentGoal => [...courseGoals, goaltittle])
    setAddModal(false)
  }
  const deleteHandler = (index) => {
    const arr = [...courseGoals]
    arr.splice(index,1)
    setCourseGoal(currentGoal => [...arr])
  }
  const cancelHandler = () =>{  
    setAddModal(false)


  }
  return (
    <View style = {styles.screen}>
      <Button title = "Add Course Goal" onPress = {() =>setAddModal(true) }/>
      <GoalInput cancel = {cancelHandler} visible = {addModal} goalHandler = {addGoalHandler}/>
      <ScrollView >
  {courseGoals.map((x,index) =><GoalItem key = {index} id = {index} deleteItem = {deleteHandler} x = {x}/> )}
      </ScrollView>

      
      
    </View>
  );
}
const styles = StyleSheet.create({
  screen:{padding: 50},

})
