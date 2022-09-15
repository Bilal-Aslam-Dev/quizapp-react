import Container from 'react-bootstrap/Container';
import React from 'react'
import Question from "../components/Question"

const QuizPage = (props) => {
    const [score, setScore] = React.useState()
    const questionElements = props.data.map((question, index) => {
        return <Question 
            key={Math.random()}
            id={index}
            question={question.question}
            incAns={question.incorrect_answers}
            corAns={question.correct_answer}
            isSelected={props.isSelected}
            setIsSelected={props.setIsSelected}
            setScore={setScore}
        />
    })
    
    return (
        <>
            <main>
                <div className='mt-5'>
                    <Container >
                        <section className='questions'>
                            {questionElements}
                        </section>
                        <div className='d-flex justify-content-center mt-4'>
                            <button className='checkAnswers-btn py-2 px-3'>Check answers</button>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default QuizPage