import { useRef } from 'react'
import { useEffect } from 'react';
import "../less/Draw.less"
interface props{
    setCanvas:Function
    setCtx:any
    onMousedown:any
    onMouseMove:any
    onMouseUp:any
}

export default function Draw(
    {setCanvas,setCtx,onMousedown,onMouseMove,onMouseUp}:props){
    const canvasRef = useRef<any>();
    useEffect(()=>{
        if(canvasRef.current){
            setCanvas(canvasRef.current);
            setCtx(canvasRef.current.getContext("2d"))
        }
        // eslint-disable-next-line
    },[canvasRef.current])
    return (
        <canvas 
            id="tutorial" 
            width="1000" 
            height="1000" 
            onMouseDown={onMousedown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            ref={canvasRef}/>
    )
}
