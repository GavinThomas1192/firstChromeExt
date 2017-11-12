document.addEventListener('DOMContentLoaded', function () {
    let listJobs = document.getElementById('openJobs');
    let div = document.getElementById('div');
    let imageSRC = document.getElementById('img');
    let xhr = new XMLHttpRequest();
    let finalURL = ''
    let googleBackground = document.getElementById('body#gsr.hp.vasq');

    listJobs.addEventListener('click', function () {


        xhr.open("GET", "https://pixabay.com/api/?key=7017392-43a5081998cb4ca1680a3ba8e&q=&image_type=photo&pretty=true&orientation=horizontal&min_width=1440&order=popular&per_page=10", false);
        xhr.send();

        let data = xhr.response;

        parsedData = JSON.parse(data);
        div.innerHTML = JSON.stringify(parsedData.hits[0].webformatURL)

        // googleBackground.style.backgroundImage = "url(finalURL)"
        googleBackground.style.backgroundColor = "red";

        finalURL = JSON.stringify(parsedData.hits[0].webformatURL)



    })

});
// "https://pixabay.com/get/eb3cb30828f0013ed95c4518b74b4697e474ebd704b0144095f4c57fafedb7_640.jpg"
