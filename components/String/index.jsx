import React from 'react';
import { getNotesRange, getFretWidth } from '../../utils/guitar';
import { FRET_COUNT } from '../config'
import css from './String.module.css'

function Fret({ note, position }) {
  const width = getFretWidth(position)

  return <div className={css.Fret} style={{ width }}>
    <span>{note}</span>
  </div>
}

export default function String({ tuning }) {
  const stringNotes = getNotesRange({ fromNote: tuning, semitones: FRET_COUNT + 1 })

  // TODO add fretCount and tuning (which will enable 6 and 7 strings) as props
  return <div className={css.String}>
    {stringNotes.map((note, index) => <Fret note={note} position={index} />)}
  </div>
}