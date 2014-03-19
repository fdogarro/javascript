SC.initialize({
    client_id: '8004e70e3ef899a41c98b0b27cd42c51'
});

// print out tracks from a genre
$(document).ready(function(){
	SC.get('/tracks', {genres: 'house'},function(tracks){
		$(tracks).each(function(index, track){
			$('#results').append($('<li></li>').html(track.title + '-' + track.genre));
		});
	});
});

//print out individual track

// $(document).ready(function(){
// 	SC.get('/tracks/100204582', function(track){
// 		SC.oEmbed(track.permalink_url,
// 	document.getElementById('player'));
// 	});
// });

// $(document).ready(function() {
//   SC.stream('/tracks/82541328', {
//      autoPlay: true,
//      ontimedcomments: function(comment) {} // add the callback function here
//   });
// });

// $(document).ready(function(){
// 	SC.stream("/tracks/100204582", function(sound){
// 		sound.play();
// 	});
// });
// $(document).ready(function(){
// $("#stream").on("click", function(){
// 	SC.stream("/tracks/293", {autoplay: true});
// });
// });