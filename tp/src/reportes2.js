import { Bar } from 'react-chartjs-2';
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



var Compras_iMac = [45, 50, 5];
var Compras_iPhone = [20, 25, 10];
var Compras_iPad = [25, 30, 35];

let Proveedor = ['aptecno.ar', "alex", "juan"]


var misoptions = {
  responsive: true,
  animation: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: 'Reportes de compras (mes de julio)',
    },
  },
  scales: {
    y: {
      min: 0,
      max: 50
    },
    x: {
      ticks: { color: 'rgba(0, 0, 0, 0.5)' }
    }
  }
};

var midata = {
  labels: Proveedor,
  datasets: [
    {
      label: 'iMac',
      data: Compras_iMac,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(100, 99, 132)',
      backgroundColor: 'rgba(100, 99, 132)',
      pointRadius: 5,
      pointBorderColor: 'rgba(100, 99, 132)',
      pointBackgroundColor: 'rgba(100, 99, 132)',
    },
    {
      label: 'IPhone',
      data: Compras_iPhone,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(255, 255, 132)',
      backgroundColor: 'rgba(255, 255, 132)',
      pointRadius: 5,
      pointBorderColor: 'rgba(255, 255, 132)',
      pointBackgroundColor: 'rgba(255, 255, 132)',
    },
    {
      label: 'IPad',
      data: Compras_iPad,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132)',
      pointRadius: 5,
      pointBorderColor: 'rgba(255, 99, 132)',
      pointBackgroundColor: 'rgba(255, 99, 132)',
    }
  ]
};

export default function Bars() {

  return (
    <div className='d-flex'>
      <Bar data={midata} options={misoptions} />
    </div>
  )
}
