import TaskCard from "./TaskCard";
import {Task} from "./TaskCard"
class DateUtil {
  static _oneday = 60 * 60 * 24 * 1000;

  static format(date : Date) {
    return date.toLocaleDateString("en-IN", {day : "numeric", month : "long" });
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
  const pendingTasks : Task[] = [
    {
      title: "Finish React course",
      dueDate: "20th April",
      assigneeName: "Vignesh Rajendran",
    }
    // {
    //   title: "Build the website with static content",
    //   dueDate: DateUtil.format(DateUtil.tommorrow),
    //   assigneeName: "Kekeh S"
    // },
    // {
    //   // title: "Add a blog",
    //   dueDate: DateUtil.format(DateUtil.today),
    //   assigneeName: "Kekeh M "
    // }
  ];

  const doneTasks : Task[] = [
  //   {
  //   title: "Build the website with static content",
  //   dueDate: DateUtil.format(DateUtil.tommorrow),
  //   completedAtDate: DateUtil.format(DateUtil.yesterday),
  //   // assigneeName: "Kekeh M"
  // },
  // {
  //   title: "Get the approval from principal",
  //   // dueDate: "22nd March",
  //   completedAtDate: "22nd March",
  //   assigneeName: "Bro please"
  // }
];
const props = {
  title: "Finish React course",
  dueDate: "20th April",
  assigneeName: "Vignesh Rajendran",
};

// cy.mount();
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
          <TaskCard {...props} />
          // doneTasks.map(task => <TaskCard {...task} />)
        }
      </div>

    </div>
  )
}

export default App
