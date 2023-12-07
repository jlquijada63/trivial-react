
import Question from "./components/Question";
import { useEffect, useState } from "react";
import {parseJSON} from './helpers/helper.js'
// https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple

function App() {

  const [questions, setQuestions] = useState([])

useEffect(() => {
async function fetchQuestions() {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    if (!response.ok) {
      throw new Error("Something went wrong")
    }
    const json = await response.json()
    const data = json.results.map(question => parseJSON(question))  
    console.log(data)
    setQuestions(data)
  }
  catch (error) {
    console.log(error)    
  }}
  fetchQuestions()
},[])
  

  return <Question />
}

export default App
