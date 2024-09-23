// Sample list of courses
const courses = [
    { id: 1, name: 'Introduction to Computer Science', code: 'CSC101', credits: 3 },
    { id: 2, name: 'Calculus I', code: 'MAT101', credits: 4 },
    { id: 3, name: 'Physics for Engineers', code: 'PHY101', credits: 4 },
    { id: 4, name: 'Introduction to Psychology', code: 'PSY101', credits: 3 }
];

// Selected courses array
let selectedCourses = [];

// Render courses on page
function renderCourses() {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = '';  // Clear list

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `
            <h4>${course.name}</h4>
            <p>Code: ${course.code}</p>
            <p>Credits: ${course.credits}</p>
            <button onclick="addCourse(${course.id})">Add Course</button>
        `;
        courseList.appendChild(courseItem);
    });
}

// Add course to selectedCourses
function addCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (!selectedCourses.includes(course)) {
        selectedCourses.push(course);
    }
    updateCart();
}

// Update selected courses in the cart
function updateCart() {
    const selectedCoursesElement = document.getElementById('selected-courses');
    selectedCoursesElement.innerHTML = '';  // Clear previous selections

    selectedCourses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('cart-item');
        courseItem.innerHTML = `
            <p>${course.name} (Code: ${course.code}) - ${course.credits} Credits</p>
            <button onclick="removeCourse(${course.id})">Remove</button>
        `;
        selectedCoursesElement.appendChild(courseItem);
    });

    document.getElementById('submit-courses').disabled = selectedCourses.length === 0;
}

// Remove course from selectedCourses
function removeCourse(courseId) {
    selectedCourses = selectedCourses.filter(course => course.id !== courseId);
    updateCart();
}

// Scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Call renderCourses when the page loads
renderCourses();
