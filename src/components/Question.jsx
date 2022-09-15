import React from 'react'
import { nanoid } from 'nanoid'

const Question = (props) => { 
    const allAnswers = [
        {
            ans: props.incAns[0],
            id: nanoid(),
            isSelected: false,
            background: "rgba(240, 57, 57, 0.54)"
        }, 
        {
            ans: props.incAns[1],
            id: nanoid(),
            isSelected: false,
            background: "rgba(240, 57, 57, 0.54)"
        }, 
        {
            ans: props.incAns[2],
            id: nanoid(),
            isSelected: false,
            background: "rgba(240, 57, 57, 0.54)"    
        }, 
        {
            ans: props.corAns,
            id:nanoid(),
            isSelected: false,
            correct: true,
            background: "lightgreen"
        }
    ]
    
    const [answers, setAnswers] = React.useState(shuffle(allAnswers))    
    function isSelected(id) {
        setAnswers(oldAns => oldAns.map(answer => {
            if (answer.id === id) {
                return  {...answer, isSelected: !answer.isSelected, disabled: true}
            }  else {
               return {...answer, disabled: true}
            }
        }))

    }   
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
         array[randomIndex], array[currentIndex]];
        }
    return array;
    }
    
    let styles
    const Answer = (props) => {
        if (props.disabled) {
            styles = {
                background: props.background,
                pointerEvents: "none",
                }
        }
        return (
            <span style={styles} onClick={props.handleClick}
            className={`buttons ${props.isSelected ? "selected" : ""}`}>
                {props.answer}
            </span>
            )
        }

    const ansElement = answers.map(answer => {
        return <Answer 
            key={Math.random()}
            answer={answer.ans}
            isSelected={answer.isSelected}
            handleClick={() => isSelected(answer.id)}
            disabled={answer.disabled}
            background={answer.background}
        />
    })
   
    function htmlDecode(input) {
        let doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    return (      
        <>
            <div className="Question py-3">
                <h3>{htmlDecode(props.question)}</h3>
                <div className="d-flex gap-2 mt-3">
                    {ansElement}
                </div>
            </div>
        </>
    )  
 }

export default Question