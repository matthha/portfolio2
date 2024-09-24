import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import App from './App.tsx'
import Root, { loader as rootLoader, action as rootAction } from './routes/root.tsx';
import './index.css';
import ErrorPage from './error-page.tsx';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact.tsx';
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from './routes/index.tsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Root, {}),
        errorElement: _jsx(ErrorPage, {}),
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: _jsx(ErrorPage, {}),
                children: [
                    { index: true, element: _jsx(Index, {}) },
                    {
                        path: "contacts/:contactId",
                        element: _jsx(Contact, {}),
                        loader: contactLoader,
                        action: contactAction,
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: _jsx(EditContact, {}),
                        loader: contactLoader,
                        action: editAction,
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                        errorElement: _jsx("div", { children: "Oops! There was an error." }),
                    },
                ]
            }
        ]
    },
]);
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
