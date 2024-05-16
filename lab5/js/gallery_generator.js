$(document).ready(function() {
    var xmlHttp = new XMLHttpRequest();
    var htmlCode = "";
    var response;
    var send = "js/hook.php"; // 确保这个PHP脚本的路径正确，并且它能正确读取并返回文件名列表
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) { // 添加状态200检查，确保请求成功
            response = xmlHttp.responseText.split("~");
            for (var i = 0; i < response.length; i++) {
                if (response[i].trim() !== "") { // 确保不处理空字符串
                    htmlCode += '<a href="assets/images/gallery_images/' + response[i].trim() + '">';
                    htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_images/' + response[i].trim() + '"/>';
                    htmlCode += '</a>';
                }
            }
            document.getElementById('gallery_coke').innerHTML = htmlCode;
            document.getElementById('gallery_sprite').innerHTML = htmlCode;
            document.getElementById('gallery_pepper').innerHTML = htmlCode;
        }
    }
});
