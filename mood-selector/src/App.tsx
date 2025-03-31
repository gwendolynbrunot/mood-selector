import { useState } from 'react'
import MoodSelector from './MoodSelector/MoodSelector';
import MoodDisplay from './MoodDisplay/MoodDisplay';
import './App.css'
import './MoodSelector/MoodSelector.css'

const backgroundMap: { [key: string]: string } = {
  Happy: '#FFCC26',
  Sad: '#5563FF',
  Excited: '#FF008C',
  Tired: '#BC27BA',
  Annoyed: '#7AE48D'
};

const App: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  const handleReset = () => {
    setSelectedMood(null);
  };

  const currentBackground = selectedMood ? backgroundMap[selectedMood] : '#22222A';

  return (
    <div style={{ backgroundColor: currentBackground, minHeight: '100vh', minWidth: '100vw'}}>
      <MoodSelector
        moods={['Happy', 'Sad', 'Excited', 'Tired', 'Annoyed']}
        onSelectMood={handleMoodSelect}
        selectedMood={selectedMood}
      />

      {selectedMood && (
        <button 
          onClick={handleReset} 
          className={`reset-button ${selectedMood ? 'selected' : 'unselected'}`}
        >
          Reset Mood
        </button>
      )}

      <MoodDisplay selectedMood={selectedMood} />
    </div>
  );
};

export default App;
