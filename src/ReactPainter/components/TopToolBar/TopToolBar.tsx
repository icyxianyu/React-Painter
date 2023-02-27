import "./index.css"
interface props{
  changeInput:any
  clear:any
  save:any
}
export default function TopToolBar({changeInput,clear,save}:props) {
  return (
    <div className="top">
    <div className="main">
        <div className="left"><h2 style={{color:"white"}}>CANVAS绘画板</h2></div>
        <div className="imputtotal">
            <span><label>背景颜色
              <input type="color" 
                 className="backgroundcolor word" 
                 defaultValue="#ffffff" 
                 onChange={(e)=>changeInput("backgroundcolor",e.target.value)}/></label></span>
            <span><label>画笔颜色
              <input type="color" 
                     className="pintcolor word" 
                     onChange={(e)=>changeInput("paintcolor",e.target.value)}/></label></span>
            <span><label>画笔粗细
              <input type="text" 
                     className="pintfont" 
                     defaultValue={1} 
                     onChange={(e)=>changeInput("paintfont",e.target.value)}/></label></span>
            <button type="button" className="clear" onClick={clear}>清空画板</button>
            <button type="button" className="clear" onClick={save}>保存图像</button>
            <button type="button" className="clear" >重现绘图</button>
        </div>
     </div>
    </div>
  )
}
