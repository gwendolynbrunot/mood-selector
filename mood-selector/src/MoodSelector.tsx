import React from 'react';

type MoodSelectorProps = {
    moods: string[];
    onSelectedMood: (mood: string) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ moods, onSelectMood }) => {
    return (
        <div>
        <h2>Select your mood:</h2>
        {moods.map((mood) => (
            <button key={mood} onClick={() => onSelectMood(mood)}>
                {mood}
            </button>
        ))}
        </div>
    );
};

export default MoodSelector;