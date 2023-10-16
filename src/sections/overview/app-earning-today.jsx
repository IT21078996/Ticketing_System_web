import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

export default function EarningToday({ total, sx, ...other }) {
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
      <Stack alignItems="center">
        <Typography variant="h6">Your earnings today</Typography>
        <br />
        <Typography variant="h4">Lkr. {fShortenNumber(total)}</Typography>
        <br />
        <Typography variant="subtitle2">This will update in every </Typography>
        <Typography variant="subtitle2"> midnight</Typography>
        <br />
        <Button variant="contained" sx={{ width: 200 }}>View</Button>
      </Stack>
    </Card>
  );
}

EarningToday.propTypes = {
  sx: PropTypes.object,
  total: PropTypes.number,
  additionalInfo: PropTypes.string,
};
