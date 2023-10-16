import React, { useRef } from "react";
import QRCode from "qrcode.react";
import axios from "axios";

export default function QRScreen() {
  const qrRef = useRef(null);

  const handleShowQRCode = () => {
    // Show QR Code Dialog
    const qrData = "Your_QR_Data_Here";
    window.alert(`QR Code Data: ${qrData}`);
  };

  const handleSendEmail = async () => {
    // Capture QR Code as image and attach to email
    const canvas = qrRef.current.children[0];
    const qrDataUrl = canvas.toDataURL();
    const recipient = "nisu2195@gmail.com";

    try {
      await axios.post("YOUR_API_ENDPOINT_FOR_SENDING_EMAIL", {
        recipient,
        qrDataUrl,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.log("Email could not be sent", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Screen</h1>
      <button
        style={{
          backgroundColor: "deepPurple",
          color: "white",
          borderRadius: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        onClick={handleShowQRCode}
      >
        Show QR Code
      </button>
      <div
        ref={qrRef}
        style={{ display: "none" }} // Hide the QR code element
      >
        <QRCode value={"Your_QR_Data_Here"} />
      </div>
      <button onClick={handleSendEmail}>Send via Email</button>
    </div>
  );
}
