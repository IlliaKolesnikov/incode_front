// @material-ui/icons
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import SignIn from "views/SignIn/SignIn.jsx";
import SignUp from "views/SignUp/SignUp.jsx";

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
    
  { redirect: true, path: "/", to: "/signin", navbarName: "Redirect" }
];

export default authRoutes;