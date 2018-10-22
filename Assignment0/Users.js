function addUser(userName1, password1){
        var temp = false;
        for (i=0; i<Users.length; i++){
            if (userName1 == Users[i].username){
                temp = true;
            } 
        
        }
        if (temp != true){
        Users.push({username:userName1, password: password1})
        sessionStorage.setItem('Users',JSON.stringify(Users))
    }
    updateUser()
    }

    function removeUser(username){
        console.log(2)
        for (i=0; i<Users.length; i++){
            if (username == Users[i].username){
                Users.splice(i,1)
                sessionStorage.removeItem('Users')
                sessionStorage.setItem('Users',JSON.stringify(Users))
            }
        }
        updateUser()
    }
    function adminCheck(username,password)
    {
        for (i=0; i<Admins.length;i++){
            if(username == Admins[i].username && password == Admins[i].password){
                found = true;
                document.location= "admin-main.html";
 
            } 
            
        }
    }
    function userCheck(username, password){
        for (i=0; i<Users.length;i++){
            if(username == Users[i].username && password == Users[i].password){
                found = true;
                document.location = "user-main.html";
            }
        } 
    }
    
    function requestChecker(username,password) {
        var found = false;
        for (j=0; j<Requests.length; j++){
            for (i=0; i<Users.length; i++){
                if(Users[i].usernmane ==Requests[j].username){
                    found= true;

            }
}
        }
        for (j=0; j<Requests.length; j++){
            for (i=0; i<Admins.length; i++){
                if(Admins[i].usernmane ==Requests[j].username){
                    found = true;
            }
}
        }
        if (found ==false){
            addRequest(username, password)
        } else {
            window.alert('Username already exists')
        }
    }

    function removeRequest(username, password){
        for (i=0; i<Requests.length; i++){
            if (username== Request[i].username){
                Requests.splice(i,1)
                sessionStorage.removeItem('Requests')
                sessionStorage.setItem('Requests', JSON.stringify(Requests))
            }
        }
        updateRequest()
    }
    function addRequest(userName1,password1){
        var temp = false;
        for (i=0; i<Requests.length; i++){
            if (userName1 == Requests[i].username){
                temp = true;
            } 
        
        }
        if (temp != true){
        Requests.push({username:userName1, password: password1})
        sessionStorage.setItem('Requests', JSON.stringify(Requests))
        updateRequest()
    }
    }

    function updateUser(){
        userList = []
        for (i=0; i<Users.length;i++){
            userList.push(Users[i].username)

        } 
        return(userList.toString())
        }
    function updateRequest(){
       requestList = []
       if (Requests.length > 0){
        for (i=0; i<Requests.length;i++){
            requestList.push("Username: "+Requests[i].username+" Password: "+Requests[i].password+"\n")
    } 
    return(requestList.toString())} else{
        window.alert("There are no requests")
    }
}

     var Users = sessionStorage.getItem('Users') ? JSON.parse(sessionStorage.getItem('Users')) : [{
        username:"Carlos",
        password:"UT"
    },
    {
        username:"Isai",
        password:"40acres"
    },
    {
        username:"Robert",
        password:"hookem16"
    }]
    var Admins = sessionStorage.getItem('Admins') ? JSON.parse(sessionStorage.getItem('Admins')) : [{
        username:"Sam",
        password:"longhorns"
    },
    {
        username: "Connor",
        password:"vyoung05"
    },
    {
        username:"Evan",
        password:"bevo"
    }]   

    var Requests = sessionStorage.getItem('Requests') ? JSON.parse(sessionStorage.getItem('Requests')) : []

    sessionStorage.setItem('Users', JSON.stringify(Users))
    sessionStorage.setItem('Requests', JSON.stringify(Requests))
    sessionStorage.setItem('Admins', JSON.stringify(Admins))