import TaskCard from "./TaskCard"
import DateUtil from "./DateUtil"

function App() {
  const pendingTasks = [{
    title: "Build the website with static content",
    dueDate: DateUtil.tommorrow,
    assigneeName: "Rohit S"
  },
  {
    title: "Add a blog",
    dueDate: DateUtil.today,
    assigneeName: "Rohit M "
  }];

  const doneTasks = [{
    title: "Build the website with static content",
    dueDate: DateUtil.tommorrow,
    completedAtDate: DateUtil.yesterday,
    assigneeName: "Rohit M"
  },
  {
    title: "Get the approval from principal",
    dueDate: DateUtil.today,
    completedAtDate: DateUtil.yesterday,
    assigneeName: "Rohit M"
  }];

  return (
    <div className="flex flex-row m-auto justify-center">
      <div className="m-5">
        <h1 className="text-2xl font-bold">Pending tasks</h1>
        {
          pendingTasks.map(task => <TaskCard {...task} />)
        }
      </div>
      <div className="m-5">
        <h1 className="text-2xl font-bold">Done tasks</h1>
        {
          doneTasks.map(task => <TaskCard {...task} />)
        }
      </div>

    </div>
  )
}

export default App
