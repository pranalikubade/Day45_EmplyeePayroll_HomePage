
//UC 6 Display Employee Details from Local Storage
let empPayrollList;
window.addEventListener("DOMContentLoaded", (event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector('.emp-count').textContent=empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml = () =>{
    if(empPayrollList.length == 0) return;
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
    "<th>Start Date</th><th>Actions</th>";

    let innerHtml = `${headerHtml}`;
     for(const empPayrollData of empPayrollList){
        innerHtml =  `${headerHtml}
            <tr>
                <td><img class="profile" src="${employeePayrollData._profilePic}" alt=""></td>
                <td>${employeePayrollData._name}</td>
                <td>${employeePayrollData._gender}</td>
                <td>${getDeptHtml(employeePayrollData._department)}</td>
                <td>${employeePayrollData._salary}</td>
                <td>${employeePayrollData._startDate}</td>
                <td>
                    <img name="${employeePayrollData._id}" onclick="remove(this)" src="../Assests/icons/delete-black-18dp.svg" alt="delete">
                    <img name="${employeePayrollData._id}" onclick="update(this)" src="../Assests/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
