
const exampleReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_example_SUCCESS":
      return state.concat(action.payload);
  }
  return state;
};

export default exampleReducer;
