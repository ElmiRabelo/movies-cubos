export const Types = {
  SET_CURRENT_PAGE: "pagination/SET_CURRENT_PAGE"
};

const INITIAL_STATE = {
  currentPage: 1,
  moviesPerPage: 5
};

export default function pagination(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  setCurrentPage: payload => ({ type: Types.SET_CURRENT_PAGE, payload })
};
