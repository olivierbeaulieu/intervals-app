export const FRET_COUNT = 24;
export const NOTES = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
];

export const SCALES_MODES = {
  major: {
    displayName: 'Major',
    pattern: [2, 2, 1, 2, 2, 2, 1],
  },
  naturalMinor: {
    displayName: 'Natural Minor',
    pattern: [2, 1, 2, 2, 1, 2, 2],
  },
  majorPentatonic: {
    displayName: 'Major Pentatonic',
    pattern: [2, 2, 3, 2, 3],
  },
  minorPentatonic: {
    displayName: 'Minor Pentatonic',
    pattern: [3, 2, 2, 3, 2],
  },
  blues: {
    displayName: 'Blues Pentatonic',
    pattern: [3, 2, 1, 1, 3, 2],
  },
  dorian: {
    displayName: 'Dorian',
    pattern: [2, 1, 2, 2, 2, 1, 2],
  },
  phrygian: {
    displayName: 'Phrygian',
    pattern: [1, 2, 2, 2, 1, 2, 2],
  },
  phrygianDominant: {
    displayName: 'Phrygian Dominant',
    pattern: [1, 3, 1, 2, 1, 2, 2],
  },
  harmonicMajor: {
    displayName: 'Harmonic Major',
    pattern: [2, 2, 1, 2, 1, 3, 1],
  },
  harmonicMinor: {
    displayName: 'Harmonic Minor',
    pattern: [2, 1, 2, 2, 1, 3, 1],
  },
  hungarianMinor: {
    displayName: 'Hungarian Minor',
    pattern: [2, 1, 3, 1, 1, 3, 1],
  },

  locrian: {
    displayName: 'Locrian',
    pattern: [1, 2, 2, 1, 2, 2, 2],
  },
  lydian: {
    displayName: 'Lydian',
    pattern: [1, 1, 1, 2, 1, 1, 2],
  },
  mixolydian: {
    displayName: 'Mixolydian',
    pattern: [2, 2, 1, 2, 2, 1, 2],
  },
};
