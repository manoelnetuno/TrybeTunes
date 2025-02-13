import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Layout from './components/Layout';
import NotFoundPage from './components/notfoundpage';
import './css/App.css'

function App() {
  const handleloginsubmit = (name:string) => {
    console.log(name);
  };

  return (
    <div>

      <p>Trybetunes</p>

      <Routes>
        <Route index element={ <Login onSubmit={ handleloginsubmit } /> } />
        <Route path="/" element={ <Layout /> }>
          <Route path="/search" element={ <Search /> } />
          <Route path="/album/:id" element={ <Album /> } />
        </Route>
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>

  );
}

export default App;
