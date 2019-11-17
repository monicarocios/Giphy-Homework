//   Initial Pokemon Array

let pokemonArray = ["Chikorita", "Gyrados", "Geodude", "Jigglypuff", "Alakazam"];

// create function to call pokemon gifs and display them properly in html

function displayPokemonInfo() {
    let pokemon = $(this).attr("data-name");
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + pokemon + "&api_key=h8KY53anazwM4cz5ZV2WQCqMsrGCh5q1";

    // Create AJAX call for pokemon button clicked
    console.log('ajax is working')
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Create a div to hold the pokemon gifs
        let pokemonDiv = $("<div class = 'pokemon-gifs'>");
        
        // Store the gifs
        let gifs = response.data;
        console.log(gifs)

        // displaying gifs
        pokemonDiv.append(gifs);

        let pokemonImage = $("<img>");

        for(i = 0; i < pokemonArray.length; i++){

        // Giving the image tag an src attribute of a property pulled off the result item
        pokemonImage.attr("src", gifs[i].images.fixed_height.url);

        // Appending the paragraph and pokemonImage we created to the "gifDiv" div we created
        $('#new-pokemon').append(pokemonImage);

        }


        // putting the new pokemon gifs above the previous ones clicked
        $('#new-pokemon').prepend(pokemonDiv);

    });
}



// // Giving the image tag an src attribute of a property pulled off the
// // result item
    // pokemonImage.attr("src", gifs[i].images.fixed_height.url);

// // // Appending the paragraph and personImage we created to the "gifDiv" div we created
// //     pokemonDiv.append(p);
//     pokemonDiv.append(pokemonImage);

// Function to display pokemon gifs
function renderButtons() {

    // Delete pokemon before adding new pokemon so don't have repeats
    $('#buttons-view').empty();

    // Loop through initial array of pokemon
    var i;
    for (let i = 0; i < pokemonArray.length; i++) {

        // dynamically generate buttons for each pokemon in array
        let a = $("<button>");

        // add class of pokemon-btn to my buttons
        a.addClass('pokemon-btn');

        // add data-attribute to button
        a.attr('data-name', pokemonArray[i]);

        // Inscribing initial pokemon buttons as text
        a.text(pokemonArray[i]);

        // Adding buttons to buttons-view div
        $('#buttons-view').append(a);

    }
}

// Function handles event when submit btn clicked
$('#add-pokemon').on('click', function (event) {
    // don't let form submit before
    event.preventDefault();

    // grab input from textbox
    let pokemon = $('#pokemon-input').val().trim();

    // Add pokemon from textbox to array
    pokemonArray.push(pokemon);

    // call renderButtons to process pokemon array
    renderButtons();
});

// Add on click event listener to all pokemon-btn (all elements with pokemon-btn class) and attach to displayPokemonInfo function (makes sure HTML correct with btns)
$(document).on('click', '.pokemon-btn', displayPokemonInfo);


// Call renderButtons function to display initial buttons
renderButtons();

 // first need to make sure code above works so i can display the inital array (loop through array and display them as buttons, also need to change api request per button clicked)
 // then need new buttons made to appear next to those initial ones when press 'submit'
 // then those buttons need to change api request (looking for different giphs for new pokemon inserted)
 // maybe need to use button0triggered-ajax class activity to make connection with giphy work...or maybe a problem with variables? or response.data part

