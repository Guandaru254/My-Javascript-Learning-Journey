let p = new Promise ((resolve, reject) => {
    let a = 1 + 1
    if ( a == 2){
        resolve ('WORKING')
    } else {
        reject ('NOT WORKING')
    }
})

p.then((message) => {
    console.log ('This is ' + message)
})
p.catch ((message) => {
    console.log ('This is ' + message)
}) 
