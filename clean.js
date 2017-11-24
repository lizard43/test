var jsonfile = require('jsonfile')
var file = 'trivia/trivia.json'

var trivia;

jsonfile.readFile(file, function(err, obj) {

    trivia = obj;
    console.log('Read ', trivia.length);

    // sort it
    console.log('Sorting ... ');
    trivia.trivia.sort(function(a, b) {

        // var val = a.category.localeCompare(b.category);
        var val = 0;

        if (val === 0) {
            val = a.question.localeCompare(b.question);
        }

        return val;
    });

    // remove duplicates
    console.log('Cleaning ... ');
    var clean = [];
    for (var i = 0; i < trivia.trivia.length; i++) {

        var found = false;
        var question = trivia.trivia[i].question.toLowerCase();
        console.log(question);
        
        for (var j = i+1; j < trivia.trivia.length; j++) {

            if (question === trivia.trivia[j].question.toLowerCase()) {
                found = true;
                break;
            }
        }

        if (!found) {
            console.log('adding ...');
            clean.push(trivia.trivia[i]);
        }
    }

    trivia.trivia = clean;

    // renumber
    console.log('Renumbering ... ');
    for (var i = 0; i < trivia.trivia.length; i++) {
        trivia.trivia[i].id = i + 1;
    }

    // save it
    console.log('Saving ... ');
    jsonfile.writeFile(file + '.clean', trivia, function (err) {
        console.error(err)
    })    
})

