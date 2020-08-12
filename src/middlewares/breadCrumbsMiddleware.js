var breadcrumbsMiddleware = function() {
	return function(req, res, next) {
		var path = req.originalUrl	

		var breadcrumbs = path.split('/')

		var index = breadcrumbs.indexOf("")
		while(index !== -1){
			breadcrumbs.splice(index, 1)
			index = breadcrumbs.indexOf("")
		}

		breadcrumbs.splice(0,0,"Home")
		req.breadcrumbs = []
		
		//var urlPath = req.headers.host //localhost:3000 lo comento xq local no funca

		var urlPath = ""

		for (var i = 0; i <= breadcrumbs.length - 1; i++) {

			//LO SACQ SI NO ES LOCALHOST
			if (i==0){
				urlPath = "/"	
			} 			
			//---

			req.breadcrumbs.push({
				name: breadcrumbs[i],
				url: urlPath
			})

			//console.log(req.breadcrumbs[i])

			if (breadcrumbs[i+1]) {
				//urlPath += "/" + breadcrumbs[i+1] // SOLO PARA CUANDO NO ES LOCALHOST
				urlPath += breadcrumbs[i+1]
			}
		}
		next()
	}
}

module.exports = {
	breadcrumbsMiddleware
}
