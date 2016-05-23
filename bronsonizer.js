// Called when the user clicks on the browser action.
function updateImages(){
  console.log(document)
  var imgs = document.querySelectorAll("img");
  for(i=0;i<imgs.length;i++){
    imgs[i].src = randomImg();
    console.log(imgs[i].src)
  }
}

function randomImg(){
  var imgs = [
      "//media.giphy.com/media/JDRPM0tcYhiMw/giphy.gif",
      "http://www.zonetroopers.com/uploads/6/6/1/7/6617342/781226_orig.png",
      "//cdn.meme.am/instances/500x/64841618.jpg",
      "//altjapan.typepad.com/my_weblog/files/bronson.jpg",
      "http://celebritynetworths.org/wp-content/uploads/profiles/Charles-Bronson-Net-Worth.jpeg",
      "http://www.anelnoath.com/deathwish2.jpg"
  ];
  var i = Math.floor(Math.random()*imgs.length)
  return imgs[i];
}

updateImages();