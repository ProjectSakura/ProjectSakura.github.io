var preloader = document.getElementById('loading');


const NUMBER_OF_COUNTRIES = 50;

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const url =
    "https://sourceforge.net/projects/projectsakura/files/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    const {
        countries,
        oses_with_downloads,
        oses,
        total
    } = data;

    for (let i = 0; i < NUMBER_OF_COUNTRIES; i++) {
        const tbody = document.querySelector(".countries")
        
        let tr = createNode('tr');
        let td1 = createNode('td');
        let td2 = createNode('td');
        let td3 = createNode('td');
        let span1 = createNode('span');
        td1.innerHTML = '#' + (i + 1);
        td2.innerHTML = `${countries[i][0]}`;
        td3.innerHTML = `${countries[i][1]}`;
        td1.style += "text-align:center";
        td2.style += "text-align:center";
        td3.style += "text-align:center";
        append(tbody, tr)
        append(tr, td1)
        append(tr, td2)
        append(tr, td3)
    }
    for (let i = 0; i < 5; i++) {
        const tbody = document.querySelector(".oses")
        let tr = createNode('tr');
        let td1 = createNode('td');
        let td2 = createNode('td');
        let td3 = createNode('td');
        let span1 = createNode('span');
        td1.innerHTML = '#' + (i + 1);
        td2.innerHTML = `${oses[i][0]}`;
        td3.innerHTML = `${oses[i][1]}`;
        append(tbody, tr)
        append(tr, td1)
        append(tr, td2)
        append(tr, td3)
    }
    const span = document.querySelector(".totaldownload")
    span.innerHTML = `${total}`
}
getData();


// <!--X00T-->        
const url1 =
    "https://sourceforge.net/projects/projectsakura/files/X00T/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getAsusData() {
    const response = await fetch(url1);
    const data1 = await response.json();
    const {
        total
    } = data1;

    const span = document.querySelector(".x00tdownload")
    span.innerHTML = `${total}`
}
getAsusData();

// <!--Samsung-->

const url2 =
    "https://sourceforge.net/projects/projectsakura/files/dreamlte/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function gets8Data() {
    const response = await fetch(url2);
    const data2 = await response.json();
    const {
        total
    } = data2;

    const span = document.querySelector(".s8download")
    span.innerHTML = `${total}`
}
gets8Data();

const url3 =
    "https://sourceforge.net/projects/projectsakura/files/dream2lte/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function gets8pData() {
    const response = await fetch(url3);
    const data3 = await response.json();
    const {
        total
    } = data3;

    const span = document.querySelector(".s8pdownload")
    span.innerHTML = `${total}`
}
gets8pData();

const url4 =
    "https://sourceforge.net/projects/projectsakura/files/greatlte/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getnote8Data() {
    const response = await fetch(url4);
    const data4 = await response.json();
    const {
        total
    } = data4;

    const span = document.querySelector(".note8download")
    span.innerHTML = `${total}`
}
getnote8Data();


// <!--Nexus-->
const url10 =
    "https://sourceforge.net/projects/projectsakura/files/angler/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getGoogleData() {
    const response2 = await fetch(url10);
    const data5 = await response2.json();
    let total = data5.total;
    const span = document.querySelector(".nexusdownload")
    span.innerHTML = `${(total)}`;

}
getGoogleData();

// <!--Xiaomi-->
const url5 =
    "https://sourceforge.net/projects/projectsakura/files/riva/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getrivaData() {
    const response = await fetch(url5);
    const data4 = await response.json();
    const {
        total
    } = data4;

    const span = document.querySelector(".rivadownload")
    span.innerHTML = `${total}`
}
getrivaData();

const url6 =
    "https://sourceforge.net/projects/projectsakura/files/Mido/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getmidoData() {
    const response = await fetch(url6);
    const data4 = await response.json();
    const {
        total
    } = data4;

    const span = document.querySelector(".midodownload")
    span.innerHTML = `${total}`
}
getmidoData();

const url7 =
    "https://sourceforge.net/projects/projectsakura/files/wayne/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getmi6xData() {
    const response = await fetch(url7);
    const data4 = await response.json();
    const {
        total
    } = data4;

    const span = document.querySelector(".mi6xdownload")
    span.innerHTML = `${total}`
}
getmi6xData();

const url9 =
    "https://sourceforge.net/projects/projectsakura/files/beryllium/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getberyData() {
    const response = await fetch(url9);
    const data4 = await response.json();
    const {
        total
    } = data4;

    const span = document.querySelector(".pocof1download")
    span.innerHTML = `${total}`
}
getberyData();

const url13 =
    "https://sourceforge.net/projects/projectsakura/files/violet/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getVioletData() {
    const response = await fetch(url13);
    const data4 = await response.json();
    const {
        total
    } = data4;

    const span = document.querySelector(".violetdownload")
    span.innerHTML = `${total}`
}
getVioletData();

// <!--Moto-->
const url8 =
    "https://sourceforge.net/projects/projectsakura/files/ocean/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getMotoData() {
    const response5 = await fetch(url8);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".oceandownload")
    span.innerHTML = `${(total)}`;

}
getMotoData();

const url12 =
    "https://sourceforge.net/projects/projectsakura/files/sanders/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getSandersData() {
    const response5 = await fetch(url12);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".sandersdownload")
    span.innerHTML = `${(total)}`;
}
getSandersData();

// meizu
const url11 =
    "https://sourceforge.net/projects/projectsakura/files/M1882/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getm1882Data() {
    const response5 = await fetch(url11);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".m1882download")
    span.innerHTML = `${(total)}`;

}
getm1882Data();

// leeco
const url14 =
    "https://sourceforge.net/projects/projectsakura/files/s2/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getleecoData() {
    const response5 = await fetch(url14);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".s2download")
    span.innerHTML = `${(total)}`;

}
getleecoData();

//realme
const url15 =
    "https://sourceforge.net/projects/projectsakura/files/CPH1859/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getcph1859Data() {
    const response5 = await fetch(url15);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".cph1859download")
    span.innerHTML = `${(total)}`;

}
getcph1859Data();

//meizu16t
const url16 =
    "https://sourceforge.net/projects/projectsakura/files/M1928/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getm1928Data() {
    const response5 = await fetch(url16);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".m1928download")
    span.innerHTML = `${(total)}`;

}
getm1928Data();

//meizu16x
const url17 =
    "https://sourceforge.net/projects/projectsakura/files/M1872/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getm1872Data() {
    const response5 = await fetch(url17);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".m1872download")
    span.innerHTML = `${(total)}`;

}
getm1872Data();

//merlin
const url18 =
    "https://sourceforge.net/projects/projectsakura/files/merlin/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getmerlinData() {
    const response5 = await fetch(url18);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".merlindownload")
    span.innerHTML = `${(total)}`;

}
getmerlinData();

    //river
const url19 =
    "https://sourceforge.net/projects/projectsakura/files/river/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getriverData() {
    const response5 = await fetch(url19);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".riverdownload")
    span.innerHTML = `${(total)}`;

}
getriverData();

//whyred
const url20 =
    "https://sourceforge.net/projects/projectsakura/files/whyred/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getwhyredData() {
    const response5 = await fetch(url20);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".whyreddownload")
    span.innerHTML = `${(total)}`;

}
getwhyredData();

//oneplus3
const url21 =
    "https://sourceforge.net/projects/projectsakura/files/oneplus3/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getoneplus3Data() {
    const response5 = await fetch(url21);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".oneplus3download")
    span.innerHTML = `${(total)}`;

}
getoneplus3Data();
const url22 =
    "https://sourceforge.net/projects/projectsakura/files/ginkgo/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getredmiNote8Data() {
    const response5 = await fetch(url22);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".note8tdownload")
    span.innerHTML = `${(total)}`;

}
getredmiNote8Data();
const url23 =
    "https://sourceforge.net/projects/projectsakura/files/sailfish/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getPixelData() {
    const response5 = await fetch(url23);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".pixeldownload")
    span.innerHTML = `${(total)}`;

}
getPixelData();
const url24 =
    "https://sourceforge.net/projects/projectsakura/files/jasmine/stats/json?start_date=2020-01-01&end_date=2021-01-01";
async function getA2Data() {
    const response5 = await fetch(url23);
    const data5 = await response5.json();
    let total = data5.total;
    const span = document.querySelector(".jasminedownload")
    span.innerHTML = `${(total)}`;

}
getA2Data();