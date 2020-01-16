import React from 'react';
import { NOTES, SCALES_MODES } from "../config";
import { connect } from "react-redux";
import { SET_TONALITY, SET_SCALE_MODE } from '../../actions'

function ScaleSelect({ tonality, scaleMode, dispatch }) {
  return <>
    <select
      value={tonality}
      onChange={(e) => dispatch({
        type: SET_TONALITY,
        payload: e.target.value
      })}>
      {NOTES.map(note =>
        <option
          key={note}
          value={note}>
          {note}
        </option>)}
    </select>

    <select
      value={scaleMode}
      onChange={(e) => dispatch({
        type: SET_SCALE_MODE,
        payload: e.target.value
      })}>
      {Object.keys(SCALES_MODES).map(scale =>
        <option
          key={scale}
          value={scale}>
          {SCALES_MODES[scale].displayName}
        </option>)}
    </select>
  </>
}


export default connect(state => state.settings)(ScaleSelect)