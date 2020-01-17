import React from 'react'
import Fretboard from '../Fretboard';
import ScaleSelect from '../ScaleSelect';
import { connect } from "react-redux";

function GuitarScales({ tonality, scaleMode, tuning }) {
  return <>
    <ScaleSelect />
    <Fretboard tonality={tonality} scaleMode={scaleMode} tuning={tuning} />
  </>
}

export default connect(state => state.settings)(GuitarScales)