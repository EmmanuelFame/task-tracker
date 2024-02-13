import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [reminder, setReminder] = useState(false)
  const [day, setDay] = useState("false")

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert("Please add Task")
      return
    }
    if (!day) {
      alert("Please add Day and Time")
      return
    }
    onAdd({ text, day, reminder })
    setDay("")
    setText("")
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => {
            setDay(e.target.value)
          }}
          placeholder="Add Day and Time"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.value)
          }}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  )
}

export default AddTask
