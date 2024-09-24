import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, Outlet, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
}
export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}
export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "sidebar", children: [_jsx("h1", { children: "React Router Contacts" }), _jsxs("div", { children: [_jsxs(Form, { id: "search-form", role: "search", children: [_jsx("input", { id: "q", "aria-label": "Search contacts", placeholder: "Search", type: "search", name: "q", defaultValue: q, onChange: (event) => {
                                            const isFirstSearch = q == null;
                                            submit(event.currentTarget.form, {
                                                replace: !isFirstSearch,
                                            });
                                        } }), _jsx("div", { id: "search-spinner", "aria-hidden": true, hidden: true }), _jsx("div", { className: "sr-only", "aria-live": "polite" })] }), _jsx(Form, { method: "post", children: _jsx("button", { type: "submit", children: "New" }) })] }), _jsx("nav", { children: contacts.length ? (_jsx("ul", { children: contacts.map((contact) => (_jsx("li", { children: _jsx(NavLink, { to: `contacts/${contact.id}`, className: ({ isActive, isPending }) => isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : "", children: _jsxs(Link, { to: `contacts/${contact.id}`, children: [contact.first || contact.last ? (_jsxs(_Fragment, { children: [contact.first, " ", contact.last] })) : (_jsx("i", { children: "No Name" })), " ", contact.favorite && _jsx("span", { children: "\u2605" })] }) }) }, contact.id))) })) : (_jsx("p", { children: _jsx("i", { children: "No contacts" }) })) })] }), _jsx("div", { id: "detail", className: navigation.state === "loading" ? "loading" : "", children: _jsx(Outlet, {}) })] }));
}
