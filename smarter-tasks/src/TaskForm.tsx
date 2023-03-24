import React, { LegacyRef } from "react";
interface TaskFormProps {
  addTask: (value: string) => void;
}

interface TaskFormState {
  title: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  // addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
  //     event.preventDefault();
  //     console.log("Submitted the form!");
  //   };
  // inputRef: LegacyRef<HTMLFormElement> | undefined;

  constructor(props: TaskFormProps) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };
  }
  render() {
    return (
      <form
        className="w-full flex flex-col justify-around gap-3 text-white"
        onSubmit={(event) => {
          event.preventDefault();
          this.props.addTask(this.state.title);
          this.setState({ ...this.state, title: "" });
        }}
      >
        <label htmlFor="">Title</label>
        <input
          id="todoTitle"
          value={this.state.title}
          className="grow p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500"
          type="text"
          // placeholder="Title"
          required
          onChange={(event) => {
            this.setState({ ...this.state, title: event.target.value });
          }}
        />
        <label htmlFor="todoDescription">Description</label>
        <textarea
          id="todoDescription"
          className="h-40 grow p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500"
          // placeholder="Description "
        ></textarea>

      
        <label htmlFor="todoDueDate"> 
        Due Date
        </label>
        <input
            id="todoDueDate"
            type="date"
            className="grow p-2 border rounded-lg outline-none bg-gray-800 text-white uppercase border-violet-500"
            placeholder="Date"
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
