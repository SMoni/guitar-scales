const scales = {
    chromatic:  [ 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B' ]
    // chromatic:  [ 'C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭', 'A', 'A♯/B♭', 'B' ]
}

const modes = {
    major:            [ 2, 2, 1, 2, 2, 2 ], // ionian
    majorPentatonic:  [ 2, 2, 3, 2 ], 
    minor:            [ 2, 1, 2, 2, 1, 2 ], // aeolian
    minorHarmonic:    [ 2, 1, 2, 2, 1, 3 ],
    minorMelodic:     [ 2, 1, 2, 2, 2, 2 ],
    minorPentatonic:  [ 3, 2, 2, 3 ], 
    ionian:           [ 2, 2, 1, 2, 2, 2 ],
    dorian:           [ 2, 1, 2, 2, 2, 1 ],
    phrygian:         [ 1, 2, 2, 2, 1, 2 ],
    phrygianDominant: [ 1, 3, 1, 2, 1, 2 ],    
    lydian:           [ 2, 2, 2, 1, 2, 2 ],
    mixolydian:       [ 2, 2, 1, 2, 2, 1 ],
    aeolian:          [ 2, 1, 2, 2, 1, 2 ],
    locrian:          [ 1, 2, 2, 1, 2, 2 ],
    bluesHexatonic:   [ 3, 2, 1, 1, 3 ], 
}

const chords = {
    major:        [ 4, 3 ],
    minor:        [ 3, 4 ],
    augmented:    [ 4, 4 ],
    diminished:   [ 3, 3 ],
    majorSeventh: [ 4, 3, 3 ],
    minorSeventh: [ 3, 4, 3 ],
    sus2:         [ 2, 5 ],
    sus4:         [ 5, 2 ],
    powerchord:   [ 7 ],    
}

export { 
    scales,
    modes,
    chords
}