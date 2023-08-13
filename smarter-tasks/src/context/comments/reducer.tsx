interface Comment {
  id: number;
  owner : number

}

export interface CommentsState {
  comments: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type CommentsActions =
  | { type: 'FETCH_COMMENTS_REQUEST' }
  | { type: 'FETCH_COMMENTS_SUCCESS'; payload: Comment[] }
  | { type: 'FETCH_COMMENTS_FAILURE'; payload: string }
  | { type : 'ADD_COMMENT_SUCCESS'; }
  | { type : 'DELETE_COMMENT_SUCCESS', payload : number }

export const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

export const reducer = (state: CommentsState = initialState, action: CommentsActions): CommentsState => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload
      };

    case 'ADD_COMMENT_SUCCESS':
      return { ...state, isLoading : false};
    case 'DELETE_COMMENT_SUCCESS':
      return {...state, comments: state.comments.filter(comment=> comment.id !== action.payload)}
    default:
      return state;
  }
}