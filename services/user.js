

let allUsers = [
    {
        id: 0,
        name:"Demo",
        email:"Demo@example.com",
        phone:"91234341918",
        password:"abcde"
    }
    
]

const getUserData = (name)=>{
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].name === name){
            return allUsers[i]
        }
    }
}
const updateUserData = (emailInToken,name,email,phone)=>{
    console.log(allUsers[1]);
    console.log(emailInToken);  
    for(let i=0;i<allUsers.length;i++){
        console.log(allUsers[i].email,emailInToken);
        if(allUsers[i].email == emailInToken){
            allUsers[i].name = name
            allUsers[i].email = email
            allUsers[i].phone = phone
            return allUsers[i]
        }
              
        
    }
    
}


const registerUser = (name,email,phone,password)=>{
    const id = allUsers.length
    let user = {
        id: id,
        name: name,
        email: email,
        phone: phone,
        password:password
    }
    allUsers.push(user)
    console.log(allUsers.length);
}

const loginUser = (email,password)=>{
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].email === email && allUsers[i].password === password){
        {
                console.log(allUsers[i]);
                return allUsers[i]
            }
        }
    }
}

const updatePassword = (email,password)=>{
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].email === email){
            allUsers[i].password = password
        }
    }
    
}

module.exports = {
    registerUser,
    loginUser,
    getUserData,
    updateUserData,
    updatePassword
}