import React from 'react';
import String from '../String'
import FretNumbers from '../FretNumbers'
import { FRET_COUNT } from '../config'
import css from './Fretboard.module.css'

export default function Fretboard() {
  const tuning = ['E', 'A', 'D', 'G', 'B', 'E'].reverse();

  // TODO add fretCount and tuning (which will enable 6 and 7 strings) as props
  return <div className={css.Fretboard}>
    <div className={css.Neck}>
      {tuning.map(note => <String tuning={note} />)}
    </div>
    <FretNumbers count={FRET_COUNT} />
  </div>
}