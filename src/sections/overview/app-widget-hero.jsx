import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AppWidgetHero({ title, subtitle, buttonLabel, imageSrc }) {
  return (
    <Card
      component={Stack}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
      }}
    >
      <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
        <Typography variant="h4">{title}</Typography>
        <br />
        <Typography variant="subtitle2">{subtitle}</Typography>
        <br />
        <Button variant="contained" sx={{ width: '25%' }}>{buttonLabel}</Button>
      </Stack>
      <Box sx={{ width: 128, height: 128, backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover' }} />
    </Card>
  );
}

AppWidgetHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  imageSrc: PropTypes.string,
};
