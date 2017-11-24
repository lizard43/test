var jsonfile = require('jsonfile')
var file = 'trivia/trivia.json'

var trivia;

jsonfile.readFile(file, function(err, obj) {

    trivia = obj;

    trivia.trivia.sort(function(a, b) {

        // var val = a.category.localeCompare(b.category);
        var val = 0;

        if (val === 0) {
            val = a.question.localeCompare(b.question);
        }

        return val;
    });


    for (var i = 0; i < trivia.trivia.length; i++) {
        console.log(i);
        console.log(trivia.trivia[i]);
        trivia.trivia[i].id = i + 1;
        console.log(trivia.trivia[i]);
    }

    jsonfile.writeFile(file + '.sort', trivia, function (err) {
        console.error(err)
    })    
})

