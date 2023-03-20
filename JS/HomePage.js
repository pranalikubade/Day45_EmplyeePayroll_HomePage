// UC 5 Display All Employee Payroll Details from JSON Object
window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});


const createInnerHtml = () =>{
    const headerHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
    "<th>Start Date</th><th>Actions</th>";

    let innerHtml = `${headerHtml}`;
    let employeePayrollData = createEmployeePayrollJSON();
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

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: "Assets\Eclipse-2.png"
        },
        {
            _name: 'Aparna Shashanka Keerthi Kumar',
            _gender: 'female',
            _department: [

                'Sales'
            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: "Assets\Ellipse -1.png"
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
