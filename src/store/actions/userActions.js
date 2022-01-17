export function updateUser(user) {
  return async (dispatch) => {
    dispatch({ type: 'UPDATE_USER', user });
  };
}
