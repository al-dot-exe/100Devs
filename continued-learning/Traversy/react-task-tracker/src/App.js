import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  // our default App states
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Shopping',
      day: 'Feb 5 12:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Meeting',
      day: 'Feb 6 2:30pm',
      reminder: false,
    },
  ])

  // METHODS //

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Tasks
  const deleteTask = (id) => {
    // show tasks that don't equal our click
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = id => {
    setTasks(tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !task.reminder } : task;
    }))
  }

  // returning jsx NOT javascript!
  return (
    <div className="container">

      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        // passing functions to these components
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;


// Class component example
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }
