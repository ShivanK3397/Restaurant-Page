import "./styles.css";

function createContact(){
    const header = document.createElement("h1");
    header.textContent="Contact Us";

    const contact1 = document.createElement("div");
    const contact1Name =document.createElement("h3");
    contact1Name.textContent="Mama Bear";

    const contact1Info = document.createElement("div");
    const contact1Role = document.createElement("p");
    contact1Role.textContent="Chef"
    const contact1Number = document.createElement("p");
    contact1Number.textContent="555-555-5554";
    const contact1Email = document.createElement("p");
    contact1Email.textContent="totallyRealEmail@notFake.com";
    contact1Info.appendChild(contact1Role);
    contact1Info.appendChild(contact1Number);
    contact1Info.appendChild(contact1Email);
    contact1.appendChild(contact1Name);
    contact1.appendChild(contact1Info);

    const contact2 = document.createElement("div");
    const contact2Name =document.createElement("h3");
    contact1Name.textContent="Papa Bear";

    const contact2Info = document.createElement("div");
    const contact2Role = document.createElement("h3");
    contact2Role.textContent="Manager"
    const contact2Number = document.createElement("p");
    contact2Number.textContent="555-555-5554";
    const contact2Email = document.createElement("p");
    contact2Email.textContent="totallyRealEmail@notFake.com";
    contact2Info.appendChild(contact2Role);
    contact2Info.appendChild(contact2Number);
    contact2Info.appendChild(contact2Email);
    contact2.appendChild(contact2Name);
    contact2.appendChild(contact2Info);

    const div = document.querySelector("#content");

    div.appendChild(header);
    div.appendChild(contact1);
    div.appendChild(contact2)

}

export default createContact;