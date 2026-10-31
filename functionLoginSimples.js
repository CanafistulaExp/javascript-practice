function isValid (username, password){
    
    if (username == "admin"){

        console.log("true");
    
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
