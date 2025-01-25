import {useEffect, useState} from "react"

const Mywatch = ()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prev)=>{ 
                return prev + 1;
            })
        },1000)
        return ()=>{clearInterval(interval)}
    },[])

    return(
        <>
        <h1>Mywatch</h1>
        <p>{count}</p>
        </>
    )
}
export default Mywatch