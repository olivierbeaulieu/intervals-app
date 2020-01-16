import { SET_TONALITY, SET_SCALE_MODE } from '../actions';

const initialState = {
  tonality: 'E',
  scaleMode: 'major',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TONALITY:
      return { ...state, tonality: action.payload };
    case SET_SCALE_MODE:
      return { ...state, scaleMode: action.payload };
    default:
      return state;
  }
}
