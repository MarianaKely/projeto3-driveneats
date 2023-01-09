let maincourse_title = null,
  maincourse_price = null;
let beverage_title = null,
  beverage_price = null;
let dessert_title = null,
  dessert_price = null;
let allselecteditems = 0;
let greenboxscreen = false;
const phone = "5571999027612";
const greenbox = document.getElementsByClassName("greenbox")[0];

//only one item can be checked at a time in each column - outset


  function selectmeal(column, parameter) {
    if (greenboxscreen) return;
    const price = parameter
      .getElementsByClassName("price")[0]
      .innerText.replace("R$", "");
    const title = parameter.getElementsByTagName("h2")[0].innerText;
    const next = document.getElementsByClassName(column)[0];
    const columnselecteditems = next .getElementsByClassName("chosenproduct");
    for (let i = 0; i < columnselecteditems.length; i++) {
      columnselecteditems[i].classList.remove("selectedproduct");
    }
  
    parameter.classList.add("selectedproduct");
    invoice(title, price, column);
  }
  

  function invoice(title, price, column) {
    if (column === "maincourse") {
      if (maincourse_title === null) allselecteditems++;
      maincourse_title = title;
      maincourse_price  = price;
    } else if (column === "beverage") {
      if (beverage_title === null) allselecteditems++;
      beverage_title = title;
      beverage_price = price;
    } else if (column === "dessert") {
      if (dessert_title === null) allselecteditems++;
      dessert_title = title;
      dessert_price = price;
    }
    if (allselecteditems === 3) {
      const greenbutton = document.getElementsByClassName("finalizeorder")[0];
      greenbutton.innerText = "Fechar Pedido";
      greenbutton.disabled = false;
      greenbutton.classList.remove("disabled");
      greenbutton.classList.add("enabled");
    }
  }


//only one item can be checked at a time in each column - end


//order fulfillment setup - outset


function finishshopping() {
  const webdestination = sendingwhatsapp();
  const advanced = greenbox.getElementsByTagName("a")[0];
  advanced.href = webdestination;
  const foodorder = document.getElementsByClassName("shoppinglist")[0];
  foodorder.innerHTML = orderanalysis();
  greenbox.classList.add("inline");
  greenboxscreen = true;
}


function orderanalysis() {
  const price =
    parseFloat(maincourse_price.replace(",", ".")) +
    parseFloat(beverage_price.replace(",", ".")) +
    parseFloat(dessert_price.replace(",", "."));
  let previewpurchase = `<p><span>${maincourse_title}</span><span>${maincourse_price }</span></p>
  <p><span>${beverage_title}</span><span>${beverage_price}</span></p>
  <p> <span>${dessert_title}</span><span>${dessert_price}</span></p>
  <p class='total'><span>Total</span><span>R$ ${price
    .toFixed(2)
    .replace(".", ",")}</span></p>
  `;
  return previewpurchase;
}



function cancel() {
  greenboxscreen = false;
  greenbox.classList.remove("inline");
  }


  //order fulfillment setup - end


  //sending to whatsapp - outset


function confirm() {
  alert(webdestination);
}


function sendingwhatsapp() {
  let finalpurchase = "Olá, gostaria de fazer o pedido:\n";
  finalpurchase += "- Prato: " + maincourse_title + "\n";
  finalpurchase += "- Bebida: " + beverage_title + "\n";
  finalpurchase += "- Sobremesa: " + dessert_title + "\n";
  const price =
    parseFloat(maincourse_price .replace(",", ".")) +
    parseFloat(beverage_price.replace(",", ".")) +
    parseFloat(dessert_price.replace(",", "."));
    finalpurchase += "Total: R$ " + price.toFixed(2).replace(".", ",");
    finalpurchase =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(finalpurchase);
  return finalpurchase;
}


//sending to whatsapp - end

















  
  

  
 
  
  
 
  
  
  
