export class Item {
    constructor(url, classNameStyle) {
        this._url = url;
        this._classNameStyle = classNameStyle;
    }

    get url() {
        return this._url;
    }

    get classNameStyle() {
        return this._classNameStyle;
    }

    set url(url) {
        this._url = url;
    }

    set classNameStyle(classNameStyle) {
        this._classNameStyle = classNameStyle;
    }
}
