import { Dialog, Transition, Listbox } from "@headlessui/react";
import CheckIcon from "@heroicons/react/24/outline/CheckIcon";
import React, { Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTasksDispatch, useTasksState } from "../../context/task/context";
import { updateTask } from "../../context/task/actions";

import { useProjectsState } from "../../context/projects/context";
import { TaskDetailsPayload } from "../../context/task/types";
import { useMembersState } from "../../context/members/context";
import CommentList from "./CommentList";
import {
  CommentsProvider,
  useCommentsDispatch,
  useCommentsState,
} from "../../context/comments/context";
import { addComment } from "../../context/comments/actions";
import { CommentSection } from "./CommentSection";

type TaskFormUpdatePayload = TaskDetailsPayload & {
  selectedPerson: string;
};

// Helper function to format the date to YYYY-MM-DD format
const formatDateForPicker = (isoDate: string) => {
  const dateObj = new Date(isoDate);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  // Format the date as per the required format for the date picker (YYYY-MM-DD)
  return `${year}-${month}-${day}`;
};

const TaskDetails = () => {
  let [isOpen, setIsOpen] = useState(true);

  const { projectID, taskID } = useParams();

  const navigate = useNavigate();

  // Extract project and task details.
  const projectState = useProjectsState();
  const taskListState = useTasksState();
  const taskDispatch = useTasksDispatch();

  const memberState = useMembersState();
  const selectedProject = projectState?.projects.filter(
    (project) => `${project.id}` === projectID
  )[0];

  const selectedTask = taskListState.projectData.tasks[taskID ?? ""];
  const [selectedPerson, setSelectedPerson] = useState(
    selectedTask.assignedUserName ?? ""
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormUpdatePayload>({
    defaultValues: {
      title: selectedTask.title,
      description: selectedTask.description,
      dueDate: formatDateForPicker(selectedTask.dueDate),
    },
  });

  if (!selectedProject) {
    return <>No such Project!</>;
  }

  function closeModal() {
    setIsOpen(false);
    navigate("../../");
  }
  const onSubmit: SubmitHandler<TaskFormUpdatePayload> = async (data) => {
    const assignee = memberState?.members?.filter(
      (member) => member.name === selectedPerson
    )?.[0];

    updateTask(taskDispatch, projectID ?? "", {
      ...selectedTask,
      ...data,
      assignee: assignee?.id,
    });
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Task Details
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <label htmlFor="title" className="font-bolder">
                        Title
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter title"
                        id="title"
                        {...register("title", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      <label htmlFor="title" className="font-bolder">
                        Description
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter description"
                        id="description"
                        {...register("description", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      <label htmlFor="title" className="font-bolder">
                        Due Date
                      </label>
                      <input
                        type="date"
                        required
                        placeholder="Enter due date"
                        id="dueDate"
                        {...register("dueDate", { required: true })}
                        className="w-full border rounded-md py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
                      />
                      <h3>Assignee</h3>
                      <Listbox
                        value={selectedPerson}
                        onChange={setSelectedPerson}
                      >
                        <Listbox.Button className="w-full border rounded-md py-2 px-3 my-2 text-gray-700 text-base text-left">
                          {selectedPerson || "Select a person"}
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 max-h-60 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {memberState?.members.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 px-8 min-w-{100px} ${
                                  active
                                    ? "bg-blue-100 text-blue-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={person.name}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Update
                      </button>
                      <button
                        type="submit"
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </form>

                    <div className="bg-gray-100 my-4 h-0.5" />

                    <h3 className="font-bolder text-lg mb-2">Comments</h3>
                    <CommentsProvider>
                      <CommentSection />
                    </CommentsProvider>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TaskDetails;
