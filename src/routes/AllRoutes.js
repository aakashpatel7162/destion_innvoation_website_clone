import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { paths } from "./paths";
import DashBoard from "../component/DashBoard";
import AboutUs from "../component/AboutUs";
import ContactUs from '../component/ContactUs'
import Profile from "../component/Profile";
import Settings from "../component/Settings";
import ErrorPage from "../errors/ErrorPage";
import Layout from "../outlet/Layout";

const allRoutes = createRoutesFromElements(
  <>
      <Route element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="/" element={<DashBoard />} />
          <Route path={paths.aboutUs} element={<AboutUs />} />
          <Route path={paths.profile} element={<Profile />} />
          <Route path={paths.settings} element={<Settings />} />
          <Route path={paths.contactUs} element={<ContactUs />} />

      </Route>
  </>
);
const router = createBrowserRouter(allRoutes); 

export default router; 
