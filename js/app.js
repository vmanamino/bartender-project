var concoction = "Here's yo medicine, just the way ya like it, wit a ";

var preferences = {
        strong: '',
        salty: '',
        bitter: '',
        sweet: '',
        fruity: ''
    };
    
// var numInstances = 0;
    
var Question = function(question, type){
    this.question = question;
    // numInstances += 1;
    this.type = type;
};

var questionStrong = new Question('Do ye like yer drinks strong?', 'strong');
var questionSalty = new Question('Do ye like it with a salty tang?', 'salty');
var questionBitter = new Question('Are ye a lubber who likes it bitter?', 'bitter');
var questionSweet = new Question('Would ye like a bit of sweetness with yer poison?', 'sweet');
var questionFruity   = new Question('Are ye one for a fruity finish?', 'fruity');

var allQuestions = [questionStrong, questionSalty, questionBitter, questionSweet, questionFruity];

var Ingredients = function(items){
    this.list = items;
};

var strongIngredients = new Ingredients(['Glug of rum', 'slug of whisky', 'splash of gin']);
var bitterIngredients = new Ingredients(['Shake of bitters', 'splash of tonic', 'twist of lemon peel']);
var saltyIngredients = new Ingredients(['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
var sweetIngredients = new Ingredients(['Sugar cube', 'spoonful of honey', 'splash of cola']);
var fruityIngredients = new Ingredients(['Slice of orange', 'dash of cassis', 'cherry on top']);


var Bartender = function(name){
    name:  name
};

Bartender.prototype.createDrink = function(preferences){
    console.log('create drink');
    var zutaten = [];
    var random = Math.floor(Math.random() * ((2-0)+1) + 0);
    if (preferences.strong){
        zutaten.push(strongIngredients.list[random]);
    }
    if (preferences.bitter){
        zutaten.push(bitterIngredients.list[random]);
    }
    if (preferences.salty){
        zutaten.push(saltyIngredients.list[random]);
    }
    if (preferences.sweet){
        zutaten.push(sweetIngredients.list[random]);
    }
    if (preferences.fruity){
        zutaten.push(fruityIngredients.list[random]);
    }
    
    if (zutaten.length > 2){
        for (var i = 0; i < zutaten.length; i++){
            if (i < (zutaten.length - 1)){
                console.log(i);
                if (i == (zutaten.length - 2)){
                    console.log('inside last');
                    
                    concoction += zutaten[1]+', and ';
                }
                else {
                    concoction += zutaten[i]+', ';
                }
            }
            else {
                concoction += zutaten[i]+'!';
            }
        }
    }
    else if (zutaten.length == 2){
        for (var i = 0; i < zutaten.length; i ++){
            if (i == 0){
                concoction += zutaten[i]+' and ';
            }
            else {
                concoction += zutaten[i]+'.';
            }
        }
    }
    else if (zutaten.length == 1){
        concoction += zutaten[0]+'!';
    }
    else {
        concoction = "You need to mix your dose!";
    }
};





$(document).ready(function() {
    var joey = new Bartender('Joey');
    for (var i = 0; i < allQuestions.length; i++){
            var checkbox = '<input type="checkbox" name="'+allQuestions[i].type+'" value="yes">'+allQuestions[i].question+'<br/><br/>';
            $('#target').append(checkbox);    
    }
    $('#target').append('<button id="drink" type="button">Get Drink!</button>');
    $('#target').append('<button id="reset" type="button">Reset</button>')
    $("#drink").click(function(event){
        event.preventDefault();
        preferences.strong = $('input[name=strong]:checked').val();
        preferences.salty = $('input[name=salty]:checked').val();
        preferences.bitter = $('input[name=bitter]:checked').val();
        preferences.sweet = $('input[name=sweet]:checked').val();
        preferences.fruity = $('input[name=fruity]:checked').val();
        joey.createDrink(preferences);
        $('.answers').append('<p>'+concoction+'</p>');
    });
    $("#reset").click(function(event){
        event.preventDefault();
        $('input:checkbox').attr('checked',false);
        $('.answers').empty();
        preferences = {};
        concoction = "Here's yo medicine, just the way ya like it, wit a ";
        console.log(concoction);
    })
    
       
});