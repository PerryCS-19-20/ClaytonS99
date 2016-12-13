
function buildMap(x){
    var creatList = document.createElement("ul")
    var body = document.getElementById(x);
    body.appendChild(createList);
    
    var list1 = document.createElement("li");
    createList.appendChild(list1);
    var a1 = document.createElement("a")
    a1.textContent = "Home";
    a1.href = "index.html";
    list1.appendChild(a1);
    
    var list2 = document.createElement("li");
    createList.appendChild(list2);
    var a2 = document.createElement("a")
    a2.textContent = "Biography"
    a2.href = "bio.html";
    list2.appendChild(a2);
    
    var list3 = document.createElement("li");
    createList.appendChild(list3);
    list3.textContent = "Class Projects";
    
    var createlist2 = document.createElement("ul");
    createList.appendChild(createList2);
    
}