import { SET_LANGUAGE } from '../../types';

export const changedLang = ({ newLang }) => (dispatch) => {
  dispatch({
    type: SET_LANGUAGE,
    payload: newLang,
  });
};

export default changedLang;
