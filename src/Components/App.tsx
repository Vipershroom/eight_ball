import React, { useRef, useState } from 'react';
import Header from './Header';
import './styles/App.scss'

let responses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
  ]

function randRes(responses: Array<string>) {
  let randNum = Math.floor(Math.random() * responses.length)
  return responses[randNum]
}

function App() {

  const [state, setState] = useState("")
  const inputRef = useRef(null)

  return (
    <div className='main'>
      <Header />
      <h1>
        Welcome to 8 Ball
      </h1>
      <div className="prompt">
        <h2>Please ask a question!</h2>
        <div className="field">
          <input ref={inputRef} type="text" name="" id="inp" />
          <button onClick={() => {
            if (inputRef.current!['value'] === "") {
              return
            } else {
              setState(randRes(responses))
            }
          }}>Submit</button>
        </div>
        <h2>Answer: {state}</h2>
            </div>
      </div>
  );
}

export default App;
