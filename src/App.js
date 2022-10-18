import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <>
      <Routes>
      <Route path="/" element={<h1 className="text-4xl text-white bg-black">Hello {name}</h1>}/>        
      </Routes>
      </>
    </BrowserRouter>

  );
}


export default App
