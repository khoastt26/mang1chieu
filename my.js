let students = ["An", "Duong", "Linh", "Diep"];
function showListStudent() {
    let html = '';
    for (let i = 0; i < students.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += i + 1;
        html += "</td>";
        html += "<td>";
        html += students[i];
        html += "</td>";
        html += "<td>";
        html += '<button onclick="deleteStudent('+i+')">Delete</button>';
        html += "</td>";
        html += "</tr>";
    }
    document.getElementById('student-list').innerHTML = html;
}

showListStudent();

function deleteStudent(i) {
    if (confirm('are you sure?')){
        students.splice(i, 1);
        showListStudent();
    }
}

// thuc hien chuc nang them moi
// tao 1 ham ten la addStudent()
// tao bien value = gia tri cua o input khi nhap vao
// thuc hien push value vao mang students
// goi lai ham showListStudent() de hien thi du lieu moi
// goi ham addStudent() khi click vao button Add

function addStudent() {
    let value = document.getElementById('add').value;   
    students.push(value); 
    showListStudent(); 
}
//tim gia tri lon nhat trong mang day so sau
function maxValue(){
let numbers = [4,-2,5,4,0,20,10];
let max = numbers[0];
for(let i = 1; i < numbers.length;i++){
    if(numbers[i] > max ){
        max= numbers[i];
    }
}
document.getElementById('max').innerHTML= max;
}
//viet chuong trinh dem so lan lap lai của gia tri bat ky trong mang sau
let numbers = [4, -2, 2, 4, 0, 2, 2];
function countTime() {
    
    let count = 0;
    let num = +prompt('nhập giá trị cần đếm');
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == num){
            count++;
        }

    }
    document.getElementById('count').innerHTML= count;
}
//viet chuong trinh xoa phan tu bat ky trong mang;
function delArr() {
    let valElement = +prompt('nhập giá trị muốn xóa');
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] == valElement){
            numbers.splice(i,1);
        }
    }
    for(let i = 0; i < numbers.length; i++) {
        document.write(numbers[i] + ' ');
    }
}

