const works = [
    { author: "Micheal Jackson", lifetime: "1022-1055", tips: "Human", photos: ["human1.jpg", "human2.jpg", "human3.jpg"] },
    { author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"] },
    { author: "John Herry UY", lifetime: "1894-1928", tips: "Abstract", photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"] },
    { author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"] }
];

let main = function () {
    let container = document.querySelector('.flex-container');
    for (const item of works) {
        container.appendChild(createItem(item.author, item.lifetime, item.tips, item.photos));
    }
}
main();

function createItem(author, lifetime, tips, photos) {
    let item = document.createElement("div");
    item.setAttribute("class", "item");

    item.appendChild(createGenre(tips));
    item.appendChild(createAuthorBox(author, lifetime));
    item.appendChild(createPhotoBox(photos));
    item.appendChild(newElement("button", "", "Visit"));

    return item;
}

function newElement(tag, classAttribute, content) {
    let newElement = document.createElement(tag);
    newElement.setAttribute("class", classAttribute);
    newElement.appendChild(document.createTextNode(content));
    return newElement;
}

function createGenre(tips) {
    return newElement("h4", "", "Genre : " + tips);
}

function createAuthor(author) {
    let authorElement = newElement("h3", "", author);
    authorElement.style.display = "inline-block";
    return authorElement;
}

function createLifetime(lifetime) {
    let lifetimeElement = newElement("h5", "", "lifetime:" + lifetime);
    lifetimeElement.style.display = "inline-block";
    lifetimeElement.style.margin = "auto";
    lifetimeElement.style.marginLeft = "1em";
    return lifetimeElement;
}

function createAuthorBox(author, lifetime) {
    let box = newElement("div", "inner-box", "");
    box.appendChild(createAuthor(author));
    box.appendChild(createLifetime(lifetime));
    return box;
}

function createPhoto(photo) {
    let img = newElement("img", "photo", "");
    img.setAttribute("src", photo);
    return img;
}

function createPhotoBox(photos) {
    let box = newElement("div", "inner-box", "");
    box.appendChild(newElement("h3", "", "Popular Photos"))
    for (const photo of photos) {
        box.appendChild(createPhoto(photo));
    }
    return box;
}
