import { Bar } from 'react-chartjs-2';
import "./reportes.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



/* arrays con los datos de las tablas */
let iMac = [72, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
let iPhone = [23, 25, 60, 65, 45, 10, 4, 25, 35, 7, 20, 25];
let iPad = [44, 99, 1, 23, 46, 10, 24, 25, 35, 8, 20, 25];
let fecha = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


// opcciones
let misoptions = {
    responsive: true,
    animation: true,
    plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgba(255, 255, 255)'
            }
        },
        title: {
            display: true,
            text: 'Reportes de Ventas',
            color: 'rgba(255, 255, 255)'
        },
    },
    scales: {
        y: {
            min: 0,
            max: 100,
            ticks: { color: 'rgba(255, 255, 255)' }
        },
        x: {
            ticks: { color: 'rgba(255, 255, 255)' }
        }
    }
};


// son las columnas de la tabla
let midata = {
    labels: fecha,
    datasets: [
        {
            label: 'iMac',
            data: iMac,
            backgroundColor: 'rgba(0, 220, 255, 0.5)'
        },
        {
            label: 'iPhone',
            data: iPhone,
            backgroundColor: 'rgba(0, 220, 195)'
        },
        {
            label: 'IPad',
            data: iPad,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ]
};
// el html que se renderiza
export default function Reportes1() {

    return (
        <div className='flex justify-content-center text-center py-4 px-4 mx-0 mt-1 lg:mx-8'  >
            <Bar data={midata} options={misoptions} />
        </div>
    )
}