const {GoogleSpreadsheet} = require('google-spreadsheet');

module.exports = async function authenticate() {
    try {
        const doc = new GoogleSpreadsheet('1h9ijMRhM3e7agUYbM6rjBIBM-vImU3qz1Zo-f-HQavA');
        doc.useApiKey(process.env.GOOGLE_API_KEY);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows();
        await sheet.loadCells('A1:E10'); // loads a range of cells
        console.log(sheet.cellStats); // total cells, loaded, how many non-empty
        const a1 = sheet.getCell(0, 0); // access cells using a zero-based index
        const c6 = sheet.getCellByA1('C6'); // or A1 style notation
        console.log(a1.value);
        console.log(a1.formula);
        console.log(a1.formattedValue);
    } catch (error) {
        console.error(error)
    }
}
