possibleValues = []
for (var i = 0; i < data.length; i++) {
    possibleValues.push(data[i].apr_risk_of_mortality)
}
var possibleValues = [...new Set(possibleValues)]  // get the unique values of the field

function makeTrace(risk) {
    var costs = []   // list of costs for that length of stay
    for (var i = 0; i < data.length; i++) { 
        if (data[i].apr_risk_of_mortality == risk)
            costs.push(Math.round(parseFloat(data[i].total_charges)))
    }

    return {   // return the boxplot of given mortality risk
        y: costs,
        type: "box",
        name: '' + risk
    };
}

Plotly.plot('graph', possibleValues.map(makeTrace), {   // map the possibleValue list to the buttons corresponding
    updatemenus: [{
        y: 1,
        yanchor: 'top',
        buttons: [{             // specify labels for each dropdown options
            method: 'restyle',
            args: ['visible', [true, false, false, false]],
            label: 'Moderate'
        }, {
            method: 'restyle',
            args: ['visible', [false, true, false, false]],
            label: 'Major'
        }, {
            method: 'restyle',
            args: ['visible', [false, false, true, false]],
            label: 'Minor'
        }, {
            method: 'restyle',
            args: ['visible', [false, false, false, true]],
            label: 'Extreme'
        }]
    }],
});