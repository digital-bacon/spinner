const spinner = (initialDelay, frameDuration) => {
  const stdOutReset = '\r';
  const padding = '   ';
  const spinnerFrames = [
    '|',
    '/',
    '-',
    '\\',
  ];
  let currentDelay = initialDelay;
  for (let repeatSpinnerFrames = 2; repeatSpinnerFrames > 0; repeatSpinnerFrames--) {
    for (const frame of spinnerFrames) {
      let currentFrameOutput = stdOutReset + frame + padding;
      setTimeout(() => {process.stdout.write(currentFrameOutput)}, (currentDelay += frameDuration));
    }
  }
};

spinner(100, 200);