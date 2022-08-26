import { useState } from 'react' // adds component level state

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false) //default for reminder

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task');
      return
    }

    onAdd({ text, day, reminder });

    // clear form after adding new task
    setText('')
    setDay('')
    setReminder(false)
  }

  // jsx NOT javascript
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        className='btn btn-block' type='submit' value='Save Task'
      />
    </form>
  )
}

export default AddTask
