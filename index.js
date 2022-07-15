//1.Visualizzare in pagina 5 numeri casuali

    //voglio creare 5 <div col> dentro row:
    const rowDom = document.querySelector ('.row')

    for (let i = 0; i < 5 ; i ++) {
       const currentElement = document.createElement ('div');
       currentElement.classList.add ('col');
       rowDom.append (currentElement)

    }

//2.Da lì parte un timer di 30 secondi

//3.Dopo 30 secondi l’utente deve inserire uno alla volta  i numeri che ha visto precedentemente (prompt)

//4.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati












//Sezione funzioni:


//a. funzione che mi genera numeri random:

function genRandomNumbers (min,max) {
return Math.floor (Math.random () * (max- min)+ 1) + min
}

