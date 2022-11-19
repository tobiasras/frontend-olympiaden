function createTournament(event){
  event.preventDefault();
    let formdata = getFormData($("#form-tour"));

    function getFormData(form) {
      var unindexed_array = form.serializeArray();
      var indexed_array = {};

      $.map(unindexed_array, function (n, i) {
        indexed_array[n["name"]] = n["value"];
      });

      return indexed_array;
    }

    //document.getElementById("form-tour").reset();
    $('#form-tour')[0].reset();

    console.log(JSON.stringify($('#form-tour')[0]));

    const settings = {
      url: "http://localhost:8080/tournament/add",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(formdata),
    };

    $.ajax(settings).done(function(response, status) {
      
      alert(status);
      tournamentRenderer.fetchData();
      //succes();
    });



}



$(document).ready(function() {
  
// DELETE //
$(document).on('click', 'button.delete' , function(){
  id = this.value;
  // shows modal
  $('#acceptModal').modal();
  $('#tournament-name').text($('#' + id).text()); 
});

$('#accept').click(function(){
  $('#acceptModal').modal('hide');
  var settings = {
    "url": "http://localhost:8080/tournament/delete?id=" + id,
    "method": "DELETE",
    "timeout": 0,
    
  };
  $.ajax(settings);
  location.reload();
})
$('#decline').click(function(){
  $('#acceptModal').modal('hide');
})

})




