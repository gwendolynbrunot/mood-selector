import { useState } from 'react'
import MoodSelector from './MoodSelector/MoodSelector';
import MoodDisplay from './MoodDisplay/MoodDisplay';
import './App.css'
import './MoodSelector/MoodSelector.css'

import resetIcon from './assets/reset-icon.svg';

const App: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleReset = () => {
    setSelectedMood(null);
  };

  const moodClass = selectedMood ? selectedMood.toLowerCase() : 'default';

  return (
    <div className={`animated-background ${moodClass}`} style={{ height: '100vh', width: '100vw' }}>
      <MoodSelector
        moods={['Happy', 'Sad', 'Excited', 'Tired']}
        onSelectMood={handleMoodSelect}
        selectedMood={selectedMood}
      />

      {selectedMood && (
        <button 
          onClick={handleReset} 
          className={`reset-button ${selectedMood ? 'selected' : 'unselected'}`}
        >
          <img src={resetIcon} alt="reset icon" height="35px;" width="auto;"></img>
          <span style={{marginLeft: '15px', top: '-7px', position: 'relative'}}>Reset Mood</span>
        </button>
      )}

      <MoodDisplay selectedMood={selectedMood} />
    </div>
  );
};

export default App;
