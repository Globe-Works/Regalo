import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { myContext } from './Context';
import LoginPage from './Pages/LoginPage';

const App = (props) => {
  const user = useContext(myContext);

  console.log(user);
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route
            path="/"
            element={user ? <h1 className="text-4xl text-white bg-black">Hello</h1> : <LoginPage />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
