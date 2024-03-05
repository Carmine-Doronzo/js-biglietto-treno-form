



submit.addEventListener('click', function(){
    const ticket = document.getElementById('ticket');

    //raccogliamo il dato kilometri
    let km = document.getElementById('km').value;

    //raccogliamo il dato eta' 
    let eta = document.getElementById('eta').value;

    const name = document.getElementById('name').value;

    console.log(name);

    if(name != '' && !isNaN(km) && km > 0 && isNaN(name)){

    
    
    

    //inseriamo una costante che sarebbe il prezzo per kilometro
    const prezzoperkm = 0.21;//number
        
    //creiamo una variabile contenente il prezzo del biglietto
    let prezzobiglietto = (km * prezzoperkm);//number
        
    //stampiamo i kilometri da percorrere
    console.log('i km da percorrere sono:',km,'km');

    //stampiamo l'eta' 
    //console.log('la tua eta e di:',eta,'anni');

    console.log('il biglietto costa =', parseFloat(prezzobiglietto.toFixed(2)),'euro');

    //utilizziamo delle condizioni per fare degli sconti 

    //eta' minore di 18 anni
    if(eta == 'min'){
        
        //pxb20 = variabile contenente il prezzo del biglietto scontato del 20%
        let sconto20 = prezzobiglietto * 0.20;//number
        
        console.log('Sconto minorenne 20% =', parseFloat(sconto20.toFixed(2)),'euro');
        //pxb20round = variabile contenente il prezzo del biglietto scontato del 20% mostrando fino alla seconda cifra decimale
        let sconto20arr = prezzobiglietto - sconto20;//number
        console.log('Totale con sconto applicato =',parseFloat(sconto20arr.toFixed(2)),'euro');
        
        ticket.innerHTML = `
            <span>Nome del passeggero:${name}</span> 
            <br>
            <span>i km da percorrere sono ${km}</span>
            <br>
            <span>Il prezzo del biglietto e: ${prezzobiglietto.toFixed(2)}</span>
            <br>
            <span>Sconto applicato del 40%: ${sconto20.toFixed(2)} </span>
            <br>
            <span>Il prezzo del biglietto e: ${sconto20arr.toFixed(2)}</span>
    `
    
    }//eta' over 65
    else if(eta == 'over'){
       
    //pxb40 = variabile contenente il prezzo del biglietto scontato del 40%
    let sconto40 = prezzobiglietto * 0.40;//number
    console.log('Sconto over 65 40% =', parseFloat(sconto40.toFixed(2)),'euro');

    //pxb40round = variabile contenente il prezzo del biglietto scontato del 40% mostrando fino alla seconda cifra decimale
    let sconto40arr = prezzobiglietto - sconto40;//number
    console.log('Totale con sconto applicato =',parseFloat(sconto40arr.toFixed(2)),'euro');

    ticket.innerHTML = `
            <span>Nome del passeggero:${name}</span> 
            <br>
            <span>i km da percorrere sono ${km}</span>
            <br>
            <span>Il prezzo del biglietto e: ${prezzobiglietto.toFixed(2)}</span>
            <br>
            <span>Sconto applicato del 40%: ${sconto40.toFixed(2)} </span>
            <br>
            <span>Il prezzo del biglietto e: ${sconto40arr.toFixed(2)}</span>
    `

    }//eta' tra i 18 e i 65 anni
    else if(eta == 'default'){

    //stampiamo in console il prezzo del biglietto senza sconti
    console.log('nessuno sconto applicato');
    console.log('il biglietto costa =', parseFloat(prezzobiglietto.toFixed(2)),'euro');
    
    ticket.innerHTML = `
            <span>Nome del passeggero:${name}</span> 
            <br>
            <span>i km da percorrere sono: ${km}</span>
            <br>
            <span>Nessuno sconto applicato</span>
            <br>
            <span>Il prezzo del biglietto e: ${prezzobiglietto.toFixed(2)}</span>
    `
    }
    document.getElementById('name').value = "";
    document.getElementById('km').value = "";
    document.getElementById('eta').value = "";


}else{
    ticket.innerHTML =`<span>Inserisci dei valori validi</span>`
}
}

)
