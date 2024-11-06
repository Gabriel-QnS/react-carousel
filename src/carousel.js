import { useEffect, useState } from "react";

function Carousel(){
    let [currentIndex, setCurrentIndex] = useState(0); // initializes state, function to change index of pic
    const pics = [];
    for (let i = 1; i <= 5; i++){
        pics.push('/assets/' + `img${i}.jpg`)
    };// populates array of pics with the directions

    useEffect(() => {
        const change = setInterval(() =>{
            setCurrentIndex(currentIndex++)
        }, 3000);

        return () => clearInterval(change)
    });

    console.log(pics)

    return(
        <div className='carousel'>
            <img src={pics[currentIndex]} alt="A string of numbers"></img>
        </div>
    )
    
}

export default Carousel;