const ul1 = document.querySelector("#search-ul1");
ul1.innerHTML = "";

var mainbutton1 = $(".mainbutton123");
mainbutton1.click(async () => {
  async function showmodal12() {
    $("#testmodal1").modal("show");
    const rating = document.querySelector(".rating1");
    rating.innerText = ``;
    const mobile_name = document.querySelector(".mobile_name1");
    mobile_name.innerText = "SOURCE CHANGELOG";

    const url1 =
      "https://raw.githubusercontent.com/ProjectSakura/OTA/11/changelog/changelog.txt";
    const response = await fetch(url1);

    const data = await response.text();
    const para = document.querySelector(".data-modal1");
    para.innerText = data;
    document.querySelector(".modal_body1").style.marginTop = "80px";
  }
  await showmodal12();
});

const sixty = data2.devices.map(async (device) => {
  var li = document.createElement("li");
  li.setAttribute("class", "search-li");
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ProjectSakura/OTA/11/" +
        device.alternate_name +
        ".json"
    );
    const jsonData = await response.json();
    li.innerHTML = `
    
    <div class="collapsible-header collapsible-noborder sakura-lighter-bg" style="width:100%;">
        <i class="fa fa-mobile-alt" aria-hidden="true"></i>
        ${device.device_name} | ${device.alternate_name.toUpperCase()} ${
      device.IsDropped
    }
    </div>
        
    <div class="collapsible-body collapsible-noborder sakura-midlight-bg">
        <span>Maintainer:</span>
        <div class="chip sakura-lighter-bg" style="margin-left:4px">${
          device.name
        }</div><br />
        <div class="skills" id="li2">
            <h6>Build Information</h6>
            <ul>
                <li class="skills">${jsonData.response[0].filename}</li>
                <li class="skills">${
                  Math.ceil(jsonData.response[0].size / 1024 / 1024) + "MB"
                }</li>
                <li class="skills">${jsonData.response[0].id}</li>
            </ul>
        </div>
        <h6 class="unsupported">${device.droppedMessage}</h6>
        <button class="primary download">
            <a href="${
              jsonData.response[0].url
            }" onClick="helllo1()">Download</a>

        </button>
        <button class="primary download show-modal1 show-modal__${
          device.alternate_name
        }" >
            ChangeLog
        </button>
    </div>
    `;

    return li;
  } catch (e) {
    console.log(e.message);
    li.innerHTML = `
    <div class="collapsible-header collapsible-noborder sakura-lighter-bg" style="width:100%;">
        <i class="fa fa-mobile-alt" aria-hidden="true"></i>
        ${device.device_name} | ${device.alternate_name.toUpperCase()} ${
      device.IsDropped
    }
    </div>
        
    <div class="collapsible-body collapsible-noborder sakura-midlight-bg">
        <span>Maintainer:</span>
        <div class="chip sakura-lighter-bg" style="margin-left:4px">${
          device.name
        }</div><br />
        <h3>Not available right now,We are working on it</h3>
        <button class="primary download">
            <a href="" onClick="helllo1()">Download</a>

        </button>
        <button class="primary download show-modal1 show-modal__${
          device.alternate_name
        }" >
            ChangeLog
        </button>
    </div>
        `;
    return li;
  }
});

Promise.allSettled =
  Promise.allSettled ||
  ((promises) =>
    Promise.all(
      promises.map((p) =>
        p
          .then((v) => ({
            status: "fulfilled",
            value: v,
          }))
          .catch((e) => ({
            status: "rejected",
            reason: e,
          }))
      )
    ));

Promise.allSettled(sixty).then((results) =>
  results.forEach((result) => {
    try {
      ul1.appendChild(result.value);
    } catch (e) {
      console.log(e);
    }
  })
);

const myFunction2 = setInterval(() => {
  var btn2 = document.querySelectorAll(".show-modal1");

  btn2.forEach(async (item, index) => {
    item.addEventListener("click", async () => {
      async function showmodal1() {
        $("#testmodal1").modal("show");

        const rating = document.querySelector(".rating1");
        rating.innerText = ``;
        const mobile_name = document.querySelector(".mobile_name1");
        mobile_name.innerText = data2.devices[index].device_name;
        const response1 = await fetch(
          "https://raw.githubusercontent.com/ProjectSakura/OTA/11/changelog/changelog_" +
            data2.devices[index].alternate_name +
            ".txt"
        );
        const data1 = await response1.text();
        const para = document.querySelector(".data-modal1");
        para.innerText = data1;
        document.querySelector(".modal_body1").style.marginTop = "80px";
      }
      await showmodal1();
    });
  });
}, 5000);


