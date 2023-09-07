
import React from 'react';
import './index.scss';

function Card({ image, virar, onClick }) {
  return (
    <div className={`card ${virar ? 'flipped' : ''}`} onClick={onClick}>
  {virar ?(
  <img src={image} alt="Card" /> 
   
  ) : 
      <div className="card-back">

        <div className='linha'>
        <img src="/assets/images/frei.jpg" alt="Card Back" />
        </div> 
        
      </div>}
    </div>
  );
}

export default Card