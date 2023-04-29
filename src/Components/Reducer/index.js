export const initialState = {
  isAuth: !!localStorage.getItem("currentUserData"),
  error: "",
  usersData: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_AUTH":
      return {
        ...state,
        isAuth: action.payload,
      };
    case "USERS_DATA":
      return {
        ...state,
        usersData: action.payload,
      };

    default:
      return state;
  }
}
