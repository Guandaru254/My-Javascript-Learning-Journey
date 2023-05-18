fetch ('https://api.twitter.com/data')

.then (
    response => response.json())
.then (
    data => {
        //Handle the data received from the server
        console.log (data);
    })
.catch (
    error => {
        //Handle any error encountered during the request
        console.error ('Error:');
    });