(() => {
  // Definición de un enum AudioLevel con valores numéricos explícitos
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  // Declaración de una variable currentAudio con valor AudioLevel.max
  let currentAudio = AudioLevel.max;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
