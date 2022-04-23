// method 1: Using selectors inside the element 
const questions = document.querySelectorAll('.question');

questions.forEach(function(ques){
    const btn = ques.querySelector('.question-btn')
    btn.addEventListener('click',function () {

        questions.forEach(function(item){
            if (item!==ques) {
                item.classList.remove('show-text')
            }

        })

        ques.classList.toggle('show-text');
    })
});
















// method 2: Traversing the DOM 

// const questionBtn = document.querySelectorAll('.question-btn');

// questionBtn.forEach(function(btn){
//     btn.addEventListener('click' , function(e){
//         const question = (e.currentTarget.parentElement.parentElement);
//         question.classList.toggle('show-text');        

//     })
// })