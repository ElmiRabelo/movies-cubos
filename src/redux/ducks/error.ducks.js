export const Types = {
  SET_ERROR: "error/SET_ERROR",
  HIDE_ERROR: "error/HIDE_ERROR"
};

const INITIAL_STATE = {
  visible: false,
  message: ""
};

export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ERROR:
      return { ...state, visible: true, message: action.payload };
    case Types.HIDE_ERROR:
      return { ...state, visible: false };
    default:
      return state;
  }
}

export const Creators = {
  setError: payload => ({ type: Types.SET_ERROR, payload }),
  hideError: () => ({ type: Types.HIDE_ERROR })
};
