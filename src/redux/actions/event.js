import { createAsyncAction } from "redux-promise-middleware-actions";
import { addEvent, getEvent } from "../../utils/event";

export const getEventCreator = createAsyncAction(
  "GET_EVENT",
  async (title, page) => {
    const res = await getEvent(title, page);
    return res.data;
  }
);
export const addEventCreator = createAsyncAction("ADD_EVENT", async (body) => {
  const res = await addEvent(body);
  return res.data;
});
