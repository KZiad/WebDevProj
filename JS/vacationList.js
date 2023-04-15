function approveVacation(index) {
  var vacations = JSON.parse(localStorage.getItem("vacations"));
  vacations[index].status = "Approved";
  localStorage.setItem("vacations", JSON.stringify(vacations));
  location.reload();
}
function denyVacation(index) {
  var vacations = JSON.parse(localStorage.getItem("vacations"));
  vacations[index].status = "Denied";
  localStorage.setItem("vacations", JSON.stringify(vacations));
  location.reload();
}
function deleteVacation(index) {
  var vacations = JSON.parse(localStorage.getItem("vacations"));
  vacations.splice(index, 1);
  localStorage.setItem("vacations", JSON.stringify(vacations));
  location.reload();
}

function loadVacCards() {
  if (
    localStorage.getItem("vacations") == null ||
    localStorage.getItem("vacations") == "[]"
  ) {
    document.write("<h1>No vacations to show</h1>");
  } else {
    let vacs = JSON.parse(localStorage.getItem("vacations"));
    for (var i = vacs.length - 1; i >= 0; i--) {
      document.write(`<div class="vac">
                        <div class="cardHead">
                            <div class="empData">${vacs[i].id} <br/> ${vacs[i].name}</div>
                            <div class="vacStatus">Status: ${vacs[i].status}</div>
                        </div>
                        <div class="cardBody">
                            <div class="vacDates">
                                ${vacs[i].beginDate} -> ${vacs[i].endDate}
                            </div>
                            <div class="vacReason">
                                Reason: <br/> ${vacs[i].reason}
                            </div>
                            <div class="vacActions">
                                <button class="appBut" onclick="approveVacation(${i})">Approve</button>
                                <button class="denBut" onclick="denyVacation(${i})">Deny</button>
                                <button class="deleteBut" onclick="deleteVacation(${i})">Delete</button>
                            </div>
                        </div>
                    </div>`);
    }
  }
}
