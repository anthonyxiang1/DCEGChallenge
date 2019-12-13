var cancerTypes = []
for (var i = 0; i < data.length; i++) {
    cancerTypes.push(data[i].ccs_diagnosis_description)
}
var typeList = [...new Set(cancerTypes)] // ensure that each possible cancer type is included, so values aren't offset by missing ones

function getCounts(str, category) {  // return an object with key-value pair of: cancer type: count for a given category (ie. race)
    var countObj = {}
    for (var i =0; i < typeList.length; i++)   // make sure counts start at 0 value
        countObj[typeList[i]] = 0;
    
        for (var i = 0; i < data.length; i++) {
        
        if (data[i][category] == str) {                 
            if (countObj[data[i].ccs_diagnosis_description] == 0)
                countObj[data[i].ccs_diagnosis_description] = 1
            else
                countObj[data[i].ccs_diagnosis_description] += 1
        }
        
    }
    return countObj
}

var heatPlot = [ // put each of the counts in, row for each 
    {
      z: [Object.values(getCounts("0 to 17", "age_group")), 
        Object.values(getCounts("18 to 29", "age_group")),
        Object.values(getCounts("30 to 49", "age_group")),
        Object.values(getCounts("50 to 69", "age_group")),
        Object.values(getCounts("70 or Older", "age_group"))
        ],
      x: Object.keys(getCounts("0 to 17", "age_group")),
      y: ["0 to 17", "18 to 29", "30 to 49", "50 to 69", "70 or Older"],
      type: 'heatmap'
    }
  ];

layout = {
    title: 'Cancer Types and Age Groups',
    yaxis: {
        title: "Age Groups"
    },
    xaxis: {
        title: "Cancer Types"
    },
    showlegend: true
};
  
  Plotly.newPlot('heatmap', heatPlot, layout);