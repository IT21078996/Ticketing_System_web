import React from 'react'

import { Box, Card, Grid, Stack, Button, TextField, Typography, FormControl } from '@mui/material'

export default function AssignBusView() {
  return (
    <FormControl>
         <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
                <Card sx={{ p: 3 }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4">Assign Bus</Typography>
                    </Stack>
                    <Box
                    sx={{
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 3,
                        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
                    }}
                    >
                        <TextField name='date' label='Date' />
                        <TextField name='date' label='Bus Number' />
                        <TextField name='date' label='Start Location' />
                        <TextField name='date' label='Arrival Location' />
                        <TextField name='date' label='Start Time' />
                        <TextField name='date' label='Arrival Time' />
                    </Box>

                    <Stack flexDirection='row' justifyContent='center' sx={{ mt: 3 }}>
                    <Button type="submit" variant="outlined" sx={{ mx: 3 }}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" sx={{ mx: 3 }}>
                            Assign
                        </Button>
                    </Stack>
                </Card>
            </Grid>
         </Grid>
    </FormControl>
  )
}
