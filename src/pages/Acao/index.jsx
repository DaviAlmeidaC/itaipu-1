import React, { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../../services/firebaseConfig';
import { Header } from '../../components/header';
import './styles.css';

export function Acao() {
    const [data, setData] = useState({
        Aceleracao: { valor: 'Valor padrão' },
        Rotacao: { valor: 'Valor padrão' },
        Temperatura: { valor: 'Valor padrão' }
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
            })
        };

        /*
        const handleData = (snapshot) => {
            const sensorData = snapshot.val();
            console.log(sensorData); // Verifique os dados recebidos no console
            if (sensorData) {
                setData({
                    Aceleracao: { valor: sensorData.Aceleracao.toArray() || 'Valor padrão' },
                    Rotacao: { valor: sensorData.Rotacao.toArray() || 'Valor padrão' },
                    Temperatura: { valor: sensorData.Temperatura.toArray() || 'Valor padrão' }
                });
            }
        };
*/
        onValue(dbRef, handleData);

        // Cleanup subscription on unmount
        return () => {
            off(dbRef, 'value', handleData);
        };
    }, []);

    return (
        <div className="back">
            <Header />
            <div className='dados'>
                <h1>Dados do Sensor MPU</h1>
                <p className='inf-bd'>Aceleração: {data.Aceleracao.valor}</p>
                <p className='inf-bd'>Rotação: {data.Rotacao.valor}</p>
                <p className='inf-bd'>Temperatura: {data.Temperatura.valor}</p>
            </div>
        </div>
    );
}
