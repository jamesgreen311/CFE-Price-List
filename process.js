// get show data from spreadsheet
// copy template slide deck to new file name from show data
// for each entry in show data
//  copy artist info and image slide
//  update title slide with show name
//  update artist info and image slide with show data
function process() {
    const templateSlideDeckId = "118eqgpPvbCnGMk_gktMQNtAwhFS4mJ-bezEA0hSrw8Y";

    const exhibitEntries = getExhibitEntriesById("D3D66B");
    const exhibitName = getExhibitNameById("D3D66B");

    const fileCopy = copyTemplateSlideDeck(templateSlideDeckId, `${exhibitName} Exhibit Price List`);
    const newSlideDeck = SlidesApp.openById(fileCopy.getId());
    const slides = newSlideDeck.getSlides();
    const pSlide = slides[0];
    let [title] = pSlide.getPageElements();
    title.asShape().getText().setText(exhibitName);
};