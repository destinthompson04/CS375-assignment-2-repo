/**
 * Toggles CSS classes to switch visibility between two screens.
 * @param {HTMLElement} currentScreen - The DOM element of the screen to hide.
 * @param {HTMLElement} nextScreen - The DOM element of the screen to show.
 * @returns {void}
 */
export function switchScreen(currentScreen, nextScreen) {
    currentScreen.classList.remove("active");
    nextScreen.classList.add("active");
}