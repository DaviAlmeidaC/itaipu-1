import React, { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../../services/firebaseConfig';
import { Header } from '../../components/header';
import './styles.css';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer';

export function History() {
    const [data, setData] = useState({
        Aceleracao: { valor: 'Valor padrão' },
        Rotacao: { valor: 'Valor padrão' },
        Temperatura: { valor: 'Valor padrão' }
    });

    const [arrays, setArrays] = useState({
        ArrayAceleracao: [],
        ArrayRotacao: [],
        ArrayTemperatura: []
    });

    useEffect(() => {
        const dbRef = ref(database, 'Sensores/MPU');
        const handleData = (snapshot) => {
            const sensorData = snapshot.val();
            console.log(sensorData); // Verifique os dados recebidos no console

            const ArrayAceleracao = Object.values(sensorData.Aceleracao);
            var pos = (ArrayAceleracao.length) - 1;
            var acel = ArrayAceleracao[pos];

            const ArrayRotacao = Object.values(sensorData.Rotacao);
            var pos2 = (ArrayRotacao.length) - 1;
            var rota = ArrayRotacao[pos2];

            const ArrayTemperatura = Object.values(sensorData.Temperatura);
            var pos3 = (ArrayTemperatura.length) - 2;
            var temp = ArrayTemperatura[pos3];

            console.log(acel)
            if (sensorData) {
                const aceleracao = acel || 'Valor padrão';
                const rotacao = rota || 'Valor padrão';
                const temperatura = temp || 'Valor padrão';
                console.log('Valor da Aceleração:', aceleracao);
                console.log('Valor da Rotação:', rotacao);
                console.log('Valor da Temperatura:', temperatura);
            }
            setData({
                Aceleracao: { valor: acel},
                Rotacao: {valor: rota},
                Temperatura: {valor: temp}
            });

            setArrays({
                ArrayAceleracao,
                ArrayRotacao,
                ArrayTemperatura
            });
        };

        onValue(dbRef, handleData);

       
        return () => {
            off(dbRef, 'value', handleData);
        };
    }, []);

    return (
        <div className="back">
            <Header />
            <div className="divir">
            <div className='dados1'>
                <h1>Dados do Sensor MPU</h1>
                <div>
                {arrays.ArrayAceleracao.map((value, index) => (
                    <p key={index} className='inf-bd'>Acelaração: {value}</p>
                    ))} 
</div>
<div>
                {arrays.ArrayRotacao.map((value, index) => (
                    <p key={index} className='inf-bd'>Rotação: {value}</p>
                    ))} 
</div>
<div>
                {arrays.ArrayTemperatura.map((value, index) => (
                    <p key={index} className='inf-bd'>Temperatura: {value}</p>
                    ))} 
</div>

            </div>
                <div className="butao-history">
                    <Link to='/acao'>
                    <button className="button-header1">Resumo</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
