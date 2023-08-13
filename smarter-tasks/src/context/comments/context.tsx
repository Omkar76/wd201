import React, { createContext, useContext, useReducer } from "react";

import {
  reducer,
  initialState,
  CommentsState,
  CommentsActions,
} from "./reducer";

const CommentsStateContext = createContext<CommentsState>(null!);

export type CommentsDispatch = React.Dispatch<CommentsActions>;

const CommentsDispatchContext = createContext<CommentsDispatch>(null!);
export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
