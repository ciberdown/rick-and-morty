const initial_value = 1;

const PageNumberReducer = (state = { page_number: initial_value }, action) => {
  switch (action.type) {
    case "NEXT":
      return { page_number: action.payload };
    case "PREV":
      return { page_number: action.payload };
    default:
      return state;
  }
};

export default PageNumberReducer;
