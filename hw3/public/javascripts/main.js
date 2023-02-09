$(document).ready(function() {
    
    // click on the order button
    $("#orderbutton").click(function() {
        // stops the user if they want a vegan cheesecake
        if($("#notes").val().toLowerCase().includes("vegan")) {
            alert("Cheesecakes contain dairy.");
        }
        else {
            // save form data
            var flavor = $("<li></li>").html("Flavor: " + $("input[name='flavor']:checked").parent().text());
            var quantity = $("<li></li>").html("Quantity: " + $("#quantity option:selected").text());
            var notes = $("<li></li>").html("Notes: " + $("#notes").val());
            // hides the form section
            $("#form").hide();
            // creates html elements
            var recieptArea = $("<reciept></reciept>");
            var confirmtxt = $("<h3></h3>").text("Thanks for your order.");
            var reciepttxt = $("<h4></h4>").text("Order Summary:");
            var recieptPar = $("<ul></ul>");
            recieptPar.append(flavor);
            recieptPar.append(quantity);
            recieptPar.append(notes);
            //recieptArea.append("Quantity Topping: " + quantity);
            recieptArea.append(confirmtxt, reciepttxt, recieptPar);
            $("#order").prepend(recieptArea);
            
        }
        return false;
    });

    // handles click on the dropdowns
    $("month").click(function(event) {
        $("#monthdrop").html("<b>" + $(event.target).text() + "</b>");
    });

});