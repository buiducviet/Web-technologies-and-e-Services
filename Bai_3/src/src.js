var optionsList = []; 
document.getElementById('input_type').addEventListener('change', function() {
    var selectedValue = this.value;
    var additionalOptionsDiv = document.getElementById('additional_options');
    additionalOptionsDiv.innerHTML = ''; // Xóa nội dung cũ
    if (selectedValue != 'text') {
        var text = document.createElement('p');
        text.textContent = 'Hãy thêm lựa chọn cho list';
        var button = document.createElement('button');
        button.textContent = 'Thêm lựa chọn';
        additionalOptionsDiv.appendChild(text);
        additionalOptionsDiv.appendChild(button);
       
        button.addEventListener('click', function() {
            additionalOptionsDiv.appendChild(document.createElement('br'));
            var newInput = document.createElement('input');
            newInput.type = 'text';
            additionalOptionsDiv.appendChild(newInput);

            optionsList.push(newInput.value);
            
        });
        
    } 
});
var inputType;
document.body.addEventListener("click", function(event) {
    var target = event.target;
    
    // Kiểm tra xem phần tử được click có phải là nút add-group hoặc delete-group không
    if (target.matches("#add-group")) {
        // Xử lý logic khi nút add-group được click
        var parentGroup = target.closest(".group");
        var newGroup = document.createElement("div");
        newGroup.className = "group";
        newGroup.innerHTML = `
            <div class="row head">
            <button id="delete-group" style="background: none ;"><i id="delete-group" class="fa-solid fa-trash" style="color: #ff0000;"></i></button>
                <div style="display: flex;">
                    <span class="title title_edit" contenteditable="true" spellcheck="false">Group item</span>
                    <span class="title">_20215513</span>
                    <div style="float: right; margin-left: 30px" class="btn-set">
                        <button id="add-infor" style="background-color: rgb(3, 241, 23);">Add infor item</button>
                        <button id="add-group" style="background-color: rgb(1, 70, 173);">Add group item</button>   
                    </div>
                </div>
                <hr>
            </div>
            <div class="row-body"> 
            </div>
        `;
        parentGroup.parentNode.insertBefore(newGroup, parentGroup.nextSibling);

    }else if (target.matches("#add-infor")) {
        var parentGroup = target.closest(".group");
        var rowBody = parentGroup.querySelector(".row-body");
        
        var modal = document.getElementById("modal_add_item");
        modal.style.display = "block";
        var overlay = document.getElementById("overlay");
        overlay.style.display = "block";
        
        var i = 0; 
        var isOkClicked = false;
        function okButtonClickHandler() {
            var inputs = document.querySelectorAll('#additional_options input[type="text"]');
            var values = [];
            inputs.forEach(function(input) {
                values.push(input.value);
            });
            console.log(values);
            inputType = document.getElementById('input_type').value;
            console.log(i);
            if (isOkClicked) {
                return;
            }
            if (inputType === "text" ) {
                var inforItem = document.createElement("div");
                inforItem.className = "infor-item";
                inforItem.innerHTML = `
                    <span class="infor_item_title" contenteditable="true" spellcheck="false">Tên mục thông tin:</span>
                    <input type="text" name="" id="">
                    <button id="delete-item" style="background: none ;"><i id="delete-item" class="fas fa-trash" style="color: #000;"></i></button>
                `;
                rowBody.appendChild(inforItem);
                
            } else if (inputType === "list") {
                /* var select = document.createElement("select");
                // Tạo các tùy chọn từ mảng optionsList và thêm vào phần tử select
                values.forEach(function(option) {
                    var optionElement = document.createElement("option");
                    optionElement.value = option;
                    optionElement.text = option;
                    select.appendChild(optionElement);
                });
                var selectItem = document.createElement("div");
                selectItem.className = "infor-item";
                selectItem.appendChild(select);
                rowBody.appendChild(selectItem); */
                var inforItem = document.createElement("div");
                inforItem.className = "infor-item";
                inforItem.innerHTML = `
                    <span class="infor_item_title" contenteditable="true" spellcheck="false">Tên mục thông tin:</span>
                    
                    <select name="" id="">
                        <!-- Các option sẽ được thêm vào đây -->
                    </select>
                    <button id="delete-item" style="background: none ;"><i id="delete-item" class="fas fa-trash" style="color: #000;"></i></button>
                `;

                var selectElement = inforItem.querySelector('select');
                values.forEach(function(option) {
                    var optionElement = document.createElement("option");
                    optionElement.textContent = option;
                    selectElement.appendChild(optionElement);
                });

                rowBody.appendChild(inforItem);
            } else if (inputType === "checkbox"){
                var inforItem = document.createElement("div");
                inforItem.className = "infor-item";
                inforItem.innerHTML = `
                    <span class="infor_item_title" contenteditable="true" spellcheck="false">Tên mục thông tin:</span>
                    
                    <div class="checkboxes">
                        <!-- Các checkbox sẽ được thêm vào đây -->
                    </div>
                   
                    <button id="delete-item" style="background: none ;"><i id="delete-item" class="fas fa-trash" style="color: #000;"></i></button>
                `;
                
                var checkboxContainer = inforItem.querySelector('.checkboxes');
                // Thêm checkbox
                values.forEach(function(value) {
                    var checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = 'checkboxName';
                    checkbox.value = value;
                    checkboxContainer.appendChild(checkbox);
                    checkboxContainer.appendChild(document.createElement('br'));
                    var label = document.createElement('label');
                    label.textContent = value;
                    checkboxContainer.appendChild(label);
                    
                });
                rowBody.appendChild(inforItem);
                
            } else if (inputType === "radio"){
                var inforItem = document.createElement("div");
                inforItem.className = "infor-item";
                inforItem.innerHTML = `
                    <span class="infor_item_title" contenteditable="true" spellcheck="false">Tên mục thông tin:</span>
                    <div class="radios">
                        <!-- Các radio buttons sẽ được thêm vào đây -->
                    </div>
                    <button id="delete-item" style="background: none ;"><i id="delete-item" class="fas fa-trash" style="color: #000;"></i></button>
                `;
                
                var radioContainer = inforItem.querySelector('.radios');

                values.forEach(function(value) {
                    var radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = 'radioName'+ Date.now();
                    radio.value = value;
                    radioContainer.appendChild(radio);
                    var label = document.createElement('label');
                    label.textContent = value;
                    radioContainer.appendChild(label);
                    radioContainer.appendChild(document.createElement('br'));
                });
                
                rowBody.appendChild(inforItem);
            }
            modal.style.display = "none";
            overlay.style.display = "none";
            isOkClicked = true;
            i+=2;
        }
        
        
        document.getElementById("ok").addEventListener("click", okButtonClickHandler); // Add new listener
       
        document.getElementById("cancel").addEventListener("click", function() {
            modal.style.display = "none";
            overlay.style.display = "none";
            document.getElementById("ok").removeEventListener("click", okButtonClickHandler);
             // Reset the flag for the next click
        });
        console.log(i);
        i++;
    }
    
     else if (target.matches("#delete-group")) {
        console.log(1);
        // Xử lý logic khi nút delete-group được click
        var parentGroup = target.closest(".group");
        var modal = document.getElementById("modal");
        modal.style.display = "block";
        var overlay = document.getElementById("overlay");
        overlay.style.display ="block";
        document.getElementById("save").addEventListener("click",function(){
            parentGroup.parentNode.removeChild(parentGroup);
            modal.style.display = "none";
            overlay.style.display = "none";
        })
        document.getElementById("cancel_modal").addEventListener("click",function(){
            modal.style.display = "none";
            overlay.style.display = "none";
        })
    }
    else if (target.matches("#delete-item")){
        var parentGroup = target.closest(".infor-item");
        parentGroup.parentNode.removeChild(parentGroup);
    }
}); 
var overlay = document.getElementById("overlay");

overlay.addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal_add_item").style.display = "none";
    overlay.style.display = "none";
});

