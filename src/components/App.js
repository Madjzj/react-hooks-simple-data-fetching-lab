// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [dogImage, setDogImage] = useState("Loading...")
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response)=> response.json())
            .then((data)=>{
                setDogImage(data.message);
            })
            .catch((error)=>console.log(error))

    })
    if(dogImage === "Loading..."){
        return <p>{dogImage}</p>
    }else{
        return <img src={dogImage} alt="A Random Dog"/>
    }
}

export default App