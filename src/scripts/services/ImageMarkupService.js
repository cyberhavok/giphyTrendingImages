// ======================================================================
//  Element Utilities
// ======================================================================
export function joinImageHtml(items) {
    let joinedHtml = "";
    Object.keys(items).forEach(key => {
        joinedHtml += items[key];
    });
    return joinedHtml;
}
