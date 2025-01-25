import {useState,useEffect} from 'react'

function StartStopWatch() {
    const [count,setCount] = useState(0);
    const[isRunning,setIsRunning] = useState(false);
    useEffect(()=>{ 
        let intervalCount: number; 
         if(isRunning){
            intervalCount = setInterval(()=>{
                setCount((prev)=>prev+1)
            },1000)
         }
         return ()=>{if(intervalCount){clearInterval(intervalCount)}}
    },[isRunning])
    const handleStart = ()=>{
        setIsRunning(true)
    }
    const handleStop = ()=>{
        setIsRunning(false)
    }
  return (
  <>
     <h1>StartStopWatch</h1>
     <button onClick={handleStart} disabled={isRunning}>Start</button>
     <br/><br/><br/>
     <h2>{count}</h2>
     <br/><br/>
     <button onClick={handleStop} disabled={!isRunning}>Stop</button>
  </>
    
  )
}

export default StartStopWatch