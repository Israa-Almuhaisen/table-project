// let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) 
let currentUser = JSON.parse(localStorage.getItem("current-user")).Name;

document.getElementById("username").innerHTML = currentUser;
let arryorders=[];

function add2order(){
    let orderobj = {};
    customername = document.getElementById("cnametxt").value;
    customeritem = document.getElementById("selectfood").value;
    let price = "";
    let img = "";
    
    if(customeritem == "dessert"){
        price = 18;
        img   = "./dessert.jpeg";    
    }
    else if(customeritem == "mainCo"){
        price = 20;
        img   = "./mainco.jpg";    
    }
    else if(customeritem == "appetizer"){
        price = 7;
        img   = "./appetizer.jpg";    
    }
    // else{ price = ""; img="";}

    orderobj["customername"] = customername;
    orderobj["customeritem"] = customeritem;
    orderobj["price"] = price;
    orderobj["img"] = img;

    arryorders.push(orderobj);
    localStorage.setItem("arryorders",JSON.stringify(arryorders))
    displaytable();

    // console.log(arryorders)
    // let ordertableHTML = document.getElementById("ordertable").innerHTML;
    // document.getElementById("ordertable").innerHTML = ordertableHTML + "<img src='./" + customeritem  +".png' />"; 
    
    event.preventDefault();
}

function displaytable(){
    var tablehtml="<table class='tablestyle' border=2px>";
    tablehtml+="<tr><th>Customer Name</th><th>Order Image</th><th>Food Type</th><th>Price</th></tr>";

    for(var i=0; i< arryorders.length ; i++){
        tablehtml+="<tr>";
        tablehtml+= "<td>" + arryorders[i].customername + "</td>";
        tablehtml+= `<td> <img width=400px height=150px src=${arryorders[i].img} />  </td>`;
        tablehtml+= "<td>" + arryorders[i].customeritem + "</td>";
        tablehtml+= "<td>" + arryorders[i].price + "</td>";
        tablehtml+="</tr>";
    }

    tablehtml+="</table>";
    document.getElementById("ordertable").innerHTML = tablehtml;
}



function removetable(){
    document.getElementById("ordertable").innerHTML = "";
}

function deletetable(){
    localStorage.removeItem('arryorders')
     document.getElementById("ordertable").innerHTML = "";

}

