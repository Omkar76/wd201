import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";
import { TrashIcon } from "@heroicons/react/20/solid";
import { deleteMember } from "../../context/members/actions";
export default function MemberListItems() {
  let state: any = useMembersState();
  const dispatchMembers = useMembersDispatch();
  const { members, isLoading, isError, errorMessage } = state;

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="member flex flex-col shrink justify-between p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col">
            <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {member.name}
            </h5>
            <span>{member.email}</span>
          </div>

          <button
            className="h-5 w-5 self-end"
            onClick={() => {
              deleteMember(dispatchMembers, member.id);
            }}
          >
            <TrashIcon className="m-auto" />
          </button>
        </div>
      ))}
    </>
  );
}
