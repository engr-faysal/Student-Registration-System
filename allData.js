class Student{
    constructor(firstName, lastName, roll, StudentClass, mobileNo, email){
        this.firstName = firstName
        this.lastName = lastName
        this.roll = roll
        this.StudentClass = StudentClass
        this.mobileNo = mobileNo
        this.email = email
    }
}

function fetchStudent(){
    const AllStudent = JSON.parse(localStorage.getItem('AllStudent')) || []
    const StudentTableBody = document.getElementById('StudentTableBody');
    StudentTableBody.innerHTML = "";

    //Load Data to to Table
    AllStudent.forEach((studentData, index) => {
        let student = new Student(studentData.firstName, studentData.lastName, studentData.roll, studentData.StudentClass, studentData.mobileNo, studentData.email)

        const row = `
        <tr>
            <td>${studentData.firstName}</td>
            <td>${studentData.lastName}</td>
            <td>${studentData.roll}</td>
            <td>${studentData.StudentClass}</td>
            <td>${studentData.mobileNo}</td>
            <td>${studentData.email}</td>
            <td class="btn btn-danger" onclick="deleteStudent(${index})">Delete</td>
        </tr>
    `;

    StudentTableBody.innerHTML += row;
    });
}

    function deleteStudent(index){
        const AllStudent = JSON.parse(localStorage.getItem('AllStudent'))
        AllStudent.splice(index,1)
        localStorage.setItem('AllStudent',JSON.stringify(AllStudent))
        fetchStudent()
    }

fetchStudent()