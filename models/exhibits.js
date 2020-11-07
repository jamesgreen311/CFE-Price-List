const dataExhibitId = "1eJuLyL_MhXy_s8kKm8sYkUsJkzLMP7M-kfVzp_LxAVQ";
const dataExhibitSpreadsheet = connect("spreadsheet", dataExhibitId);
const dataExhibitSheet = dataExhibitSpreadsheet.getSheetByName("Exhibits");
const config = dataExhibitSpreadsheet.getSheetByName("Config");

const DataExhibitMap = {
    all: "a2:n"
}

// Defines the structure of the config array
const Config = {
    showId: 0,
    exhibitName: 1,
    callForEntriesDate: 2,
    callForEntriesCloseDate: 3,
    maxEntriesPerArtist: 4,
    maxEntriesPerShow: 5,
    imageFolderId: 6
}

// Map field names to column position
const ConfigColMap = {
    showId: 1,
    exhibitName: 2,
    callForEntriesDate: 3,
    callForEntriesCloseDate: 4,
    maxEntriesPerArtist: 5,
    maxEntriesPerShow: 6,
    imageFolderId: 7,

}

/*
Retrieve a show from the Config tab
* @param {string} id
* @return {object} show
*/
function getShow(id) {
    let data = config.getRange(2, 1, config.getLastRow() - 1, config.getLastColumn()).getDisplayValues();
    let show = {};

    for (let d of data) {
        if (d[Config.showId] === id) {
            show.id = d[Config.showId]; // 0
            show.name = d[Config.exhibitName]; // 1
            show.openDate = d[Config.callForEntriesDate]; // 2
            show.closeDate = d[Config.callForEntriesCloseDate]; // 3
            show.maxEntriesPerArtist = d[Config.maxEntriesPerArtist]; // 4
            show.maxEntriesPerShow = d[Config.maxEntriesPerShow]; //5
            show.imageFolderId = d[Config.imageFolderId]; // 6
        } 
    }
    return show;
}

function getExhibitNameById(id) {
    return getShow(id).name;
}

/*

@Return {array} strings id of all shows 
*/
function getAllShowIds() {
    let shows = new Array();
    let allShows = config.getRange(2, 1, config.getLastRow() - 1, 1).getDisplayValues();

    shows = allShows.map(s => s[0]);

    return shows;
}

function getExhibitEntriesById(id) {
    let entries = dataExhibitSheet.getRange(DataExhibitMap.all+dataExhibitSheet.getLastRow()).getValues();
    let exhibit = entries.filter(r => r[0] === id);
    return exhibit;
}