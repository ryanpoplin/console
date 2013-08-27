jQuery(document).ready(function(){
	var instruments = [];
	instruments[0] = { 
		guitars: {
			gibson: {
				name: "Explorer",
				type: "6-String"
			}, 
			fender: {
				name: "Telecaster",
				type: "6-String"
			},
			jackson: {
				name: "Floyd Rose Edition",
				type: "7-String"
			}
		}	
	};
	instruments[1] = {
		pianos: {
			baldwin: {
				name: "Hamilton Limited Edition",
				type: "Upright"
			},
			williams: {
				name: "Concerto",
				type: "Digital"
			},
			yamaha: {
				name: "S90-ES",
				type: "Digital"
			}
		}
	};	
	console.log("The instruments array has two elements that are both object values. They are below:");
	for (var i = 0; i < instruments.length; i += 1) {
		console.log(instruments[i]); 
	}
	// homework ends...
	
});