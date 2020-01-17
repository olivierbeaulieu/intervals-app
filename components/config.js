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

export const SCALES_MODES = [
  {
    id: 'major',
    displayName: 'Major',
    pattern: [2, 2, 1, 2, 2, 2, 1],
  },
  {
    id: 'naturalMinor',
    displayName: 'Natural Minor',
    pattern: [2, 1, 2, 2, 1, 2, 2],
  },
  {
    id: 'majorPentatonic',
    displayName: 'Major Pentatonic',
    pattern: [2, 2, 3, 2, 3],
  },
  {
    id: 'minorPentatonic',
    displayName: 'Minor Pentatonic',
    pattern: [3, 2, 2, 3, 2],
  },
  {
    id: 'blues',
    displayName: 'Blues Pentatonic',
    pattern: [3, 2, 1, 1, 3, 2],
  },
  {
    id: 'chromatic',
    displayName: 'Chromatic',
    pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    id: 'dorian',
    displayName: 'Dorian',
    pattern: [2, 1, 2, 2, 2, 1, 2],
  },
  {
    id: 'phrygian',
    displayName: 'Phrygian',
    pattern: [1, 2, 2, 2, 1, 2, 2],
  },
  {
    id: 'phrygianDominant',
    displayName: 'Phrygian Dominant',
    pattern: [1, 3, 1, 2, 1, 2, 2],
  },
  {
    id: 'harmonicMajor',
    displayName: 'Harmonic Major',
    pattern: [2, 2, 1, 2, 1, 3, 1],
  },
  {
    id: 'harmonicMinor',
    displayName: 'Harmonic Minor',
    pattern: [2, 1, 2, 2, 1, 3, 1],
  },
  {
    id: 'hungarianMinor',
    displayName: 'Hungarian Minor',
    pattern: [2, 1, 3, 1, 1, 3, 1],
  },

  {
    id: 'locrian',
    displayName: 'Locrian',
    pattern: [1, 2, 2, 1, 2, 2, 2],
  },
  {
    id: 'lydian',
    displayName: 'Lydian',
    pattern: [1, 1, 1, 2, 1, 1, 2],
  },
  {
    id: 'mixolydian',
    displayName: 'Mixolydian',
    pattern: [2, 2, 1, 2, 2, 1, 2],
  },
];

export const GROMMET_THEME = {
  global: {
    defaultMode: 'dark',
    font: {
      family: 'Source Sans Pro',
      size: '16px',
      height: '18px',
    },
    colors: {
      brand: {
        dark: 'hsl(42, 78%, 60%)',
        light: 'hsl(42, 78%, 60%)',
      },
    },
    input: {
      weight: 'normal',
    },
  },
};
