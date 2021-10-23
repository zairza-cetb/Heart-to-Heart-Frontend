import * as React from "react";
import Header from "../components/Header";
import LottieAnimation from "../Lottie";
import background from "../Animations/background.json";
import backgroundAnimation from "../Animations/background-animation.json";

const tracks = [
  {
    name: "Extreme Ways",
    artist: "Moby",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
    url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
    favorited: false,
  },
  {
    name: "Butterflies",
    artist: "Sia",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
    url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
    favorited: false,
  },
  {
    name: "The Final Victory",
    artist: "Haggard",
    cover:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
    source:
      "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
    url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
    favorited: false,
  },
];
const player = new Audio(tracks[0].source);
player.setAttribute("preload", "metadata");
const userOptions = React.createContext({
  shuffle: false,
  repeat: false,
});

function Options(props) {
  let options = React.useContext(userOptions);
  let [shuffl, setShuffle] = React.useState(options.shuffle);
  let [repet, setRepeat] = React.useState(options.repeat);
  let [fav, setFav] = React.useState(tracks[props.idx].favorited);

  React.useEffect(() => setFav(tracks[props.idx].favorited));

  function shuffle() {
    options.shuffle = !options.shuffle;
    options.repeat = false;
    setShuffle(!shuffl);
    setRepeat(false);
  }

  function repeat() {
    options.repeat = !options.repeat;
    options.shuffle = false;
    setShuffle(false);
    setRepeat(!repet);
  }

  function favorite() {
    tracks[props.idx].favorited = !tracks[props.idx].favorited;
    setFav(tracks[props.idx].favorited);
  }

  function openURL() {
    window.open(tracks[props.idx].url, "_blank");
  }

  return (
    <div className="options flex justify-between mt-5">
      {shuffl ? (
        <button onClick={shuffle} className="opt" style={{ color: "#147CC0" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>
      ) : (
        <button onClick={shuffle} className="opt">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>
      )}
      <button className="opt" onClick={openURL}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-light"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      </button>
      {fav ? (
        <button onClick={favorite} className="opt" style={{ color: "#147CC0" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-light"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button onClick={favorite} className="opt">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      )}
      {repet ? (
        <button onClick={repeat} className="opt" style={{ color: "#147CC0" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      ) : (
        <button onClick={repeat} className="opt">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

function Control(props) {
  return (
    <div className="controls flex justify-evenly">
      <button
        className="controlButton"
        onClick={(x) => props.setIdx(props.idx - 1 < 0 ? 2 : props.idx - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-light"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
        </svg>
      </button>
      {props.playState === true ? (
        <button
          className="centerButton"
          onClick={(x) => props.setPlayState(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-light"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button
          className="centerButton"
          onClick={(x) => props.setPlayState(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-light"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <button
        className="controlButton"
        onClick={(x) => props.setIdx((props.idx + 1) % 3)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-light"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
        </svg>
      </button>
    </div>
  );
}

function Progress(props) {
  let [currLength, setCurrLength] = React.useState(0);
  let [length, setLength] = React.useState(0);
  let options = React.useContext(userOptions);

  setInterval(() => {
    setLength(Math.ceil(player.duration));
    setCurrLength(Math.ceil(player.currentTime));
    let secPerPx = Math.ceil(player.duration) / 280;

    if (player.currentTime === player.duration) {
      if (options.shuffle === true) {
        props.setIdx(parseInt(Math.random() * 1000) % 3);
      } else if (options.repeat === true) {
        player.play();
      } else {
        props.setIdx((props.idx + 1) % 3);
      }
    }
  }, 1000);

  function formatTime(s) {
    return Number.isNaN(s)
      ? "0:00"
      : (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }

  return (
    <div className="progress flex justify-between mb-5 mt-5">
      <div className="currentTime">
        <p className="font-bold text-light">{formatTime(currLength)}</p>
      </div>

      <div className="songLength">
        <p className="font-bold text-light">{formatTime(length)}</p>
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <>
      <img
        src={tracks[props.idx].cover}
        className="avatar1 shadow-4xl rounded-2xl"
        alt="cover"
        style={{height: '430px'}}
      />
      <h4 className="name bg-primary text-tertiary p-4 shadow-xl text-xl text-center mt-2 rounded">
        {tracks[props.idx].artist}
      </h4>
      <h1 className="title bg-primary text-tertiary p-3 shadow-lg text-lg text-center mt-2 rounded">
        {tracks[props.idx].name}
      </h1>
    </>
  );
}

function Container() {
  let [idx, setIdx] = React.useState(0);
  let [playState, setPlayState] = React.useState(false);
  let oldIdx = React.useRef(idx);
  React.useEffect(() => {
    if (playState === true) player.play();
    else player.pause();
    if (idx !== oldIdx.current) {
      player.pause();
      player.src = tracks[idx].source;
      player.load();
      player.play();
      setPlayState(true);
      oldIdx.current = idx;
    }
  });

  return (
    <div className="playerContaier">
      <Avatar idx={idx} />
      <Progress setIdx={setIdx} idx={idx} />
      <Control
        setIdx={setIdx}
        idx={idx}
        playState={playState}
        setPlayState={setPlayState}
      />
      <Options setIdx={setIdx} idx={idx} />
    </div>
  );
}

function Index() {
  return (
    <div>
      {/* <Header /> */}
      
      <div className="flex flex-col justify-center items-center px-6 py-2">
        <Container />
      </div>
      
    </div>
  );
}

export default Index;
