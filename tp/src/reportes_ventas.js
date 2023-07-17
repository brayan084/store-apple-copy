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


var iMac = [72, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
var iPhone = [23, 25, 60, 65, 45, 10, 4, 25, 35, 7, 20, 25];
var iPad = [44, 99, 1, 23, 46, 10, 24, 25, 35, 8, 20, 25];
var fecha = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var misoptions = {
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

var midata = {
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

export default function Reportes1() {

    return (
        <div className='espacio'  >
            <Bar data={midata} options={misoptions} />
        </div>
    )
}