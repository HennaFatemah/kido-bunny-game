import React, {useState} from "react";
import './TestOne.scss'

const TestOne = (props) => {
    const [answer, setAnswer] = useState(props.options);
    
    console.log(props)
    return (
        <div className="drive-test">
            {props.testOne.map(test => {
                return(
                    <div  className="drive-test__question">
                        <p className="drive-test__questions">{test.question}</p>
                        <img  className="drive-test__pic" src={test.image} alt={test.question} /><br/>
                        {test.options.map((text, index) =>{
                            return(
                                <div>
                                    <button
                                        key={index}
                                        className="drive-test__options"
                                        onClick={() => {
                                            setAnswer([text]);
                                            props.select(text,test.answer, test.id)
                                        }}
        >
{text}
        </button>
                                </div>
                            )
                        })}<br/>

                    </div>
                    
                )
            })}
        </div>
    );
};

export default TestOne;