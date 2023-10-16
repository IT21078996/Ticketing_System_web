import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import EarningToday from '../app-earning-today';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary2 from '../app-widget-summary2';

// ----------------------------------------------------------------------

export default function AdminAppView() {
  return (
    <Container maxWidth="xl">

      <Grid container spacing={3}>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary2
            title="Total Passengers"
            total={1234}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary2
            title="Local Passengers"
            total={856}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary2
            title="Foreign Passengers"
            total={379}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary2
            title="Total Buses"
            total={283}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <EarningToday
            total={1282.5}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
            <AppWebsiteVisits
                chart={{
                labels: [
                    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
                ],
                series: [
                    {
                    name: 'Earnings',
                    type: 'line',
                    data: [1100, 1230, 1150, 2100, 2150, 1400, 1350, 1200, 1300, 1500,
                        1350, 1400, 1450, 1550, 1600, 2000, 1750, 1800, 1900, 1850,
                        1000, 1100, 1200, 1300, 1700, 1500, 1600, 700, 1800, 1450, 1600],
                    },
                ],
                }}
            />
        </Grid>
      </Grid>
    </Container>
  );
}
