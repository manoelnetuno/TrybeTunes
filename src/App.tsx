import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';

function App() {
  const handleloginsubmit = (name:string) => {
    console.log(name);
  };

  return (
    <>
      <p>Trybetunes</p>
      <Routes>
        <Route path="/" element={ <Login onSubmit={ handleloginsubmit } /> } />
        <Route path="/search" Component={ Search } />

        <Route path="/album/:id" element={ <Album /> } />
      </Routes>
    </>
  );
}

export default App;
