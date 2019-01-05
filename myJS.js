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
      console.log(response);
      console.log(response.msg.is_active)
    },


    

    error:function(xhr){
    alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
    }
  });
}


alert("Hello");
