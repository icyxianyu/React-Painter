import "./index.css"
export default function TopToolBar() {
  return (
    <div className="top">
    <div className="main">
        <div className="left"><h2 style={{color:"white"}}>CANVAS绘画板</h2></div>
        <div className="imputtotal">
            <span><label>背景颜色<input type="color" className="backgroundcolor word" value="#ffffff"/></label></span>
            <span><label>画笔颜色<input type="color" className="pintcolor word"/></label></span>
            <span><label>画笔粗细<input type="text" className="pintfont" value="1"/></label></span>
            <button type="button" className="clear">清空画板</button>
            <button type="button" className="clear">保存图像</button>
            <button type="button" className="clear">重现绘图</button>
        </div>
     </div>
    </div>
  )
}
