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
teams.forEach(rndPointFoul);

// ordina l'array in base ai punti fatti
teams.sort((a, b) =>  (a.point < b.point) ? 1 : (a.point === b.point) ? ((a.aggFoul < b.aggFoul) ? 1 : -1) : -1 )
console.log(teams);




// do un numero casuale al punteggio e i falli subiti team
function rndPointFoul(objTeam) {
    objTeam.setPoint(getRandomInt(20, 100));
    objTeam.setAggFoul(getRandomInt(50, 150));
}

// Random Integer number 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
