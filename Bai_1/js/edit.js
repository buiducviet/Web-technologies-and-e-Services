
if(localStorage.getItem('user_data')){
    var storedUserDataJSON = localStorage.getItem('user_data');
    var storedUserData = JSON.parse(storedUserDataJSON);
    var name = storedUserData.name;
    var year = storedUserData.year;
    var level = storedUserData.level;
    var major = storedUserData.major;
    var department = storedUserData.department;
    var status = storedUserData.status;
    var gender = storedUserData.gender;
    var classs = storedUserData.classs;
    var course = storedUserData.course;
    var email = storedUserData.email;

    document.getElementById('edit_name').value = name;
    document.getElementById('edit_year').value = year;
    document.getElementById('edit_level').value = level;
    document.getElementById('edit_major').value = major;
    document.getElementById('edit_department').value = department;
    document.getElementById('edit_status').value = status;

    var radioElement = document.getElementById(gender);
    radioElement.checked = true;


    document.getElementById('edit_class').value = classs;
    document.getElementById('edit_course').value = course;
    document.getElementById('edit_email').value =email;


var okbtn= document.getElementById('ok');
var cancel = document.getElementById('cancel');
cancel.onclick = function(){
    
    window.location.href = "index.html";
    document.addEventListener("DOMContentLoaded", function() {
        // Close the edit page if it's open
        window.close();
        
    });
}
okbtn.onclick  = function(){
   

    var modal = document.getElementById('myModal');
    var cancel_modal = document.getElementById('cancel_modal');
    var save = document.getElementById('save')
    modal.style.display = 'block';
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Ẩn panel
        }
    }
    cancel_modal.onclick = function(){
        modal.style.display = 'none';
    }

    save.onclick = function(){
        name = document.getElementById('edit_name').value;
        year = document.getElementById('edit_year').value;
        level = document.getElementById('edit_level').value;
        major = document.getElementById('edit_major').value;
        department = document.getElementById('edit_department').value;
        status = document.getElementById('edit_status').value;
        gender = document.querySelector('input[name="gender"]:checked').value;
        classs = document.getElementById('edit_class').value;
        course = document.getElementById('edit_course').value;
        email = document.getElementById('edit_email').value;
    
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
        localStorage.setItem('user_data', userDataJSON);
        modal.style.display = 'none';
    }

}
}



