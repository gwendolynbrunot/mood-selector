import React from 'react';

type MoodSelectorProps = {
    moods: string[];
    onSelectedMood: (mood: string) => void;
    selectedMood: string | null;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ moods, onSelectMood, selectedMood }) => {
    return (
        <div>
            <h2 style={{ margin: '0', padding: '40px 0px'}} 
                className={`heading ${selectedMood ? 'selected' : 'unselected'}`}
            >
                Select your mood:
            </h2>
            <div className='mood-buttons-wrapper'>
                {moods.map((mood) => (
                    <button 
                        key={mood} 
                        onClick={() => onSelectMood(mood)} 
                        className={`mood-button ${selectedMood ? 'selected' : 'unselected'}`}
                    >
                        <span 
                            className={`mood-text ${selectedMood ? 'selected' : 'unselected'}`}
                        >
                            {mood}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoodSelector;