$(function() {
    $("#devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devoured state", newDevour);

                location.reload();
            }
        );
    });
});

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log(this);
    
    event.preventDefault();
    console.log("stuff");
    
    var newBurger = {
      name: $("#burger").val().trim(),
      devoured: false
    };

    console.log(newBurger);
    

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });