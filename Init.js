const templateSlideDeckId = "118eqgpPvbCnGMk_gktMQNtAwhFS4mJ-bezEA0hSrw8Y";
const templateSlideId = "ga75653d3a7_0_0";
const presentationSlideId = "p";
const slideDeck = connect();
const templateSlide = slideDeck.getSlideById(templateSlideId);
const pSlide = slideDeck.getSlideById(presentationSlideId);
const testSlideId = "ga75653d3a7_0_32";
const testSlide = slideDeck.getSlideById(testSlideId);
let imageId = "1ZNxk26QF9EU8f-Qr8RE9giI-Q9mFa2_8";
const testImageAsBlob = DriveApp.getFileById(imageId).getBlob();

function init() {
    // SlidesApp.getActivePresentation();
    let artistNameId = "ga75653d3a7_0_39";
    let [artist, title, medium, size, price, image] = testSlide.getPageElements();

    
    //console.log(title.asShape().getText(), subtitle.asShape().getText());
    
    artist.asShape().getText().setText("James Green");
    title.asShape().getText().setText("Down the Dark Ravine");
    medium.asShape().getText().setText("Oil & Cold Wax");
    size.asShape().getText().setText(`20" x 20"`);
    price.asShape().getText().setText(`$800`);
    image.asImage().replace(testImageAsBlob);
    //box.asShape().getText().setText(image.asImage().getSourceUrl());
}

function connect(id) {
    let conn;
    if (id) {
        conn = SlidesApp.openById(id);
    } else {
        conn = SlidesApp.getActivePresentation();
    }
    return conn;
}