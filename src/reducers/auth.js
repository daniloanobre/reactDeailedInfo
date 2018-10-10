export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid
      };
    case "LOGOUT":
      return {};
    case "ERROR":
      return {
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};
