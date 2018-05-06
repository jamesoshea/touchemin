import Tone from 'tone';

const chords = {
  cMajor: [
    Tone.Frequency('C3').toFrequency(),
    Tone.Frequency('E3').toFrequency(),
    Tone.Frequency('G3').toFrequency(),
    Tone.Frequency('C4').toFrequency(),
  ],
  dMinor: [
    Tone.Frequency('D3').toFrequency(),
    Tone.Frequency('F3').toFrequency(),
    Tone.Frequency('A4').toFrequency(),
    Tone.Frequency('D4').toFrequency(),
  ],
  eMinor: [
    Tone.Frequency('E3').toFrequency(),
    Tone.Frequency('G3').toFrequency(),
    Tone.Frequency('B4').toFrequency(),
    Tone.Frequency('E4').toFrequency(),
  ],
  fMajor: [
    Tone.Frequency('F3').toFrequency(),
    Tone.Frequency('A4').toFrequency(),
    Tone.Frequency('C4').toFrequency(),
    Tone.Frequency('F4').toFrequency(),
  ],
  gMajor: [
    Tone.Frequency('G3').toFrequency(),
    Tone.Frequency('B4').toFrequency(),
    Tone.Frequency('D4').toFrequency(),
    Tone.Frequency('G4').toFrequency(),
  ],
  aMinor: [
    Tone.Frequency('A4').toFrequency(),
    Tone.Frequency('C4').toFrequency(),
    Tone.Frequency('E4').toFrequency(),
    Tone.Frequency('A5').toFrequency(),
  ],
  bDim: [
    Tone.Frequency('B4').toFrequency(),
    Tone.Frequency('D4').toFrequency(),
    Tone.Frequency('F4').toFrequency(),
    Tone.Frequency('B5').toFrequency(),
  ],
};

export default chords;
