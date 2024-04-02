import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import DataProvider from "./Store/Dataprovider";

import Home from "./Components/Home";
import Shop from "./Components/Pages/Navbar-contents/Shop";
import Promotions from "./Components/Pages/Navbar-contents/Promotions";
import Profile from "./Components/Pages/Navbar-contents/Profile";
import Contact from "./Components/Pages/Navbar-contents/Contact";
import Cart from "./Components/Pages/Navbar-contents/Cart/Cart";
import Blog from "./Components/Pages/Navbar-contents/Blog";
import Mens from "./Components/Pages/Categories/Mens";
import Womens from "./Components/Pages/Categories/Womens";
import Accessories from "./Components/Pages/Categories/Accessories";
import Footwear from "./Components/Pages/Categories/Footwear";
import Electronics from "./Components/Pages/Categories/Electronics";
import MyOrder from "./Components/Pages/Navbar-contents/MyOrder";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useSelector } from "react-redux";
import CartCheckout from "./Components/Pages/Navbar-contents/Cart/CartCheckout";
import OrderSuccess from "./Components/Pages/Navbar-contents/Cart/OrderSuccess";

function App() {
  const login = useSelector((item) => item.loginuser.loginData);
  const token = login[0] && login[0].accessToken;
  const id = login[0] && login[0]._id;

  const router = createBrowserRouter([
    {
      path: "/",
      element: token ? <Home value={id} /> : <Login />,
    },
    {
      path: "register",
      element: <Signup />,
    },
    {
      path: "shop",
      element: token ? <Shop /> : <Login />,
    },
    {
      path: "promotions",
      element: token ? <Promotions /> : <Login />,
    },
    {
      path: "profile",
      element: token ? <Profile /> : <Login />,
    },
    {
      path: "contact",
      element: token ? <Contact /> : <Login />,
    },
    {
      path: "cart",
      element: token ? <Cart /> : <Login />,
    },
    {
      path: "blog",
      element: token ? <Blog /> : <Login />,
    },
    {
      path: "mens",
      element: token ? <Mens /> : <Login />,
    },
    {
      path: "womens",
      element: token ? <Womens /> : <Login />,
    },
    {
      path: "accessories",
      element: token ? <Accessories /> : <Login />,
    },
    {
      path: "footwear",
      element: token ? <Footwear /> : <Login />,
    },
    {
      path: "electronics",
      element: token ? <Electronics /> : <Login />,
    },
    {
      path: "my_order",
      element: token ? <MyOrder /> : <Login />,
    },
    {
      path: "checkout",
      element: token ? <CartCheckout /> : <Login />,
    },
    {
      path: "order-success",
      element: <OrderSuccess />,
    },
  ]);
  return (
    <div className="App">
        <DataProvider>
          <RouterProvider router={router}></RouterProvider>
        </DataProvider>
     
    </div>
  );
}

export default App;
