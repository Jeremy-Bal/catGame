import { useState } from "react";
import useGame from "./Utils/useGame"

export default function Menu ()
{
    const start = useGame((state) => state.start)
    const [currentHide, setHide] = useState(false)

    return <>
        <div className={`column ${currentHide ? 'hide' : ''}`}>
            <div className="imgContent">
                <img src="./logo.png" />
            </div>
            <p className="title">Neige</p>
            <p className="desc">{`Find all items 'patoune' and get an extraordinary reward`}</p>
            <button onClick={()=>{
                setTimeout(()=>{
                    start()
                    setHide(true)
                }, 300)
                }} >Ready ?</button>
        </div>
        <div className="score">
            <p>Patounes left : <span>32</span></p>
        </div>
        <div className={'endGame'}>
            <p>Great job ! You just end the game.. <br />
            Now you can see the real snow</p>
            <p>Thank you for playing </p>
        </div>
    </>
}