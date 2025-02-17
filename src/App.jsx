import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import LocationPage from "./pages/LocationPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

const AppRouters = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/menu", element: <MenuPage /> },
  { path: "/location", element: <LocationPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
]);

function App() {
  return <RouterProvider router={AppRouters} />;
}

export default App;
