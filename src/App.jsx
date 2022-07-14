import { useState } from 'react';
import randomWords from 'random-words'

const App = (props) => {

  const [myWord, setMyWord] = useState(randomWords());

  const makeNewWord = () => {
    setMyWord(randomWords())
  }

 return (
  <div className="App">
    { myWord }
    <button onClick={makeNewWord}>
      Get new word.
    </button>
  </div>
 )
}
export default App
