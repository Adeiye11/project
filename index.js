//Selects all buttons in course
let courses = document.querySelectorAll('.course');

let total = document.querySelector('#total');
let totalValue = 0;
let clearBtn = document.querySelector('#clear');
for (let i = 0; i < courses.length; i++) {
    let courseBtn = courses[i].querySelector('button');
    let coursePrice = courses[i].querySelector('h5>span');
    courseBtn.addEventListener('click', function () {
        totalValue += parseInt(coursePrice.textContent);
        total.textContent = totalValue;
    });
}