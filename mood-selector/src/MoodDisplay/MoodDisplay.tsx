import React from 'react';

type MoodDisplayProps = {
  selectedMood: string | null;
};

const MoodDisplay: React.FC<MoodDisplayProps> = ({ selectedMood }) => {
  return (
    <div>
      {selectedMood ? (
        <p style={{ fontSize: '2em' }}>You're feeling <strong>{selectedMood}</strong> today!</p>
      ) : (
        <p style={{ color: '#e4e4f0', fontSize: '2em' }}>No mood selected yet.</p>
      )}
    </div>
  );
};

export default MoodDisplay;