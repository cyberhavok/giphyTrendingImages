import * as GiphyServices from "./services/FetchGiphyService.js";
import * as ImageService from "./services/ImageService.js";
import * as ImageMarkupService from "./services/ImageMarkupService.js";

const newImageListElement = gifsInfo => {
    const items = ImageService.getImageItemList(gifsInfo);
    const rawHtml = ImageMarkupService.joinImageHtml(items);
    const content = document.getElementById("content");
    content.insertAdjacentHTML("beforeend", rawHtml);
};
// ======================================================================
//  Main
// ======================================================================
GiphyServices.getTrendingImages().then(newImageListElement).catch(console.error);
