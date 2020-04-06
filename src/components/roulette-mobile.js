import React from "react";
import tstyled from 'tachyons-components';

const Result2 = tstyled('div')`w-100 `
const Result = tstyled('div')`w-100 `
const Logo = tstyled('img')`w-30`
const Container = tstyled('div')`w-100 center v-mid pt6`
function App(props) {

  return (
    <>
      <Container>
        <Logo src="/img.png" />
        <Result>
          <Result2>
          <h1 className="title-mobile">{props.title}</h1>
          </Result2>
          <p className="artist-mobile">{props.artist}</p>
        </Result>
        <button className="button" onClick={() => { window.location.href = props.scLink }}>WASH MY HANDS </button>
        <br />
        <button className="button" onClick={props.another}>ANOTHER ONE</button>
      </Container>
    </>
  );
}

export default App;
