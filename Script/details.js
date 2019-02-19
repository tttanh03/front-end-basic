$(document).ready(function() {


    var url = window.location.href;
    var arrString = url.split("?");

    var parametersString = arrString[1];

    console.log(parametersString);

    var paramsObj = getParamsObjFromString(parametersString);

   
    
var urlString = "https://www.jasonbase.com/things/3djW.json"


$.ajax({
    url: urlString,
    type: "GET",
   
}).done(function(objResponse) {
    
    var arrayPost = objResponse.arrayPost;

    for(var i=0; i<arrayPost.length; i++) {
        var post = arrayPost[i];

        if (post.id.toString() == paramsObj.id) {

            var htmlString = `<h2>${post.postName}</h2>
            <div class="author">
                <img src="${post.authorPicture}" alt="Author">
                <span class="name">	${post.postAuthor}</span>
                <span class="date"> - ${post.postTime}</span>
            </div>
            <img class="top-pic" src="${post.postImg}">`
            $("#getfromjson").html(htmlString);
            
            var titleArticle = `${post.postName}`
            $("title").html(titleArticle);

            var topbgPic= `<div class="topbg" style= "background-image: url('${post.topicImg}')">
            <span>${post.topicName}</span>
        </div>`
        $(".topbgdiv").html(topbgPic);
            break;
        }
    }})


    


    function getParamsObjFromString(paramsString) {
        var arrStr = paramsString.split("&");

        var obj = {};

        for(var i=0; i<arrStr.length; i++) {
            var str = arrStr[i];
           
            var arr = str.split("=");

            obj[arr[0]] = arr[1];
        }

        return obj;
    }

})
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}