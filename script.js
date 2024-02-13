document.getElementById('no-button').addEventListener('click', function() {
    const button = document.getElementById('no-button');
    const randomTop = Math.random() * (window.innerHeight - button.clientHeight);
    const randomLeft = Math.random() * (window.innerWidth - button.clientWidth);
    button.style.position = 'absolute';
    button.style.top = `${randomTop}px`;
    button.style.left = `${randomLeft}px`;

    
});
var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
    
    $('.heart').each(function(){
      var top = $(this).css("top").replace(/[^-\d\.]/g, '');
      var width = $(this).css("width").replace(/[^-\d\.]/g, '');
      if(top <= -100 || width >= 150){
        $(this).detach();
      }
    });
  },500);

  // Initialize Swiper
// Initialize Swiper with autoplay
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 1000, // 5 seconds delay between slides
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var yesBtn = document.getElementById("yes-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
yesBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
