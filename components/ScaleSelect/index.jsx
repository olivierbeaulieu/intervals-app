import React from 'react';
import { NOTES, SCALES_MODES } from "../config";
import { connect } from "react-redux";
import { SET_TONALITY, SET_SCALE_MODE } from '../../actions'
import { getScaleDefinition } from '../../utils/guitar';
import { Select } from 'grommet';
import css from './ScaleSelect.module.css';

function ScaleSelect({ tonality, scaleMode, dispatch }) {
  return <div className={css.ScaleSelect}>
    <Select
      options={NOTES}
      value={tonality}
      style={{ width: '40px' }}
      onChange={({ value }) => dispatch({
        type: SET_TONALITY,
        payload: value
      })} />

    &nbsp;&nbsp;

    <Select
      options={SCALES_MODES}
      value={getScaleDefinition(scaleMode)}
      labelKey="displayName"
      valueKey="id"
      onChange={(e) => {
        dispatch({
          type: SET_SCALE_MODE,
          payload: e.value.id
        })
      }} />
  </div>
}


export default connect(state => state.settings)(ScaleSelect)