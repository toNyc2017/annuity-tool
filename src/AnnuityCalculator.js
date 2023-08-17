import React, { useState } from 'react';

const AnnuityCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [result, setResult] = useState(null);

    const calculateAnnuity = () => {
        const annuity = (principal * rate) / (1 - Math.pow(1 + rate, -time));
        setResult(annuity.toFixed(2));
    };

    return (
        <div>
            <h2>Annuity Calculator</h2>
            <div>
                <label>Principal Amount: </label>
                <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
            </div>
            <div>
                <label>Interest Rate (as a decimal, e.g., 0.05 for 5%): </label>
                <input type="number" step="0.01" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} />
            </div>
            <div>
                <label>Time Period (in years): </label>
                <input type="number" value={time} onChange={(e) => setTime(parseInt(e.target.value))} />
            </div>
            <button onClick={calculateAnnuity}>Calculate</button>
            {result && <div>Calculated Annuity: ${result}</div>}
        </div>
    );
};

export default AnnuityCalculator;
