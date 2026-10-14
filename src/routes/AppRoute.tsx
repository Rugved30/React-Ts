import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../components/user/UserLayout";
import Home from "../pages/Home";
import Fashion from "../pages/category/Fashion";
import Mobiles from "../pages/category/Mobiles";
import Electronics from "../pages/category/Electronics";
import HomeEquipments from "../pages/category/HomeEquipments";
import Beauty from "../pages/category/Beauty";
import Appliances from "../pages/category/Appliances";
import Sports from "../pages/category/Sports";
import TwoWheelers from "../pages/category/TwoWheelers";
import FoodHealth from "../pages/category/FoodHealth";
import ToysBaby from "../pages/category/ToysBaby";
import Books from "../pages/category/Books";
import AutoAccessories from "../pages/category/AutoAccessories";
import Furniture from "../pages/category/Furniture";
import ProductList from "../components/product/ProductList";
import Login from "../pages/user/Login";
import SignUp from "../pages/user/SignUp";

const router = createBrowserRouter([
    {
        path:"",
        element:<UserLayout/>,
        children:[
            {index:true,element:<Home/>},
            //categories
            {path:'category/fashion',element:<Fashion/>},
            {path:'category/mobiles',element:<Mobiles/>},
            {path:'category/electronics',element:<Electronics/>},
            {path:'category/home-equipments',element:<HomeEquipments/>},
            {path:'category/beauty',element:<Beauty/>},
            {path:'category/appliances',element:<Appliances/>},
            {path:'category/sports',element:<Sports/>},
            {path:'category/wheelers',element:<TwoWheelers/>},
            {path:'category/food',element:<FoodHealth/>},
            {path:'category/toys',element:<ToysBaby/>},
            {path:'category/books',element:<Books/>},
            {path:'category/auto',element:<AutoAccessories/>},
            {path:'category/furniture',element:<Furniture/>},
            {path:'category/for_you',element:<ProductList/>},
            
        ],
        
    },
    //login and signup
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"signup",
        element:<SignUp />
    }

])

export default router;