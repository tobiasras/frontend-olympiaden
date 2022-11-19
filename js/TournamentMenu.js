
$(document).ready(function() {
    onStart();

    player.displayPlayers();




$('#players').click(function(){
    setActiveTab($(this));
    setActiveMenu($('#player-menu'));
    setActiveDisplay($('#player-display'));
    player.displayPlayers();

});


$('#score').click(function(){
    setActiveTab($(this));
    setActiveMenu($('#score-menu'));
    setActiveDisplay($('#score-display'));
});



$('#team').click(function(){
    setActiveTab($(this));
    setActiveMenu($('#team-menu'));
    setActiveDisplay($('#team-display'));

    team.fetchAllTeamsFromTournamentID();
});

$('#settings').click(function(){
    setActiveTab($(this));
    setActiveMenu($('#setting-menu'));
    setActiveDisplay($('#setting-display'));
});


function onStart(){
    $('#players').addClass('tab-active');
    setActiveMenu($('#player-menu'));
    setActiveDisplay($('#player-display'));

    $('#tournament-id').text(sessionStorage.getItem("tournament-id"));
    $('#tournament-name').text(sessionStorage.getItem("tournament-name"));
}


function setActiveTab(id){
    $('#players').removeClass('tab-active');
    $('#score').removeClass('tab-active');
    $('#team').removeClass('tab-active');
    $('#settings').removeClass('tab-active');
    id.addClass('tab-active');
}

function setActiveDisplay(id){
    $('#player-display').hide();
    $('#score-display').hide();
    $('#team-display').hide();
    $('#setting-display').hide();
    id.show();  
}

function setActiveMenu(id){
    $('#player-menu').hide();
    $('#score-menu').hide();
    $('#team-menu').hide();
    $('#setting-menu').hide();
    id.show();   
}


});



