var female = {};
var male = {};

for (var i = 0; i < data.length; i++) {

    if (data[i].gender == "M") {                  // counts of male patients with certain cancer type
        if (male[data[i].ccs_diagnosis_description] == null)
            male[data[i].ccs_diagnosis_description] = 1
        else
            male[data[i].ccs_diagnosis_description] += 1
    }

    if (data[i].gender == "F") {                  // counts of female patients with certain cancer type
        if (female[data[i].ccs_diagnosis_description] == null)
            female[data[i].ccs_diagnosis_description] = 1
        else
            female[data[i].ccs_diagnosis_description] += 1
    }
}

var maleData = {
    x: Object.keys(male),
    y: Object.values(male),
    name: 'Male',
    marker: {color: 'rgb(26, 118, 255)'},
    type: 'bar'
  };
  
  var femaleData = {
    x: Object.keys(male),
    y: Object.values(female),
    name: 'Female',
    marker: {color: '#ffa500'},
    type: 'bar'
  };
  
  var plot = [maleData, femaleData];
  
  var layout = {
    title: 'Cancer Types and Gender',
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
  
  Plotly.newPlot('barplot', plot, layout);