import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contacts";
export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}
export default function EditContact() {
    const { contact } = useLoaderData();
    const navigate = useNavigate();
    return (_jsxs(Form, { method: "post", id: "contact-form", children: [_jsxs("p", { children: [_jsx("span", { children: "Name" }), _jsx("input", { placeholder: "First", "aria-label": "First name", type: "text", name: "first", defaultValue: contact?.first }), _jsx("input", { placeholder: "Last", "aria-label": "Last name", type: "text", name: "last", defaultValue: contact?.last })] }), _jsxs("label", { children: [_jsx("span", { children: "Twitter" }), _jsx("input", { type: "text", name: "twitter", placeholder: "@jack", defaultValue: contact?.twitter })] }), _jsxs("label", { children: [_jsx("span", { children: "Avatar URL" }), _jsx("input", { placeholder: "https://example.com/avatar.jpg", "aria-label": "Avatar URL", type: "text", name: "avatar", defaultValue: contact?.avatar })] }), _jsxs("label", { children: [_jsx("span", { children: "Notes" }), _jsx("textarea", { name: "notes", defaultValue: contact?.notes, rows: 6 })] }), _jsxs("p", { children: [_jsx("button", { type: "submit", children: "Save" }), _jsx("button", { type: "button", onClick: () => {
                            navigate(-1);
                        }, children: "Cancel" })] })] }));
}
