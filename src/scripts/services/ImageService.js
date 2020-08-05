import { Item } from "../entities/Item.js";
import * as TemplateImages from "../templates/image.js";
// ======================================================================
//  Element Data
// ======================================================================
export function getImageItemList(gifInfo) {
    let listItems = [];
    gifInfo.data.forEach(gif => {
        let item = new Item(gif.images.fixed_height_downsampled.url, "card");
        listItems.push(TemplateImages.createImageNode(item));
    });
    console.table(listItems);
    return listItems;
}
