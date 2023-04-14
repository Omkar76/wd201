import TaskCard from "./TaskCard"
class DateUtil {
  static _oneday = 60 * 60 * 24 * 1000;

  static format(date : Date) {
    return date.toLocaleDateString("en-CA");
  }

  static get today() {
    return new Date();
  }

  static get yesterday() {
    return new Date(this.today.getTime() - this._oneday);
  }

  static get tommorrow() {
    return new Date(this.today.getTime() + this._oneday);
  }
}


function App() {
  const pendingTasks = [{
    title: "Build the website with static content",
    dueDate: DateUtil.tommorrow,
    assigneeName: "Kekeh S"
  },
  {
    title: "Add a blog",
    dueDate: DateUtil.today,
    assigneeName: "Kekeh M "
  }];

  const doneTasks = [{
    title: "Build the website with static content",
    dueDate: DateUtil.tommorrow,
    completedAtDate: DateUtil.yesterday,
    assigneeName: "Kekeh M"
  },
  {
    title: "Get the approval from principal",
    // dueDate: DateUtil.today,
    completedAtDate: DateUtil.yesterday,
    assigneeName: "Bro please"
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
