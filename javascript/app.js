console.log("JavaScript Connected")

// 3wRiODJNGLc33mDzkbmLd8wuf8fEHF3D


var buttonArray = ["Harry Potter", "Lord of the Rings", "Star Wars", "Darth Vader", "Lightsaber", "R2-D2", "Warframe", "Warcraft", "Halloween", "Cat", "Cockatiel", "Cute", "Funny", "Sexy"]

for (var i = 0; i < buttonArray.length; i++) {
    var arrayBtn = $("<button>");
    console.log(buttonArray[i]);
    arrayBtn.addClass("array-button", buttonArray[i]);
    arrayBtn.attr("data-button", buttonArray[i]);
    arrayBtn.text(buttonArray[i]);
    $("#buttonLocation").append(arrayBtn);
};

$(".submitBtn").click(function () {
    var string = $("#inputText").val();
    console.log(string);
    buttonArray.push(string);
    
    var arrayBtn = $("<button>");
    arrayBtn.addClass("array-button", buttonArray[i]);
    arrayBtn.attr("data-button", buttonArray[i]);
    arrayBtn.text(buttonArray[i]);
    console.log(buttonArray[i]);
    $("#buttonLocation").append(arrayBtn);

    // var test = $("#inputTextBox");
    // console.log(test);
    // var test2 = $(".inputText");
    // console.log(test2);
});


$(".array-button").on("click", function () {

    $("#gifLocation").empty();

    // In this case, the "this" keyword refers to the button that was clicked

    var gifCall = $(this).attr("data-button");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifCall + "&api_key=3wRiODJNGLc33mDzkbmLd8wuf8fEHF3D&limit=10";

    console.log(queryURL);

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            var results = response.data;

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div for the gif
                    var gifDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    // var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var gifCallImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    gifCallImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and gifCallImage we created to the "gifDiv" div we created
                    // gifDiv.append(p);
                    gifDiv.append(gifCallImage);

                    // Prepending the gifLocation to the "#gifLocation" div in the HTML
                    $("#gifLocation").prepend(gifDiv);
                }
            }
        });
});


$(".gif").on("click", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});