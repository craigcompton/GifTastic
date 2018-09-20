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
});


$(".array-button").on("click", function () {
    $("#gifLocation").empty();
    var gifCall = $(this).attr("data-button");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifCall + "&api_key=3wRiODJNGLc33mDzkbmLd8wuf8fEHF3D&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var gifCallImage = $("<img>");
                gifCallImage.attr("src", results[i].images.fixed_width.url);
                gifDiv.append(gifCallImage);
                $("#gifLocation").append(gifDiv);
            }
        }
    });
});


$(".gif").on("click", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});