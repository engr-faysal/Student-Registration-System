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

    let AllStudent = JSON.parse(localStorage.getItem('AllStudent')) || [];
    AllStudent.push(student.toJSON())
    localStorage.setItem('AllStudent', JSON.stringify(AllStudent))

    // Clear The Data from FORM
    document.getElementById('StudentForm').reset();
    alert('Student Registration Successful')
})