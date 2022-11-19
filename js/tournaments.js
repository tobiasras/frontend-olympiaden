class TournamentRenderer {
  endPointUrl = "http://localhost:8080/tournament/all";

  constructor() {
    this.fetchData();
  }

  async fetchData() {

    let response = await fetch(this.endPointUrl);
    let data = await response.json();

    this.updateUI(data);
  }

  updateUI(data) {
    let tableTournament = $("#table-tournament");
    tableTournament.empty();


    const tournaments = data;
  
    var table = $("<table>").addClass("table table-sm");
    
    tournaments.forEach(function (tournament) {
      let id = $("<td>").text("Id: " + tournament.id);
      let name = $("<td>", {
        id: tournament.id,
      }).text(tournament.name);

      let openBtn = $("<td>").append(
        $("<a>", {
          href: "tournament.html",
          onclick: "setSession(" + tournament.id + ",'" + tournament.name + "')"

        })
        .addClass("btn btn-dark btn-sm").text("open")
      );

      let deleteBtn = $("<td>").append(
        $("<button>", {
          value: tournament.id,
        })
          .addClass("btn btn-dark btn-sm delete")
          .text("delete")
      );

      let row = $("<tr>");

      row.append(name);
      row.append(openBtn);
      row.append(deleteBtn);

      table.append(row);
    });
    tableTournament.append(table);
  }
}

var tournamentRenderer = new TournamentRenderer();
