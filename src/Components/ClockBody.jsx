import React, { useEffect, useState } from 'react';

function ClockBody() {

    const [time, setTime] = useState("");

    useEffect((time)=>{
        setInterval(()=>{
            let date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000)
    },[])

  return (
    <>
    <div className="clockBody">
        {time}
    </div>

    </>
  )
}

export default ClockBody