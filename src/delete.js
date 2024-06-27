
function deleteContent(){
    const div = document.querySelector("#content");
    while(div.firstElementChild){
        div.lastElementChild.remove();
    }

}

export default deleteContent