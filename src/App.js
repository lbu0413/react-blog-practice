import React, { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(['React', 'Vue', 'Angular']);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [pressed, setPressed] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        Wook's blog
      </div>
      {
        title.map((each, index) => {
          return (
            <div className="list" key={index}>
              <h3 onClick={() => {setPressed(index)}}>{each}
                <span 
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                  let copy = [...like]
                  copy[index]++
                  setLike(copy)
                }}>
                  👍
                </span>
                { like[index] }
              </h3>
              <p>Feb. 17th</p>
              <hr/>
            </div>
          )
        })
      }
      <div className="publish">
        <input 
          type="text" 
          onChange={(e) => setInputValue(e.target.value)}/>
          
        <button onClick={() => {
          let newTitle = [...title]
          newTitle.unshift(inputValue)
          setTitle(newTitle)
          let newLike = [...like]
          newLike.unshift(0)
          setLike(newLike)
        }}>save</button>
      </div>

      <button onClick={() => setModal(!modal)}>modal</button>
      {
        modal ? <Modal title={title} pressed={pressed} /> : null
      }
    </div>
  );
}

function Modal({ title, pressed }) {
  return (
    <div className="modal">
        <h2>{ title[pressed] }</h2>
        <p>date</p>
        <p>detail</p>
    </div>
  )
}

export default App;
