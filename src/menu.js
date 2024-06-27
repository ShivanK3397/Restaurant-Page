
function createMenu(){
    const div = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent="menu";

    const item1 = document.createElement("div");
    const item1Header = document.createElement("h2");
    item1Header.textContent="Honey Tea"
    const item1Text = document.createElement("p");
    item1Text.textContent="A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
    item1.appendChild(item1Header);
    item1.appendChild(item1Text);

    const item2 = document.createElement("div");
    const item2Header = document.createElement("h2");
    item2Header.textContent="Toast and Jam";
    const item2text = document.createElement("p");
    item2Text.textContent="A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.";
    item2.appendChild(item2Header);
    item2.appendChild(item2Text);

    const item3 = document.createElement("div");
    const item3Header = document.createElement("h2");
    item3Header.textContent="Pancakes";
    const item3text = document.createElement("p");
    item3text.textContent="A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";
    item3.appendChild(item3Header);
    item3.appendChild(item3text);

    div.appendChild(h1);
    div.appendChild(item1);
    div.appendChild(item2);
    div.appendChild(item3);
}

export default createMenu;