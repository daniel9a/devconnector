import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // Adding an alert
    // Copy the state of the alert
    case SET_ALERT:
      return [...state, payload];
    // Go through all alerts and compare by filtering
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
