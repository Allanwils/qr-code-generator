import { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeGenerator() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrcode(input);
    setInput('');
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter text for QR code"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate QR Code
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrcode} size={400} bgColor='#ffffff'/>
      </div>
    </div>
  );
}

export default QrCodeGenerator;
