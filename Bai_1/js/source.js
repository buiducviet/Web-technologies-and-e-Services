
var name = document.getElementById('index_name').innerText;
var year = document.getElementById('index_year').innerText;
var level = document.getElementById('index_level').innerText;
var major = document.getElementById('index_major').innerText;
var department = document.getElementById('index_department').innerText;
var status = document.getElementById('index_status').innerText;
var gender = document.getElementById('index_gender').innerText;
var classs = document.getElementById('index_class').innerText;
var course = document.getElementById('index_course').innerText;
var email = document.getElementById('index_email').innerText;
var userData = {
    name: name,
    year: year,
    level: level,
    major: major,
    department: department,
    status: status,
    gender: gender,
    classs: classs,
    course: course,
    email: email,
};

var userDataJSON = JSON.stringify(userData);

if(!localStorage.getItem('user_data')){
    localStorage.setItem('user_data', userDataJSON);
}
else {
    var storedUserDataJSON = localStorage.getItem('user_data');
    var storedUserData = JSON.parse(storedUserDataJSON);
    console.log (storedUserData.name);
    document.getElementById('index_name').innerText = storedUserData.name;
    document.getElementById('index_year').innerText= storedUserData.year;
    document.getElementById('index_level').innerText= storedUserData.level;
    document.getElementById('index_major').innerText= storedUserData.major;
    document.getElementById('index_department').innerText= storedUserData.department;
    document.getElementById('index_status').innerText= storedUserData.status;
    document.getElementById('index_gender').innerText= storedUserData.gender;
    document.getElementById('index_class').innerText= storedUserData.classs;
    document.getElementById('index_course').innerText= storedUserData.course;
    document.getElementById('index_email').innerText= storedUserData.email;
}



