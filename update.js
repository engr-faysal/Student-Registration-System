const urlParams = new URLSearchParams(window.location.search)
const index = urlParams.get('index')
console.log(index)

let AllStudent = JSON.parse(localStorage.getItem('AllStudent')) || [];

if (index !== null && AllStudent[index]) {
    const studentData = AllStudent[index];
    // Fill Existing Data
    document.getElementById('IndexNumber').value = index;
    document.getElementById('firstName').value = studentData.firstName;
    document.getElementById('lastName').value = studentData.lastName;
    document.getElementById('roll').value = studentData.roll;
    document.getElementById('class').value = studentData.StudentClass;
    document.getElementById('mobileNo').value = studentData.mobileNo;
    document.getElementById('email').value = studentData.email;
}

class Student{
    constructor(firstName, lastName, roll, StudentClass, mobileNo, email){
        this.firstName = firstName
        this.lastName = lastName
        this.roll = roll
        this.StudentClass = StudentClass
        this.mobileNo = mobileNo
        this.email = email
    }

    toJSON(){
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            roll: this.roll,
            StudentClass: this.StudentClass,
            mobileNo: this.mobileNo,
            email: this.email
        }
    }
}


document.getElementById('StudentForm').addEventListener('submit', function(e){
    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let roll = document.getElementById('roll').value;
    let StudentClass = document.getElementById('class').value;
    let mobileNo = document.getElementById('mobileNo').value;
    let email = document.getElementById('email').value;

    let student = new Student(firstName, lastName, roll, StudentClass, mobileNo, email)
    console.log(student);

    if (index !== null && AllStudent[index]) {
        // Update the existing student at this index
        AllStudent[index] = student.toJSON();
        alert('Student updated successfully!');
    }
    localStorage.setItem('AllStudent', JSON.stringify(AllStudent)) 

    // Clear The Data from FORM
    document.getElementById('StudentForm').reset();
    window.location.href = 'allData.html';
})

document.getElementById('Cancel').addEventListener('click',redirect)

function redirect(){
    window.location = `allData.html`;
}



