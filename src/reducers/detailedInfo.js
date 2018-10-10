// Detailed Info Reducer

const detailedInfoReducerDefaultState = [];

export default (state = detailedInfoReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_DETAILED_INFO":
      return [...state, action.detailedInfo];
    case "REMOVE_DETAILED_INFO":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_DETAILED_INFO":
      return state.map(detailedInfo => {
        if (detailedInfo.id === action.id) {
          return {
            ...detailedInfo,
            ...action.updates
          };
        } else {
          return detailedInfo;
        }
      });
    case "SET_DETAILED_INFOS":
      return action.detailedInfos;
    default:
      return state;
  }
};
