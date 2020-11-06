function testGetPageElements() {
    let pageElements = templateSlide.getPageElements();
    let elements = pageElements.map(el => el.getTitle());
    console.log(elements);
}