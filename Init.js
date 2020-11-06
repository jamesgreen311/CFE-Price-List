const templateSlideDeckId = "118eqgpPvbCnGMk_gktMQNtAwhFS4mJ-bezEA0hSrw8Y";
const templateSlideId = "ga75653d3a7_0_0"; // Can't count on this not changing
const presentationSlideId = "p";

const slideDeck = connect("slide");
const templateSlide = slideDeck.getSlideById(templateSlideId);
const pSlide = slideDeck.getSlideById(presentationSlideId);

// for testing
/* const testSlideId = "ga75653d3a7_0_32";
const testSlide = slideDeck.getSlideById(testSlideId);
const testImageAsBlob = DriveApp.getFileById(imageId).getBlob();
let imageId = "1ZNxk26QF9EU8f-Qr8RE9giI-Q9mFa2_8";  */

function init() {

}

function connect(app, fileid) {
    let conn;
    if (app === "slide") {
        if (fileid) {
            conn = SlidesApp.openById(fileid);
        } else {
            conn = SlidesApp.getActivePresentation();
        }
    } else if (app === "spreadsheet") {
        if (fileid) {
            conn = SpreadsheetApp.openById(fileid);
        } else {
            conn = SpreadsheetApp.getActiveSpreadsheet();
        }
    }
    return conn;
}