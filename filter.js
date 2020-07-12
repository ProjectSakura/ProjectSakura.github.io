
function filter() {
    var input = document.getElementById('search123');
    var FilterValue = input.value.toUpperCase();

    var ul = document.getElementById('search-ul');
    var li = ul.getElementsByClassName('search-li');
    console.log(li);
    for (let i = 0; i < li.length; i++) {
        // console.log(li[i].getElementsByTagName('div')[0])
        var a = li[i].getElementsByTagName('div')[0];
        console.log(a.innerText);
        if (a.innerText.toUpperCase().indexOf(FilterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
