var notesID;

$(document).on("click", "#scrapeBtn", function(event){

  $("#results_body").empty();

  $.get("/scrape");
    setTimeout(function(){
      window.location.href = "/results";
    }, 1000);
});

$(document).on("click", "#savedBtn", function(event){

  $("#results_body").empty();

  window.location.href = "/saved";
});


$(document).on("click", "#homeBtn", function(event){

  $("#results_body").empty();

  window.location.href = "/results";
});


$(document).on("click", ".userAddBtn", function(event){

  var id = $(this).attr("id");


  $.post("/saved/" + ($(this).val())).then(function(data){
      $("#" + id).html('<div class="glyphicon glyphicon-ok" class="favBtn"></div>&nbsp;Saved!');
      $("#div" + id).fadeOut( 1000, function() {
        $("#div" + id).remove();
      });

    });

  });

  $(document).on("click", ".removeBtn", function(event){

    var id = $(this).attr("id");

    console.log(id);

    $.post("/remove/" + ($(this).val())).then(function(data){
        $("#" + id).html('<div class="glyphicon glyphicon-remove" class="favBtn"></div>&nbsp;Removed!');
        $("#div" + id).fadeOut( 1000, function() {
          $("#div" + id).remove();
        });

      });

    });


    $(document).on("click", ".notesBtn", function(event){

      notesID = $(this).val();

    });


    $(document).on("click", ".seeNotesBtn", function(event){

      $.get("/seenotes/" + $(this).val()).then(function(data){

        console.log(data.note);
      });

    });





    $(document).on("click", "#saveNotesBtn", function(event){

    var notes = $('#notesContent').val();

    if (notes) {

      $.post("/submit/" + notesID, {

        id: notesID,
        content: notes

      }).then(function(data){

        window.location.href = "/saved";
      });

    }

    });
