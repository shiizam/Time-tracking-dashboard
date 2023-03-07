import { ProfileCard } from './components/profileCard/ProfileCard'
import { Cards } from './components/cards/Cards'
import React,{useState} from 'react'

import './index.css'
import data from './data.json'





function App() {
  const [timeframe, setTimeframe] = useState("Weekly")

  const handleClick = (e) =>{
    setTimeframe(e.target.innerText)
  }

  return (
    <main className="App">
      <ProfileCard handleClick={handleClick} timeframe={timeframe}/>
        {
          data.map((item, index) => {
          return (
            <Cards 
            key={index}
            id={index}
            title={item.title}
            current={item["timeframes"][timeframe.toLowerCase()]["current"]}
            previous={item["timeframes"][timeframe.toLowerCase()]["previous"]}
            timeframe={timeframe}
            />
          )
        })
      }
    </main>
  );
}

export default App
