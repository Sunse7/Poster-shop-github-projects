const dbFile = "../files/posters.json";


getJsonData();

function getJsonData() {
    fetch(dbFile)
    .then(data => data.json())
    .then(data => console.log(data));
}