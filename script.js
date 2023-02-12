const input = document.querySelectorAll(".nome");
input.forEach((nome)=>{
nome.addEventListener("input", function() {
    this.value = this.value.toUpperCase();
  });
})



  document.getElementById("imprimir").addEventListener("click", function() {
    print()
  });