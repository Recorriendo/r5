var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
console.log("Viewport width: " + viewportWidth);

const searchInput = document.getElementById("search-input");
const autocompleteList = document.getElementById("autocomplete-list");

searchInput.addEventListener("input", () => {
    const inputText = searchInput.value.trim();
    if (inputText.length > 0) {
    
    } else {
        autocompleteList.innerHTML = "";
    }
});

function simulateAutocomplete(query) {
    const suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];
    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().startsWith(query.toLowerCase())
    );

    autocompleteList.innerHTML = "";
    filteredSuggestions.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.addEventListener("click", () => {
            searchInput.value = suggestion;
            autocompleteList.innerHTML = "";
        });
        autocompleteList.appendChild(li);
    });
}

