const express = require('express')
const request = require('request')
const router = express.Router()

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

router.get('/teams/:teamName', function (req, res) {
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, response){
    let teamName = req.params.teamName
    let teamID= teamToIDs[teamName]
    let t=JSON.parse(response.body)
    let players=t.league.standard
    let teamPlayers= players.filter(p=>p.teamId === teamID && p.isActive)
    let playerData= teamPlayers.map(t=>({firstName:t.firstName, lastName:t.lastName, jersey:t.jersey, pos:t.pos}))
    res.send(playerData)
    })
})

module.exports = router
