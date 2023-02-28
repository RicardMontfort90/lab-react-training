import React from 'react';
import IdCard from './components/idCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="gr">Μαρίνα / Marina</Greetings>
      <Greetings lang="gr">Γιλλέμ / Guillem</Greetings>  

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

    </div>
  );
}

export default App;
