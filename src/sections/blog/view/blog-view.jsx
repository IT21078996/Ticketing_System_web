import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function BlogView() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [route, setRoute] = useState('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [paymentSuccessDialogOpen, setPaymentSuccessDialogOpen] = useState(false);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleRouteChange = (event) => {
    setRoute(event.target.value);
  };

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    if (/^\d{0,12}$/.test(event.target.value)) {
      setCardNumber(event.target.value);
    }
  };

  const handleCvvChange = (event) => {
    if (/^\d{0,3}$/.test(event.target.value)) {
      setCvv(event.target.value);
    }
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handlePaymentSuccessDialogClose = () => {
    setPaymentSuccessDialogOpen(false);
    // Here, you can navigate to another page if needed
  };

  const handleSubmit = () => {
    if (showPaymentForm) {
      // Handle payment form submission here (you can simulate success with a delay)
      setTimeout(() => {
        setPaymentSuccessDialogOpen(true);
      }, 1000);
    } else {
      // Show the payment form
      setShowPaymentForm(true);
    }
  };

  return (
    <Container>
      <Stack direction="column" alignItems="center" mb={5}>
        <Typography variant="h4">Student Pass</Typography>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <form>
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
            />
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
              margin="normal"
            />
            <Select
              label="Route"
              value={route}
              onChange={handleRouteChange}
              fullWidth
              margin="normal"
            >
              <MenuItem value="Route 1">138 - (Homagama - Pettah)</MenuItem>
              <MenuItem value="Route 2">138 - (Kottawa - Pettah)</MenuItem>
              <MenuItem value="Route 3">138 - (Maharagama - Pettah)</MenuItem>
              <MenuItem value="Route 4">122 - (Awissawella - Pettah)</MenuItem>
            </Select>
            <br/><br/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {showPaymentForm ? 'Next' : 'Next'}
            </Button>
            <br/><br/>
          </form>

          {showPaymentForm && (
            <form>
              <TextField
                label="Card Holder Name"
                value={cardHolderName}
                onChange={handleCardHolderNameChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Card No"
                value={cardNumber}
                onChange={handleCardNumberChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="CVV"
                value={cvv}
                onChange={handleCvvChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Expiration Date"
                type="date"
                value={expirationDate}
                onChange={handleExpirationDateChange}
                InputLabelProps={{ shrink: true }}
                fullWidth
                margin="normal"
              />
              <br/><br/>
            </form>
          )}
        </div>
        {showPaymentForm && (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
        <Dialog
          open={paymentSuccessDialogOpen}
          onClose={handlePaymentSuccessDialogClose}
        >
          <DialogTitle>Payment Success</DialogTitle>
          <DialogContent>
            <p>Your payment is done.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePaymentSuccessDialogClose} color="primary">
              Get QR Code
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Container>
  );
}
