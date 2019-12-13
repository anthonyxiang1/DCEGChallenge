function makeTrace(i) {
    return {
        x: ["a", "b","c","d"],
        y: [2,5,1,2],
        type: "bar",
        visible: i === 1,
        name: '' + i,

    };
}

Plotly.plot('graph', ['Race', 'Age Group', 'Gender'].map(makeTrace), {
    updatemenus: [{
        y: 1,
        yanchor: 'top',
        buttons: [{
            method: 'restyle',
            args: ['visible', [true, false, false]],
            label: 'Race'
        }, {
            method: 'restyle',
            args: ['visible', [false, true, false]],
            label: 'Age Group'
        }, {
            method: 'restyle',
            args: ['visible', [false, false, true]],
            label: 'Gender'
        }]
    }],
});