import React, {useEffect} from 'react';
import {useMembersDispatch, useMembersState} from "../../context/members/context";
import {fetchMembers} from "../../context/members/actions";
import MemberListItems from "./MemberListItems";



const MemberList: React.FC = () => {
  const dispatchMembers = useMembersDispatch()
  const state = useMembersState();
  useEffect(() => {
    fetchMembers(dispatchMembers);
  }, [dispatchMembers]);

  if(!state){
    return <>something went wrong</>;
  }
  return (
    <div>
      {state.isLoading ? (
        <div>Loading...</div>       ) : (
        <div className="grid gap-4 grid-cols-4 mt-5">
          <MemberListItems />
        </div>
      )}
    </div>
  );
};
export default MemberList;