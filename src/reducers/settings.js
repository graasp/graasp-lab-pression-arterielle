import {
  SET_LANGUAGE,
  THEME_COLOR,
} from '../actions/types';

const INITIAL_STATE = {
  defaultLang: 'en',
  theme_color: '#2196F5',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE:
      return {
        ...state,
        defaultLang: payload,
      };
    case THEME_COLOR:
      return {
        ...state,
        themeColor: payload,
      };
    default:
      return state;
  }
};
