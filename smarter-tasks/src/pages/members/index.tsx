import MemberList from "./MemberList";
import React from "react";
import NewMember from "./NewMember";
const Members = () => {
  return (
    <>
      <>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium tracking-tight">Members</h2>
          <NewMember />
        </div>
        <MemberList />
      </>
    </>
  );
};
export default Members;
