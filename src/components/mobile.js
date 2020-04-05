import React from "react";
import tstyled from 'tachyons-components';

const TitleImageMob = tstyled('img')`w-90 mt5 `
const TitleImageMob2 = tstyled('img')`w-100`
const TitleStart = tstyled('button')`pl3-l pr3-l`

function App(props) {
    return (
        <>
            <TitleImageMob src="images/title2.png" />
            <TitleImageMob2 src="images/img.png" />
            <TitleStart onClick={props.start} className="button">GENERATE MY HANDWASHING SONG </TitleStart>
        </>
    );
}

export default App;
