import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, buttonLabel, color = 'primary', sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={0.5} sx={{ flex: 1 }}>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
        <Typography variant="h4">Lkr. {fShortenNumber(total)}</Typography>
      </Stack>
      <Stack>
        <Button variant="outlined">{buttonLabel}</Button>
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  buttonLabel: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
