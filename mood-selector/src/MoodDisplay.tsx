import React from 'react';

type MoodDisplayProps = {
  selectedMood: string | null;
};

const MoodDisplay: React.FC<MoodDisplayProps> = ({ selectedMood }) => {
  return (
    <div>
      {selectedMood ? (
        <p>You're feeling <strong>{selectedMood}</strong> today!</p>
      ) : (
        <p>No mood selected yet.</p>
      )}
    </div>
  );
};

export default MoodDisplay;