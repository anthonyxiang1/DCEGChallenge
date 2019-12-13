var costLists = {}   // object that contains cancertype: [list of charges]
for (var i = 0; i < data.length; i++) { 
    if (costLists[data[i].ccs_diagnosis_description] == null)
        costLists[data[i].ccs_diagnosis_description] = []
    costLists[data[i].ccs_diagnosis_description].push(Math.log(data[i].total_charges))
}

var plotData = []

for (var i = 0; i < Object.keys(costLists).length; i++) {    // adds all of the cancer type plots to be displayed
    var temp = {
        y: costLists[Object.keys(costLists)[i]],
        name: Object.keys(costLists)[i],
        type: 'violin'
    };
    plotData.push(temp);
}

layout = {
    title: 'Cancer Types and Costs (log of Total Charges)',
    yaxis: {
        title: "Log(Total Charges)",
        autorange: true,
        showgrid: true
    },
    xaxis: {
        title: "Cancer Types"
    },
    margin: {
        b: 80,
        t: 100
    },
    showlegend: true
};
  
Plotly.newPlot('violin', plotData, layout);