import { SET_LOGIN_ATTEMPT } from "../actions/auth.actions";

const initialState = {
  loginAttempt: 0,
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOGIN_ATTEMPT:
      return { ...state, loginAttempt: action.payload };

    default:
      return state;
  }
}

export default authReducer;
