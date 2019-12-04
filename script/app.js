/*Globale variabelen*/
let daySelect, sols;
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
        //console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const LoadInfo = async function () {
    dataArray = [];
    let htmltemp = "";
    let htmlpres = "";
    let htmlwind = "";
    let html = "";
    let url = `https://api.nasa.gov/insight_weather/?api_key=8gDyVN1GWGv6QnHf3ZMxLwKvBQcQB4k4pteteai6&feedtype=json&ver=1.0`;
    let data = await fetchData(url);
    for (let sol of data.sol_keys) {
        dataArray.push(sol);
    }
    for (i = 0; i < dataArray.length; i++) {
        if (dataArray[i] == dataArray[0]){
            html += `<h3 class="u-margin__0 js-daySelected">` +  dataArray[i] + `</h3>`;
            let number = dataArray[i];
            htmltemp += `<h2 class="o-layout--align-center">` + Math.floor(data[number].AT.av) + `</h2>
            <div class="o-layout o-layout--justify-space-between">
                <p>C</p>
                <p>F</p>
            </div>`

            htmlwind += `<h2>` + Math.floor(data[number].HWS.av) + `</h2>
            <p>`+ data[number].WD[1].compass_point +`</p>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>Min</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>Max</p>
                </div>
            </div>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].HWS.mn) +`</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].HWS.mx) +`</p>
                </div>
            </div>`

            htmlpres += `<h2>` + Math.floor(data[number].PRE.av) + `</h2>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>Min</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>Max</p>
                </div>
            </div>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].PRE.mn) +`</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].PRE.mx) +`</p>
                </div>
            </div>`
        }else{
            html += `<h3 class="c-not-selected u-margin__0 js-daySelected">` +  dataArray[i] + `</h3>`;
        }
    };
    document.querySelector('.js-sols').innerHTML = html;
    document.querySelector('.js-temperature').innerHTML = htmltemp;
    document.querySelector('.js-pres').innerHTML = htmlpres;
    document.querySelector('.js-wind').innerHTML = htmlwind;

}

const infoByDay = async function (day) {
    let htmltemp = "";
    let htmlpres = "";
    let htmlwind = "";
    let html = "";
    let url = `https://api.nasa.gov/insight_weather/?api_key=8gDyVN1GWGv6QnHf3ZMxLwKvBQcQB4k4pteteai6&feedtype=json&ver=1.0`;
    let data = await fetchData(url);
    for (i = 0; i < dataArray.length; i++) {
        if (dataArray[i] == day){
            html += `<h3 class="u-margin__0 js-daySelected">` +  dataArray[i] + `</h3>`;
            let number = dataArray[i];
            htmltemp += `<h2 class="o-layout--align-center">` + Math.floor(data[number].AT.av) + `</h2>
            <div class="o-layout o-layout--justify-space-between">
                <p>C</p>
                <p>F</p>
            </div>`

            htmlwind += `<h2>` + Math.floor(data[number].HWS.av) + `</h2>
            <p>`+ data[number].WD[1].compass_point +`</p>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>Min</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>Max</p>
                </div>
            </div>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].HWS.mn) +`</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].HWS.mx) +`</p>
                </div>
            </div>`

            htmlpres += `<h2>` + Math.floor(data[number].PRE.av) + `</h2>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>Min</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>Max</p>
                </div>
            </div>
            <div class="o-layout o-layout--justify-space-between">
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].PRE.mn) +`</p>
                </div>
                <div class="o-layout__item u-1-of-2">
                    <p>`+ Math.floor(data[number].PRE.mx) +`</p>
                </div>
            </div>`
        }else{
            html += `<h3 class="c-not-selected u-margin__0 js-daySelected">` +  dataArray[i] + `</h3>`;
        }
    };
    document.querySelector('.js-sols').innerHTML = html;
    document.querySelector('.js-temperature').innerHTML = htmltemp;
    document.querySelector('.js-pres').innerHTML = htmlpres;
    document.querySelector('.js-wind').innerHTML = htmlwind;

}

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Dec 20, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second)


/*Event listeners*/

const addEventListeners = function () {
    sols.addEventListener('click', function (e) {
        infoByDay(e.target.innerText);
    });
};

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    daySelect = document.querySelector('.js-daySelected');
    sols = document.querySelector('.js-sols');
    LoadInfo();
    addEventListeners();
});
