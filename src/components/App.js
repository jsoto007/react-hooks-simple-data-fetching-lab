// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setData(data.message)
                setIsLoaded(true)
            })
    }, [])

    if (!isLoaded) return <p>Loading...</p>
    return (
        <div>
            <img alt="A Random Dog" src={data}/>
        </div>
    )
}

export default App;