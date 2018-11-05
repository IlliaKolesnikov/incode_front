// @material-ui/icons
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import SignIn from "containers/signin.js";
import SignUp from "containers/signup.js";
import Verification from "containers/email.js";
import pathToRegexp from 'path-to-regexp'

const authRoutes = [
  {
    path: "/signin",
    sidebarName: "Sign in",
    navbarName: "Sign in",
    icon: Person,
    component: SignIn
  },

  {
    path: "/signup",
    sidebarName: "Sign up",
    navbarName: "Sign up",
    icon: Person,
    component: SignUp
  },
  {
    path: pathToRegexp("/verify/:data/:token"),
    sidebarName: "Verification",
    navbarName: "Verification",
    invisible: true,
    icon: Person,
    component: Verification
  },
    
  { redirect: true, path: "/", to: "/signin", navbarName: "Redirect" }
];

export default authRoutes;