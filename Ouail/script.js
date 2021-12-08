addBlock.innerHTML += '</div>';
recipeBlock.innerHTML = addBlock;

allRecipies = document.querySelectorAll('card-body');
allRecipies.forEach(function(recipe) {
    recipe.addEventListener('click', function(event) {
        showRecipeBlock(event.target);
    });
});