import React from "react";
import tstyled from 'tachyons-components';

const TitleImageWeb = tstyled('img')`w-60 `
const TitleWeb = tstyled('img')`w-100 `
const TitleStart = tstyled('button')`pl3-l pr3-l`
const Container = tstyled('div')`w-100 center v-mid`


function App(props) {

    return (
        <>
        <Container>
            <div>
            <TitleWeb src="images/title.png" />
            </div>
            <div>
            <TitleImageWeb src="images/img.png" />
            </div>
            <div>
            <TitleStart onClick={props.start} className="button">GENERATE MY HANDWASHING SONG </TitleStart>
            </div>
            </Container>
        </>
    );
}

export default App;
