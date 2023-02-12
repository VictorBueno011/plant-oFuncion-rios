const input = document.querySelectorAll(".nome");
const btnAdd=document.getElementById("adicionar");

// const select = document.getElementById("opções");
// const Mes = select.options[select.selectedIndex].text;
//  console.log(Mes);
let Mes;
const select = document.getElementById("opções");
select.addEventListener("change", function() {
  Mes = select.options[select.selectedIndex].text;
  console.log(Mes)
});

btnAdd.addEventListener("click", function(e){
    criarFuncionário();
    console.log(Mes);
})
function criarFuncionário(){
var dias = document.createElement("div");
dias.classList.add("dias");

var p = document.createElement("h3");
p.innerText = Mes
dias.appendChild(p);

var Input = document.createElement("input");
Input.type = "date";
Input.id = "";
Input.name = "";
dias.appendChild(Input);

var quadrado = document.createElement("div");
quadrado.classList.add("quadrado");
dias.appendChild(quadrado);

var select = document.createElement("select");
select.id = "";
select.name = "";
quadrado.appendChild(select);

var option = document.createElement("option");
option.value = "";
option.innerText = "";
select.appendChild(option);

var option2 = document.createElement("option");
option2.value = "";
option2.innerText = "Edimara";
select.appendChild(option2);

var option3 = document.createElement("option");
option3.value = "";
option3.innerText = "ADRIANE";
select.appendChild(option3);

var option4 = document.createElement("option");
option4.value = "";
option4.innerText = "IRÍS";
select.appendChild(option4);

document.body.appendChild(dias);

}


  document.getElementById("imprimir").addEventListener("click", function() {
    print()
  });
 
