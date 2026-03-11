import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const bedPrices = {
  general: 500,
  icu: 2000,
  hdu: 1200,
  emergency: 1500,
};

const BedReceipt = () => {
  const { type, bedId } = useParams();
  const navigate = useNavigate();
  const price = bedPrices[type] || 0;

  return (
    <div className="py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Bed Booking Receipt</h2>
      <div className="bg-gray-100 p-6 rounded mb-4 w-full max-w-md">
        <p className="mb-2">Bed Type: <span className="font-semibold">{type.toUpperCase()}</span></p>
        <p className="mb-2">Bed Number: <span className="font-semibold">{bedId.split('-')[1]}</span></p>
        <p className="mb-4">Amount Paid: <span className="font-bold text-lg">₹{price}</span></p>
        <button className="bg-primary text-white px-6 py-2 rounded w-full" onClick={() => navigate('/')}>Go to Home</button>
      </div>
    </div>
  );
};

export default BedReceipt; 