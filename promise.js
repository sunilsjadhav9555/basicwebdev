const promiseOne = new Promise(function (resolve,reject)
{
    setTimeout(function()
{
    console.log('Async task is completed');
    resolve()
}, 1000)
})
promiseOne.then(function (){
    console.log("promise consumed");
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
})
const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve({username:"chai",email:"coffee@example.com"})
    }, 1000)

})

promiseThree.then(function(user){
    console.log(user);
})
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function (){
        let error = true
        if (!error){
            resolve({username:"sunil", password:"123"})
        }
        else
        {
            reject('ERROR:Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()