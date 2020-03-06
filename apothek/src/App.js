import React, { useState } from 'react';
import './styles/app.scss';
import Welcome from './components/Welcome';
import Home from './components/Home';
import userAgeContext from './contexts/userAgeContext';

function App() {
  const [usrOfAge, setUsrOfAge] = useState(false);

  const oldEough = () => {
    setUsrOfAge(!usrOfAge);
  }

  const notOldEough = () => {
    alert("Sorry, you must be at least 21 years old to vist this site.")
  }

  return (
    <div className="App">
      <userAgeContext.Provider value={[ usrOfAge, oldEough, notOldEough ] }>
      <header>
        {
          usrOfAge ? <Home /> : <Welcome />
        }
        {/* <Home /> */}
      </header>
      </userAgeContext.Provider>
    </div>
  );
}

export default App;
