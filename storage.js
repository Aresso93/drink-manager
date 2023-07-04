class Storage{


constructor(){

}


saveData(data){

    const dataString = JSON.stringify(data);
    localStorage.setItem('Beverages', dataString);


}

loadData(){

    const dataString = localStorage.getItem('Beverages')

    if (dataString) {

        const data = JSON.parse(dataString);
        return data;

    }

    return null;

}


}