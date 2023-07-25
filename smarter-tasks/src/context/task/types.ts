export type TaskDetailsPayload = {
    title: string;
    description: string;
    dueDate: string;
};
export type AvailableColumns = "pending" | "in_progress" | "done";


export type TaskDetails = {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    state: AvailableColumns;
    assignee?: number,
    assignedUserName?: string
};

export type ColumnData = {
    id: string;
    title: string;
    taskIDs: string[];
};
export type Columns = {
    [k in AvailableColumns]: ColumnData;
};

export interface TaskListState {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
    projectData : ProjectData
}

// Actions that are available
export enum TaskListAvailableAction {
    CREATE_TASK_REQUEST = "CREATE_TASK_REQUEST",
    CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
    CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE",
    REORDER_TASKS = "REORDER_TASKS",
}

// Create a type to hold list of actions that can be dispatched
export type TaskActions =
    | { type: TaskListAvailableAction.CREATE_TASK_REQUEST }
    | { type: TaskListAvailableAction.CREATE_TASK_SUCCESS }
    | { type: TaskListAvailableAction.CREATE_TASK_FAILURE; payload: string }
    | { type: TaskListAvailableAction.REORDER_TASKS, payload: ProjectData }

// A type to hold dispatch actions in a context.
export type TasksDispatch = React.Dispatch<TaskActions>;

export type Tasks = {
    [k: string]: TaskDetails;
};

export type ProjectData = {
    tasks: Tasks;
    columns: Columns;
    columnOrder: AvailableColumns[];
};
