import React from 'react';
import {useState} from 'react';

const reviewArray = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const Review = () => {
  const [currIndex, setCurrIndex] = useState(0)
 
  function handleIndex(n){
    let val = (currIndex+n)%reviewArray.length
    if(val < 0){
      val = reviewArray.length-1
    }
    setCurrIndex(val)
  }
  function handleRandom(){
    const random = () => Math.floor(Math.random() * reviewArray.length);
    let randomIdx = random()
    while(randomIdx === currIndex){
      randomIdx = random()
    }
    setCurrIndex(randomIdx)
  }
  return (
      <div  className='review'>
        <div className='card'>
          <img className='person-img' src={reviewArray[currIndex].image}></img>
          <p id={`author-${reviewArray[currIndex].id}`} className='author'>{reviewArray[currIndex].name}</p>
          <p className='job'>{reviewArray[currIndex].job}</p>
          <p className='info'>{reviewArray[currIndex].text}</p>
        </div>
        <div className='buttons'>
          <button className='prev-btn' onClick={() => handleIndex(-1)}>Previous Review</button>
          <button className='random-btn' onClick={handleRandom}>Random Review</button>
          <button className='next-btn' onClick={() => handleIndex(1)}>Next Review</button>
        </div>
      
    </div>
  )
}


export default Review