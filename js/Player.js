class Player {
  createPlayer(event){
    event.preventDefault();
    // takes request body + request parameter on tournament id
    // request body = name + alias

    let tournamentID = $('#tournament-id').text();
    let requestParam = "?tourId=" + tournamentID;
    let endpoint = 'http://localhost:8080/api/create/user' + requestParam;

    let formData = $('#create-player').serializeArray();

    $('#create-player')[0].reset();

    let cleanFormData = {};
    formData.forEach(function(inputField){  
        cleanFormData[inputField["name"]] = inputField["value"];
    });

      $.ajax({
        url: endpoint,
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        data: JSON.stringify(cleanFormData),
      }).done(function(response){
        alert(response)


        player.displayPlayers();
      });
    }

    displayPlayers(){
      let endpoint = 'http://localhost:8080/api/get/usersFromTournamentID?tourId=' + sessionStorage.getItem("tournament-id");
    

      var settings = {
        "url": endpoint,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        updateUI(response);
      });
      

      function updateUI(data){
        $('#table-player').empty();

        var table = $('<table>').addClass('table table-sm');
          var headerRow = $('<tr>');
  
          var name = $('<th>').text('Name');
          var alias = $('<th>').text('Alias');
          var points = $('<th>').text('Points');

          headerRow.append(name);
          headerRow.append(alias);
          headerRow.append(points);

  
          table.append(headerRow);

        data.forEach(function(object){
          var row = $('<tr>');
  
          var name = $('<td>').text(object.name);
          var alias = $('<td>').text(object.alias);
          var points = $('<td>').text('Points: ' + object.points);
  
          row.append(name);
          row.append(alias);
          row.append(points);
  
  
          table.append(row);
        })


        $('#table-player').append(table);
      }
    
    }
  
    






  }

  var player = new Player();




