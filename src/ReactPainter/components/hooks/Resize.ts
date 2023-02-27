import { useCallback ,useState,useEffect } from "react";

export function ChangeSize(canvas:any){
    console.log(canvas?.clientWidth, canvas?.clientHeight)
        const [size,setSize] =useState({
            width:canvas?.clientWidth??0,
            height:canvas?.clientHeight ??0});
        const onResize = useCallback(()=>{
            setSize({
                width:canvas?.clientWidth??0,
                height:canvas?.clientHeight??0
            })
        },[canvas])
         

        useEffect(()=>{
            if(canvas){
                onResize();
                window.addEventListener("resize",onResize);
            }
            return ()=>{
                window.removeEventListener("resize",onResize);
            }
        },[canvas])
        return size;
    }