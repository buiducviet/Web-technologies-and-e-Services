
var studentInfo_root = {
    name: "Bùi Đức Việt",
    year:"2021",
    level: "Đại học đại trà",
    major: "Khoa học Máy tính 2021",
    department: "Trường Công nghệ thông tin và Truyền thông",
    status: "Học",
    gender: "Nam",
    classs: "Khoa học máy tính 04-K66",
    course: 66,
    email: "viet.bd215513@sis.hust.edu.vn",
}
var name = document.getElementById("index_name");
var year = document.getElementById("index_year");
var level = document.getElementById("index_level");
var major = document.getElementById("index_major");
var department = document.getElementById("index_department");
var status = document.getElementById("index_status");
var gender = document.getElementById("index_gender");
var classs = document.getElementById("index_classs");
var email = document.getElementById("index_email");
var course = document.getElementById("index_course");
var editButton = document.getElementById("editChange");
var reset_btn = document.getElementById("reset");
var btn_set = document.getElementById("btn-set");
var saveButton = document.getElementById("ok");
var cancelButton = document.getElementById("cancel");
var btn_edit_avatar =  document.getElementById('fileInput');
var studentInfo = {
    name: name.value,
    year: year.value,
    level: level.value,
    major: major.value,
    department: department.value,
    status: status.value,
    gender: gender.value,
    classs: classs.value,
    course: course.value,
    email: email.value,
}
var avatarsrc ;
const loadData = () =>{
    if(localStorage.getItem("studentInfo") ===  null){
        const jsonStudentInfo = JSON.stringify(studentInfo);
        localStorage.setItem("studentInfo", jsonStudentInfo);
    }
    studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
   
}
const loadPage = () =>{
    loadData();
    console.log(studentInfo);
    document.getElementById('avatar').src = localStorage.getItem("avatar");
    document.getElementById('index_name').innerText = studentInfo.name;
    document.getElementById('index_year').innerText= studentInfo.year;
    document.getElementById('index_level').innerText= studentInfo.level;
    document.getElementById('index_major').innerText= studentInfo.major;
    document.getElementById('index_department').innerText= studentInfo.department;
    document.getElementById('index_status').innerText= studentInfo.status;
    document.getElementById('index_gender').innerText= studentInfo.gender;
    document.getElementById('index_classs').innerText= studentInfo.classs;
    document.getElementById('index_course').innerText= studentInfo.course;
    document.getElementById('index_email').innerText= studentInfo.email;
    
}

reset_btn.addEventListener("click", function(){
    console.log(studentInfo_root);
    var fields = ["name", "year", "level", "major", "department","status", "gender", "classs", "email", "course"];
    fields.forEach(function(field) { 
        studentInfo[field] = studentInfo_root[field];    
    });
    const jsonStudentInfo = JSON.stringify(studentInfo);
    localStorage.setItem("studentInfo", jsonStudentInfo);
    localStorage.setItem("avatar", "./assets/images/avatar.jpg");
    console.log(studentInfo);
    location.reload();
})

cancelButton.addEventListener("click", function(){
    location.reload();
    console.log(studentInfo);
})
btn_edit_avatar.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const newImageSrc = e.target.result;
        // Lưu newImageSrc vào local storage
        localStorage.setItem('avatar', newImageSrc);
        // Hiển thị ảnh mới trên trang
        document.getElementById('avatar').src = newImageSrc;
    };
    reader.readAsDataURL(file);
});
editButton.addEventListener("click", function() {
    btn_set.style.display='block';
    document.getElementById('avatar').classList.add("img");
    var fields = ["name", "year", "level", "major", "department", "status", "gender", "classs", "email", "course"];

    fields.forEach(function(field) {
        var span = document.getElementById("index_" + field);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input_" + field);
        input.setAttribute("value", span.textContent);
        if ( field === "email"){
            input.setAttribute("type", "email");
        }
        if (field === "status"){
            span.innerHTML = '<select name="edit_status" id="input_status"><option value="Học">Học</option><option value="Tốt nghiệp">Tốt nghiệp</option><option value="Thôi học">Thôi học</option><option value="Bảo lưu">Bảo lưu</option></select>';
        }
        else if (field === "gender") {
          
            span.innerHTML = '<input id="Nam" type="radio" name="gender" value="Nam"> Nam';
            span.innerHTML += '<input id="Nữ" type="radio" name="gender" value="Nữ" style="margin-left: 20px;">Nữ';
            studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
            var radioElement = document.getElementById(studentInfo.gender);
            console.log(studentInfo.gender);
            radioElement.checked = true;      
        } else {
            span.parentNode.replaceChild(input, span);
        }
    });
   
    
    saveButton.addEventListener("click", function() {
        btn_set.style.display='none';
        var fields = ["name", "year", "level", "major", "department","status", "gender", "classs", "email", "course"];
    
        fields.forEach(function(field) {
            var input = document.getElementById("input_" + field);
            var span = document.createElement("span");
            span.setAttribute("id", "index_" + field);
            span.setAttribute("class", "infor_student");
            
            if (field === "status") {
                var statusSelect = document.getElementById('input_' + field);
                span.textContent = statusSelect.value;
            } else if (field === "gender") {
                var checkedGender = document.querySelector('input[name="gender"]:checked');
                span.textContent = checkedGender ? checkedGender.value : "";
            } else {
                span.textContent = input.value;
                input.parentNode.replaceChild(span, input);
            }
            
            // Lưu thông tin vào studentInfo
           
            studentInfo[field] = span.textContent;
            
        });
        console.log(studentInfo);
        localStorage.setItem("studentInfo", JSON.stringify(studentInfo));
        loadPage();
       

    });


    document.getElementById('avatar').addEventListener('click', function() {
        document.getElementById('fileInput').click();
    });
});
