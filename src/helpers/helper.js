import Decode from 'he'
const {decode} = Decode


// const questionObj = {
// 	type: "multiple",
// 	difficulty: "easy",
// 	category: "Entertainment: Video Games",
// 	question: "In &quot;PUBATTLEGROUNDS&quot; which ammo type does the M24 use?",
// 	correct_answer: "7.62mm",
// 	incorrect_answers: ["5.56mm", "9mm", ".300 Magnum"],
// }

function shuffleArray(array) {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const temp = shuffledArray[i]
    shuffledArray[i] = shuffledArray[randomIndex]
    shuffledArray[randomIndex] = temp
  }
  return shuffledArray
}

function parseJSON(question) {
  //generate an array of all possible answers
  const incorrectAnswers = [...question.incorrect_answers, question.correct_answer]
  const shuffledIncorrectAnswers = shuffleArray(incorrectAnswers)

  return {
    question: decode(question.question),
    answers: shuffledIncorrectAnswers.map(answer => decode(answer)),
    correctAnswer: decode(question.correct_answer)
    
  }

  
}



// use proof
// console.log(parseJSON(questionObj))
export {parseJSON}