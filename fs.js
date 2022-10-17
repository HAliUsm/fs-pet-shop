var fs = require('fs');

switch(process.argv[2]){
    case 'read': 
        fs.readFile('pets.json', 'utf-8', function(error, data){           
            var petJson = JSON.parse(data);
            let index = process.argv[3];
            if(error){
                console.log(error);
            }else{
                if(index === undefined){
                    console.log(petJson);
                } else if(index < 0 || index >= petJson.length){
                    console.log('Usage: node pets.js read INDEX');
                }else{
                    console.log(petJson[index]);
                }
            }
            
        })   
        break; 
    default:
        console.log('Usage: node pets.js [read | create | update | destroy]');
}