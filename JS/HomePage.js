// UC 5 Display Employee Details from JSON Object
window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () =>{
    const headerHtml ="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
    "<th>Start Date</th><th>Actions</th></tr>";
    let employeePayrollData = createEmployeePayrollJSON()[0];
    const innerHtml =  `${headerHtml}
    <tr>
        <td><img class="profile" src="${employeePayrollData._profilePic}" alt=""></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>
            <div class="dept-label">${employeePayrollData._department[0]}</div>
            <div class="dept-label">${employeePayrollData._department[1]}</div>
        </td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
            <img name="${employeePayrollData._id}" onclick="remove(this)" src="../Assests/icons/delete-black-18dp.svg" alt="delete">
            <img name="${employeePayrollData._id}" onclick="update(this)" src="../Assests/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>
    `;
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

