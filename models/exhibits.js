const dataExhibitId = "1eJuLyL_MhXy_s8kKm8sYkUsJkzLMP7M-kfVzp_LxAVQ";
const dataExhibitSheet = connect("spreadsheet",dataExhibitId).getSheetByName("Exhibits");
const DataExhibitMap = {
    all: "a2:n"
}

function getExhibitEntriesById(id) {
    let entries = dataExhibitSheet.getRange(DataExhibitMap.all+dataExhibitSheet.getLastRow()).getValues();
    let exhibit = entries.filter(r => r[0] === id);
    return exhibit;
}