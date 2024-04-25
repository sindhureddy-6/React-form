import React from 'react';

const StoredSubmissions = () => {
  const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];

  return (
    <div>
      <h2>Stored Submissions</h2>
      <ul>
        {storedSubmissions.map((submission, index) => (
          <li key={index}>
            <strong>Name:</strong> {submission.name}, <strong>Email:</strong> {submission.email}<br />
                <strong>Message:</strong> {submission.message}<br />
            {/* {submission.cv) && (
              <div>
                <strong>CV:</strong>   { $.evalJSON(submission.cv).name} <a href={URL.createObjectURL( $.evalJSON(submission.cv))}>Download CV</a>
              </div>
            )} */}
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoredSubmissions;
