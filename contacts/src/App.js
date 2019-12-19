import React from 'react';

class ContactList extends React.Component{
  render() {
    const people = this.props.contacts   

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={[
        {name: 'Test 1'},
        {name: 'Test 2'},
        {name: 'Test 3'}
      ]}/>
      <ContactList contacts={[
        {name: 'Test 4'},
        {name: 'Test 5'},
        {name: 'Test 6'}
      ]}/>      
    </div>
  );
}

export default App;
