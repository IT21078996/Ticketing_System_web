import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { Box, Card, Grid, Stack, Button, TextField, Typography, FormControl } from '@mui/material'

import { app } from '../../../firebase';

const db = getFirestore(app);

export default function AssignBusView() {
    const [formData, setFormData] = useState({
        date: '',
        busNumber: '',
        startLocation: '',
        arrivalLocation: '',
        startTime: '',
        arrivalTime: '',
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Add data to Firestore
          const docRef = await addDoc(collection(db, 'buses'), formData);
          console.log("Document written with ID: ", docRef.id);
    
          // Reset the form
          setFormData({
            date: '',
            busNumber: '',
            startLocation: '',
            arrivalLocation: '',
            startTime: '',
            arrivalTime: '',
          });
        } catch (error) {
          console.error("Error adding document: ", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <FormControl>
            <form onSubmit={handleFormSubmit}>
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
                                <TextField name='date' label='Date' value={formData.date} onChange={handleInputChange} />
                                <TextField name='busNumber' label='Bus Number' value={formData.busNumber} onChange={handleInputChange} />
                                <TextField name='startLocation' label='Start Location' value={formData.startLocation} onChange={handleInputChange} />
                                <TextField name='arrivalLocation' label='Arrival Location' value={formData.arrivalLocation} onChange={handleInputChange} />
                                <TextField name='startTime' label='Start Time' value={formData.startTime} onChange={handleInputChange} />
                                <TextField name='arrivalTime' label='Arrival Time' value={formData.arrivalTime} onChange={handleInputChange} />
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
            </form>
        </FormControl>
    )
}
