function getRandomCategory(categories) {
    return categories[Math.floor(Math.random() * categories.length)];
}
$dc.getAllCategories().then(function(categories) {
    return getRandomCategory(categories);
})
function replacePlaceholder(html, category) {
    return html.replace('{{randomCategoryShortName}}', category.short_name);
}
$dc.loadHomePage().then(function(homeHtml) {
    $dc.getAllCategories().then(function(categories) {
        var randomCategory = getRandomCategory(categories);
        var newHomeHtml = replacePlaceholder(homeHtml, randomCategory);
        // TODO: STEP 4: insert newHomeHtml into the DOM
    });
});
$dc.loadHomePage().then(function(homeHtml) {
    $dc.getAllCategories().then(function(categories) {
        var randomCategory = getRandomCategory(categories);
        var newHomeHtml = replacePlaceholder(homeHtml, randomCategory);
        $dc.insertHtml('#main-content', newHomeHtml);
    });
});
