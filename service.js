function copyTemplateSlideDeck(templateDeckId) {
    let sourceSlideDeck = DriveApp.getFileById(templateDeckId);
    return sourceSlideDeck.makeCopy("Crossroads Annual Show");;
}