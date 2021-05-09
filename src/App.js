import React, { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(['React', 'Vue', 'Angular']);
  const [like, setLike] = useState(0)

  const titleChanger = () => {
    let newArray = [...title]
    newArray.sort()
    setTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        Wook's blog
      </div>
      <div className="list">
        <h3>{ title[0] } 
          <span onClick={() => { setLike(like + 1) }}>👍</span>{ like }
        </h3>
        <p>Feb. 17th</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] } </h3>
        <p>Feb. 17th</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] } </h3>
        <p>Feb. 17th</p>
        <hr/>
      </div>
      <button onClick={titleChanger}>btn</button>
    </div>
  );
}

export default App;
