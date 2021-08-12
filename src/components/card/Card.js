import "../card/Card.css";
import data from "../../helper/data";

export default function Card() {
    return (
        <div className="card--bg">
            <div className="card">
                <h2>languages</h2>
                <div className="card-icons">
                    <div className="card--icon js">
                        <div className="card--icon_img">
                            <img src={data[0].img}/>
                            <h4>{data[0].name}</h4>
                        </div>
                        <ul>
                            <li>{data[0].options[0]}</li>
                            <li>{data[0].options[1]}</li>
                            <li>{data[0].options[2]}</li>
                        </ul>
                    </div>
                    <div className="card--icon">
                        <img src={data[1].img}/>
                        <h4>{data[1].name}</h4>
                        <ul>
                            <li>{data[1].options[0]}</li>
                            <li>{data[1].options[1]}</li>
                            <li>{data[1].options[2]}</li>
                        </ul>
                    </div>
                    <div className="card--icon">
                        <img src={data[2].img}/>
                        <h4>{data[2].name}</h4>
                        <ul>
                            <li>{data[2].options[0]}</li>
                            <li>{data[2].options[1]}</li>
                            <li>{data[2].options[2]}</li>
                        </ul>
                    </div>
                    <div className="card--icon">
                        <img src={data[3].img}/>
                        <h4>{data[3].name}</h4>
                        <ul>
                            <li>{data[3].options[0]}</li>
                            <li>{data[3].options[1]}</li>
                            <li>{data[3].options[2]}</li>
                        </ul>
                    </div>
                    <div className="card--icon">
                        <img src={data[4].img}/>
                        <h4>{data[4].name}</h4>
                        <ul>
                            <li>{data[4].options[0]}</li>
                            <li>{data[4].options[1]}</li>
                            <li>{data[4].options[2]}</li>
                        </ul>
                    </div>
                    <div className="card--icon">
                        <img src={data[5].img}/>
                        <h4>{data[5].name}</h4>
                        <ul>
                            <li>{data[5].options[0]}</li>
                            <li>{data[5].options[1]}</li>
                            <li>{data[5].options[2]}</li>
                        </ul>
                    </div>
                    <div className="card--icon">
                        <img src={data[6].img}/>
                        <h4>{data[6].name}</h4>
                        <ul>
                            <li>{data[6].options[0]}</li>
                            <li>{data[6].options[1]}</li>
                            <li>{data[6].options[2]}</li>
                        </ul>
                    </div>
                    <div className="card--icon">
                        <img src={data[7].img}/>
                        <h4>{data[7].name}</h4>
                        <ul>
                            <li>{data[7].options[0]}</li>
                            <li>{data[7].options[1]}</li>
                            <li>{data[7].options[2]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};


