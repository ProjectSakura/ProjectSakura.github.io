console.log("##########  PROJECT SAKURA DOWNLOAD PAGE, IDK WHY YOU CAME TO THE CONSOLE BUT HAVE FUN. ##########");

const url1 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/X00T.json";
async function getData1() {
    const response = await fetch(url1);
    const data = await response.json();
    const li1 = document.querySelector('#ans1');
    const li2 = document.querySelector('#ans2');
    const li3 = document.querySelector('#ans3');

    const button1 = document.querySelector('.buttton1');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;
}
getData1();
const url2 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/angler.json";
async function getData2() {
    const response = await fetch(url2);
    const data = await response.json();
    const li1 = document.querySelector('#ans4');
    const li2 = document.querySelector('#ans5');
    const li3 = document.querySelector('#ans6');
    const button1 = document.querySelector('.buttton2');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;
}
getData2();
const url3 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/ocean.json";
async function getData3() {
    const response = await fetch(url3);
    const data = await response.json();
    const li1 = document.querySelector('#ans16');
    const li2 = document.querySelector('#ans17');
    const li3 = document.querySelector('#ans18');
    const button1 = document.querySelector('.buttton6');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;
}
getData3();

const url4 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/riva.json";
async function getData4() {
    const response = await fetch(url4);
    const data = await response.json();
    const li1 = document.querySelector('#ans40');
    const li2 = document.querySelector('#ans41');
    const li3 = document.querySelector('#ans42');
    const button1 = document.querySelector('.buttton14');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;


}
getData4();

const url5 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/mido.json";
async function getData5() {
    const response = await fetch(url5);
    const data = await response.json();
    const li1 = document.querySelector('#ans43');
    const li2 = document.querySelector('#ans44');
    const li3 = document.querySelector('#ans45');
    const button1 = document.querySelector('.buttton15');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;


}
getData5();

const url6 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/wayne.json";
async function getData6() {
    const response = await fetch(url6);
    const data = await response.json();
    const li1 = document.querySelector('#ans34');
    const li2 = document.querySelector('#ans35');
    const li3 = document.querySelector('#ans36');
    const button1 = document.querySelector('.buttton12');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData6();

const url7 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/beryllium.json";
async function getData7() {
    const response = await fetch(url7);
    const data = await response.json();
    const li1 = document.querySelector('#ans37');
    const li2 = document.querySelector('#ans38');
    const li3 = document.querySelector('#ans39');
    const button1 = document.querySelector('.buttton13');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;


}
getData7();

const url16 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/violet.json";
async function getData16() {
    const response = await fetch(url16);
    const data = await response.json();
    const li1 = document.querySelector('#ans46');
    const li2 = document.querySelector('#ans47');
    const li3 = document.querySelector('#ans48');
    const button1 = document.querySelector('.buttton16');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;


}
getData16();

const url8 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/dreamlte.json";
async function getData8() {
    const response = await fetch(url8);
    const data = await response.json();
    const li1 = document.querySelector('#ans25');
    const li2 = document.querySelector('#ans26');
    const li3 = document.querySelector('#ans27');
    const button1 = document.querySelector('.buttton9');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData8();

const url9 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/dream2lte.json";
async function getData9() {
    const response = await fetch(url9);
    const data = await response.json();
    const li1 = document.querySelector('#ans28');
    const li2 = document.querySelector('#ans29');
    const li3 = document.querySelector('#ans30');
    const button1 = document.querySelector('.buttton10');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData9();

const url10 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/greatlte.json";
async function getData10() {
    const response = await fetch(url10);
    const data = await response.json();
    const li1 = document.querySelector('#ans31');
    const li2 = document.querySelector('#ans32');
    const li3 = document.querySelector('#ans33');
    const button1 = document.querySelector('.buttton11');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData10();

// meizu
const url11 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/m1882.json";
async function getData11() {
    const response = await fetch(url11);
    const data = await response.json();
    const li1 = document.querySelector('#ans10');
    const li2 = document.querySelector('#ans11');
    const li3 = document.querySelector('#ans12');
    const button1 = document.querySelector('.buttton4');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData11();

// leeco
const url12 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/s2.json";
async function getData12() {
    const response = await fetch(url12);
    const data = await response.json();
    const li1 = document.querySelector('#ans7');
    const li2 = document.querySelector('#ans8');
    const li3 = document.querySelector('#ans9');
    const button1 = document.querySelector('.buttton3');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData12();

// meizu
const url13 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/m1928.json";
async function getData13() {
    const response = await fetch(url13);
    const data = await response.json();
    const li1 = document.querySelector('#ans13');
    const li2 = document.querySelector('#ans14');
    const li3 = document.querySelector('#ans15');
    const button1 = document.querySelector('.buttton5');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData13();

// realme
const url14 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/CPH1859.json";
async function getData14() {
    const response = await fetch(url14);
    const data = await response.json();
    const li1 = document.querySelector('#ans22');
    const li2 = document.querySelector('#ans23');
    const li3 = document.querySelector('#ans24');
    const button1 = document.querySelector('.buttton8');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData14();

// sanders
const url15 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/sanders.json";
async function getData15() {
    const response = await fetch(url15);
    const data = await response.json();
    const li1 = document.querySelector('#ans19');
    const li2 = document.querySelector('#ans20');
    const li3 = document.querySelector('#ans21');
    const button1 = document.querySelector('.buttton7');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData15();

// Merlin
const url17 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/merlin.json";
async function getData17() {
    const response = await fetch(url17);
    const data = await response.json();
    const li1 = document.querySelector('#ans50');
    const li2 = document.querySelector('#ans51');
    const li3 = document.querySelector('#ans52');
    const button1 = document.querySelector('.buttton17');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData17();

// River
const url19 = "https://raw.githubusercontent.com/ProjectSakura/OTA/10/river.json";
async function getData18() {
    const response = await fetch(url19);
    const data = await response.json();
    console.log(data.response[0]);
    const li1 = document.querySelector('#ans53');
    const li2 = document.querySelector('#ans54');
    const li3 = document.querySelector('#ans55');
    // console.log(li1);
    const button1 = document.querySelector('.buttton19');
    li1.innerHTML = data.response[0].filename;
    li2.innerHTML = Math.ceil(data.response[0].size / 1024 / 1024) + "MB";
    li3.innerHTML = data.response[0].id;
    button1.href = data.response[0].url;

}
getData18(); 
