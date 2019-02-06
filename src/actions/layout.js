import {
  TOGGLE_SIDE_MENU,
  TOGGLE_HEADER,
  TOGGLE_LOADER,
  TOGGLE_NERVE,
  CHANGE_THEME_COLOR,
} from '../types';

export const toggleSideMenu = showSideMenu => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDE_MENU,
    payload: showSideMenu,
  });
};

export const toggleHeader = showHeader => (dispatch) => {
  dispatch({
    type: TOGGLE_HEADER,
    payload: showHeader,
  });
};

export const toggleLoader = showLoader => (dispatch) => {
  dispatch({
    type: TOGGLE_LOADER,
    payload: showLoader,
  });
};

export const toggleNerve = showNerve => (dispatch) => {
  dispatch({
    type: TOGGLE_NERVE,
    payload: showNerve,
  });
};

export const changeThemeColor = themeColor => (dispatch) => {
  dispatch({
    type: CHANGE_THEME_COLOR,
    payload: themeColor,
  });
};


export default {
  toggleSideMenu,
  toggleHeader,
  toggleLoader,
  toggleNerve,
  changeThemeColor,
};
