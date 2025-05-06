import "./style/CareerTest.css";
import { nextQuestion } from "./style/functions/QuestionFunction";

export function CareerTest() {
    return(
        <>
        <title>Career Test</title>
        <div className="top-section">
        </div>
           <div className="bottom-section">
                <div id="question-box">
                    <div className="question">
                        <h1>Question</h1>
                        <p id="question">Your teacher asks your team of friends to come up with a science project idea. Which one would you do?</p>
                    </div>
                    <div className="options">
                        <label >
                            <input type="radio" name="option" value="1" data-info="Option 1 details"/>
                            Coordinate with your friends and ensure to get a good idea from your friends
                        </label><br />
                    
                        <label >
                            <input type="radio" name="option" value="2" data-info="Option 2 details"/>
                            Browse on the internet and find ideas for the project
                        </label><br />
            
                        <label >
                            <input type="radio" name="option" value="3" data-info="Option 3 details"/>
                            Talk to your seniors and teachers to get a project idea
                        </label><br />
                        <label >
                            <input type="radio" name="option" value="4" data-info="Option 4 details"/>
                            suggest a attractive way to present the project
                        </label><br />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button onClick={nextQuestion} id="logButton">Next</button>
            </div>
        </>
    );
}

