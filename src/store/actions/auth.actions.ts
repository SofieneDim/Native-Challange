export const SET_LOGIN_ATTEMPT = "SET_LOGIN_ATTEMPT";

export const setLoginAttempt = (attempt: number) => (dispatch: any) => {
  dispatch({
    type: SET_LOGIN_ATTEMPT,
    payload: attempt,
  });
};
