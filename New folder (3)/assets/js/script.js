//let input=document.getElementById("name");
// localStorage.setItem('test', 1);


let myfName = document.getElementById("fname"); 
let mylName = document.getElementById("lname");  
let myAge = document.getElementById("age");  
let button=document.getElementById("submit");
let form = document.querySelector("#form");

let users = [];

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("ok");
    let user = {
        name: myfName.value,
        surname: mylName.value,
        age: myAge.value
    }   

    if(localStorage.getItem("users")){
        users = [...JSON.parse(localStorage.getItem("users")), user];
    }else{
        users.push(user)
    }

    localStorage.setItem("users", JSON.stringify(users));
})




       
//      if(localStorage.getItem('itemJson') == null){
//               itemJsonArray =[];
//               itemJsonArray
//               .push([ myfName, mylName,myAge]);
//               localStorage.setItem('itemJeson', 
//              JSON.stringify(itemJsonArray))
//               }
//           else{
//               itemJsonArrayStr 
//             localStorage.getItem('itemJeson');
//               itemJsonArry = JSON.parse(  
//             itemJsonArrayStr);
              
//              itemJsonArray
//               .push([ myfName, mylName,myAge]);
//               localStorage.setItem('itemJeson', 
//              JSON.stringify(itemJsonArray))
//             }
    
            
// update();  
//    function update(){ 
//        if(localStorage.getItem('itemJson') == null){
//            itemJsonArray =[];
//            localStorage.setItem('itemJeson', 
//            JSON.stringify(itemJsonArray))
//           }
//           else{
//               itemJsonArrayStr = 
//               localStorage.getItem('itemJeson');
//               itemJsonArry = JSON.parse(  
//               itemJsonArrayStr);
//              }
//        let tableData= document.getElementById("tabledata");
//        let str = "";
//           itemJsonArray.forEach((element, index) => {
              
//      str += ` <tr>
//       <th scope="row"> ${index}</th>
//        <td> ${element[0]}</td>
//         <td> ${element [1]}</td>
//         <td> ${element [2]}</td>
//         <td>
//         <button type="button" class="btn btn-primary" onclick="save_data(${index})" id="submit">Submit</button></td>
//                   </tr>`;
//           }); 
//      tablebody.innerHTML = str;
          
//       }
         
//     let add = document.getElementById("addItem");
//     add.addEventListener("click", getAndUpdate);
          
// update();    