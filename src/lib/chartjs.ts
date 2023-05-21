'use client';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(...registerables);

export { Bar, Pie, Doughnut, ChartJS };
