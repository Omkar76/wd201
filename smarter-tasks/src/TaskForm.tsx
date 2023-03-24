import React, { LegacyRef } from "react";
import { Task } from "./Task";
interface TaskFormProps {
  addTask: (task: Task) => void;
}

type TaskFormState = Task;
// {
//   title: string;
//   description: string;
//   dueDate : string
// }

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  // addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
  //     event.preventDefault();
  //     console.log("Submitted the form!");
  //   };
  // inputRef: LegacyRef<HTMLFormElement> | undefined;

  // static initialState : Task = {
  //   title: "",
  //   description: "",
  //   dueDate : "",
  //   assigneeName : "Kekeh"
  // };

  constructor(props: TaskFormProps) {
    super(props);

    // this.state = TaskForm.initialState;
  }

  render() {
    return (
      <form
        className="w-full flex flex-col justify-around gap-3 text-white"
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;
          // Read the form data
          const formData = new FormData(form);

          const task = Object.fromEntries(
            formData.entries()
          ) as unknown as Task;

          task.dueDate = new Date(task.dueDate); //convert string to date type

          this.props.addTask(task);
          form.reset();
        }}
      >
        <label htmlFor="">Title</label>
        <input
          name="title"
          required
          id="todoTitle"
          className="grow p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500"
          type="text"
          onChange={(event) => {
            this.setState({ ...this.state, title: event.target.value });
          }}
        />
        <label htmlFor="todoDescription">Description</label>
        <textarea
          name="description"
          id="todoDescription"
          className="h-40 grow p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500"
        ></textarea>

        <label htmlFor="todoDueDate">Due Date</label>
        <input
          name="dueDate"
          id="todoDueDate"
          type="date"
          className="grow p-2 border rounded-lg outline-none bg-gray-800 text-white uppercase border-violet-500"
        />
        <button
          type="submit"
          className="bg-black text-white p-2 border rounded-lg font-bold uppercase border-violet-500"
        >
          Add&nbsp;item
        </button>
      </form>
    );
  }
}

export default TaskForm;
