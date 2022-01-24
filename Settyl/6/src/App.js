import React, { useEffect, useState } from 'react';
import './App.css';
import Chart from './Chart';

function App() {

    const [cases, setCases] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://data.covid19india.org/v4/min/data.min.json", requestOptions)
            .then(response => response.json())
            .then(result => setCases(Object.entries(result)))
            .catch(error => console.log('error', error));
    }, [])

    const coor = []

    for (let i = 0; i < cases.length && cases[i][0] !== 'TT'; i++) {
        const element = cases[i];
        coor.push([element[0], element[1].total.confirmed])
      
    }

    return (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '100%',
                height: '100%',
                padding: '20px'
            }}
        >
            <h1 className='text-center my-4 h4'>Total Covid-19 Cases for different States (2021-10-31)</h1>
            <Chart data={coor}/>
        </div>
    )
}

export default App;
