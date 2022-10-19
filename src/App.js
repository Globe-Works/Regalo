import React, { useContext } from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { myContext } from './Context';
import LoginPage from './Pages/LoginPage';

import GiftsPage from './routes/GiftsPage';
import MainPage from './routes/MainPage';
import Header from './routes/Header';
import ErrorPage from './error-page';
import NewGift from './routes/NewGift';
import PairUpScreen from './routes/PairUpScreen';
import RecipientsPage from './routes/RecipientsPage';
import AddRecipient from './routes/AddRecipient';

const App = () => {
  const user = useContext(myContext);
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/giftspage" element={<GiftsPage />} />
        <Route path="/newgift" element={<NewGift />} />
        <Route path="/pairup" element={<PairUpScreen />} />
        <Route path="/recipients" element={<RecipientsPage />} />
        <Route path="/newrecipient" element={<AddRecipient />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
