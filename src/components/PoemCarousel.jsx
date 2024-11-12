import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const PoemCarousel = ({ poemCards }) => {
  const [activePoem, setActivePoem] = useState(0);
  const numPoems = poemCards.length;

  return (
    <div className='carousel'>
      {activePoem > 0 && (
        <button className='nav left' onClick={() => setActivePoem((i) => i - 1)}>
          <MdChevronLeft/>
        </button>
      )}
      {poemCards.map((poemCard, i) => (
        <div className='card-container'
          style={{display: i !== activePoem ? 'none' : 'block'}}>
          {poemCard}
        </div>
      ))}
      {activePoem < numPoems - 1 && (
        <button className='nav right' onClick={() => setActivePoem((i) => i + 1)}>
          <MdChevronRight/>
        </button>
      )}
    </div>
  );
};

export default PoemCarousel;