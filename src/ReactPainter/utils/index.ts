export const keyPressAction=(event:any,canvas:any,ctx:any,history:any,setHistory:any)=>{
    if(event.ctrlKey){
        if(event.code === "KeyZ"){
            const len = history.length;
            if(len === 2){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                setHistory([null]);
                return;
            }
            let img = new Image();
			img.src = history[len-2]?.src;
            img.onload = ()=>{
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img,0,0);
                setHistory(history.slice(0,len-1));
            }
        }else if(event.code === "KeyS"){

        }
    }
}