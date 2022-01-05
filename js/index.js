console.log("plik zewnetrzny działa")

document.getElementById("btn").addEventListener("click", example);

function example(){
    fetch("/posts", {
        method: 'GET'
    }).then( function (response){
        if (response) {
            response.json().then( function(data){
                console.log(data)
                document.getElementById("danePobrane1").textContent = data[0].name;
                document.getElementById("danePobrane2").textContent = data[0].rank;
            });
            console.log("Dane zostały dodane")
        return;
        }
        throw new Error("Request failed");
    })
    .catch( function (error) {
        console.log(error)
    })
}