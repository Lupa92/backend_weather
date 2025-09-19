function checkBody(body, array){
    let result1;
    let result2;
    let finalresult;

    if(array.length !== Object.keys(body).length){
        return false;
    }

    for (const champ of array){
        if(!body[champ]){
            return false;
        } 
    }
    
    return true;

}

module.exports={checkBody};