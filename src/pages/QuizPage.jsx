import Container from 'react-bootstrap/Container';
import React from 'react'
import Question from "../components/Question"

const QuizPage = (props) => {
    
    const questionElements = props.data.map((question, index) => {
        return <Question 
            key={Math.random()}
            id={index}
            question={question.question}
            incAns={question.incorrect_answers}
            corAns={question.correct_answer}
            isSelected={props.isSelected}
            setIsSelected={props.setIsSelected}
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
                            <button onClick={props.fetchData()} className='checkAnswers-btn py-2 px-3'>Restart</button>
                        </div>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default QuizPage