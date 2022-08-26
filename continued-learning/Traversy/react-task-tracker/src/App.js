import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
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

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
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
