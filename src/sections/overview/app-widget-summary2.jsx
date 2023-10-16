import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function AppWidgetSummary2({ title, total, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={0.5} alignItems="center">
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
        <Typography variant="h4">{fShortenNumber(total)}</Typography>
      </Stack>
    </Card>
  );
}

AppWidgetSummary2.propTypes = {
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
