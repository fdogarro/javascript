//function onSuccess(data){
  //var pictures = data.items;
  //var firstPicture = pictures[0];
  //var media = firstPicture.media;
  //var imageUrl= media.m;
  
  //var imageElement = document.createElement('img');
  //imageElement.src = imageUrl;

  //document.body.appendChild(imageElement);

//}

function onSuccess(data){
  
  var items = data.items;
  console.log(items);

  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    var media = currentItem.media;
    var imgUrl = media.m;

    var realImage = document.createElement('img');
    realImage.src = imgUrl;
    document.body.appendChild(realImage);
  };


}

function quickArrayExample(){
  var president1 = {
    name: 'Barack Obama',
    startYear: 2012,
    endYear: 2016
  };

  var president2 = {
    name: 'Barack Clinton',
    startYear: 1994,
    endYear: 2016
  };
}

function getFlickrData() {
  var requestUrl = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json';
  
   var object = {
      url: requestUrl,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      success: onSuccess 
        
       

      };
   
   jQuery.ajax(object);

  }

window.onload = getFlickrData;


