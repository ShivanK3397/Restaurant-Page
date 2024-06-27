
function deleteContent(){
    const div = document.querySelector("#content");
    const body = document.querySelector("body");
    div.remove();
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id","content");
    body.append(newDiv);

}

export default deleteContent