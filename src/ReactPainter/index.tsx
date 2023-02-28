import { useEffect, useState } from 'react'
import Draw from './components/Draw/draw'
import LeftToolBar from './components/LeftToolBar';
import RightToolBar from './components/RightToolBar';
import TopToolBar from './components/TopToolBar/TopToolBar'
import { DrawImg, keyPressAction } from './utils';
export default function ReactPinter() {
    const [history,setHistory] =useState<any>([null]);
    const [canvas,setCanvas] = useState<HTMLElement|any>();
    const [ctx,setCtx] = useState<any>();
    const [isClick,setIsClick] = useState<boolean>(false);
    const [Event,setEvent] = useState<any>(); 
    const addToHistory = ()=>{
        setHistory([...history,{src:canvas.toDataURL(),
                    action:"painDraw"}]
        .slice(-50))
    }
    const onMousedown = (event:any) => {
        if (event.button === 0) {
            const offsetX = event.clientX - canvas.getBoundingClientRect().left;
            const offsetY = event.clientY - canvas.getBoundingClientRect().top;
            console.log(offsetX,offsetY)
            ctx.beginPath();
            ctx.moveTo(offsetX, offsetY);
            setIsClick(true);
        }
    }
    const onMouseMove = (event:any) => {
        if(isClick){
            const offsetX = event.clientX - canvas.getBoundingClientRect().left;
            const offsetY = event.clientY - canvas.getBoundingClientRect().top;
            ctx.lineTo(offsetX,offsetY);
            ctx.stroke();
        }
    }
    const onMouseUp = () => {
        setIsClick(false);
        addToHistory();
    }
    const changeInput = (name:string,value:any) =>{
        console.log(name,value)
        switch (name){
            case "backgroundcolor" :
                canvas.style.backgroundColor = value;
                break;
            case "paintcolor":
                ctx.strokeStyle=value;
                break;
            case "paintfont" :
                ctx.lineWidth = value;
                break;
        }
    }
    const clear = ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    const save = () =>{

        // 创建一个 a 标签，并设置 href 和 download 属性
        const el = document.createElement('a');
        // 设置 href 为图片经过 base64 编码后的字符串，默认为 png 格式
        el.href = canvas.toDataURL();
        el.download = '图片';
        // 创建一个点击事件并对 a 标签进行触发
        const event = new MouseEvent('click');
        el.dispatchEvent(event);
    }
    const keydown=(event:any)=>{
        event.preventDefault();
        event.stopPropagation();
        setEvent(event)
    }
    const changeHistory = (index:number) =>{
        DrawImg({ctx,canvas,history},setHistory,index)
    }
    const replay = () =>{

    }
    useEffect(()=>{
        if(Event){
            keyPressAction(Event,canvas,ctx,history,setHistory)
        }
    },[Event,canvas,ctx])
    useEffect(()=>{
        if(canvas&&ctx){
            document.addEventListener("keydown",keydown)
        }
        return ()=>{
            document.removeEventListener("keydown",keydown)
        }
    },[canvas,ctx])

    
  return (
    <div style={{display:"flex",flexDirection:"column",height:"100%"}} >
        <TopToolBar 
            clear={clear}
            save={save}
            changeInput={changeInput}
            replay={replay}
            history={history} 
            changeHistory={changeHistory}/>
        <div style={{display:"flex",flex:1}}>
            <LeftToolBar></LeftToolBar>
            <Draw 
                setCanvas = {setCanvas}
                setCtx ={setCtx}
                onMousedown={onMousedown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
            />
            <RightToolBar></RightToolBar>
         </div>
    </div>
  )
}
