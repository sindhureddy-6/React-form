import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
     navigate('/stored-submissions');
  };

  return (
    <button onClick={handleClick}>View Stored Submissions</button>
  );
};

export default SubmitButton;
