var table= document.getElementById("carrito");
    function addRowsManzana(){
      var total=
      Number(document.getElementById("total").textContent);

      var row = table.insertRow(0);
       var product = row.insertCell(0);
       var price = row.insertCell(1);
       var price1 = Math.floor(Math.random()*5)+1;


       product.innerHTML = "manzana";
       price.innerHTML = price1;
       document.getElementById("total").innerHTML = total + price1;
     };

     function addRowsLeche(argument){
        var total = Number(document.getElementById("total").textContent);
        var row = table.insertRow(0);
        var product = row.insertCell(0);
        var price = row.insertCell(1);
        var price1 = Math.floor(Math.random()*5)+1;
        product.innerHTML = "leche";
        price.innerHTML = price1;
        document.getElementById("total").innerHTML = total + price1;


     };
