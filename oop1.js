const user ={ 
    username: "sunil",
    logincount:8,
    signedin:true,
    getUserDetails: function()
    {
       // console.log("got user details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);

    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

function user1(username1,loginCount,isLoggedIn)
{
    this.username1 = username1;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

  //  this.greeting = function (){
    //    console.log(`welcome ${this.username1}`);
    //}
    return this
}

const userOne = new user1("sunil", 12, true)
//const userTwo = new user1("chai or coffee", 11, false)
console.log(userOne);
//console.log(userTwo);

console.log("sunil");