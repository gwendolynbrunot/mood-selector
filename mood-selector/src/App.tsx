import { useState } from 'react'
import MoodSelector from './MoodSelector';
import MoodDisplay from './MoodDisplay';
import './App.css'

const App: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  return (
    <div>
      <MoodSelector
        moods={['Happy', 'Sad', 'Excited', 'Tired']}
        onSelectMood={handleMoodSelect}
      />
      <MoodDisplay selectedMood={selectedMood} />
    </div>
  );
};

export default App;
