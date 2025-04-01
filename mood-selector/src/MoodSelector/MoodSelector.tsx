import React from 'react';

type MoodSelectorProps = {
    moods: string[];
    onSelectedMood: (mood: string) => void;
    selectedMood: string | null;
}

import happySelectedImg from '../assets/mood-icons/happy-selected-icon.svg';
import sadSelectedImg from '../assets/mood-icons/sad-selected-icon.svg';
import excitedSelectedImg from '../assets/mood-icons/excited-selected-icon.svg';
import tiredSelectedImg from '../assets/mood-icons/tired-selected-icon.svg';

const selectedMoodImages: { [key: string]: string } = {
    Happy: happySelectedImg,
    Sad: sadSelectedImg,
    Excited: excitedSelectedImg,
    Tired: tiredSelectedImg,
};

import happyUnselectedImg from '../assets/mood-icons/happy-unselected-icon.svg';
import sadUnselectedImg from '../assets/mood-icons/sad-unselected-icon.svg';
import excitedUnselectedImg from '../assets/mood-icons/excited-unselected-icon.svg';
import tiredUnselectedImg from '../assets/mood-icons/tired-unselected-icon.svg';

const unselectedMoodImages: { [key: string]: string } = {
    Happy: happyUnselectedImg,
    Sad: sadUnselectedImg,
    Excited: excitedUnselectedImg,
    Tired: tiredUnselectedImg,
};
  

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
                        className={`mood-button ${selectedMood ? 'selected' : 'unselected'} ${mood.toLowerCase()}-btn`}
                    >
                        <span 
                            className={`mood-text ${selectedMood ? 'selected' : 'unselected'}`}
                        >
                            {!selectedMood ? <img src={unselectedMoodImages[mood]} alt={`${mood} icon`} height="75px" width="75px"></img> : <img src={selectedMoodImages[mood]} alt={`${mood} icon`} height="75px" width="75px"></img>}
                            <p>{mood}</p>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoodSelector;