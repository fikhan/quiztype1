import React from 'react'
type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: string;
    questionNum: number;
    totalQuestions: number;
    
}
export const QuestionCard = () => {
    return (
        <div>
            Question Card 
        </div>
    )
}
