import { useState } from "react"

export default function Batsman() {

    const [runs, setRuns] = useState(0)
    const [singles, setSingles] = useState(0)
    const [fours, setFours] = useState(0)
    const [sixes, setSixes] = useState(0)
    


    const handleSingles = () => {
       const updateRuns = runs + 1 ;
          const updateSingles = singles + 1
        setRuns(updateRuns)
        setSingles(updateSingles)


    }

     const handleFour = () => {
       const updateRuns = runs + 4 ;
        const updateFours = fours + 1
        setRuns(updateRuns)
         setFours(updateFours)

    }

     const handleSix = () => {
       const updateRuns = runs + 6 ;
       const updateSixes = sixes + 1
        setRuns(updateRuns) ;
        setSixes(updateSixes)

    }

    return (
        <div>
            <h3>Player: Bangla Batsman </h3>
            {
                runs > 50 && <p>Congratulation ! Half Century Done </p>
            }
            <h1>Score: {runs} </h1>
            <h2>Singles: {singles} </h2>
            <h2>Sixes: {sixes} </h2>
            <h2>Fours: {fours} </h2>
            <button onClick={handleSingles} >Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}