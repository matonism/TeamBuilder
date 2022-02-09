
import { getTeamsForNumberOfTeams, getTeamsForPlayersPerTeamRoundUp, getTeamsForPlayersPerTeamRoundDown, getTeamsForPlayersPerTeamRoundOddManOut } from './TeamGeneratorHelpers.js';

let GENERATOR_MODE_PLAYERS_PER_GROUP = 'Players per Group';
let GENERATOR_MODE_NUMBER_OF_GROUPS = 'Number of Groups';
let GENERATOR_MODE_SCHEDULER = 'Scheduler';
let PLAYERS_PER_TEAM_OPTIONS = ['Round Up', 'Round Down', 'Odd Man Out'];

class TeamSetupObject {

    generatorMode;
    numberOfTeams;
    playersPerTeam;
    playersPerTeamOption;
    teams = [];
    nextId = 0;
    
    constructor(){}

    setNextId(nextId){
        this.nextId = nextId;
    }

    setGeneratorMode(generatorMode){
        this.generatorMode = generatorMode;
    }

    setNumberOfTeams(numberOfTeams){
        this.numberOfTeams = numberOfTeams;
    }

    setTeams(teams){
        this.teams = teams;
    }

    setNumberOfTeams(numberOfTeams){
        this.numberOfTeams = numberOfTeams;
    }

    setPlayersPerTeam(playersPerTeam){
        this.playersPerTeam = playersPerTeam;
    }
    setPlayersPerTeamOption(playersPerTeamOption){
        this.playersPerTeamOption = playersPerTeamOption;
    }

    
    generateTeams(contestants){
        let contestantValues = Object.values(contestants);
        let teams = [];
        contestantValues = this.shuffle([...contestantValues]);

        if(this.generatorMode === GENERATOR_MODE_PLAYERS_PER_GROUP){
            if(this.playersPerTeamOption === 'Round Down'){
                teams = getTeamsForPlayersPerTeamRoundDown(contestantValues, this.playersPerTeam);
            }else if(this.playersPerTeamOption === 'Odd Man Out'){
                teams = getTeamsForPlayersPerTeamRoundOddManOut(contestantValues, this.playersPerTeam);
            }else{
                teams = getTeamsForPlayersPerTeamRoundUp(contestantValues, this.playersPerTeam);
            }
        }else{
            teams = getTeamsForNumberOfTeams(contestantValues, this.numberOfTeams);
        }

        this.teams = teams;

    }

    
  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

}


export function createTeamSetupObject(generatorMode, numberOfTeams, playersPerTeam, playersPerTeamOption, teams){
    let teamSetupObject = new TeamSetupObject();
    teamSetupObject.generatorMode = generatorMode;
    teamSetupObject.numberOfTeams = numberOfTeams;
    teamSetupObject.playersPerTeam = playersPerTeam;
    teamSetupObject.playersPerTeamOption = playersPerTeamOption;
    teamSetupObject.teams = teams;
    return teamSetupObject;
}

export default TeamSetupObject;
