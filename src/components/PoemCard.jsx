import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const PoemCard = ({ title, author, poemID, handleFindSinglePoem, isExpanded, expandedPoemText, handleFavoriteToggle, isFavorited }) => {
  const handleHeartClick = (e) => {
    e.stopPropagation(); // Prevent the card click event
    handleFavoriteToggle(poemID);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={() => handleFindSinglePoem(poemID)}>
      <h2 className='title'>{title}</h2>
      <div className='poem-card-details'>
        <p className='author'>{author}</p>
        <div className='heart-icon' onClick={handleHeartClick}>{isFavorited ? <FaHeart color='red' /> : <FaRegHeart />}</div>
      </div>
      {isExpanded && <p className='poem-text'>{expandedPoemText}</p>}
    </div>
  );
};

export default PoemCard;
