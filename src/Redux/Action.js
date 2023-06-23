export const AddData = payload => {
  return {
    type: 'ADD_DATA',
    payload: payload,
  };
};
export const AddEvent = payload => {
  return {
    type: 'ADD_EVENT',
    payload: payload,
  };
};
export const EditEvent = (payload) => {
  return {
    type: 'EDIT_EVENT',
    payload: payload,
    id: payload.id,
  };
};
