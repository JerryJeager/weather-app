import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import DayForecast from './DayForecast';
import Search from './Search'
import NotFound from './NotFound';

import Home from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home/>} />
      <Route path='DayForeCast' element={<DayForecast />} />
      <Route path='Search' element={<Search />} />
      <Route path='*' errorElement={ <NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
