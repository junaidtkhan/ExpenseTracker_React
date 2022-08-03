import { useState } from "react"
import './colorrizer.css';
export const Colorizer = () => {
    
    const [color, setColor] = useState('#6d0e0e');
    
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        const random='#' + n.slice(0, 6);
        return random;
      }

    const changeColor=()=>{
        console.log('Color Changed')
        const randomColor=random_hex_color_code();
        setColor(randomColor)
    }

    return (
        <div className="colorizer">
            <h2>colorizer</h2>

            <div className="box" style={{ backgroundColor: color }}>{color}</div>

            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}