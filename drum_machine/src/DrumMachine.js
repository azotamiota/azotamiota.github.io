

const DrumMachine = () => {

const soundQ = () => {
document.getElementById("Q").play();
    document.getElementById('display').innerText = document.getElementById("keyQ").getAttribute('name');
}
const soundW = () => {
  document.getElementById("W").play();
  document.getElementById("display").innerText = document
    .getElementById("keyW")
    .getAttribute("name");
};const soundE = () => {
  document.getElementById("E").play();
  document.getElementById("display").innerText = document
    .getElementById("keyE")
    .getAttribute("name");
};const soundA = () => {
  document.getElementById("A").play();
  document.getElementById("display").innerText = document
    .getElementById("keyA")
    .getAttribute("name");
};const soundS = () => {
  document.getElementById("S").play();
  document.getElementById("display").innerText = document
    .getElementById("keyS")
    .getAttribute("name");
};const soundD = () => {
  document.getElementById("D").play();
  document.getElementById("display").innerText = document
    .getElementById("keyD")
    .getAttribute("name");
};const soundZ = () => {
  document.getElementById("Z").play();
  document.getElementById("display").innerText = document
    .getElementById("keyZ")
    .getAttribute("name");
};const soundX = () => {
  document.getElementById("X").play();
  document.getElementById("display").innerText = document
    .getElementById("keyX")
    .getAttribute("name");
};const soundC = () => {
  document.getElementById("C").play();
  document.getElementById("display").innerText = document
    .getElementById("keyC")
    .getAttribute("name");
};
document.addEventListener("keydown", function (event) {
  
  if (event.keyCode === 81) {
    soundQ()
    
  } else if (event.keyCode === 87) {
    soundW()

  } else if (event.keyCode === 69) {
    soundE()

  } else if (event.keyCode === 65) {
    soundA()

  } else if (event.keyCode === 83) {
    soundS() 

  } else if (event.keyCode === 68) {
    soundD()

  } else if (event.keyCode === 90) {
    soundZ()

  } else if (event.keyCode === 88) {
    soundX()
  
  } else if (event.keyCode === 67) {
    soundC()

  } else {
    console.log("No sound for this key");
  }
});


    return (
      <>
        <section
          id="header"
          className="d-flex justify-content-between text-center p-3"
        >
          <div className="fas fa-drum fa-lg"></div>
          <h1>Drum machine</h1>
          <div className="fas fa-drum fa-lg"></div>
        </section>
        <div id="drum-machine" className="container">
          <div className="key-container">
            <div
              className="drum-pad"
              id="keyQ"
              name="Heater-1"
              onClick={soundQ}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                className="clip"
                id="Q"
              ></audio>
              Q
            </div>
            <div
              className="drum-pad"
              id="keyW"
              name="Heater-2"
              onClick={() => soundW()}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                className="clip"
                id="W"
              ></audio>
              W
            </div>
            <div
              className="drum-pad"
              id="keyE"
              name="Heater-3"
              onClick={() => soundE()}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                className="clip"
                id="E"
              ></audio>
              E
            </div>

            <div
              className="drum-pad"
              id="keyA"
              name="Heater-4"
              onClick={() => soundA()}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                className="clip"
                id="A"
              ></audio>
              A
            </div>
            <div
              className="drum-pad"
              id="keyS"
              name="Clap"
              onClick={() => soundS()}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                className="clip"
                id="S"
              ></audio>
              S
            </div>
            <div
              className="drum-pad"
              id="keyD"
              name="Open-HH"
              onClick={() => soundD()}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                className="clip"
                id="D"
              ></audio>
              D
            </div>

            <div
              className="drum-pad"
              id="keyZ"
              name="Kick'n Hat"
              onClick={() => soundZ()}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                className="clip"
                id="Z"
              ></audio>
              Z
            </div>
            <div
              className="drum-pad"
              id="keyX"
              name="Kick"
              onClick={() => soundX()}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                className="clip"
                id="X"
              ></audio>
              X
            </div>
            <div
              className="drum-pad"
              id="keyC"
              name="Closed-HH"
              onClick={() => soundC()}
            >
              <audio
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                className="clip"
                id="C"
              ></audio>
              C
            </div>
          </div>
          <div id="display">Sound name</div>
        </div>
        <footer id='copyright'>created by <a href='https://azotamiota.github.io'>azotamiota</a></footer>
      </>
    ); 
}

export default DrumMachine;