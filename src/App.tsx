import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  const handleloginsubmit = (name:string) => {
    console.log(name);
  };

  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login onSubmit={ handleloginsubmit } /> } />
        {/* <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } /> */}
      </Routes>
    </>
  );
}

export default App;
