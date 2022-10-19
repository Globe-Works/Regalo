import React, { useContext } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { myContext } from './Context';
import LoginPage from './Pages/LoginPage';

// import {
//   GiftIdeas,
//   SelectionsScreen
// } from '../routes';
import GiftIdeas from '../routes/GiftIdeas';
import Selection from '../routes/Selection';
import Header from '../routes/Header';
import ErrorPage from './error-page';
import NewGift from '../routes/NewGift';
import PairUpScreen from '../routes/PairUpScreen';
import Recipients from '../routes/Recipients';
import AddRecipient from '../routes/AddRecipient';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Selection />} />
      <Route path="/giftideas" element={<GiftIdeas />} />
      <Route path="/newgift" element={<NewGift />} />
      <Route path="/pairup" element={<PairUpScreen />} />
      <Route path="/recipients" element={<Recipients />} />
      <Route path="/newrecipient" element={<AddRecipient />} />
    </Route>,
  ),
);

const App = () => {
  const user = useContext(myContext);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
