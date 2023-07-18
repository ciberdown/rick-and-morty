export const NextPage = () => (dispatch, getState) => {
  const { Page_Number: thisState } = getState();
  dispatch({
    type: "NEXT",
    payload: thisState.page_number + 1,
  });
};
export const PrevPage = () => (dispatch, getState) => {
  const { Page_Number: thisState } = getState();

  dispatch({
    type: "PREV",
    payload: thisState.page_number - 1,
  });
};
