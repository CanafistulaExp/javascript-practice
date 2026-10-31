function isValid (username, password){
   
    //Para este exercício, username "admin" entra sem senha.
    if (username == "admin"){

        console.log("true");

    //O username "user", só pode logar com password "qweasd".    
    } else if (username == "user") {
        if (password == "qweasd"){

            console.log("true");
 
        } else {

            console.log("false");

        }
    } else {

        console.log("false");
        
    }
}

isValid("user","");
