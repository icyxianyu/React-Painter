import { useRef, useState } from 'react'
import { useEffect } from 'react';
import "./index.css"
interface props{
    // setCanvas:Function
    index:any
    onMousedown:any
    onMouseMove:any
    onMouseUp:any
}
 const Draw =(
    {onMousedown,onMouseMove,onMouseUp,index}:props)=>{
    const canvasRef = useRef<any>(); 
    const [ctx,setCtx ] = useState<any>(null); 
    useEffect(()=>{
        if(canvasRef.current){
            setCtx(canvasRef.current.getContext("2d"))
        }
    },[canvasRef.current])
    return (
        <div className='canvasBox'>
            <canvas 
                className='canvasBox-canvas'
                width={1000}
                height={500}
                style={{width:"1000px",
                        height:"500px",
                        }}
                onMouseDown={(event)=>onMousedown(event,canvasRef.current,ctx)}
                onMouseMove={(event)=>onMouseMove(event,canvasRef.current,ctx)}
                onMouseUp={(event)=>onMouseUp(event,canvasRef.current,ctx)}
                ref={canvasRef}/>
        </div>
    )
}

export default Draw