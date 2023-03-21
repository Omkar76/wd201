import './TaskCard.css'

const TaskCard = ({ title, dueDate, completedAtDate, assigneeName }) => {

  return (
    <div className="TaskItem min-w-">
      <h2 className='text-xl font-bold'>{title}</h2>
      {completedAtDate &&
        <p>Completed on: {completedAtDate.toLocaleDateString("en-IN")}</p>
      }
       {!completedAtDate && <p>Due on : {dueDate.toLocaleDateString("en-IN")}</p>}
      <p>Assignee: {assigneeName}</p>
    </div>
  )
}

export default TaskCard;