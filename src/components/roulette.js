import React from "react";
import tstyled from 'tachyons-components';

const Result = tstyled('div')`w-100`
const Logo = tstyled('img')`w-10`
function App(props) {

  return (
    <>
    <Logo src="/img.png" />
      <Result>
          <h1 className="title-web">{props.title}</h1>
          <p className="artist-web">{props.artist}</p>
      </Result> 
          <button className="button" onClick={()=> {window.location.href=props.scLink}}>WASH MY HANDS </button>
          <br />
          <button className="button" onClick={props.another}>ANOTHER ONE</button>
         
    </>
  );
}

export default App;
