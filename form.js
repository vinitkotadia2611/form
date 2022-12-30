function formData() {
    let i = document.getElementById("id").value;

    let n = document.getElementById("name").value;

    let p = document.getElementById("price").value;

    let q = document.getElementById("Quantity").value;

    let obj = {
        id: i,
        name: n,
        price: p,
        quantity: q
    }

    let localData = JSON.parse(localStorage.getItem("products"));
    if (localData !== null) {
        localData.push(obj);
        localStorage.setItem("products", JSON.stringify(localData));
    } else  {
        localStorage.setItem("products", JSON.stringify([obj]))
    }
}

function deleteObj() {
    let localData = JSON.parse(localStorage.getItem("products"));


    let del = document.getElementById("num").valueproducts
    //     }
    // }

    localData.map((d, i) => {
        if (d.id == del) {
            localData.splice(i, 1);
        }
    })
    localStorage.setItem("products", JSON.stringify(localData));
}

function formUpdate() {
    let localData = JSON.parse(localStorage.getItem("products"));

    let ui = document.getElementById("uid").value;

    let un = document.getElementById("uname").value;

    let up = document.getElementById("uprice").value;

    let uq = document.getElementById("uQuantity").value;

    localData.map((d,i)=>{
        if(d.id === ui){
            let obj = {
                id: ui,
                name: un,
                price: up,
                quantity: uq
            }
            localData[i] = obj;
        }
    })
    localStorage.setItem("products", JSON.stringify(localData));
}

window.onload = dataload;
function dataload(){
    let localData = JSON.parse(localStorage.getItem("products"))
    let row ="";
    row = row + "<table border=1>";
    localData.map((d,i)=>{
        row = row + "<tr>";
        row = row + "<td>" + d.id + "</td>";
        row = row + "<td>" + d.name + "</td>";
        row = row + "<td>" + d.price + "</td>";
        row = row + "<td>" + d.quantity + "</td>";
        row = row + "</tr>";
    });
    row = row + "</table>";
    document.getElementById("demo").innerHTML =row;
}