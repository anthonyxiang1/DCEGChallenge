function getCountsRace(str, category) {  // return an object with key-value pair of: cancer type: count for a given category (ie. race)
    var countObj = {}
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
  
var plot = [plotData("Black/African American", 'race', '#003f5c'), 
            plotData("White",'race', '#58508d'),
            plotData("Other Race",'race', '#ff6361')];
  
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
    barmode: 'stack'
  };
  
  Plotly.newPlot('barplotRace', plot, layout);