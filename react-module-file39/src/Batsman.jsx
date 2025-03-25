import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns]= useState(0);
    const [sixes, setSixes] = useState(0)
    const handleSingle =() =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns)
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes)
        setRuns(updatedRuns)
    }

    
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs>=50 && <p>Your got hulf shenchuri</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button><br /><br />
        </div>
    )
}