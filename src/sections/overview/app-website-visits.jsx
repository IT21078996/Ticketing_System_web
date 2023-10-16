import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';

export default function AppDailyEarnings({ chart, ...other }) {
  const { labels, colors, series, options } = chart;

  // Calculate the total earnings for the month
  const totalEarnings = series[0].data.reduce((acc, value) => acc + value, 0);

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'category', // Use 'category' for days of the month
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `Lkr. ${value.toFixed(2)}`; // Format earnings
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader
        subheader="This month earnings"
        title={`Lkr. ${totalEarnings.toFixed(2)}`} // Display total earnings in the title
      />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

AppDailyEarnings.propTypes = {
  chart: PropTypes.object,
};
