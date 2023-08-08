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


/* arrays con los datos de las tablas */
let Compras_iMac = [45, 50, 5];
let Compras_iPhone = [20, 25, 10];
let Compras_iPad = [25, 30, 35];
let Proveedor = ['aptecno.ar', "appalex.ar", "apjuan.ar"]

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
      text: 'Reportes de compras (mes de julio)',
      color: 'rgba(255, 255, 255)'
    },
  },
  scales: {
    y: {
      min: 0,
      max: 50,
      ticks: { color: 'rgba(255, 255, 255)' }
    },
    x: {
      ticks: { color: 'rgba(255, 255, 255)' }
    }
  }
};

// son las columnas de la tabla
let midata = {
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


// el html que se renderiza
export default function Reportes2() {

  return (
    <div className='flex justify-content-center text-center py-4 px-4 mx-0 mt-1 lg:mx-8'>
      <Bar data={midata} options={misoptions} />
    </div>
  )
}
