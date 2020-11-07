function testGetPageElements() {
    let pageElements = templateSlide.getPageElements();
    let elements = pageElements.map(el => el.getTitle());
    console.log(elements);
}

function testCopySlideDeck() {
    let newSlideDeck = copyTemplateSlideDeck(templateSlideDeckId);
    let newSlideDeckId = newSlideDeck.getId();
    console.log(newSlideDeckId);
}

function testGetExhibitData() {
    let exhibitEntries = getExhibitEntriesById("D3D66B");
    console.log(exhibitEntries);
}