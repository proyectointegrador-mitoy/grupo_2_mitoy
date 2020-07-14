var breadCrumbsMiddleware = function() {
	return function(req, res, next) {
		var path = req.originalUrl	

		var breadCrumbs = path.split('/')

		var index = breadCrumbs.indexOf("")
		while(index !== -1){
			breadCrumbs.splice(index, 1)
			index = breadCrumbs.indexOf("")
		}

		breadCrumbs.splice(0,0,"Home")
		req.breadcrumbs = []
		
		//var urlPath = req.headers.host //localhost:3000 lo comento xq local no funca

		var urlPath = ""

		for (var i = 0; i <= breadCrumbs.length - 1; i++) {

			//LO SACQ SI NO ES LOCALHOST
			if (i==0){
				urlPath = "/"	
			} 			
			//---

			req.breadcrumbs.push({
				name: breadCrumbs[i],
				url: urlPath
			})

			console.log(req.breadcrumbs[i])

			if (breadCrumbs[i+1]) {
				//urlPath += "/" + breadCrumbs[i+1] // SOLO PARA CUANDO NO ES LOCALHOST
				urlPath += breadCrumbs[i+1]
			}
		}
		next()
	}
}

module.exports = {
	breadCrumbsMiddleware
}
