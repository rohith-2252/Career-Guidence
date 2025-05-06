
import {questions} from "./Questions";

const answer = [];


let questionIndex = 0;

export function nextQuestion() {
  const options = document.getElementsByName("option");
  let isOptionSelected = false;

  // Check if an option is selected
  for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
          isOptionSelected = true;
          break;
      }
  }

  // If no option is selected, display an alert and return
  if (!isOptionSelected) {
      alert("Please select an option before proceeding!");
      return;
  }

  // Log the selected option's data-info
  logData();

  // Move to the next question
  questionIndex++;
  if (questionIndex >= questions.length-1) {
      document.getElementById("logButton").innerText = "Finish";
  }

  if (questionIndex >= questions.length) {
    document.querySelector(".question").innerHTML =`<h1>Its a tie breaker</h1>`;
    document.querySelector(".options").innerHTML =`
     <p>highly organized - plans every action beforehand, love to lead and solve issues</p>
     <p>highly informative - gather information, seek knowledge and spread them.</p>
     <p>highly creative - have love towards art of any form, have more new ideas in doing anything.</p>
     <p>${answer}</p>`;

    document.getElementById("logButton").style.display = "none";
    console.log(answer);
    return;
}

  const currentQuestion = questions[questionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  // document.getElementsByName("option").forEach((input, idx) => {
  //     input.checked = false; // Clear selection
  //     document.querySelectorAll("label")[idx].innerText = currentQuestion.options[idx];
  // });
  document.querySelector(".options").innerHTML = `
              <label >
                  <input type="radio" name="option" value="1" data-info="Option 1 details" />
                  ${currentQuestion.options[0]}
              </label><br />
          
              <label >
                  <input type="radio" name="option" value="2" data-info="Option 2 details" />
                  ${currentQuestion.options[1]}
              </label><br />
  
              <label >
                  <input type="radio" name="option" value="3" data-info="Option 3 details" />
                  ${currentQuestion.options[2]}
              </label><br />
              <label >
                  <input type="radio" name="option" value="4" data-info="Option 4 details" />
                  ${currentQuestion.options[3]}
              </label><br />`
}

function logData() {
      const selectedRadio = document.querySelector('input[type="radio"]:checked');
      if (selectedRadio) {
          // Log the data attribute info of the selected radio button
          console.log(selectedRadio.dataset.info);
          answer.push(selectedRadio.value);
      } else {
          console.log("No option selected.");
      }
  }
