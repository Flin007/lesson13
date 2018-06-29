'use strict';

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const el = document.createElement(node.name);

    if (typeof node.props === 'object' && node.props !== null) {
        Object.keys(node.props).forEach(i => el.setAttribute(i, node.props[i]));
    }

    if (node.childs instanceof Array) {
        node.childs.forEach(child => {
            const childEl = createElement(child);
            el.appendChild(childEl);
        });
    }

    return el;
}