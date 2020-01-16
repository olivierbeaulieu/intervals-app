import React from 'react'
import { getFretWidth } from "../../utils/guitar";
import css from './FretNumbers.module.css'

export default function FretNumbers({ count }) {
  const output = [];

  for (let i = 1; i <= count; i++) {
    const width = getFretWidth(i)

    output.push(
      <div style={{ width }} key={i}>
        {i}
      </div>
    );
  }

  return <div className={css.FretNumbers}>{output}</div>
}