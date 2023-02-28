import React from 'react'
interface props{
    history:any
}
export default function History({history}:props) {
  return (
    <div >
        {
            history.slice(1).map((item:any)=>{
               return <div> 
                        <span>{item.action}</span>
                    </div>
            })
        }
    </div>
  )
}
