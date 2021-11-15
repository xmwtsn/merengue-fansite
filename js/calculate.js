// Simple JS calculation counting clicks

// Sets variable
var i = 0;
function buttonClick() {
    // Applies increment operator
    i++;
    // Targets input with 'cake' ID on index with value of variable
    document.getElementById('cake').value = i;
}