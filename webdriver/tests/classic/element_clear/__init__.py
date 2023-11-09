def element_clear(session, element):
    return session.transport.send(
        "POST", "/session/{session_id}/element/{element_id}/clear".format(
            session_id=session.session_id,
            element_id=element.id))


BUTTON_TYPES = [
    "button",
    "reset",
    "submit",
]

INPUT_TYPES = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
];
