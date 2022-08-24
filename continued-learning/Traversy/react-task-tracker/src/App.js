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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
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
