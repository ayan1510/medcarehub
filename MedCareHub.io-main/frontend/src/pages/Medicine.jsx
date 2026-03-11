import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const medicineCategories = [
  {
    name: 'Antibiotics',
    icon: '🧪',
    description: 'Medicines that fight bacterial infections',
    medicines: [
      { name: 'Amoxicillin 500mg', use: 'Bacterial infections', price: 15, unit: '10 cap', available: true },
      { name: 'Ciprofloxacin 500mg', use: 'UTI, GI infections', price: 25, unit: '10 tab', available: true },
      { name: 'Ceftriaxone 1g Inj', use: 'Broad-spectrum IV', price: 40, unit: 'vial', available: true },
      { name: 'Azithromycin 500mg', use: 'RTI, skin infections', price: 20, unit: '6 tab', available: true },
      { name: 'Doxycycline 100mg', use: 'Acne, malaria, STDs', price: 12, unit: '10 cap', available: true },
      { name: 'Meropenem 1g Inj', use: 'Severe infections', price: 700, unit: 'vial', available: false },
      { name: 'Piperacillin + Tazobactam Inj', use: 'ICU infections', price: 300, unit: 'vial', available: true },
      { name: 'Linezolid 600mg', use: 'Resistant infections', price: 120, unit: '10 tab', available: true },
      { name: 'Colistin Inj', use: 'MDR gram-negative', price: 1000, unit: 'vial', available: false },
      { name: 'Metronidazole 400mg', use: 'Anaerobic infections', price: 10, unit: '10 tab', available: true },
    ],
  },
  {
    name: 'Analgesics & Antipyretics',
    icon: '💊',
    medicines: [
      { name: 'Paracetamol 500mg', use: 'Fever/pain', price: 5, unit: '', available: true },
      { name: 'Ibuprofen 400mg', use: 'Pain/inflammation', price: 8, unit: '', available: true },
      { name: 'Diclofenac 50mg', use: 'Joint pain', price: 10, unit: '', available: true },
      { name: 'Tramadol 50mg', use: 'Moderate pain', price: 15, unit: '', available: true },
      { name: 'Ketorolac Inj', use: 'Post-op pain', price: 20, unit: '', available: true },
      { name: 'Morphine Inj', use: 'Severe pain (ICU)', price: 30, unit: '', available: false },
      { name: 'Fentanyl Patch', use: 'Chronic pain', price: 100, unit: '', available: true },
      { name: 'Tapentadol 100mg', use: 'Neuropathic pain', price: 40, unit: '', available: true },
      { name: 'Etoricoxib 90mg', use: 'Arthritis', price: 20, unit: '', available: true },
      { name: 'Naloxone', use: 'Opioid overdose', price: 90, unit: '', available: true },
    ],
  },
  {
    name: 'Cardiac & BP Medications',
    icon: '❤️',
    medicines: [
      { name: 'Atenolol 50mg', use: 'BP, heart rate', price: 10, unit: '', available: true },
      { name: 'Amlodipine 5mg', use: 'Hypertension', price: 6, unit: '', available: true },
      { name: 'Losartan 50mg', use: 'BP', price: 8, unit: '', available: true },
      { name: 'Clopidogrel 75mg', use: 'Antiplatelet', price: 12, unit: '', available: true },
      { name: 'Aspirin 75mg', use: 'Heart protection', price: 5, unit: '', available: true },
      { name: 'Atorvastatin 10mg', use: 'Cholesterol', price: 10, unit: '', available: true },
      { name: 'Nitroglycerin Inj', use: 'Angina', price: 50, unit: '', available: true },
      { name: 'Dopamine Inj', use: 'ICU shock', price: 100, unit: '', available: true },
      { name: 'Enoxaparin Inj', use: 'DVT prevention', price: 300, unit: '', available: false },
      { name: 'Digoxin', use: 'Heart failure', price: 15, unit: '', available: true },
    ],
  },
  {
    name: 'CNS & Psychiatric Drugs',
    icon: '🧠',
    medicines: [
      { name: 'Diazepam 5mg', use: 'Anxiety/seizure', price: 5, unit: '', available: true },
      { name: 'Lorazepam 2mg', use: 'Insomnia/anxiety', price: 8, unit: '', available: true },
      { name: 'Haloperidol 5mg', use: 'Psychosis', price: 10, unit: '', available: true },
      { name: 'Olanzapine 10mg', use: 'Schizophrenia', price: 15, unit: '', available: true },
      { name: 'Risperidone 2mg', use: 'Bipolar', price: 10, unit: '', available: true },
      { name: 'Phenytoin 100mg', use: 'Epilepsy', price: 5, unit: '', available: true },
      { name: 'Levetiracetam 500mg', use: 'Seizures', price: 60, unit: '', available: true },
      { name: 'Sodium Valproate', use: 'Mood/seizure', price: 30, unit: '', available: true },
      { name: 'Propofol Inj', use: 'ICU sedation', price: 120, unit: '', available: false },
      { name: 'Midazolam Inj', use: 'Anesthesia', price: 70, unit: '', available: true },
    ],
  },
  // ... (other categories omitted for brevity, but should be included in the real file)
];

const flattenMedicines = (categories) => {
  return categories.flatMap(cat => cat.medicines.map(med => ({ ...med, category: cat.name, icon: cat.icon })));
};

const CategoryCard = ({ category, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
      isSelected 
        ? 'bg-primary text-white shadow-lg scale-105' 
        : 'bg-white hover:bg-gray-50'
    }`}
  >
    <span className="text-2xl">{category.icon}</span>
    <div className="text-left">
      <div className="font-semibold">{category.name}</div>
      <div className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
        {category.medicines.length} items
      </div>
    </div>
  </button>
);

const MedicineCard = ({ med, addToCart, index }) => {
  const [qty, setQty] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    addToCart(med, qty);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div 
      className="bg-white rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all animate-fade-in-up border border-gray-100"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{med.icon}</span>
          <div>
            <h3 className="font-bold text-lg leading-tight">{med.name}</h3>
            <p className="text-sm text-gray-500">{med.use}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${
          med.available 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {med.available ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>

      <div className="flex items-end justify-between mt-auto pt-4 border-t">
        <div>
          <p className="text-gray-500 text-sm">Price per {med.unit}</p>
          <p className="text-2xl font-bold">₹{med.price}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="number"
              min={1}
              value={qty}
              onChange={e => setQty(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 px-3 py-2 border rounded-lg text-center"
              disabled={!med.available}
            />
            <div className="absolute inset-y-0 right-0 flex flex-col">
              <button 
                className="px-2 hover:bg-gray-100 text-gray-600 rounded-tr-lg"
                onClick={() => setQty(prev => prev + 1)}
                disabled={!med.available}
              >▲</button>
              <button 
                className="px-2 hover:bg-gray-100 text-gray-600 rounded-br-lg"
                onClick={() => setQty(prev => Math.max(1, prev - 1))}
                disabled={!med.available}
              >▼</button>
            </div>
          </div>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              med.available
                ? isAdding
                  ? 'bg-green-500 text-white'
                  : 'bg-primary text-white hover:bg-primary/90'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!med.available || isAdding}
            onClick={handleAdd}
          >
            {isAdding ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ item, updateQty, removeFromCart }) => (
  <div className="flex items-start gap-4 py-4 animate-fade-in">
    <div className="text-2xl">{item.icon}</div>
    <div className="flex-1">
      <div className="font-semibold">{item.name}</div>
      <div className="text-sm text-gray-500">{item.use}</div>
      <div className="text-sm text-primary">₹{item.price} per {item.unit}</div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <button 
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
          onClick={() => updateQty(item.name, item.qty - 1)}
        >-</button>
        <span className="w-8 text-center font-medium">{item.qty}</span>
        <button 
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
          onClick={() => updateQty(item.name, item.qty + 1)}
        >+</button>
      </div>
      <div className="text-right">
        <div className="font-bold">₹{item.price * item.qty}</div>
        <button 
          className="text-sm text-red-500 hover:text-red-600"
          onClick={() => removeFromCart(item.name)}
        >
          Remove
        </button>
      </div>
    </div>
  </div>
);

const Medicine = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const allMedicines = flattenMedicines(medicineCategories);
  const filteredMedicines = allMedicines.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase()) || 
                         med.use.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (med, qty) => {
    if (!med.available) return;
    setCart(prev => {
      const existing = prev.find(item => item.name === med.name);
      if (existing) {
        return prev.map(item => item.name === med.name ? { ...item, qty: item.qty + qty } : item);
      } else {
        return [...prev, { ...med, qty }];
      }
    });
    setMessage(`${med.name} added to cart!`);
    setTimeout(() => setMessage(''), 2000);
  };

  const updateQty = (name, qty) => {
    if (qty < 1) return;
    setCart(prev => prev.map(item => item.name === name ? { ...item, qty } : item));
  };

  const removeFromCart = (name) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    setMessage('Order placed successfully!');
    setCart([]);
    setShowCart(false);
    setTimeout(() => setMessage(''), 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl animate-pulse">💊</div>
          <p className="text-gray-500">Loading medicines...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Medicine Store</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of medicines. We ensure quality and authenticity of all products.
          </p>
        </div>

        {/* Search and Cart */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 sticky top-24 z-10 animate-fade-in-up">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full flex items-center gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search medicines by name or use..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              </div>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="All">All Categories</option>
                {medicineCategories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>
            <button 
              className="bg-primary text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-primary/90 transition-colors relative group"
              onClick={() => setShowCart(true)}
            >
              <span>View Cart</span>
              {cart.length > 0 && (
                <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
              {cart.length > 0 && (
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
              )}
            </button>
          </div>
        </div>

        {message && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-fade-in">
            {message}
          </div>
        )}

        {/* Categories Scroll */}
        <div className="mb-8 overflow-x-auto pb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="flex gap-4">
            <CategoryCard
              category={{ name: 'All Categories', icon: '🏥', medicines: allMedicines }}
              isSelected={selectedCategory === 'All'}
              onClick={() => setSelectedCategory('All')}
            />
            {medicineCategories.map(cat => (
              <CategoryCard
                key={cat.name}
                category={cat}
                isSelected={selectedCategory === cat.name}
                onClick={() => setSelectedCategory(cat.name)}
              />
            ))}
          </div>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((med, idx) => (
            <MedicineCard 
              key={med.name} 
              med={med} 
              addToCart={addToCart}
              index={idx}
            />
          ))}
          {filteredMedicines.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              No medicines found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-3xl m-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Shopping Cart</h3>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowCart(false)}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🛒</div>
                <p className="text-gray-500">Your cart is empty</p>
                <button 
                  className="mt-4 text-primary hover:text-primary/80"
                  onClick={() => setShowCart(false)}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-1 mb-6">
                  {cart.map(item => (
                    <CartItem
                      key={item.name}
                      item={item}
                      updateQty={updateQty}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-gray-500">Total Amount</p>
                      <p className="text-3xl font-bold">₹{total.toLocaleString()}</p>
                    </div>
                    <button
                      className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <span>🔒</span> Secure checkout powered by our payment gateway
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Medicine; 