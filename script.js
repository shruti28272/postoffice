      document.addEventListener("DOMContentLoaded", function () {
  let postOffices = [];
  

  fetch("https://api.postalpincode.in/postoffice/Pune")
    .then(response => response.json())
    .then(data => {
      postOffices = data[0].PostOffice;
      populateTable(postOffices);
    });
  
  function populateTable(offices) {
    const tableBody = document.getElementById('postOfficeTable');
    tableBody.innerHTML = ""; 
    offices.forEach(office => {
      const row = `<tr>
       <td>${office.Name}</td>
          
            <td>${office.BranchType}</td>
          
            <td>${office.District}</td>
          
            <td>${office.State}</td>
           
      </tr>`;
      tableBody.innerHTML += row;
    });
  }
 document.getElementById('search-btn').addEventListener('click', function () {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredOffices = postOffices.filter(office => office.Name.toLowerCase().includes(searchTerm));
    populateTable(filteredOffices);
  });
  document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById('searchInput').value = "";
    populateTable(postOffices); 
  });

})










