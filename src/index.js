const express = require('express');
const app = express();
const morgan = require('morgan');

// senttings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require("./routes/index.js"));
app.use('/api/movies', require("./routes/movies.js"));


//starting the server
app.listen(app.get('port'), ()=>{
	console.log('Server on port 3000');
});