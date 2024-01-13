import './App.css';
import onImg from "./images/wepik-export-20240107201427z92h.jpeg"
import offImg from "./images/wepik-export-20240107201441xBDp.jpeg"
import { useState } from 'react';

function App() {
  const [isBlubOn, toggleBlub] = useState(false)
  const bulbSrc = isBlubOn ? onImg : offImg;
  const onOffText = isBlubOn ? "Colors On" : "Colors Off";

  return (
    <div>
      <h1>Toggle Image</h1>
      <img src={bulbSrc} alt='flower' /><br /><br />
      <button onClick={() => toggleBlub(!isBlubOn)}>{onOffText}</button>
    </div>
  );
}

export default App;