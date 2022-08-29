import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

function handleDeleteTask(deletedTaskText){
  console.log('deleteTaskText', deletedTaskText)
  setTasks(tasks.filter(task => task.text !== deletedTaskText))
}

function handleAddTask(newTaskObj) {
  console.log('newTaskObj', newTaskObj)
  setTasks([...tasks, newTaskObj])
}

const visibleTasks = tasks.filter(task => task.category === category || category === "All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory={category}
      onSelectCategory={setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter(cat => cat !== "All")} 
      onTaskFormSubmit={handleAddTask}

      />
      <TaskList tasks = {visibleTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
