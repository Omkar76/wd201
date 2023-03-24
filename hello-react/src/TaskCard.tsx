import './TaskCard.css'

interface Task {
  title: string
  dueDate: Date
  completedAtDate?: Date
  assigneeName: string
}

const TaskCard: React.FC<Task> = (props) => {

  return (
    <div className="TaskItem min-w-">
      <h2 className='text-xl font-bold'>{props.title}</h2>
      {props.completedAtDate &&
        <p>Completed on: {props.completedAtDate.toLocaleDateString("en-IN")}</p>
      }
      {!props.completedAtDate && <p>Due on : {props.dueDate.toLocaleDateString("en-IN")}</p>}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard;