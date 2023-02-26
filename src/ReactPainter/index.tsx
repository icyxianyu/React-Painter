import { useState } from 'react'
import Draw from './Draw/draw'
import TopToolBar from './TopToolBar/TopToolBar'
export default function ReactPinter() {
    const [canvas,setCanvas] = useState<HTMLElement|any>();
    const [ctx,setCtx]= useState<any>();
    const [isClick,setIsClick] = useState<boolean>(false);
    const onMousedown = (event:any) => {
        if (event.button === 0) {
            const offsetX = event.pageX - canvas.offsetLeft ;
            const offsetY = event.pageY - canvas.offsetTop ;
            ctx.beginPath();
            ctx.moveTo(offsetX, offsetY);
            setIsClick(true);
        }
    }
    const onMouseMove = (event:any) => {
        if(isClick){
            const offsetX = event.pageX - canvas.offsetLeft 
            const offsetY = event.pageY - canvas.offsetTop 
            ctx.lineTo(offsetX,offsetY);
            ctx.stroke();
        }
    }
    const onMouseUp = () => {
        setIsClick(false);
    }
  return (
    <div>
        <TopToolBar
            
        />
        <Draw 
            setCanvas = {setCanvas}
            setCtx ={setCtx}
            onMousedown={onMousedown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
         />
    </div>
  )
}
