class ContestantObject {

    id;
    name;
    teamPreference;
    ranking;
    
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    setTeamPreference(teamPreference){
        this.teamPreference = teamPreference;
    }

    setRanking(ranking){
        this.ranking = ranking;
    }
}


export default ContestantObject;
