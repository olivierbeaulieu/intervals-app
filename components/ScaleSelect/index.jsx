import React from 'react';
import { NOTES } from "../config";

export default function ScaleSelect() {
  return <select>
    {NOTES.map(note => <option>{note}</option>)}
  </select>
}