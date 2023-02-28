import React, { useEffect, useRef, useState } from 'react'
import "./history.scss"

interface props{
    history:any
    changeHistory:any

}
export default function History(
    {history,changeHistory}:props) {
    const ref= useRef<any>()
    useEffect(()=>{
        if(ref&&history){
            const current= ref.current;
            current.scrollTop = current.scrollHeight
        }
    },[history])
  return (
    <div className="historyBox" ref={ref}>
        {
            history.map((item:any,number:number)=>{
               return <div className={"single"} key={number} 
                        onClick={()=>changeHistory(number)}> 
                        <span >{number}:{item?.action??"初始状态"}</span>
                    </div>
            })
        }
    </div>
  )
}
