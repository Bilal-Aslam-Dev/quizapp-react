import './index.css';
import React from 'react'
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';

const App = () => {

  const [questionData, setQuesData] = React.useState([])

  function fetchData() {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
      .then(res => res.json())
      .then(data => {
        setQuesData(data.results)
        console.log(data.results)
      })
  }

  return (
    <>
      {
        questionData < 1 ?
        <LandingPage
         fetchData={() => fetchData}
        />
        :
        <QuizPage 
          data={questionData}
        />
      }
    </>
  )
}

export default App;
