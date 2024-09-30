'use client';

// import getRequest from "../api/jokeData";
import { useEffect, useState } from 'react';
// import { useAuth } from '@/utils/context/authContext';

export default function Home() {
  const [jokeSetup, setJoke] = useState('Getting Your Next Joke');
  const [jokeDelivery, setJokeDelivery] = useState('');
  const getJokeSetup = async () => {
    const main = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // console.log(fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart").then(response => response.json())
    // .then(data =>console.log(data)));
    // console.log(fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart").then(response => response.json())
    // .then(data =>console.log(data.setup, data.delivery)));
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart', main);
    const joke = await response.json();
    console.log({ jokeSetup });
    setJoke(joke.setup);
    setJokeDelivery(joke.delivery);
    // setJoke(setup);
    // console.log(setup);

    // const delivery =
    // setJokeDelivery(delivery);
  };

  useEffect(() => {
    getJokeSetup();
    document.getElementById('jokeSetup').innerHTML = 'Click For A Joke';
  }, []);

  // const getJokeDelivery = async () => {
  //   const main = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   console.log(fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart").then(response => response.json())
  //   .then(data =>console.log(data.delivery)));

  //   const delivery = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart/setup", main).then(response => response.json()).then(data =>(data.delivery));

  //   setJoke(delivery);
  // };

  const [clickCount, setClickCount] = useState(1);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
    console.log(clickCount);
  };

  const renderContent = () => {
    const deliveryString = JSON.stringify({ jokeDelivery });
    const textToRemove = '{"jokeDelivery":"';
    const newDeliveryString = deliveryString.replace(textToRemove, '');
    const newTextToRemove = '"}';
    const newnewDeliveryString = newDeliveryString.replace(newTextToRemove, '');
    switch (clickCount) {
      case 0:
        document.getElementById('jokeBtn').innerHTML = 'Get A Joke';
        document.getElementById('jokeDelivery').innerHTML = '';
        document.getElementById('jokeSetup').innerHTML = 'Click For A Joke';
        return setClickCount(2);
      case 1:
        document.getElementById('jokeBtn').innerHTML = 'Get Delivery';
        document.getElementById('jokeDelivery').innerHTML = '';
        console.log({ jokeDelivery });
        // document.getElementById("jokeDelivery").innerHTML = deliveryString;
        return getJokeSetup();
      case 2:
        document.getElementById('jokeBtn').innerHTML = 'Get A New Joke';
        // document.getElementById("jokeDelivery").innerHTML = "";
        document.getElementById('jokeDelivery').innerHTML = newnewDeliveryString;

        return setClickCount(1);
      case 3:
        return setClickCount(1);
      default:
        return setClickCount(1);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h3>Click For A Joke</h3>
        <div id="jokeSetup" className="joke">
          {jokeSetup}
        </div>
        <div id="jokeDelivery" className="joke" />
        <button
          id="jokeBtn"
          className="btn btn-success"
          type="button"
          onClick={() => {
            // getJokeSetup();
            handleClick();
            renderContent();
          }}
        >
          Get A Joke
        </button>
      </div>
    </div>
  );
}

// const init = () => {
//   document.querySelector('#app').innerHTML = `
//     <h1>JOKE GENERATOR</h1>
//     <small>Open your dev tools</small><br />
//     <button class="btn btn-danger" id="click-me">Get A Joke!</button><br />
//     <button style = "display: none" class="btn btn-danger" id="click-me-now">Get A Punchline!</button><br />
//     <button style = "display: none" class="btn btn-danger" id="click-me-now-again">Get Another Joke!</button><br />
//     <hr />
//     <div id="jokeSetup"></div>
//     <div id="jokePunch"></div>
//     <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
//   `;
//   console.warn('YOU ARE UP AND RUNNING!');

//   document.querySelector('#click-me').addEventListener('click', () => {
//     getRequest().then((response) => {
//       document.querySelector('#jokeSetup').innerHTML = response.setup;
//       const buttonSetup = document.querySelector('#click-me');
//       const buttonPunch = document.querySelector('#click-me-now');
//       buttonSetup.style.display = 'none';
//       buttonPunch.style.display = 'block';
//       document.querySelector('#jokePunch').innerHTML = '';
//       document.querySelector('#click-me-now').addEventListener('click', () => {
//         document.querySelector('#jokePunch').innerHTML = response.delivery;
//         buttonPunch.style.display = 'none';
//         document.querySelector('#click-me').innerHTML = 'Get Another Joke';
//         buttonSetup.style.display = 'block';
//       });
//     });

//   // USE WITH FIREBASE AUTH
//   // ViewDirectorBasedOnUserAuthStatus();
//   });
// };

// init();

// const [joker, setJoke] = useState({});

// const fetchStart = async () => {
//   const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
//   const jokeStart = await response.setup;

//   setJoke(jokeStart);
// }

// const fetchEnd = async () => {
//   const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart');
//   const jokeEnd = await response.delivery;

//   setJoke(jokeEnd);
// }

// const jokeResponse = async () => {
//   const obj = {
//     text: joker.text,
//   };

//   fetchEnd();
//   return obj;
// };

// useEffect(() => {
//   fetchStart();
// }, []);
