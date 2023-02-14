import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import './App.css'
import ScoreBoard from "./pages/ScoreBoard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import GamePage from "./pages/GamePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GamePage/>,
      errorElement: <ErrorPage />,
    },
    {
      path:"/login",
      element: <Login/>,
      errorElement: <ErrorPage />,
    },
    {
      path:"/register",
      element: <Register/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/scoreboard",
      element: <ScoreBoard/>,
      errorElement: <ErrorPage />,
    }
  ]);
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
