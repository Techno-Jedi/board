let file = document.createElement("input");
file.type = "file";
file.name = "photo";
let button = document.createElement("button");


function upload(){
    let data = new FormData();
    data.append("image", document.querySelector("#photo").files[0])
    fetch("upload.php", {
        method: "POST",
        body: data
    })
}