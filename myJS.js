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
    url:'http://52.175.12.176/index/index/a1f6c42d-ab0e-4903-b6e6-72058e899e23',
    dataType: 'json',
    //crossDomain: true,
    error:function(xhr){
    alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
    }
  });
}


alert("Hello");
