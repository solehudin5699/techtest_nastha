import { getEventCreator, addEventCreator } from "../actions/event";

const initialState = {
  event: [],
  error: undefined,
  statusGet: null,
  isPending: false,
  isFulFilled: false,
  isRejected: false,

  statusAdd: null,
  errorAdd: undefined,
  isAddPending: false,
  isAddFulFilled: false,
  isAddRejected: false,
};

const eventReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case String(getEventCreator.pending):
      return {
        ...prevState,
        isPending: true,
      };
    case String(getEventCreator.fulfilled): {
      let status;
      let data;
      let err;
      if (action.payload.status === 200) {
        status = 200;
        data = action.payload.data;
        err = undefined;
      } else if (action.payload.status === 500) {
        status = 500;
        data = [];
        err = action.payload.error;
      }
      return {
        ...prevState,
        products: data,
        statusGet: status,
        error: err,
        isPending: false,
        isFulFilled: true,
        isRejected: false,
      };
    }
    case String(getEventCreator.rejected):
      return {
        ...prevState,
        statusGet: 500,
        error: action.payload,
        isRejected: true,
        isPending: false,
        isFulFilled: false,
      };

    case String(addEventCreator.pending):
      return {
        ...prevState,
        isAddPending: true,
      };
    case String(addEventCreator.fulfilled): {
      let status;
      if (action.payload.status === 200) {
        status = 200;
      } else {
        status = 500;
      }
      return {
        ...prevState,
        statusAdd: status,
        errorAdd: undefined,
        isAddPending: false,
        isAddFulFilled: true,
        isAddRejected: false,
      };
    }
    case String(addEventCreator.rejected):
      return {
        ...prevState,
        statusAdd: 500,
        errorAdd: action.payload,
        isAddRejected: true,
        isddPending: false,
        isAddFulFilled: false,
      };

    default:
      return prevState;
  }
};

export default eventReducer;
