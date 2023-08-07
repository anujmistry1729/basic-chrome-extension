const inputEl = document.getElementById("input_url");
const saveBtn = document.getElementById("save_btn");
const urlUnorderedList = document.getElementById("url_list");

let bookmarkLists = [];


const bookmarkedUrls = JSON.parse(localStorage.getItem("bookmarkUrl"))
if(bookmarkedUrls){
    console.log('hello')
    renderList(bookmarkedUrls);
}

saveBtn.addEventListener("click", function(){
    console.log("save button")

    
    if(inputEl.value){
        saveUrl(inputEl.value);
    }
})


function saveUrl(url){

    bookmarkLists.push(url);

    localStorage.setItem("bookmarkUrl", JSON.stringify(bookmarkLists));

    bookmarkLists = JSON.parse(localStorage.getItem("bookmarkUrl"));

    inputEl.value = "";

    renderList(bookmarkLists)
}

function renderList(urlList){

    let urls = "";


    for(let i=0; i < urlList.length; i++){
        urls += `<li> ${urlList[i]} </li>`;
    }

    urlUnorderedList.innerHTML = urls;
}