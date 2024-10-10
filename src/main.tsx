// @ts-nocheck
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.tsx'
import Root, { loader as rootLoader, action as rootAction } from './routes/root.tsx';
import './index1.css'
import ErrorPage from './error-page.tsx';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact.tsx';
import EditContact, { action as editAction }from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from './routes/index.tsx';
import CCHS from './routes/cchs.js';
import RootNav from './routes/rootnav.tsx';
import Home from './routes/home.js';
import Mirror from './routes/mirror.js';
import League from './routes/league.js';
import Digi from './routes/digi.js';

// const router1 = createHashRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           { index: true, element: <Index /> },
//           {
//             path: "/contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction,
//           },
//           {
//             path: "/contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: contactLoader,
//             action: editAction,
//           },
//           {
//             path: "/contacts/:contactId/destroy",
//             action: destroyAction,
//             errorElement: <div>Oops! There was an error.</div>,
//           },
//         ]
//     }
//     ]
//   },

// ]);

const router = createHashRouter([
  {
    path: "/",
    element: <RootNav />,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/cchs",
            element: <CCHS />,
          },
          {
            path: "/mirror",
            element: <Mirror />,
          },
          {
            path: "/league",
            element: <League />,
          },
          {
            path: "/digi",
            element: <Digi />,
          },
        ]
    }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
