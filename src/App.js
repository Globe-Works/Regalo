import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import {
//   GiftIdeas,
//   SelectionsScreen
// } from '../routes';
import GiftIdeas from '../routes/GiftIdeas';
import SelectionsScreen from '../routes/SelectionsScreen';
import ErrorPage from './error-page';
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SelectionsScreen />} errorElement={<ErrorPage />}>
      <Route path="giftideas" element={<GiftIdeas />} />
    </Route>
  )
);


const App = () => {
  return <RouterProvider router={router} />;
}


export default App
