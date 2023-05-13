import { TaskItem } from "./types";
import { useID } from "./hooks/useID";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

// type TaskFormState = TaskProps;

const TaskForm: React.FC<TaskFormProps> = (props) => {
  const [nextID, incrementID] = useID("nextId", 0);

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
        ) as unknown as TaskItem;

        task.id = nextID;

        props.addTask(task);

        incrementID();
        form.reset();
      }}
    >
      <label htmlFor="title">Title</label>
      <input
        name="title"
        required
        id="todoTitle"
        className="grow p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500"
        type="text"
      />
      <label htmlFor="todoDescription">Description</label>
      <textarea
        name="description"
        id="todoDescription"
        className="h-40 grow p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500"
      ></textarea>

      <input type="hidden" name="assigneeName" value="Kekeh" />
      <label htmlFor="todoDueDate">Due Date</label>
      <input
        required
        name="dueDate"
        id="todoDueDate"
        type="date"
        className="grow p-2 border rounded-lg outline-none bg-gray-800 text-white uppercase border-violet-500"
      />
      <button
        id="addTaskButton"
        type="submit"
        className="bg-black text-white p-2 border rounded-lg font-bold uppercase border-violet-500 w-full"
      >
        Add&nbsp;item
      </button>
    </form>
  );
};

export default TaskForm;
