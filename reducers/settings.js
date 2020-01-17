import { SET_TONALITY, SET_SCALE_MODE, SET_TUNING } from '../actions';

const initialState = {
  tonality: 'E',
  scaleMode: 'major',
  tuning: 'estandard',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TONALITY:
      return { ...state, tonality: action.payload };
    case SET_SCALE_MODE:
      return { ...state, scaleMode: action.payload };
    case SET_TUNING:
      return { ...state, tuning: action.payload };
    default:
      return state;
  }
}
