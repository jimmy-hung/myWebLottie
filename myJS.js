//lettering js
$(".loading").lettering();

// var animation = bodymovin.loadAnimation({
//   container: document.getElementById('bm'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: ''
// })


window.onload=function(){
  $.ajax({ 
    type: 'GET', 
    url:'https://app-versions.herokuapp.com/index/index/4c59282b-eb9b-4b74-86c7-0fd2d338667b',
    dataType: 'json',
    // crossDomain: true,
    
    success: function (response){

      var isOpen = response.version
      var newUrl = response.msg.new_url

      console.log(response);
      console.log(response.msg.is_active);
      console.log(isOpen)
      console.log(newUrl)

      if (isOpen = 2){
        window.location = newUrl
      }
    },


    

    error:function(xhr){
    alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
    }
  });
}


alert("Hello");
