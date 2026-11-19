
// Find all drum buttons in the HTML.
const drumButtons = document.querySelectorAll(".drum");

// Create a function that plays a selected drum sound.
function playDrum(soundName) {

    // Find the audio element that matches the selected sound.
    const sound = document.getElementById(soundName);

    // Stop the sound and reset it to the beginning.
    sound.currentTime = 0;

    // Play the selected audio file.
    sound.play();

    // Find the button associated with the selected sound.
    const button = document.querySelector(`[data-sound="${soundName}"]`);

    // Add a visual animation to the button.
    button.classList.add("active");

    // Remove the animation after a short delay.
    setTimeout(function() {
        button.classList.remove("active");
    }, 150);
}

// Listen for clicks on every drum button.
drumButtons.forEach(function(button) {

    // Play the corresponding sound when clicked.
    button.addEventListener("click", function() {
        playDrum(button.dataset.sound);
    });

});

// Listen for keyboard presses.
document.addEventListener("keydown", function(event) {

    // Find the drum button that matches the pressed key.
    const button = document.querySelector(
        `[data-key="${event.key.toUpperCase()}"]`
    );

    // Play the sound if a matching key was pressed.
    if (button && !event.repeat) {
        playDrum(button.dataset.sound);
    }

});
