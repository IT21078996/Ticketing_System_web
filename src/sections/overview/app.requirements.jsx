import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AppRequirements({ requirement, description, sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      <Stack alignItems="center">
        <Typography variant="h6">Requirements</Typography>
        <br />
        <Typography variant="subtitle1">{requirement}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Stack>
    </Card>
  );
}

AppRequirements.propTypes = {
  sx: PropTypes.object,
  requirement: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
};
