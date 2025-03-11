// Lấy các phần tử từ DOM
const studentForm = document.getElementById('studentForm');
const studentNameInput = document.getElementById('studentName');
const studentAgeInput = document.getElementById('studentAge');
const studentList = document.getElementById('studentList');

let students = [];

// Hàm render danh sách sinh viên
function renderStudentList() {
  studentList.innerHTML = ''; // Xóa danh sách cũ
  students.forEach((student, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${student.name} - ${student.age} tuổi <button onclick="deleteStudent(${index})">Xóa</button>`;
    studentList.appendChild(li);
  });
}

// Hàm thêm sinh viên
studentForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Ngừng hành động mặc định (reload trang)
  
  const name = studentNameInput.value.trim();
  const age = studentAgeInput.value.trim();

  if (name && age) {
    students.push({ name, age });
    studentNameInput.value = '';
    studentAgeInput.value = '';
    renderStudentList();
  }
});

// Hàm xóa sinh viên
function deleteStudent(index) {
  students.splice(index, 1); // Xóa sinh viên tại vị trí index
  renderStudentList();
}

// Hiển thị danh sách sinh viên khi trang tải
renderStudentList();
