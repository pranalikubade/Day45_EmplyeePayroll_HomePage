// UC 4 Display Employee Details in Tabular Format using Template Literals
window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () =>{
    const headerHtml ="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
    "<th>Start Date</th><th>Actions</th></tr>"
    const innerHtml =  `${headerHtml}
    <tr>
        <td><img class="profile" src="../Assests/Ellipse -3.png" alt=""></td>
        <td>Narayan MahaDevan</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>3000000</td>
        <td>1 nov 2020</td>
        <td>
            <img onclick="remove(this)" src="../Assests/icons/delete-black-18dp.svg" alt="delete" id="1">
            <img onclick="update(this)" src="../Assests/icons/create-black-18dp.svg" alt="delete" id="1">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}