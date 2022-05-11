//Clean and sort the input numbers in ascending order
const inputArray = process.argv.slice(2).sort((a, b) => { return(Number(a) - Number(b)) });
console.log(inputArray)
const beep = function(beepTime) {
  
  const beepTimeObj = {};
  
  //Check if the input is empty
  if (beepTime.length === 0) {
    console.log('No inputs are provided');
    return;
  }
  //Check if all inputs are positive intergers
  for (time of beepTime) {
    if (Number.isNaN(Number(time)) || !Number.isInteger(Number(time)) || Number(time) < 0) {
      console.log('Input invalid');
      return;
    }
    //Convert input from strings to numbers
    beepTimeObj[time] = Number(time);
  }

  for (let i = 0; i <= Number(beepTime[beepTime.length - 1]); i++) {
    setTimeout(() => {
      if (!beepTimeObj[i + '']) console.log(i + ' seconds');
      if (beepTimeObj[i + '']) console.log('beep');
    }, i * 1000)
  }
}

beep(inputArray);