const logs = [
    ["29/04/2022", "Inauguração", "Website pessoal para registrar alguns dos meus projetos e afazeres."],
    ["01/04/2022", "Projetos e Músicas!", "a seção dos projetos foi finalizada, junto com meu catalogo de músicas."]
];

for (let i = 0; i < logs.length; i++) {

    new_log(logs[i][0], logs[i][1], logs[i][2]);

}

function new_log(date, title, desc) {

    var box = document.createElement("div");
    box.className = "box";

    var d = document.createElement("div");
    d.className = "date";
    var dateTxt = document.createTextNode(date);
    d.appendChild(dateTxt);

    var ttl = document.createElement("div");
    ttl.className = "title";
    var ttlTxt = document.createElement("h2");
    ttlTxt.innerHTML = title;
    ttl.appendChild(ttlTxt);

    var dsc = document.createElement("div");
    dsc.className = "desc";
    var dscTxt = document.createElement("p");
    dscTxt.innerHTML = desc;
    dsc.appendChild(dscTxt);

    box.appendChild(d);
    box.appendChild(ttl);
    box.appendChild(dsc);

    document.getElementById("links").appendChild(box);
    
}