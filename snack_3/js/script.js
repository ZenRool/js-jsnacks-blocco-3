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
    // non chedo che cambino il nome della squadra durante il torneo
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

