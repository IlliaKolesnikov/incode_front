// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Receipt from "@material-ui/icons/Receipt";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import NewWorkout from "views/NewWork/NewWork.jsx";
import EditWorkout from "views/EditWorkout/EditWorkout.jsx";
import EditExercise from "views/EditExercise/EditExercise.jsx";
import NewExercise from "views/CreateExercise/CreateExercise.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/newworkout",
    sidebarName: "New Workout",
    navbarName: "New Workout",
    icon: Receipt,
    component: NewWorkout
  },
  {
    path: "/editworkout",
    sidebarName: "Edit Workout",
    navbarName: "Edit Workout",
    icon: Receipt,
    component: EditWorkout
  },
  {
    path: "/editexercise",
    sidebarName: "Edit Exercise",
    navbarName: "Edit Exercise",
    icon: Receipt,
    component: EditExercise
  },
  {
    path: "/create",
    sidebarName: "New Exercise",
    navbarName: "New Exercise",
    icon: Receipt,
    component: NewExercise
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
