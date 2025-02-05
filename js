const textInput = document.getElementById('text-input');
const checker = document.getElementById('check-btn');
const displayResult = document.getElementById('result');

checker.addEventListener("click", () => {
    const inputValue = textInput.value;
    if (inputValue === ''){
        alert('Please input a value.');
        return;
    }

    const givenValue = inputValue.replace(/[^A-Za-z0-9]/g,'').toLowerCase();

    const isPalindrome = givenValue === givenValue.split('').reverse().join('');

    if (isPalindrome ){
        displayResult.textContent = `${inputValue} is a Palindrome.`
    } else {
        displayResult.textContent = `${inputValue} is not a Palindrome.`
    }
})

