function randomWord() {
	const requestStr = "http://randomword.setgetgo.com/get.php";

	$.ajax({
	    type: "GET",
	    url: requestStr,
	    dataType: "jsonp",
	    jsonpCallback: 'RandomWordComplete'
	});
}

module.exports = function ($) {
  $.title = 'Game'
  $.layout('website')
  $.render()
}