// @ts-nocheck
import { Link, Outlet, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
// import { getContacts, createContact } from "../contacts";
// import { useEffect } from "react";

export default function RootNav() {
   const navigation = useNavigation();
   return (
     <>
       <div id="sidebar">
         <h1>Root Nav</h1>
         <h2>Pages</h2>
         <nav>
         <NavLink
            to={`/cchs`}
            className={({ isActive, isPending }) =>
               isActive
               ? "active"
               : isPending
               ? "pending"
               : ""
            }
         >
            <Link to={`/cchs`}>
               CCHS
            </Link>
         </NavLink>
         <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
               isActive
               ? "active"
               : isPending
               ? "pending"
               : ""
            }
         >
            <Link to={`/`}>
               About
            </Link>
         </NavLink>
         </nav>
         
       </div>
       <Outlet/>
     </>
   );
 }