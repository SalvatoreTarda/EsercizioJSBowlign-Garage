let garage = {
    AUTO:[`F458Italia`,`MustangGT500`,`SLR`],
        Marca: `Ferrari`, modello:[`F40`,`488pista`],
         Marca: `Ford`, modello:[`GT500`,`FocusRS`],
         Marca: `Mercedes`, modello:[`AMGgts`,`C_class`],
    

     setModellopermarca : function (modelloricerc) {
        let modellocercato = this.AUTO.find ((AUTO) => AUTO.Marca == modelloricerc) 
        console.log(modellocercato.modello);
    } 

        



}
garage.setModellopermarca(`Ferrari`)

console.log(garage.AUTO);



// !  2. ESERCIZIO BOWLING

// let Bowling ={
//     Players: [
//         {name :`Pippo`, scores:[]},
//         {name :`Rosario`, scores:[]},
//         {name :`Salvatore`, scores:[]},
//         {name :`Chiara`, scores:[]},
//     ],
//     setFinalscore : function() {
//         this.Players.forEach((player)=>{
//             player.finalscore = player.scores.
//             reduce((acc,n)=> acc + n)

//         })
//     },

//     setScores : function (shoots) {
//         this.Players.forEach( (player)=>{
//             for (let i = 0; i <shoots ; i++) {
//                 player.scores.push(Math.floor(Math.random() * (10 - 0 + 1) + 0))
                
//             }

//         }   
//         )
//     },

//     setwinner: function () {
//         this.Players.sort((a, b) => b.finalscore - a.finalscore);
//         let winner=this.Players[0];
//         console.log(winner);

//         if (winner.finalscore>this.Players[1].finalscore) 
//         {
//             console.log(`il vincitore è ${winner.name}con il punteggio di ${winner.finalscore}`);
//         } else {
//             console.log(`i giocari ${winner.name} è ${this.Players[1].name}hanno pareggiato`);
//         }
//     },

//     setRanking : function () {
//         console.log(`la classifica finale è`);
//         this.Players.forEach( (player, i)=>{
//             console.log(`${i+1}.${player.name}`);

//         })
//     }



// }



// console.log(Bowling);

// Bowling.setScores(10);
// Bowling.setFinalscore();
// Bowling.setwinner();
// Bowling.setRanking();