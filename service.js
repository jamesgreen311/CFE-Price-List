//const targetSlideDeck = copyTemplateSlideDeck(templateSlideDeckId);

function getSlideDeckById(id) {
    let slideDeck = DriveApp.getFileById(id);
    return slideDeck;
}

function copyTemplateSlideDeck(templateDeckId, name) {
    let sourceSlideDeck = DriveApp.getFileById(templateDeckId);
    return sourceSlideDeck.makeCopy(name);
}

function copySlide(slideId) {

}

function updateSlideContent(slideId) {

}

function updateTitleSlide() {
    let pSlide = targetSlideDeck.getSlideById(pSlide);
    let [show] = pSlide.getPageElements();
    show.asShape().getText().setText("Crossroads Annual Show 2020");
}