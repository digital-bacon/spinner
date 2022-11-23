const spinner = (spinnerStartDelay, spinnerFrameDuration) => {
  const stdOutReset = '\r';
  const padding = '   ';
  const spinnerFrames = {
    order: ['frame1', 'frame2', 'frame3', 'frame4'],
    frame1: '|', 
    frame2: '/', 
    frame3: '-', 
    frame4: '\\' // Escape the backslash since it's a special character 
  };
  let currentDelay = spinnerStartDelay;
  for (let repeatSpinnerFrames = 2; repeatSpinnerFrames > 0; repeatSpinnerFrames--) {
    for (const frame of spinnerFrames.order) {
      let currentFrameOutput = stdOutReset + spinnerFrames[frame] + padding;
      setTimeout(() => {process.stdout.write(currentFrameOutput)}, currentDelay);
      // Set the delay to use for the next frame in sequence
      currentDelay += spinnerFrameDuration;
    }
  }
};

// Test case
spinner(100, 200);