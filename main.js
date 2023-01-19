const row = 1;

const button = document.getElementById("button");


button.addEventListener("click", (e) => {
  e.preventDefault();

  addItem();
});

function addItem() {
  const type = document.getElementById("input-type").value;
  const names = document.getElementById("input-name").value;
  const data = document.getElementById("input-data").value;
  const amount = document.getElementById("input-amount").value;

  if (!type || !names || !data || !amount) {
    alert("Enter all fields!");
    return;
  }

  const table = document.getElementById("table");

  const newRow = table.insertRow(row);

  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  const newCell3 = newRow.insertCell(2);
  const newCell4 = newRow.insertCell(3);
  const newCell5 = newRow.insertCell(4);

  newCell1.innerHTML = type;
  newCell2.innerHTML = names;
  newCell3.innerHTML = data;
  newCell4.innerHTML = amount;
  newCell5.innerHTML = `
    <td>
      <button type="button" class="delete-entry">&#10005;</button>
    </td>
  `

  newCell5.addEventListener("click", function (e) {
    this.parentElement.parentElement.deleteRow(this.parentElement.rowIndex)
  });
}

document.querySelectorAll(".clear-button")
  .forEach(function (elem) {
    elem.onclick = function (e) {
      let selector = this.dataset.clearSelector;
      document.querySelectorAll(selector)
        .forEach(function (item) {
          item.value = "";
        });
    };
  });

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries) {

    let max = 0;
    let maxNew = null

    for(const [name, salary] of Object.entries(salaries)) {
      if(max < salary) {
        max = salary;
        maxName = name;
      }
    }
  }