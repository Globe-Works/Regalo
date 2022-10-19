import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet
} from "react-router-dom";
// import {
//   GiftIdeas,
//   SelectionsScreen
// } from '../routes';
import GiftsPage from './routes/GiftsPage';
import MainPage from './routes/MainPage';
import Header from './routes/Header';
import ErrorPage from './error-page';
import NewGift from './routes/NewGift';
import PairUpScreen from './routes/PairUpScreen';
import RecipientsPage from './routes/RecipientsPage';
import AddRecipient from './routes/AddRecipient';


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/giftspage" element={<GiftsPage />} />
      <Route path="/newgift" element={<NewGift />} />
      <Route path="/pairup" element={<PairUpScreen />} />
      <Route path="/recipients" element={<RecipientsPage />} />
      <Route path="/newrecipient" element={<AddRecipient />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}


export default App
