;(function () {	
	'use strict';

	var bgVideo = function() {
		$('.player').mb_YTPlayer();
	};

	
	$(function(){
		bgVideo();
	});

	function openNav() {
		document.getElementById("mySidenav").style.width = "100%";
	  }
	  
	  function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	  }
	
	
}());