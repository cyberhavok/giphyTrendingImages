function createImageNode(data) {
    const markup = `<img src="${data.url}" class="${data.classNameStyle}">`;
    return markup;
}

export { createImageNode };