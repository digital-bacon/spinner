/**
 * Function that displays a spinner animation in the terminal
 * @param {number} spinnerStartDelay - Indicates how long to wait
 * before showing the spinner in the terminal, in milliseconds
 * @param {number} spinnerFrameDuration - Indicates the speed in which
 * each frame of the spinner is rendered in the terminal, in
 * milliseconds
 */
const spinner = (spinnerStartDelay = 0, spinnerFrameDuration = 100) => {
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