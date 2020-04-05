import React from "react";
import tstyled from 'tachyons-components';

const TitleImageWeb = tstyled('img')`w-60 `
const TitleWeb = tstyled('img')`w-100 `
const TitleStart = tstyled('button')`pl3-l pr3-l`


function App(props) {

    return (
        <>
            <TitleWeb src="images/title.png" />
            <TitleImageWeb src="images/img.png" />
            <TitleStart onClick={props.start} className="button">GENERATE MY HANDWASHING SONG </TitleStart>
       
        </>
    );
}

export default App;
