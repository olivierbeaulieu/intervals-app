import React from 'react';
import { getNotesRange, getFretWidth } from '../../utils/guitar';
import { FRET_COUNT } from '../config'
import css from './String.module.css'

function Fret({ note, position, isHighlighted, isRoot }) {
  const width = getFretWidth(position)
  let className = css.Fret

  if (isRoot) {
    className += ' ' + css.FretRoot
  }

  return <div className={className} style={{ width }}>
    {isHighlighted && <span>{note}</span>}
  </div>
}

export default function String({ tuning, scale }) {
  const stringNotes = getNotesRange({ fromNote: tuning, semitones: FRET_COUNT + 1 })

  // TODO add fretCount and tuning (which will enable 6 and 7 strings) as props
  return <div className={css.String}>
    {stringNotes.map((note, index) => <Fret
      note={note}
      isHighlighted={scale.includes(note)}
      isRoot={scale.indexOf(note) === 0}
      position={index}
      key={index}
    />)}
  </div>
}