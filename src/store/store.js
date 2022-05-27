import { createStore } from "redux";

// global state
const stateFilm = {
  activeItem: "search",
};

const reducerFilm = (state = stateFilm, action) => {
  switch (action.type) {
    case "ACTIVE_ITEM":
      var stateActiveItem = { ...state, activeItem: action.Activeitem };
      return stateActiveItem;
    default:
      return state;
  }
};

const store = createStore(reducerFilm);

export default store