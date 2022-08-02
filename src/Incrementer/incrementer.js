import { useState } from "react"
import './file.css';
export const Incrementer = () => {
    const [color, setColor] = useState('#6d0e0e');


    return (
        <div className="Incrementer">
            <h2>Incrementer</h2>
            <span></span>

            <button > + 2</button>
        </div>
    )
}