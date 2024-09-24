import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, useFetcher, useLoaderData } from "react-router-dom";
import { getContact, updateContact } from "../contacts";
export async function loader({ params }) {
    const contact = await getContact(params.contactId);
    return { contact };
}
export async function action({ request, params }) {
    const formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true",
    });
}
export default function Contact() {
    const { contact } = useLoaderData();
    return (_jsxs("div", { id: "contact", children: [_jsx("div", { children: _jsx("img", { src: contact.avatar ||
                        `https://robohash.org/${contact.id}.png?size=200x200` }, contact.avatar) }), _jsxs("div", { children: [_jsxs("h1", { children: [contact.first || contact.last ? (_jsxs(_Fragment, { children: [contact.first, " ", contact.last] })) : (_jsx("i", { children: "No Name" })), " ", _jsx(Favorite, { contact: contact })] }), contact.twitter && (_jsx("p", { children: _jsx("a", { target: "_blank", href: `https://twitter.com/${contact.twitter}`, children: contact.twitter }) })), contact.notes && _jsx("p", { children: contact.notes }), _jsxs("div", { children: [_jsx(Form, { action: "edit", children: _jsx("button", { type: "submit", children: "Edit" }) }), _jsx(Form, { method: "post", action: "destroy", onSubmit: (event) => {
                                    if (!confirm("Please confirm you want to delete this record.")) {
                                        event.preventDefault();
                                    }
                                }, children: _jsx("button", { type: "submit", children: "Delete" }) })] })] })] }));
}
function Favorite({ contact }) {
    const fetcher = useFetcher();
    const favorite = fetcher.formData
        ? fetcher.formData.get("favorite") === "true"
        : contact.favorite;
    return (_jsx(fetcher.Form, { method: "post", children: _jsx("button", { name: "favorite", value: favorite ? "false" : "true", "aria-label": favorite
                ? "Remove from favorites"
                : "Add to favorites", children: favorite ? "★" : "☆" }) }));
}
