import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const mockBills = [
  {
    id: 'A1001',
    type: 'Appointment',
    date: '2024-06-10',
    patient: { name: 'John Doe', age: 32, gender: 'Male' },
    doctor: { name: 'Dr. Smith', speciality: 'Cardiologist' },
    amount: 500,
    details: { time: '10:00 AM', status: 'Completed' },
    paymentMethod: 'Online',
    paymentStatus: 'Paid',
  },
  {
    id: 'B2001',
    type: 'Bed',
    date: '2024-06-09',
    patient: { name: 'Jane Doe', age: 28, gender: 'Female' },
    bed: { type: 'ICU', number: '5', suggestion: 'ICU for 2 days' },
    amount: 4000,
    details: { status: 'Admitted' },
    paymentMethod: 'Card',
    paymentStatus: 'Paid',
  },
  {
    id: 'M3001',
    type: 'Medicine',
    date: '2024-06-08',
    patient: { name: 'John Doe', age: 32, gender: 'Male' },
    medicines: [
      { name: 'Paracetamol 500mg', qty: 2, price: 5 },
      { name: 'Amoxicillin 500mg', qty: 1, price: 15 },
    ],
    amount: 25,
    details: { status: 'Delivered' },
    paymentMethod: 'Cash',
    paymentStatus: 'Paid',
  },
  {
    id: 'A1002',
    type: 'Appointment',
    date: '2024-06-05',
    patient: { name: 'John Doe', age: 32, gender: 'Male' },
    doctor: { name: 'Dr. Johnson', speciality: 'Dermatologist' },
    amount: 300,
    details: { time: '2:00 PM', status: 'Completed' },
    paymentMethod: 'Online',
    paymentStatus: 'Paid',
  },
  {
    id: 'B2002',
    type: 'Bed',
    date: '2024-05-28',
    patient: { name: 'Sarah Wilson', age: 45, gender: 'Female' },
    bed: { type: 'General Ward', number: '12', suggestion: 'General ward for 1 day' },
    amount: 500,
    details: { status: 'Discharged' },
    paymentMethod: 'Online',
    paymentStatus: 'Paid',
  },
];

const MyBilling = () => {
  const [bills, setBills] = useState(mockBills);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Appointment': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Bed': return 'bg-green-50 text-green-700 border-green-200';
      case 'Medicine': return 'bg-purple-50 text-purple-700 border-purple-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const filteredBills = bills.filter(bill => {
    if (filter === 'all') return true;
    return bill.type.toLowerCase() === filter;
  });

  const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const totalPaid = bills.filter(bill => bill.paymentStatus === 'Paid').reduce((sum, bill) => sum + bill.amount, 0);

  const generatePDF = (bill) => {
    try {
      const doc = new jsPDF();
      let y = 20;

      // Header
      doc.setFontSize(24);
      doc.setTextColor(34, 197, 94);
      doc.text('MedCareHub', 20, y);
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text('Healthcare Services', 20, y + 8);
      
      // Invoice details
      y += 25;
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text('INVOICE', 20, y);
      doc.setFontSize(10);
      doc.text(`Invoice ID: ${bill.id}`, 20, y + 10);
      doc.text(`Date: ${formatDate(bill.date)}`, 20, y + 16);
      doc.text(`Type: ${bill.type}`, 20, y + 22);

      // Patient Information
      y += 35;
      doc.setFontSize(14);
      doc.text('Patient Information', 20, y);
      doc.setFontSize(10);
      doc.text(`Name: ${bill.patient.name}`, 20, y + 8);
      doc.text(`Age: ${bill.patient.age}`, 20, y + 14);
      doc.text(`Gender: ${bill.patient.gender}`, 20, y + 20);

      // Service Details based on type
      y += 35;
      doc.setFontSize(14);
      doc.text('Service Details', 20, y);

      if (bill.type === 'Appointment') {
        doc.setFontSize(12);
        doc.text('Doctor Information', 20, y + 8);
        doc.setFontSize(10);
        doc.text(`Name: ${bill.doctor.name}`, 20, y + 16);
        doc.text(`Speciality: ${bill.doctor.speciality}`, 20, y + 22);
        doc.text(`Time: ${bill.details.time}`, 20, y + 28);
        doc.text(`Status: ${bill.details.status}`, 20, y + 34);
        y += 45;
      } else if (bill.type === 'Bed') {
        doc.setFontSize(12);
        doc.text('Bed Information', 20, y + 8);
        doc.setFontSize(10);
        doc.text(`Bed Type: ${bill.bed.type}`, 20, y + 16);
        doc.text(`Bed Number: ${bill.bed.number}`, 20, y + 22);
        doc.text(`Suggestion: ${bill.bed.suggestion}`, 20, y + 28);
        doc.text(`Status: ${bill.details.status}`, 20, y + 34);
        y += 45;
      } else if (bill.type === 'Medicine') {
        doc.setFontSize(12);
        doc.text('Medicine Details', 20, y + 8);
        
        const medicineData = [
          ['Medicine', 'Quantity', 'Price', 'Total']
        ];
        
        bill.medicines.forEach(med => {
          medicineData.push([
            med.name,
            med.qty.toString(),
            `₹${med.price}`,
            `₹${med.price * med.qty}`
          ]);
        });
        
        doc.autoTable({
          startY: y + 16,
          head: [medicineData[0]],
          body: medicineData.slice(1),
          theme: 'grid',
          headStyles: { fillColor: [34, 197, 94] },
          styles: { fontSize: 9 }
        });
        
        y = doc.lastAutoTable.finalY + 10;
        doc.text(`Status: ${bill.details.status}`, 20, y);
        y += 10;
      }

      // Amount
      doc.setFontSize(14);
      doc.text('Amount Details', 20, y);
      doc.setFontSize(12);
      doc.text(`Total Amount: ₹${bill.amount}`, 20, y + 8);
      doc.text(`Payment Method: ${bill.paymentMethod}`, 20, y + 16);
      doc.text(`Payment Status: ${bill.paymentStatus}`, 20, y + 24);

      // Footer
      y += 35;
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text('Thank you for choosing MedCareHub!', 20, y);
      doc.text('For any queries, contact: info@medcarehub.com', 20, y + 6);

      // Save PDF
      doc.save(`${bill.id}_invoice.pdf`);
      
    } catch (error) {
      console.error('PDF Error:', error);
      alert('PDF generation failed. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-pulse">💰</div>
          <p className="text-gray-500">Loading billing information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">My Billing</h2>
          <p className="text-gray-600">View and download your medical bills and invoices</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in-up">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Bills</p>
                <p className="text-2xl font-bold text-gray-800">{bills.length}</p>
              </div>
              <div className="text-3xl">📄</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Amount</p>
                <p className="text-2xl font-bold text-primary">₹{totalAmount.toLocaleString()}</p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Paid Amount</p>
                <p className="text-2xl font-bold text-green-600">₹{totalPaid.toLocaleString()}</p>
              </div>
              <div className="text-3xl">✅</div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">₹{(totalAmount - totalPaid).toLocaleString()}</p>
              </div>
              <div className="text-3xl">⏳</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'all', label: 'All Bills', icon: '📋' },
              { key: 'appointment', label: 'Appointments', icon: '👨‍⚕️' },
              { key: 'bed', label: 'Bed Bookings', icon: '🛏️' },
              { key: 'medicine', label: 'Medicines', icon: '💊' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  filter === tab.key
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bills List */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          {filteredBills.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No bills found</h3>
              <p className="text-gray-600 mb-6">
                {filter === 'all' 
                  ? "You don't have any bills yet."
                  : `No ${filter} bills found.`
                }
              </p>
            </div>
          ) : (
            filteredBills.map((bill, index) => (
              <div
                key={bill.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Bill Type Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-2xl ${
                        bill.type === 'Appointment' ? 'bg-blue-100' :
                        bill.type === 'Bed' ? 'bg-green-100' : 'bg-purple-100'
                      }`}>
                        {bill.type === 'Appointment' ? '👨‍⚕️' :
                         bill.type === 'Bed' ? '🛏️' : '💊'}
                      </div>
                    </div>

                    {/* Bill Details */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-gray-800">
                              {bill.type} - {bill.id}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(bill.type)}`}>
                              {bill.type}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPaymentStatusColor(bill.paymentStatus)}`}>
                              {bill.paymentStatus}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">👤 Patient</p>
                              <p className="font-medium">{bill.patient.name} ({bill.patient.age}, {bill.patient.gender})</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">📅 Date</p>
                              <p className="font-medium">{formatDate(bill.date)}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">💳 Payment Method</p>
                              <p className="font-medium">{bill.paymentMethod}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 mb-1">💰 Amount</p>
                              <p className="font-medium text-lg font-bold text-primary">₹{bill.amount.toLocaleString()}</p>
                            </div>
                          </div>

                          {/* Service Specific Details */}
                          <div className="bg-gray-50 rounded-lg p-4">
                            {bill.type === 'Appointment' && (
                              <div>
                                <p className="text-sm text-gray-600 mb-2">🏥 Doctor Details</p>
                                <p className="font-medium">Dr. {bill.doctor.name} ({bill.doctor.speciality})</p>
                                <p className="text-sm text-gray-600">Time: {bill.details.time} | Status: {bill.details.status}</p>
                              </div>
                            )}
                            {bill.type === 'Bed' && (
                              <div>
                                <p className="text-sm text-gray-600 mb-2">🛏️ Bed Details</p>
                                <p className="font-medium">{bill.bed.type} - Bed {bill.bed.number}</p>
                                <p className="text-sm text-gray-600">Suggestion: {bill.bed.suggestion} | Status: {bill.details.status}</p>
                              </div>
                            )}
                            {bill.type === 'Medicine' && (
                              <div>
                                <p className="text-sm text-gray-600 mb-2">💊 Medicine Details</p>
                                <div className="space-y-1">
                                  {bill.medicines.map((med, i) => (
                                    <p key={i} className="text-sm">
                                      {med.name} x{med.qty} = ₹{med.price * med.qty}
                                    </p>
                                  ))}
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Status: {bill.details.status}</p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col items-end gap-4">
                          <button
                            onClick={() => generatePDF(bill)}
                            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                          >
                            📄 Download PDF
                          </button>
                          
                          {bill.paymentStatus === 'Pending' && (
                            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                              💳 Pay Now
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBilling; 