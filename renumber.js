var jsonfile = require('jsonfile')
var file = 'trivia/trivia.json'

var trivia;

jsonfile.readFile(file, function(err, obj) {

    trivia = obj;

    for (var i = 0; i < trivia.trivia.length; i++) {
        console.log(i);
        console.log(trivia.trivia[i]);
        trivia.trivia[i].id = i + 1;
        console.log(trivia.trivia[i]);
    }

    jsonfile.writeFile(file + '.2', trivia, function (err) {
        console.error(err)
    })    
})

