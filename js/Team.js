
class Team{

    async fetchAllTeamsFromTournamentID(){
        let allTeamsFromTournamentID = "http://localhost:8080/api/get/allTeamsFromTournamentID?tournamentID=";


        let tournamentID = sessionStorage.getItem("tournament-id")
        let response = await fetch(allTeamsFromTournamentID + tournamentID);

        let data = await response.json();

        this.displayTeamsOnMenu(data);
    }


    displayTeamsOnMenu(data){
        alert(data);


    }


    async createTeam(event){
        event.preventDefault();
        
        let createTeamEndpoint = "http://localhost:8080/api/create/team";

        let formData = $('#create-team').serializeArray();






    }


}

var team = new Team