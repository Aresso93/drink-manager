class GUI{

  constructor(){

  this.cellar = new Cellar();
  this.storage = new Storage();
   
  const data = this.storage.loadData();
  if (data){
    this.library.fromDbObjects(data);
  }
  
  console.log(data);

  }
 
  start(){
    
    while (true) {
        
      const firstChoice = prompt('Cosa vuoi fare? \n' +
        'Digita 1) Guarda la lista delle bevande\n' +
        'Digita 2) Aggiungi una bevanda\n' +
        'Digita 3) Rimuovi una bevanda\n' +
        'Digita 4 per chiudere il programma\n' +
        'Digita ora la tua scelta: ');

      

        if (firstChoice === '1') {
            this.showBeverages();
        } else if (firstChoice === '2'){
          const secondChoice = prompt('Digita 1 se vuoi inserire un vino\n'+
          'o digita 2 se vuoi inserire una birra');
          if (secondChoice === '1') {
            this.insertWine();
          } else if (secondChoice === '2'){
            this.insertBeer();
          } else {
            alert('Inserisci un numero corretto')
          }
        } else if (firstChoice === '3'){
            const thirdChoice = prompt('Digita 1 se vuoi rimuovere un vino\n'+
            'o digita 2 se vuoi rimuovere una birra');
            if (thirdChoice === '1') {
              this.deleteWine();
            } else if (thirdChoice === '2')
            this.deleteBeer();
        } else if (firstChoice === '4'){
            break;
        } else {
            alert('hai sbagliato ad inserire il numero');
        }
        
        
  
    }

  }

  insertWine(){

    const name = prompt('Inserisci il nome del vino');
    const maker = prompt('Inserisci il nome del produttore');
    const dop = prompt('Inserisci la data di produzione');
    const vol = prompt('Inserisci la gradazione alcolica del vino');
    const type = prompt('Inserisci il tipo del vino');
    const region = prompt('Inserisci il nome della zona');
    const vine = prompt('Inserisci il nome del vitigno');

    const wine = new Wine(name, maker, dop, vol, type, region, vine);
    this.cellar.addBeverage(wine);
    this.storage.saveData(this.cellar.beveragesArray);

  }

  insertBeer(){

    const name = prompt('Inserisci il nome della birra');
    const maker = prompt('Inserisci il nome del produttore');
    const dop = prompt('Inserisci la data di produzione');
    const vol = prompt('Inserisci la gradazione alcolica della birra');
    const type = prompt('Inserisci il tipo della birra');
    const malt = prompt('Inserisci il tipo di malto della birra');

    const beer = new Beer(name, maker, dop, vol, type, malt);
    this.cellar.addBeverage(beer);
    this.storage.saveData(this.cellar.beveragesArray);

  }

  deleteWine(){
    const humanIndex = prompt('Inserisci il numero del vino da eliminare');
    const index = humanIndex -1;
    this.cellar.deleteBeverage(index);
    this.storage.saveData(this.cellar.beveragesArray);
  }

  deleteBeer(){
    const humanIndex = prompt('Inserisci il numero della birra da eliminare');
    const index = humanIndex -1;
    this.cellar.deleteBeverage(index);
    this.storage.saveData(this.cellar.beveragesArray);
  }


  showBeverages(){

    const allBeverages = this.cellar.getAllBeverages();
    alert(allBeverages);

  }

  addBeverage(){

    const allBeverages = this.cellar.getAllBeverages();
    alert(allBeverages);

  }


}