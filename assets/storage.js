var searchList = JSON.parse(localStorage.getItem("saved-searches")) || [];
var ul = document.getElementById ("saved-searches");

for (var i =0; i < searchList.length; i++) {
    var li = document.createElement ("li");
    li.textContent = searchList[i]
    ul.append(li);
}
