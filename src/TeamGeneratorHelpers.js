export function getTeamsForNumberOfTeams(contestantValues, numberOfTeams){
    let teams = [];
    let numberOfContestants = contestantValues.length;
    let playersPerTeam = numberOfContestants / numberOfTeams;
    let numberOfTeamsWithExtraPlayer = numberOfContestants % numberOfTeams;

    for(let i = 0; i < numberOfTeams; i++){
        teams[i] = contestantValues.splice(0, playersPerTeam);
        if(i < numberOfTeamsWithExtraPlayer){
        teams[i] = teams[i].concat(contestantValues.splice(0,1));
        }
    }
    return teams;
}

export function getTeamsForPlayersPerTeamRoundUp(contestantValues, playersPerTeam){
    let teams = [];
    let numberOfContestants = contestantValues.length;
    let numberOfTeamsWithExtraPlayer = numberOfContestants % playersPerTeam;
    let numberOfTeams = Math.floor(numberOfContestants / playersPerTeam);
    if(numberOfTeamsWithExtraPlayer > 1){
        numberOfTeams++;
    }

    for(let i = 0; i < numberOfTeams; i++){
        teams[i] = contestantValues.splice(0, playersPerTeam);
        if(i < numberOfTeamsWithExtraPlayer){
        teams[i] = teams[i].concat(contestantValues.splice(0,1));
        }
    }
    return teams;
}
export function getTeamsForPlayersPerTeamRoundDown(contestantValues, playersPerTeam){
    let teams = [];
    let numberOfContestants = contestantValues.length;
    let numberOfTeamsWithOneFewerPlayer = 0;
    if(numberOfContestants % playersPerTeam > 0){
        numberOfTeamsWithOneFewerPlayer = playersPerTeam - (numberOfContestants % playersPerTeam);
    }    
    let numberOfTeams = numberOfContestants / playersPerTeam;

    for(let i = 0; i < numberOfTeams; i++){
        if(i < numberOfTeamsWithOneFewerPlayer){
        teams[i] = contestantValues.splice(0, playersPerTeam - 1);
        }else{     
        teams[i] = contestantValues.splice(0, playersPerTeam);
        }
    }
    return teams;
}
export function getTeamsForPlayersPerTeamRoundOddManOut(contestantValues, playersPerTeam){
    let teams = [];
    let numberOfContestants = contestantValues.length;
    let numberOfTeams = numberOfContestants / playersPerTeam;

    for(let i = 0; i < numberOfTeams; i++){
        teams[i] = contestantValues.splice(0, playersPerTeam);
    }
    return teams;
}
