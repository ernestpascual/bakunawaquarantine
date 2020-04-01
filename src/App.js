import React, { useState } from "react";
import './App.css';
import tstyled from 'tachyons-components';

const Main = tstyled('div')`
w-80 center pt5-l
`

const TitleWebContainer = tstyled('div')`

`
const TitleImageWeb = tstyled('img')`w-60 `
const TitleWeb = tstyled('img')`w-100 `
const Comingsoon = tstyled('div')`nt6`
function App() {
  return (
    <div className="App">
      <Main>
        <TitleWebContainer>
          <TitleWeb src="images/title.png" />
          <TitleImageWeb  src="images/img.png" />
          <Comingsoon className="blinking"><h1>COMING SOON</h1></Comingsoon>
        </TitleWebContainer>
      </Main>
    </div>
  );
}

export default App;
