import MemberList from "./MemberList";
import React, { Suspense } from "react";
import NewMember from "./NewMember";
import ErrorBoundary from "../../components/ErrorBoundary";
const Members = () => {
  return (
    <>
      <>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium tracking-tight">Members</h2>
          <NewMember />
        </div>
        <ErrorBoundary>
          <Suspense
            fallback={<div className="suspense-loading">Loading re...</div>}
          >
            <MemberList />
          </Suspense>
        </ErrorBoundary>
      </>
    </>
  );
};
export default Members;
