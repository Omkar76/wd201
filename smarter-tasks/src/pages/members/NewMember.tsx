import { Dialog, Transition } from '@headlessui/react'

import React, { Fragment, useState } from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {addMember} from "../../context/members/actions";
import {useMembersDispatch} from "../../context/members/context";
const NewMember = () => {


  let [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState(null)

  const dispatchMembers = useMembersDispatch();
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  type Inputs = {
    name: string
    email : string
    password : string
  };


  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const response = await addMember(dispatchMembers, data)
    if (response.ok) {
      setIsOpen(false)
    } else {
      setError(response.error as React.SetStateAction<null>)
    }
  };

  return (
    <>
      <button onClick={openModal}
              id="new-member-btn"
              type="button"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        New Member
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new member
                  </Dialog.Title>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="p-1 m-1">
                        <label htmlFor="organisationName" className="block text-white font-semibold mb-2">
                          Username
                        </label>

                        <input
                          {...register('name', {required : true})}
                          id="name"
                          placeholder="John"
                          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
                        />
                      </div>

                      <div className="p-1 m-1">
                        <label htmlFor="email" className="block text-white font-semibold mb-2">
                          Email
                        </label>

                        <input
                          {...register('email', {required : true})}
                          id="email"
                          placeholder="john@example.com"
                          type="email"
                          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
                        />

                      </div>

                      <div className="p-1 m-1">
                        <label htmlFor="password" className="block text-white font-semibold mb-2">
                          Password
                        </label>

                        <input
                          {...register('password', {required : true})}
                          id = "password"
                          placeholder="********"
                          type="password"
                          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
                        />
                      </div>
                      {errors.name && <span>This field is required</span>}
                      <button type="submit" id="create-member-btn" className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Submit
                      </button>
                      <button type="submit" onClick={closeModal} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Cancel
                      </button>
                    </form>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default NewMember;