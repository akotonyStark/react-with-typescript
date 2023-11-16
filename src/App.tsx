import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Header from './components/Header';
import Input from './components/Input';
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
      <Container styles={{border: '1px solid black', padding:'1rem'}}>
        <Greet name={'Gus'} messageCount={300} isLoggedIn={true}/>
        <Person name={personName}/>
        <PersonList names={nameList}/>
        <Status status='loading'/>
        <Header>Header placeholder goes here</Header>
        <Oscar>
            <Header>Oscar goes to Dicaprio</Header>
        </Oscar>
        <Greet name='Gus'  isLoggedIn={false}/>
        <Button 
                handleClick={() =>  console.log('button clicked')}
                handleMouseOver={() => console.log('mouse over')}
                handleMouseDown={(e) => console.log(e, 1)}
        />
        <Input value='' handleChange={(e) => console.log(e.target.value)} /> 
      </Container>

    </div>
  );
}

export default App;
