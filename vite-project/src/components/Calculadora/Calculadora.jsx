import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };
    const handleRestar = () => {
        const suma = parseFloat(num1) - parseFloat(num2);
        setResultado(suma);
    };
    const handleMultiplicar = () => {
        const suma = parseFloat(num1) * parseFloat(num2);
        setResultado(suma);
    };
    const handleDividir = () => {
        const suma = parseFloat(num1) / parseFloat(num2);
        setResultado(suma);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSumar}>Sumar</button>
            <br />
            <button onClick={handleRestar}>Restar</button>
            <br />
            <button onClick={handleMultiplicar}>Multiplicar</button>
            <br />
            <button onClick={handleDividir}>Dividir</button>
            {resultado !== null && <p>Resultado: {resultado}</p>}
         
        </div>
    );
};

export default Calculadora;