var preloader = document.getElementById("loading");

const NUMBER_OF_COUNTRIES = 20;
let Total__Download;

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const url =
  "https://sourceforge.net/projects/projectsakura/files/stats/json?start_date=2020-01-01&end_date=2022-01-01";
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  const { countries, oses_with_downloads, oses, total } = data;

  for (let i = 0; i < NUMBER_OF_COUNTRIES; i++) {
    const tbody = document.querySelector(".countries");

    let tr = createNode("tr");
    let td1 = createNode("td");
    let td2 = createNode("td");
    let td3 = createNode("td");
    let span1 = createNode("span");
    td1.innerHTML = "#" + (i + 1);
    td2.innerHTML = `${countries[i][0]}`;
    td3.innerHTML = `${countries[i][1]}`;
    td1.style += "text-align:center";
    td2.style += "text-align:center";
    td3.style += "text-align:center";
    append(tbody, tr);
    append(tr, td1);
    append(tr, td2);
    append(tr, td3);
  }
  for (let i = 0; i < 5; i++) {
    const tbody = document.querySelector(".oses");
    let tr = createNode("tr");
    let td1 = createNode("td");
    let td2 = createNode("td");
    let td3 = createNode("td");
    let span1 = createNode("span");
    td1.innerHTML = "#" + (i + 1);
    td2.innerHTML = `${oses[i][0]}`;
    td3.innerHTML = `${oses[i][1]}`;
    append(tbody, tr);
    append(tr, td1);
    append(tr, td2);
    append(tr, td3);
  }
  const span = document.querySelector(".totaldownload");
  span.innerHTML = `${total}`;
  Total__Download = total;
}
getData();

const tbody = document.querySelector(".table_device");
const tbody2 = document.querySelector(".table_device_2");
tbody.innerHTML = "";
let count = 0;
const fulldata = data.devices.concat(data2.devices);
const fifty = fulldata.map(async (device) => {
  var tr = createNode("tr");
  // li.setAttribute("class", "search-li");
  try {
    const response = await fetch(
      "https://sourceforge.net/projects/projectsakura/files/" +
        device.alternate_name +
        "/stats/json?start_date=2020-01-01&end_date=2022-01-01"
    );
    const jsonData = await response.json();
    const percent = ((jsonData.total * 100) / Total__Download).toFixed(3);
    tr.innerHTML = `
        <tr>
            <td>${device.device_name}</td>
            <td class="${device.alternate_name}download">${jsonData.total}</td>
            <td class="percentage${device.alternate_name}">${percent}</td>
        </tr>
    `;

    const isSupported = device.isSupported;
    if (isSupported == 0) {
      count = count + 1;
    }
    returndata = [tr, isSupported];
    return returndata;
  } catch (e) {
    console.log(e.message);
    tr.innerHTML = `
        <tr>
            <td>${device.device_name}</td>
            <td class="${device.alternate_name}download">Loading...</td>
            <td class="percentage${device.alternate_name}">Percentage</td>
        </tr>
        `;
    const isSupported = device.isSupported;
    if (isSupported == 0) {
      count = count + 1;
    }
    returndata = [tr, isSupported];
    return returndata;
  }
});

const data123 = [];
Promise.allSettled(fifty)
  .then((results) =>
    results.forEach((result) => {
      if (result.value[1] == 0) {
        try {
          data123.push(result.value[0]);
          if (count == data123.length) {
            data123.sort((a, b) => {
              return +b.childNodes[3].innerHTML - +a.childNodes[3].innerHTML;
            });

            for (let i = 0; i < data123.length; i++) {
              tbody.appendChild(data123[i]);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    })
  )
  .then();

const fetched = data2.devices.map(async (device) => {
  var tr = createNode("tr");
  // li.setAttribute("class", "search-li");
  try {
    const response = await fetch(
      "https://sourceforge.net/projects/projectsakura/files/" +
        device.alternate_name +
        "/stats/json?start_date=2020-01-01&end_date=2022-01-01"
    );
    const jsonData = await response.json();
    const percent = ((jsonData.total * 100) / Total__Download).toFixed(3);
    tr.innerHTML = `
            <tr>
                <td>${device.device_name}</td>
                <td class="${device.alternate_name}download">${jsonData.total}</td>
                <td class="percentage${device.alternate_name}">${percent}</td>
            </tr>
        `;

    return tr;
  } catch (e) {
    console.log(e.message);
    tr.innerHTML = `
            <tr>
                <td>${device.device_name}</td>
                <td class="${device.alternate_name}download">Loading...</td>
                <td class="percentage${device.alternate_name}">Percentage</td>
            </tr>
            `;
    return tr;
  }
});

const data1234 = [];
Promise.allSettled(fetched)
  .then((results) =>
    results.forEach((result) => {
      try {
        data1234.push(result.value);
        if (fetched.length == data1234.length) {
          data1234.sort((a, b) => {
            return +b.childNodes[3].innerHTML - +a.childNodes[3].innerHTML;
          });
          for (let i = 0; i < data1234.length; i++) {
            tbody2.appendChild(data1234[i]);
          }
        }
      } catch (e) {
        console.log(e);
      }
    })
  )
  .then();
