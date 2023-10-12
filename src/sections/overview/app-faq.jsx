import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AppWidgetFAQ({ faqs, sx, ...other }) {
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
      <Stack>
        <Typography variant="h4">Frequently asked questions</Typography>
        <br />
        {faqs.map((faq, index) => (
          <div key={index}>
            <Typography variant="subtitle1">{faq.question}</Typography>
            <Typography variant="subtitle2">{faq.answer}</Typography>
          </div>
        ))}
      </Stack>
    </Card>
  );
}

AppWidgetFAQ.propTypes = {
  sx: PropTypes.object,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};
