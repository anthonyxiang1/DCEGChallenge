function getJSON(url) {  // REST API call to get the json object (our data)
    var resp = '';
    var req = new XMLHttpRequest();

    if(req != null)
    {
        req.open( "GET", url, false );
        req.send( null );
        resp = req.responseText;
    }
    return resp;
}

// based on CCS User Guide, labels 11 - 41 are cancer diagnoses
var gjson = getJSON("https://health.data.ny.gov/resource/gnzp-ekau.json?$where=ccs_diagnosis_code%20between%2011%20and%2041%20&$limit=100000") 

var data = JSON.parse(gjson)  // 66289 rows of cancer diagnoses