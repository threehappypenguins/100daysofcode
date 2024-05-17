import React from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const dataToPass = "Hello from parent component";

  return (
    <div>
      <h1>Hello from parent component</h1>
      <ChildComponent data={dataToPass} />
    </div>
  );
}

export default App;