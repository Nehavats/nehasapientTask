

# nehasapientTask

To run the Project in your system 

run npm install 

and change package.json 

// For development

"scripts": {
		"heroku-postbuild": "ng build --prod",
		"ng": "ng",
		"start" : "ng start",
		
		"build": "ng build",
		"test": "ng test",
		"lint": "ng lint",
		"e2e": "ng e2e"
	},
  
  //for deployment
	
	before deployment change 
	"scripts": {
		"heroku-postbuild": "ng build --prod",
		"ng": "ng",
		"start" : "node server.js",
		
		"build": "ng build",
		"test": "ng test",
		"lint": "ng lint",
		"e2e": "ng e2e"
	},
  
  then  run ng serve 
