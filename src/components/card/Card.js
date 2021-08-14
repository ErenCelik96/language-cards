import React, { useState } from 'react';
import "../card/Card.css";


export default function Card({item}) {
    const [showing, setShowing] = useState(true)
    function onClickSwitch(){
        setShowing(!showing)
    }
    return (     
        <div className="card--icon" onClick={onClickSwitch}>
            {showing?<div className="card--icon_img">
                <img src={item.img}/>
                <h4>{item.name}</h4>
            </div>:
            <ul>
                {item.options.map((info,index) => <li>{info}</li>)}
            </ul>}
            
        </div>
    )
}


