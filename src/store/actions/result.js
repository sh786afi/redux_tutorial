import * as actionTypes from "./actionsTypes";
export const saveResult = res => {
  return {
    type: actionTypes.STORE_RESULT,
    Result: res
  };
};
export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};
export const deleteResult = resELId => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultELId: resELId
  };
};
