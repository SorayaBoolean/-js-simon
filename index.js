//1.Visualizzare in pagina 5 numeri casuali

    //voglio creare 5 <div col> dentro row richiamando la funzione:
    const rowDom = document.querySelector ('.row') 

    for (let i = 0; i < 5 ; i ++) {

       //richiamo la funzione che mi genera Nrandom
       const numeroCasuale  = genRandomNumbers (1, 100)
       console.log (numeroCasuale) 

       // genera 5 col dentro rowDom
       const currentElement = createCol (numeroCasuale)

       rowDom.append(currentElement)
       
    }


//2.Da lì parte un timer di 30 secondi

//3.Dopo 30 secondi l’utente deve inserire uno alla volta  i numeri che ha visto precedentemente (prompt)

//4.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati












//Sezione funzioni:


///////////////////////////////////////////////////////////////
//a. funzione che mi genera numeri random:
function genRandomNumbers (min,max) {
return Math.floor (Math.random () * (max- min)+ 1) + min
}
////////////////////////////////////////////////////////////////

//b. creo una funzione che mi genera 5 col 
function createCol (numero) {
    
    const currentElement = document.createElement ('div');
    currentElement.classList.add ('col');

    currentElement.append (numero)
    
    return currentElement;
}





/////////////////////////////////////////////////////////////////