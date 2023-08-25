import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Happy coding 🎉'];

// Creating the first App component
export default function App() {
  const [step, setStep] = useState(1); // We've just added a state variable called step and a function called setStep to update the state variable.  Step is the state variable and setStep is the function that will update the state variable. The initial value of the state variable is 1.
  // This is the first phase of the process, is called useState hook and is a React hook that allows us to add state to a functional component. It is always at the top of the component.

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  } // We've just added a function called handlePrevious that will update the state variable when the button is clicked. The function will check if the step is greater than 1 and if it is, it will update the state variable by subtracting 1 from the current value.

  function handleNext() {
    if (step < 3) setStep(step + 1);
  } // We've just added a function called handleNext that will update the state variable when the button is clicked. The function will check if the step is less than 3 and if it is, it will update the state variable by adding 1 to the current value.

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      {/* 👆 We've just added a message variable that will display the message based on the current step, the message is displayed in the paragraph tag and the content comes from the messages array */}
      <div className="buttons">
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handlePrevious} // this is the event handler that will call the handlePrevious function when the button is clicked
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handleNext} // this is the event handler that will call the handleNext function when the button is clicked
        >
          Next
        </button>
      </div>
    </div>
  );
}
