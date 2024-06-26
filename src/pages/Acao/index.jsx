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
            if (sensorData) {
                setData({
                    Aceleracao: { valor: sensorData.Aceleracao.valor || 'Valor padrão' },
                    Rotacao: { valor: sensorData.Rotacao.valor || 'Valor padrão' },
                    Temperatura: { valor: sensorData.Temperatura.valor || 'Valor padrão' }
                });
            }
        };

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
