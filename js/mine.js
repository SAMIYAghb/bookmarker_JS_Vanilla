var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var submit = document.getElementById("submit");

var list = document.getElementById("list");


// console.log(siteName, siteUrl, submit);


//add a bookMarker
// var bookmarkersList = [];
var bookmarkersListAsString = localStorage.getItem('productsData');
// console.log(bookmarkersListAsString);



function creatBookmarker(){
    var bookmarker ={
        name : siteName.value,
        url : siteUrl.value,
    }
    // console.log(bookmarker);

    bookmarkersList.push(bookmarker);
    // console.log(bookmarkersList);

    var x = JSON.stringify(bookmarkersList);// 1-convertir le array to string on utilisant JSON.stringify
    // console.log(x);

    localStorage.setItem('productsData', x);//2- on met le x obtenu dans le localstorage eton l'appelle productsData

    //3- a cet étape on doit récupérer le productsData du local storage, mais ce dernier est on foreme de string donc avant de le faire on doit le convertir a un array
    //on remplace var bookmarkersList = []; dans le globale scope par var bookmarkersListAsString = localStorage.getItem('productsData'); ligne13

    //4-
    var bookmarkersList = JSON.parse(bookmarkersListAsString);
    console.log(bookmarkersList );

    
    clearForm();
    showBookmarker();
}

//clear input
function clearForm(){
    siteName.value = '';
    siteUrl.value = '';
}


// show the bookMarker
function showBookmarker(){
    var txt = '';
    for (let i = 0; i < bookmarkersList.length; i++) {
        txt += `
        <div class="website px-5 py-3 mb-4" id="${bookmarkersList[i].name}">
            <h3 class='d-inline-block '>${bookmarkersList[i].name}</h3>
            <div class="mt-3">
                <a class="btn btn-primary py-1 px-3 rounded-pill" href="${bookmarkersList[i].url}" target="_blank">visit</a>
                <button onclick="deleteBookmarker(${i});" class="btn btn-danger btndelete  py-1 px-3 rounded-pill">Delete</button>
            </div>
        </div>
        `
    }
    console.log(txt);
    list.innerHTML = txt;
}


//deleteBookmarker
function deleteBookmarker(i){
    bookmarkersList.splice(i, 1);
    showBookmarker();
    console.log(bookmarkersList);
}

