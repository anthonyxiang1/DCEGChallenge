var cancerTypes = []
for (var i = 0; i < data.length; i++) {
    cancerTypes.push(data[i].ccs_diagnosis_description)
}
var typeList = [...new Set(cancerTypes)]

function getCountsRace(str, category) {  // return an object with key-value pair of: cancer type: count for a given category (ie. race)
    var countObj = {}
    for (var i =0; i < typeList.length; i++)   // make sure counts start at 0 value
        countObj[typeList[i]] = 0;

    for (var i = 0; i < data.length; i++) {
        
        if (data[i][category] == str) {                 
            if (countObj[data[i].ccs_diagnosis_description] == null)
                countObj[data[i].ccs_diagnosis_description] = 1
            else
                countObj[data[i].ccs_diagnosis_description] += 1
        }
        
    }
    return countObj
}

function plotData(str, category, color) {  // create a subplot of the count data for a given category, and specify the color
    var subdata = {
        x: Object.keys(getCountsRace(str, category)),
        y: Object.values(getCountsRace(str, category)),
        name: str,
        marker: {color: color},
        type: 'bar'
      };
    return subdata;
}
  
var raceplot = [plotData("Black/African American", 'race', '#f5aa66'), 
            plotData("White",'race', '#58508d'),
            plotData("Other Race",'race', '#ff6361'),
            plotData("Multi-racial",'race', '#b1c2ba')];
  
  var layout = {
    title: 'Cancer Types and Race',
    font:{
      family: 'Raleway, sans-serif'
    },
    showlegend: true,
    xaxis: {
        title: "Cancer Types",
      tickangle: -30
    },
    yaxis: {
        title: "Counts",
      gridwidth: 2
    },
    margin: {
      b: 80,
      t: 100
    },
    barmode: 'stack'
  };
  
  Plotly.newPlot('barplotRace', raceplot, layout);


