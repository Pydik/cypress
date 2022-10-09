export function randomInpute(){
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        
    return text;
    }

export function randomEmail(){
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    
    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
            
    return text + '@gmail.com';
    }
          
