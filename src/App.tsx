import './App.css';
import Greet from './components/Greet';
import Header from './components/Header';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    firstName: 'Tony',
    lastName: 'Stark'
  }

  const nameList = [
    {
      firstName: 'Tony',
      lastName: 'Stark'
    },
    {
      firstName: 'Bruce',
      lastName: 'Banner'
    },
    {
      firstName: 'Steven',
      lastName: 'Strange'
    }
  ]
  return (
    <div className="App">
      <Greet name={'Gus'} messageCount={300} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Header>Header placeholder goes here</Header>
      <Oscar>
          <Header>Oscar goes to Dicaprio</Header>
      </Oscar>
    </div>
  );
}

export default App;
