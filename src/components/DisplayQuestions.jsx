import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DisplayQuestions() {
    let [allQuestions, setAllQuestions] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:5555/questions")
            .then((response) => {
                setAllQuestions(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    console.log(allQuestions);
    return (
        <div>
            <h1>Tutor Questions</h1>
            {
                allQuestions.map((question) => {
                    if (question.forRole === 'tutor' || question.forRole === 'Tutor') {
                        return (
                            <div key={question._id}>
                                <h3>{question.question}</h3>
                                <p>{question.lengthOfResponse}</p>
                                <br />
                            </div>
                        )

                    }
                })
            }
             {/* || 'tutee' */}
            <hr />
            <h1>Tutee Questions</h1>
            {
                allQuestions.map((question) => {
                    if (question.forRole === 'tutee' || question.forRole === 'Tutee') {
                        return (
                            <div key={question._id}>
                                <h3>{question.question}</h3>
                                <p>{question.lengthOfResponse}</p>
                                <br />
                            </div>
                        )

                    }
                })
            }
        </div>
    );
}

