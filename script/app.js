/*Globale variabelen*/
let daySelect;
let dataArray = [];
let customHeaders = new Headers();
customHeaders.append('Accept', 'application/json');

/*Get functies*/
const fetchData = function (url) {
    return fetch(url, { headers: customHeaders })
        .then(r => r.json()) //Arrow vervangt de return
        .then(data => data); //Het is pas deze data die wordt gereturnd
}

const getData = async function (url) {
    try {
        let data = await fetchData(url);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const GetSols = async function () {
    dataArray = [];
    let html = "";
    let url = `https://api.nasa.gov/insight_weather/?api_key=8gDyVN1GWGv6QnHf3ZMxLwKvBQcQB4k4pteteai6&feedtype=json&ver=1.0`;
    let data = await fetchData(url);
    for (let sol of data.sol_keys) {
        dataArray.push(sol);
    }
    for (i = 0; i < dataArray.length; i++) {
        html += `<button class="js-daySelected">` +  dataArray[i] + `</button>`;
    };
    document.querySelector('.js-sols').innerHTML = html;

}

/*Event listeners*/

const addEventListeners = function () {
    if (daySelect){
        daySelect.addEventListener("click", () => { console.log(daySelect); console.log(this) }, false);
        console.log(daySelect);
    }
};



function handleFloatingLabel() {
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    daySelect = document.querySelector('.js-daySelected');
    GetSols();
    addEventListeners();
});
