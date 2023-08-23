////import React, { useState } from 'react';

////const AnnuityCalculator = () => {
////    const [principal, setPrincipal] = useState('');
////    const [rate, setRate] = useState('');
////    const [time, setTime] = useState('');
////    const [result, setResult] = useState(null);

////    const calculateAnnuity = () => {
////        const annuity = (principal * rate) / (1 - Math.pow(1 + rate, -time));
////        setResult(annuity.toFixed(2));
////    };

////    return (
////        <div>
////            <h2>Annuity Calculator</h2>
////            <div>
////                <label>Principal Amount: </label>
////                <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
////            </div>
////            <div>
////                <label>Interest Rate (as a decimal, e.g., 0.05 for 5%): </label>
////                <input type="number" step="0.01" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} />
////            </div>
////            <div>
////                <label>Time Period (in years): </label>
////                <input type="number" value={time} onChange={(e) => setTime(parseInt(e.target.value))} />
////            </div>
////            <button onClick={calculateAnnuity}>Calculate</button>
////            {result && <div>Calculated Annuity: ${result}</div>}
////        </div>
////    );
////};

////export default AnnuityCalculator;


//import React, { useState } from 'react';

//const AnnuityCalculator = () => {
//    const [premium, setPremium] = useState('');
//    const [annuityValue, setAnnuityValue] = useState('');
//    const [termLength, setTermLength] = useState('');
//    const [result, setResult] = useState(null);
//    const calculateInterestRate = () => {
//        const rate = Math.pow((annuityValue / premium), (1 / termLength)) - 1;
//        setResult((rate * 100).toFixed(2)); // Multiply by 100 here
//    };
    
//    //const calculateInterestRate = () => {
//    //    // Logic to calculate the required rate of return
//    //    // This is a placeholder and may need to be adjusted based on the exact formula
//    //    const rate = ((annuityValue / premium) ** (1 / termLength)) - 1;
//    //    setResult(rate.toFixed(2));
//    //};

//    return (
//        <div>
//            <h2>Annuity Calculator</h2>
//            <div>
//                <label>Enter the Premium: </label>
//                <input type="number" value={premium} onChange={(e) => setPremium(e.target.value)} />
//            </div>
//            <div>
//                <label>Enter the Annuity Value: </label>
//                <input type="number" value={annuityValue} onChange={(e) => setAnnuityValue(e.target.value)} />
//            </div>
//            <div>
//                <label>Select the Term Length of the annuity (in years): </label>
//                <input type="number" value={termLength} onChange={(e) => setTermLength(parseInt(e.target.value))} />
//            </div>
//            {/*<button onClick={calculateInterestRate}>CALCULATE</button>*/}
//            <button className="calculate-button" onClick={calculateInterestRate}>CALCULATE</button>


//            {result && <div>It takes an Annual Interest Rate of {result} % for ${Number(premium).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} to grow to ${Number(annuityValue).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} over {termLength} years.</div>}

//            {/*{result && <div>It takes an Annual Interest Rate of {result} % for {premium} to grow to {annuityValue} over {termLength} years.</div>}*/}
//        </div>
//    );
//};

//export default AnnuityCalculator;

import React, { useState } from 'react';

const AnnuityCalculator = () => {
    const [premium, setPremium] = useState('');
    const [annuityValue, setAnnuityValue] = useState('');
    const [termLength, setTermLength] = useState('');
    const [result, setResult] = useState(null);

    const calculateInterestRate = () => {
        const rate = Math.pow((annuityValue / premium), (1 / termLength)) - 1;
        setResult((rate * 100).toFixed(2));
    };

    return (
        <div className="calculator-container">
            <h2>Annuity Calculator</h2>
            
            <div className="calculator-row">
                <label>Enter the Premium: </label>
                <input type="number" value={premium} onChange={(e) => setPremium(e.target.value)} />
            </div>
            
            <div className="calculator-row">
                <label>Enter the Annuity Value: </label>
                <input type="number" value={annuityValue} onChange={(e) => setAnnuityValue(e.target.value)} />
            </div>
            
            <div className="calculator-row">
                <label>Select the Term Length of the annuity (in years): </label>
                <input type="number" value={termLength} onChange={(e) => setTermLength(parseInt(e.target.value))} />
            </div>
            
            <div className="calculator-row">
                <button className="calculate-button" onClick={calculateInterestRate}>CALCULATE</button>
            </div>

            {result && (
                <div className="calculator-row result">
                    It takes an Annual Interest Rate of {result} % for ${Number(premium).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    to grow to ${Number(annuityValue).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} over {termLength} years.
                </div>
            )}
        </div>
    );
};

export default AnnuityCalculator;
