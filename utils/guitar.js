const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export function getNotesRange({ fromNote, semitones }) {
  const output = [fromNote];

  let current = notes.indexOf(fromNote);

  while (output.length < semitones) {
    current += 1;

    if (current >= notes.length) {
      current = 0;
    }

    output.push(notes[current]);
  }

  return output;
}

export function getFretWidth(fretNumber) {
  return fretNumber === 0 ? null : 70 * Math.pow(0.97, fretNumber) + 'px';
}

export function getScaleFromPattern(rootNote, pattern) {
  const output = [];
  let currentIndex = notes.indexOf(rootNote);

  for (const interval of pattern) {
    output.push(notes[currentIndex]);

    currentIndex += interval;
    if (currentIndex >= notes.length) {
      currentIndex -= notes.length;
    }
  }

  return output;
}
