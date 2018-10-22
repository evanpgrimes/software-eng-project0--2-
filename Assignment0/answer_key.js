var Answers = sessionStorage.getItem('Answers') ? JSON.parse(sessionStorage.getItem('Answers')) : ['A', 'C', 'B', 'B', 'C', 'A', 'C', 'A', 'D', 'B']
sessionStorage.setItem('Answers', JSON.stringify(Answers))

function updateAnswers(uploadedAnswer){
    Answers = uploadedAnswer
    console.log(Answers)
    sessionStorage.removeItem('Answers')
    sessionStorage.setItem('Answers', JSON.stringify(uploadedAnswer))
}