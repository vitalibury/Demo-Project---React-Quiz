import { useState } from "react";
import QUESTIONS from '../questions';

export default function Quiz() {

    const [userAnswers, setUserAnwers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleAnswerClick(selectedAnswer) {
        setUserAnwers(prevAnswers => [...prevAnswers, selectedAnswer]);
    }

    return <div id="quiz">
        <div id="question">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map(a => (
                    <li key={a} className="answer">
                        <button onClick={() => handleAnswerClick(a)}>{a}</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}