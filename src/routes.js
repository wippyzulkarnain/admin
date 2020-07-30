/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import DashboardVP from "views/DashboardVP/DashboardVP.js";

import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import ManageTicket from "views/ManageTickets/ManageTickets.js";

import TableListNonEdit from "views/TableListNonEdit/TableListNonEdit.js";
import Download from "views/Download/Download.js";

import MyTickets from "views/MyTickets/MyTickets.js";

import Typography from "views/Typography/Typography.js";
import TicketCard from "views/TicketCard/TicketCard.js";
import TicketCardNonEdit from "views/TicketCardNonEdit/TicketCardNonEdit.js";

import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
let role = localStorage["userRole"]
if (role == "staff"){
var dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
 
  {
    path: "/mytickets",
    name: "My Tickets",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: MyTickets,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // },
  {
    path: "/card",
    name: "Card",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: TicketCard,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/cardnonedit",
    name: "CardNonEdit",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: TicketCardNonEdit,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/tablelistnonedit",
    name: "Table List",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: TableListNonEdit,
    layout: "/admin",
    invisible: true
  },
]}
else if (role == "manager") {
   dashboardRoutes = [{
        path: "/dashboard",
        name: "Dashboard",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin"
      },
      {
        path: "/tablelistnonedit",
        name: "Table List",
        rtlName: "پشتیبانی از راست به چپ",
        icon: Language,
        component: TableListNonEdit,
        layout: "/admin",
        invisible: true
      },
       {
         path: "/create-ticket",
         name: "Create Ticket",
         icon: Person,
         component: UserProfile,
         layout: "/admin"
       }, 
       {
         path: "/manage-ticket",
         name: "Manage Ticket",
         rtlName: "قائمة الجدول",
         icon: "content_paste",
         component: ManageTicket,
         layout: "/admin"
       },
       {
        path: "/Download",
        name: "Download Report",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: Download,
        layout: "/admin"
      },
       {
        path: "/tablelist",
        name: "Table List",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin",
        invisible : true
      },
       {
         path: "/card",
         name: "Card",
         rtlName: "پشتیبانی از راست به چپ",
         icon: Language,
         component: TicketCard,
         layout: "/admin",
         invisible: true
       },
       {
        path: "/cardnonedit",
        name: "CardNonEdit",
        rtlName: "پشتیبانی از راست به چپ",
        icon: Language,
        component: TicketCardNonEdit,
        layout: "/admin",
        invisible: true
      },
    ]
}
else {
  dashboardRoutes = [{
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: Dashboard,
      component: DashboardVP,
      layout: "/admin"
    },
    {
      path: "/create-ticket",
      name: "Create Ticket",
      icon: Person,
      component: UserProfile,
      layout: "/admin"
    }, 
    // {
    //   path: "/create-ticket",
    //   name: "CreateTicket",

    //   icon: Person,
    //   component: UserProfile,
    //   layout: "/admin"
    // },
    //  {
    //   path: "/table",
    //   name: "View Ticket",
    //   rtlName: "قائمة الجدول",
    //   icon: "content_paste",
    //   component: TableList,
    //   layout: "/admin"
    // },
    {
      path: "/card",
      name: "Card",
      rtlName: "پشتیبانی از راست به چپ",
      icon: Language,
      component: TicketCard,
      layout: "/admin",
      invisible: true
    },
    {
      path: "/tablelist",
      name: "Table List",
      rtlName: "قائمة الجدول",
      icon: "content_paste",
      component: TableList,
      layout: "/admin",
      invisible : true
    },
    {
      path: "/cardnonedit",
      name: "CardNonEdit",
      rtlName: "پشتیبانی از راست به چپ",
      icon: Language,
      component: TicketCardNonEdit,
      layout: "/admin",
      invisible: true
    },
    {
      path: "/tablelistnonedit",
      name: "Table List",
      rtlName: "پشتیبانی از راست به چپ",
      icon: Language,
      component: TableListNonEdit,
      layout: "/admin",
      invisible: true
    },
  ]
}

export default dashboardRoutes;
