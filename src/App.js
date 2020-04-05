import React, { useState, useEffect } from "react";
import './App.css';
import tstyled from 'tachyons-components';
import Songchoice from './components/roulette'
import Web from './components/web'
import Mobile from './components/mobile'
import { songsData } from './data'

const Main = tstyled('div')`
w-80 center pt5-l
`
const TitleWebContainer = tstyled('div')`
dn dn-m db-l
`
const TitleMobileContainer = tstyled('div')`
db db-m dn-l
`

//const Comingsoon = tstyled('div')`nt6`
//const ComingsoonM = tstyled('div')`nt2`
function App() {

  // Artist card
  const [artist, setArtist] = useState("")
  const [title, setTitle] = useState("")
  const [scLink, setScLink] = useState("")

  const [step, setStep] = useState(false)

  const getSong = () => {
    var indexNumber = Math.floor((Math.random() * 47) + 1);
    setArtist(songsData[indexNumber].artist)
    setTitle(songsData[indexNumber].title)
    setScLink(songsData[indexNumber].sclinkp)
  }

  const startRoulette = () => {
    setStep(true)
  }

  useEffect(() => {
    getSong()
  }, [])
  return (
    <div className="App">
      <Main>
        <TitleWebContainer>{step ? <Songchoice
          title={title}
          artist={artist}
          scLink={scLink}
          another={() => { getSong() }} />
          : <Web start={() => {
            startRoulette()
          }} />
        }

        </TitleWebContainer>
        
        <TitleMobileContainer>
          {step ? <Songchoice
            title={title}
            artist={artist}
            scLink={scLink}
            another={() => { getSong() }} />
            :
            <Mobile
              start={() => {
                startRoulette()
              }}

            />
          }
        </TitleMobileContainer>
      </Main>
    </div>
  );
}

export default App;
