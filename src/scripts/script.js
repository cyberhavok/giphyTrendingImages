import * as Services from "./services/service.js";
import { Item } from "./entities/Item.js";
import * as TemplateImages from "./templates/image.js";

// ======================================================================
//  Element Data
// ======================================================================

function defineLists(gifInfo) {
    let listItems = [];
    gifInfo.data.forEach(gif => {
        let item = new Item(gif.images.fixed_height_downsampled.url, "card");
        listItems.push(TemplateImages.createImageNode(item));
    });
    console.table(listItems);
    return listItems;
}

// ======================================================================
//  Element Utilities
// ======================================================================
function joinHtml(items) {
    let joinedHtml = "";
    Object.keys(items).forEach(key => {
        joinedHtml += items[key];
    });
    return joinedHtml;
}

// ======================================================================
//  Main
// ======================================================================
Services.getTrendingImages().then(gifsInfo => {
    const items = defineLists(gifsInfo);
    const rawHtml = joinHtml(items);
    const content = document.getElementById("content");
    content.insertAdjacentHTML("beforeend", rawHtml);
}).catch(console.error);
