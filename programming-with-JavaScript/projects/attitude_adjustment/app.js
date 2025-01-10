// script.js

document.addEventListener('DOMContentLoaded', () => {
    const experienceSlider = document.getElementById('experience');
    const attitudeSlider = document.getElementById('attitude');
    const experienceValue = document.getElementById('experienceValue');
    const attitudeValue = document.getElementById('attitudeValue');
    const actionText = document.getElementById('actionText');

    // Function to update action suggestion
    function updateSuggestion() {
        const experience = experienceSlider.value;
        const attitude = attitudeSlider.value;

        // Display the current values
        experienceValue.textContent = experience;
        attitudeValue.textContent = attitude;

        // Suggest actions based on experience and attitude
        if (experience <= 33 && attitude <= 33) {
            actionText.textContent = "Focus on learning and staying positive!";
        } else if (experience <= 33 && attitude > 33) {
            actionText.textContent = "Try applying your energy into learning new skills!";
        } else if (experience > 33 && attitude <= 33) {
            actionText.textContent = "Leverage your experience but work on maintaining a positive mindset!";
        } else {
            actionText.textContent = "You're at a good balance! Keep up the good work!";
        }
    }

    // Add event listeners to update suggestions when the sliders change
    experienceSlider.addEventListener('input', updateSuggestion);
    attitudeSlider.addEventListener('input', updateSuggestion);

    // Initial suggestion update
    updateSuggestion();
});
