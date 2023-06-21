function addUserToTransaction(data){
    const listOfTransaction = document.querySelector("#list-of-transaction");
    [...data].forEach((el,index)=>{
        if(index < 8){
            listOfTransaction.innerHTML += `
            <tr>
                <td>${el.user_first_name}</td>
                <td>${el.value}</td>
                <td>${el.reason}</td>
            </tr>
            `
        }
    });
}

function addNumberOfUser(data){
    const numberDiv = document.querySelector("#number-of-user");
    
    let numberOfUser = [];

    Object.values(data).forEach(el=>{
        if(numberOfUser.indexOf(el.id_user) == -1){
            numberOfUser.push(el.id_user);
        }
    });
    
    numberDiv.innerHTML = numberOfUser.length.toString();
}

function addUserToList(data){
    const list = document.querySelector("#list-of-members");
    const realData = []; 
    
    Object.values(data).forEach(el =>{
        let shoulCount = true;
        for(let person of realData){
            if(person.id_user == el.id_user)
                shoulCount = false;
        }

        if(shoulCount){
            realData.push(el);
        }
    });

    realData.forEach(el=>{
        list.innerHTML += `
            <div class="all-users">
                <div class="infos">
                    <img decoding="async" src="../assets/image/fifa.JPG" width="30" height="30">
                    <div>
                        <h4>${el.user_first_name}</h4>
                        <small>${el.user_name}</small>
                    </div>
                </div>
                <div class="user-contact">
                    <a href="#${el.facebook}">
                        <span class="fa fa-facebook">F </span>
                    </a>
                    <a href="#${el.email}">
                        <span class="fa fa-email"> M</span>
                    </a>
                    <a href="#${el.contact}>">
                        <span class="fa fa-phone">P </span>
                    </a>
                </div>
            </div>
        `
    }) 
}

function addSumOfAccount(data){
    const sumAccount = document.querySelector("#sum-account");
    let sum = 0;
    [...data].forEach(el=>{
        sum += el.value;
    });
    sumAccount.innerHTML = sum.toFixed(2);
}
function addSumOfWithdrawl(data){
    const withdrawal= document.querySelector("#withdrawal");
    let sum = 0;
    console.log(data);
    [...data].forEach(el=>{
        sum += el.drawalvalue;
    });
    withdrawal.innerHTML = sum.toFixed(2);
}


function getAllInformation(){
    fetch("http://localhost:8000/home")
        .then(data => data.json())
        .then(data=>{
            addSumOfWithdrawl(data);
            addNumberOfUser(data);
            addUserToTransaction(data);
            addUserToList(data);
            addSumOfAccount(data);
        })
        .catch(data=>alert(data));
}

getAllInformation();