// @ts-nocheck
import { Link, Outlet, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
// import { getContacts, createContact } from "../contacts";
// import { useEffect } from "react";

export default function RootNav() {
   const navigation = useNavigation();
   const links = [['Home', '/'],['Mirror','/mirror'],['CCHS', '/cchs'],['Digi','/digi'],['League','/league'],['About','/about']]
   return (
      <>
         <div id="sidebar">
            {/* @here */}
            <h2><i>Portfolio</i></h2>
            <h1>Matthew Hall</h1>
            <nav className="nav">
               <ul>
                  {links.map((link, index) => (
                     <li key={index}>
                        <NavLink
                           to={link[1]}
                           className={({ isActive, isPending }) =>
                              isActive
                                 ? "active"
                                 : isPending
                                    ? "pending"
                                    : ""
                           }
                        >
                           <Link to={link[1]}>
                              {link[0]}
                           </Link>
                           
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
         {/* End Nav - Start */}
         <div className="outlet">
            <Outlet />
         </div>
      </>
   );
}