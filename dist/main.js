$("#button").on("click", function(){
    let newTeam = $("#input").val()
    $.get(`/teams/${newTeam}`, function(players){
        render(players)
    })
})

const render= function(players){
    let source = $('#players-template').html();
    let template = Handlebars.compile(source);
    let newHTML = template({players});
    $('.players-container').append(newHTML);
}
