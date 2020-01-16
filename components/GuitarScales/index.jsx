import React from 'react'
import Fretboard from '../Fretboard';
import ScaleSelect from '../ScaleSelect';
import { connect } from "react-redux";

function GuitarScales({ tonality, scaleMode }) {
  return <>
    <ScaleSelect />
    <Fretboard tonality={tonality} scaleMode={scaleMode} />
  </>
}

export default connect(state => state.settings)(GuitarScales)