fetch("server.php")
  .then((res) => console.log(res.json()))
  .then((resp) => {
    let setVal = "";
    for (let i in resp) {
       setVal +=`
       <tr>
         <td scope="col">${resp[i].id}</td>
         <td scope="col">${resp[i].name}</td>
         <td scope="col">${resp[i].email}</td>
         <td scope="col">${resp[i].phone}</td>
         <td scope="col">${resp[i].password}</td>
       </tr>`;
    }
    document.querySelector('.tbody').innerHTML= setVal;
  })
  .catch((error) => console.log(error));
