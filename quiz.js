function submitQuiz() {
    // Getting the selected answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    
    // Check if all questions were answered
    if (!q1 || !q2 || !q3) {
        document.getElementById('result').innerHTML = "Please answer all questions!";
        return;
    }

    // Check the answers
    let score = 0;
    if (q1.value === "correct") score++;
    if (q2.value === "correct") score++;
    if (q3.value === "correct") score++;

    // Display the result
    document.getElementById('result').innerHTML = `You scored ${score}/3`;
}
