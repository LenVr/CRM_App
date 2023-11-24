export const div = function (parent, attributes) {
    return createElement('div', parent, attributes);
}

export const img = function (parent, attributes) {
    return createElement('img', parent, attributes);
}

export const p = function (parent, attributes) {
    return createElement('p', parent, attributes);
}

export const input = function (parent, attributes) {
    return createElement('input', parent, attributes);
}

export const h2 = function (parent, attributes) {
    return createElement('h2', parent, attributes);
}

export const h1 = function (parent, attributes) {
    return createElement('h1', parent, attributes);
}

export const span = function (parent, attributes) {
    return createElement('span', parent, attributes);
}

export const select = function (parent, attributes) {
    return createElement('select', parent, attributes);
}

export const option = function (parent, attributes) {
    return createElement('option', parent, attributes);
}

const createElement = function (type, parent, attributes) {
    let element = document.createElement(type);
    parent.appendChild(element);

    if (attributes != null)
        for (const attribute in attributes) {
            element[attribute] = attributes[attribute]
        }
    return element;
}