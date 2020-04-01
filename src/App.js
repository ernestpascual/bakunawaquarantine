import React, { useState } from "react";
import './App.css';
import tstyled from 'tachyons-components';

const Main = tstyled('div')`
w-80 center pt5-l
`
const TitleWebContainer = tstyled('div')`
dn dn-m db-l
`
const TitleMobileContainer = tstyled('div')`
db db-m dn-l
`
const TitleImageWeb = tstyled('img')`w-60 `
const TitleWeb = tstyled('img')`w-100 `
const TitleImageMob = tstyled('img')`w-90 mt5 `
const TitleImageMob2 = tstyled('img')`w-100  `
const Comingsoon = tstyled('div')`nt6`
const ComingsoonM = tstyled('div')`nt2`
function App() {
  return (
    <div className="App">
      <Main>
        <TitleWebContainer>
          <TitleWeb src="images/title.png" />
          <TitleImageWeb src="images/img.png" />
          <Comingsoon className="blinking"><h1>COMING SOON</h1></Comingsoon>
        </TitleWebContainer>
        <TitleMobileContainer>
          <TitleImageMob src="images/title2.png" />
          <TitleImageMob2 src="images/img.png" />
          <ComingsoonM className="blinking"><h1>COMING SOON</h1></ComingsoonM>
        </TitleMobileContainer>
      </Main>
    </div>
  );
}

export default App;
