
/**
 * Create price list slide deck from template
 * for each entry in show data
 * ..copy artist info and image slide
 * ..update title slide with show name
 * ..update artist info and image slide with show data
 * ..remove artist info slide template from deck
 */
function process() {
    /* Path to template My Drive/MRAA/Call For Entries/Price List Template */
    const templateSlideDeckId = "118eqgpPvbCnGMk_gktMQNtAwhFS4mJ-bezEA0hSrw8Y";

    const exhibitEntries = getExhibitEntriesById("D3D66B");
    const exhibitName = getExhibitNameById("D3D66B");

    const fileCopy = copyTemplateSlideDeck(templateSlideDeckId, `${exhibitName} Exhibit Price List`);
    const newSlideDeck = SlidesApp.openById(fileCopy.getId());
    const slides = newSlideDeck.getSlides();
    const pSlide = slides[0];
    const artistSlide = slides[1];
    let [title] = pSlide.getPageElements();
    title.asShape().getText().setText(exhibitName);

    exhibitEntries.forEach(el => {
        let newSlide = newSlideDeck.appendSlide(artistSlide);
        let [artist, title, medium, size, price, photo] = newSlide.getPageElements();
        
        artist.asShape().getText().setText(`${el[2]} ${el[3]}`);
        title.asShape().getText().setText(el[6]);
        medium.asShape().getText().setText(el[9]);
        size.asShape().getText().setText(`${el[7]}\" x ${el[8]}\"`);
        price.asShape().getText().setText(`\$${el[10]}`);
        try {
            let image = DriveApp.getFileById(el[12]).getBlob();
            photo.asImage().replace(image);
        } catch(error) {
            // bad image id
            console.error("Bad Image Id");
        }
    });

    artistSlide.remove();
};