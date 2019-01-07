//lettering js
// $(".loading").lettering();

function getAnimation(){
    // animation data.json URL
    let commentUulJson = "https://jimmy-hung.github.io/myWebLottie/another.json"

    // amimation action
    var animation = bodymovin.loadAnimation({

      container: document.getElementById('bm'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: commentUulJson,
      
      });
};

function toChangedElement(){

    document.getElementById("tomorrow").innerHTML = response.version

};

window.onload=function(){
  $.ajax({ 
    type: 'GET', 
    url:'https://app-versions.herokuapp.com/index/index/4c59282b-eb9b-4b74-86c7-0fd2d338667b',
    dataType: 'json',
    // crossDomain: true,

    

    success: function (response){

      var isOpen = response.version

      if (isOpen = 1){
        getAnimation

        toChangedElement
      }

      if (isOpen = 2){

        toChangedElementg
        var newUrl = response.msg.new_url

        getAnimation
        console.log(response);
        console.log(response.msg.is_active);
        console.log(isOpen)
        console.log(newUrl)
        console.log(commentUulJson);
        
        window.location = newUrl
      }
    },

    error:function(xhr){
    alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
    }
  });
}

alert("I'm the king of the world");
