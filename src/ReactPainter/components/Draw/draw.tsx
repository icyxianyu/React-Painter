import { useRef } from 'react'
import { useEffect } from 'react';
import "./index.css"
interface props{
    setCanvas:Function
    setCtx:any
    onMousedown:any
    onMouseMove:any
    onMouseUp:any
}
 const Draw =(
    {setCanvas,setCtx,onMousedown,onMouseMove,onMouseUp}:props)=>{
    const canvasRef = useRef<any>();   
    useEffect(()=>{
        if(canvasRef.current){
            setCanvas(canvasRef.current);
            setCtx(canvasRef.current.getContext("2d"))
        }
    },[canvasRef.current])
    return (
        <div className='canvasBox'>
            <canvas 
                className='canvasBox-canvas'
                width={1000}
                height={500}
                style={{width:"1000px",height:"500px"}}
                onMouseDown={onMousedown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                ref={canvasRef}/>
        </div>
    )
}

export default Draw