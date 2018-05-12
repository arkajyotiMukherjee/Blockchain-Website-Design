var express = require('express')
var app = express();

app.use(express.static('./'))


app.listen('8811', function(){
    console.log('server running on port 8811');
});
