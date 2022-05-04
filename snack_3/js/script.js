// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

/*

Squadra 
    nome: Nome generato con la creazione 
    punti: 0 -> numero random
    falli subiti: 0 -> numero random

*/
class Team {

    constructor(teamName) {
        this.teamName = teamName;
        this.point = 0;
        this.aggFoul = 0;
    }
    // Getter 
    getTeamName() {
        return this.teamName;
    }
    getPoint() {
        return this.point;
    }
    getAggFoul() {
        return this.aggFoul;
    }
    // Setter 
    // non credo che cambino il nome della squadra durante il torneo
    // setTeamName(teamName) {
    //     this.teamName = teamName; 
    // }
    setPoint(point) {
        this.point = point;
    }
    setAggFoul(aggFoul) {
        this.aggFoul = aggFoul;
    }
    
    //per dopo forse
    win() {
        this.point += 3;
    }
    draw() {
        this.point += 1;
    }
    addAggFoul(adding) {
        this.aggFoul += adding;
    }
}
// esempio 
// games = [
//     {homeTeam: 'Team3', awayTeam: 'Team1',  round: 1 , winner 0 (draw) 1 (homeTeam) 2 (awayTeam)  },
//     { awayTeam: 'Team4', homeTeam: 'Team2', round: 1 },
//     { awayTeam: 'Team2', homeTeam: 'Team1', round: 2 },
//     { awayTeam: 'Team3', homeTeam: 'Team4', round: 2 },
//     { awayTeam: 'Team1', homeTeam: 'Team4', round: 3 },
//     { awayTeam: 'Team3', homeTeam: 'Team2', round: 3 },
//     { awayTeam: 'Team3', homeTeam: 'Team1', round: 4 },
//     { awayTeam: 'Team2', homeTeam: 'Team4', round: 4 },
//     { awayTeam: 'Team1', homeTeam: 'Team2', round: 5 },
//     { awayTeam: 'Team4', homeTeam: 'Team3', round: 5 },
//     { awayTeam: 'Team4', homeTeam: 'Team1', round: 6 },
//     { awayTeam: 'Team2', homeTeam: 'Team3', round: 6 }


/*
primo 
home 0 1 2 3 4 5 6 7 8 9  aw 19 18 17 ....10
secondo 
home 0 19 1 2 3 4 5 6 7 8 aw  18 17 16 ....9
...
dieci
home 0 11 12 13 14 15 16 17 18 19 aw 10 9 8 7 6 5 4 3 2 1
undici
home 0 10 11 12 13 14 15 16 17 18 aw  9 8 7 6 5 4 3 2 1 19
dodici
home 0 9 10 11 12 13 14 15 16 17  aw  8 7 6 5 4 3 2 1 19 18
tredici 
home 0 8 9 10 11 12 13 14 15 16 aw 7 6 5 4 3 2 1 19 18 17
quattordici
home 0 7 8 9 10 11 12 13 14 15 aw 6 5 4 3 2 1 19 18 17 16
...
diciotto
home 0 3 4 5 6 7 8 9 10 11 aw  2 1 19 18 17 16 15 14 13 12
dicianove
home 0 2 3 4 5 6 7 8 9 10 aw  1 19 18 17 16 15 14 13 12 11
venti 
aw 0 1 2 3 4 5 6 7 8 9 home 19 18 17 ....10
...
...








*/


// awayTeam: index (0, 19) homeTeam: index (0 ,19) round 1 a 38 (10 a round)
// ]
class Games{

    constructor (teams) {
        this.costHome = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.costAway = [19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
        this.home = [...this.costHome];
        this.away = [...this.costAway];
        this.teams = teams;
    }
    // console.log(constHome);
    play() {
        for(let i = 0; i < 19; i++ ){
            // la giornata 
            // console.log( this.home, this.away, "Giornata :", i+1);
            for (let j = 0; j < 10; j++) {
                const win = rndWinner();
                console.log(this.teams[this.home[j]].getTeamName() , " contro " , this.teams[this.away[j]].getTeamName());
                if (win === 0) {
                    console.log("Finisce in parità");
                    this.teams[this.home[j]].draw();
                    this.teams[this.away[j]].draw();
                }
                else if (win === 1) {
                    console.log(`Vince ${this.teams[this.home[j]].getTeamName()} la squadra di casa`);
                    this.teams[this.home[j]].win();
                }
                else {
                    console.log(`Vince ${this.teams[this.away[j]].getTeamName()} la squadra in trasferta`);
                    this.teams[this.away[j]].win();
                }
                this.teams[this.home[j]].addAggFoul(rndFoulMatch());
                this.teams[this.away[j]].addAggFoul(rndFoulMatch());  
  
            }
            
            this.away.push(this.home[9]); 
            this.home.splice(1, 0, this.away[0]);
            this.home.splice(10, 1);
            this.away.splice(0, 1);


        }
        this.home = [...this.costAway];
        this.away = [...this.costHome];
        // girone di ritorno 
        for(let i = 19; i < 38; i++ ){
            // la giornata 
            // console.log( this.home, this.away , "Giornata :", i+1);
            for (let j = 0; j < 10; j++) {
                const win = rndWinner();
                console.log(this.teams[this.home[j]].getTeamName() , " contro " , this.teams[this.away[j]].getTeamName());
                if (win === 0) {
                    console.log("Finisce in parità");
                    this.teams[this.home[j]].draw();
                    this.teams[this.away[j]].draw();
                }
                else if (win === 1) {
                    console.log(`Vince ${this.teams[this.home[j]].getTeamName()} la squadra di casa`);
                    this.teams[this.home[j]].win();
                }
                else {
                    console.log(`Vince ${this.teams[this.away[j]].getTeamName()} la squadra in trasferta`);
                    this.teams[this.away[j]].win();
                }
                this.teams[this.home[j]].addAggFoul(rndFoulMatch());
                this.teams[this.away[j]].addAggFoul(rndFoulMatch());   
            }
            
            this.home.push(this.away[9]); 
            this.away.splice(1, 0, this.home[0]);
            this.away.splice(10, 1);
            this.home.splice(0, 1);


        }
        
    }
}



// Main


// Faccio le squadre
const teams = [
    new Team("Atalanta"),
    new Team("Bologna"),
    new Team("Cagliari"),
    new Team("Empoli"),
    new Team("Fiorentina"),
    new Team("Genoa"),
    new Team("Inter"),
    new Team("Juventus"),
    new Team("Complessati"),
    new Team("Milan"),
    new Team("Napoli"),
    new Team("aaa Maggica"),
    new Team("Salernitana"),
    new Team("Sampdoria"),
    new Team("Sassuolo"),
    new Team("Spezia"),
    new Team("Torino"),
    new Team("Udinese"),
    new Team("Venezia"),
    new Team("Verona"),
];
// per ogni squadra do un numero casuale di falli subiti da 50 a 150 e un numero di punti casuale da 20 a 100
// teams.forEach(rndPointFoul);


//Sfide
const play = new Games(teams);
play.play();
// ordina l'array in base ai punti fatti
teams.sort((a, b) =>  (a.getPoint() < b.getPoint()) ? 1 : (a.getPoint() === b.getPoint()) ? ((a.aggFoul < b.aggFoul) ? 1 : -1) : -1 )
console.log(teams);
console.log(`${teams[0].getTeamName()} ha vinto la serie A con ${teams[0].getPoint()} punti`);



// do un numero casuale al punteggio e i falli subiti team
function rndPointFoul(objTeam) {
    objTeam.setPoint(getRandomInt(20, 100));
    objTeam.setAggFoul(getRandomInt(50, 150));
}
function rndFoulMatch() {
    return getRandomInt(4, 10);
}
function rndWinner() {
    return getRandomInt(0 ,2);
}
// Random Integer number 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
