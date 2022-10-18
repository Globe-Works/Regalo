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
import GiftIdeas from '../routes/GiftIdeas';
import Selection from '../routes/Selection';
import Header from '../routes/Header';
import ErrorPage from './error-page';
import NewGift from '../routes/NewGift';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Selection />} />
      <Route path="/giftideas" element={<GiftIdeas />} />
      <Route path="/newgift" element={<NewGift />} />
    </Route>
  )
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SelectionsScreen />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "giftideas",
//     element: <GiftIdeas />,
//   },
// ]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}


export default App
