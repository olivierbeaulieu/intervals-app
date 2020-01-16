import { NOTES, SCALES_MODES } from '../components/config';

export function getNotesRange({ fromNote, semitones }) {
  const output = [fromNote];

  let current = NOTES.indexOf(fromNote);

  while (output.length < semitones) {
    current += 1;

    if (current >= NOTES.length) {
      current = 0;
    }

    output.push(NOTES[current]);
  }

  return output;
}

export function getFretWidth(fretNumber) {
  return fretNumber === 0 ? null : 70 * Math.pow(0.97, fretNumber) + 'px';
}

export function getScaleFromPattern(rootNote, pattern) {
  const output = [];
  let currentIndex = NOTES.indexOf(rootNote);

  for (const interval of pattern) {
    output.push(NOTES[currentIndex]);

    currentIndex += interval;
    if (currentIndex >= NOTES.length) {
      currentIndex -= NOTES.length;
    }
  }

  return output;
}

export function getScalePatternFromMode(scaleMode) {
  return SCALES_MODES[scaleMode].pattern;
}
