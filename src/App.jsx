import React, { useState } from 'react'
import reviews from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const App = () => {
  const [index,setIndex]=useState(0)
   const {name,job,image,text}= reviews[index]
  // console.log(name);
  //  console.log(reviews.length);
   
   
  // const checkPerson = (number) =>{
  //   if(number > reviews.length - 1){
  //     return 0
  //   }
  //   if(number < 0){
  //     return reviews.length - 1
  //   }
  //   return number;
  // }
  const prevPerson = () =>{
    setIndex((currentIndex)=>{
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      return newIndex
    })
  }
  const nextPerson = () =>{
    setIndex((currentIndex)=>{
      const newIndex = (currentIndex + 1) % reviews.length
      return newIndex
    })
  }
  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random() * reviews.length)
    // console.log(randomNumber);
    if(randomNumber === index){
      randomNumber = index + 1
    }
    const newIndex = randomNumber % reviews.length
    setIndex(newIndex)
    
  }
  
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
             <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
             <FaChevronRight />
          </button>
        </div>
        <button className="btn" onClick={randomPerson}>surprise me</button>
      </article>
    </main>
  )
}

export default App
