const positionShift = 0;
let horizontalPixels = 0;
let verticalPixels = 0;
var clickButton;
let shifting = () => {
  document.getElementById('small').style.top = verticalPixels + 'px';
  document.getElementById('small').style.left = horizontalPixels + 'px';
  horizontalPixels++;
  verticalPixels++;
}
start = () => clickButton = setInterval(shifting, 10);
stop = () => clearInterval(clickButton);



