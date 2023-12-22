import { useEffect, useState } from 'react'

import './App.css'

function Card({ time, text}) {
  return(
    <>
      <div className='w-60 h-60 bg-blue-300 rounded-3xl overflow-hidden mx-5 flex flex-col '>
        <span className='flex-1 text-6xl font-bold font-mono flex items-center justify-center text-white'>{time}</span>
        <span className='h-12 bg-white flex items-center justify-center font-semibold'>{text}</span>
      </div>
    </>
  )
}


function App() {
  //state
  const [time, setTime] = useState(new Date())

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime()
    let timeCount = (birthDate - now) / 1000 //convert milliseconds to seconds

    let days = Math.floor(timeCount / (60 * 60 * 24)) //convert seconds to days
    let hours = Math.floor(
      (timeCount % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
    )
    let minutes = Math.floor(
      ((timeCount % (60 * 60 * 24)) % (60 * 60)) / 60 //convert seconds to minutes
    )
    let seconds = Math.floor(
      ((timeCount % (60 * 60 * 24)) % (60 * 60)) % 60 //seconds
    )

    return [days, hours, minutes, seconds]
  }

  const myDate = new Date('August 25, 2024 15:42:00');
  const dateDiff = getCountdown(myDate);
  const timeText = ["Days","Hours","Minutes","Seconds"];
  let i = -1;
  // const 

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date())
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])

  return (
    <div className='bg-green-200 h-screen w-full text-center flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold mb-7 text-blue-400'>Countdown to my birthday</h1>
      <div className='flex justify-between'>
        {dateDiff.map(time => {
          i ++
          return (
              <Card time={time} text={timeText[i]}/>
            )
        })}
      </div>
    </div>
  )
}

export default App
