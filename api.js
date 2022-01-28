var container = document.getElementById("container");
var table = document.getElementById("table");

  var url = "http://universities.hipolabs.com/search?country=india"

    fetch(url)
    .then((response) => {
        console.log("response first resolved");
        return response.json();
    })
  .then((data) => {
      console.log("response seconnd resolved");
      console.log(data);

        for(let i = 0; i < data.length; i++)
        {

             tr = document.createElement("tr");
             td = document.createElement("td");
             td1 = document.createElement("td1");
             td2 = document.createElement("td2");
             
             
             tr.innerText = data[i].name;
             td.innerText = data[i].domains;
             td1.innerText = data[i]["state-province"];
             console.log(data[i].country);


            tr.append(td,td1);

            // tr.appendChild(td1);
            table.appendChild(tr);
           
        }
  })



  .catch((error) => console.log("API has failed"))

// domains: ['davietjal.org', 'abhsihek'] 
// // add only first element of this array
// name
// state-province