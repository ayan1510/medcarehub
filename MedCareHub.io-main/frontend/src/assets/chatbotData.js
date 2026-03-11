const chatbotData = [
  // General Health Questions
  { q: 'headache', a: 'Headaches can have many causes, such as stress, dehydration, or lack of sleep. If your headache is severe or persistent, please consult a doctor.' },
  { q: 'chest pain', a: 'Chest pain can be serious. If it is sudden, severe, or accompanied by shortness of breath, seek emergency care immediately.' },
  { q: 'improve my immunity', a: 'To boost your immunity, eat a balanced diet, exercise regularly, get enough sleep, and manage stress.' },
  { q: 'symptoms of covid', a: 'Common COVID-19 symptoms include fever, cough, loss of taste or smell, and difficulty breathing.' },
  { q: 'tired all the time', a: 'Constant tiredness can be due to many factors, including stress, poor sleep, or medical conditions. Consider seeing a doctor if it persists.' },
  { q: 'flu or a cold', a: 'Flu often causes high fever and body aches, while a cold usually has milder symptoms like a runny nose and sore throat.' },
  { q: 'symptoms of anxiety', a: 'Common symptoms of anxiety include excessive worry, restlessness, rapid heartbeat, and trouble sleeping.' },
  { q: 'sick from stress', a: 'Yes, stress can affect your body and make you feel unwell. Managing stress is important for your health.' },

  // Medications
  { q: 'medication for', a: 'Please provide the name of the medication for more details. Always follow your doctor\'s advice regarding medicines.' },
  { q: 'side effects', a: 'Side effects vary by medication. Please specify the medicine name, or consult your doctor or pharmacist for details.' },
  { q: 'take with', a: 'Some medicines interact with others. Always check with your doctor or pharmacist before combining medications.' },
  { q: 'missed a dose', a: 'If you miss a dose, take it as soon as you remember. If it\'s almost time for your next dose, skip the missed one. Do not double up.' },
  { q: 'store my medication', a: 'Most medicines should be stored in a cool, dry place away from sunlight. Check the label for specific instructions.' },
  { q: 'medicine while pregnant', a: 'Not all medicines are safe during pregnancy. Please consult your doctor before taking any medication.' },
  { q: 'alcohol with my medication', a: 'Some medicines interact with alcohol. It\'s best to check with your doctor or pharmacist.' },

  // Appointments and Scheduling
  { q: 'book an appointment', a: 'You can book an appointment through our website by selecting your preferred doctor and time slot.' },
  { q: 'next available slot', a: 'Please check the Doctors page for the next available slot with your chosen doctor.' },
  { q: 'cancel or reschedule', a: 'You can cancel or reschedule your appointment from your account dashboard or by contacting us.' },
  { q: 'virtual consultations', a: 'Yes, we offer virtual consultations. You can select this option when booking your appointment.' },
  { q: 'waiting time', a: 'Waiting times vary by doctor and time of day. You can see estimated waiting times when booking.' },

  // Insurance and Billing
  { q: 'accept my insurance', a: 'We accept many insurance plans. Please contact our billing department or check our website for details.' },
  { q: 'charge on my bill', a: 'If you have questions about a charge, please contact our billing team for clarification.' },
  { q: 'visit cost', a: 'The cost of your visit depends on the service and your insurance coverage. Please contact us for an estimate.' },
  { q: 'payment plan', a: 'Payment plans may be available. Please speak with our billing department for options.' },
  { q: 'services covered', a: 'Coverage depends on your insurance plan. Please check with your provider or our billing team.' },

  // Lab Tests and Results
  { q: 'book a lab test', a: 'You can book lab tests through our website or by contacting our front desk.' },
  { q: 'lab results mean', a: 'Lab results can be complex. Your doctor will explain what your results mean for your health.' },
  { q: 'test results ready', a: 'Most test results are available within a few days. You will be notified when they are ready.' },
  { q: 'fast before blood test', a: 'Some blood tests require fasting. Please check your test instructions or ask your doctor.' },
  { q: 'normal range', a: 'Normal ranges vary by test. Your lab report will include reference ranges for each test.' },

  // Clinic or Hospital Information
  { q: 'where are you located', a: 'Our clinic address is available on the Contact page of our website.' },
  { q: 'opening hours', a: 'Our opening hours are listed on our website. Please check for the most up-to-date information.' },
  { q: 'parking available', a: 'Yes, we have parking available for patients and visitors.' },
  { q: 'wheelchair access', a: 'Our facility is wheelchair accessible.' },
  { q: 'how do I get to your clinic', a: 'Directions to our clinic are available on the Contact page.' },

  // Doctor & Specialist Inquiries
  { q: 'what does a dermatologist do', a: 'A dermatologist specializes in diagnosing and treating skin, hair, and nail conditions.' },
  { q: 'female gynecologist', a: 'Yes, we have female gynecologists available. You can select your preference when booking.' },
  { q: 'second opinion', a: 'You can request a second opinion from another doctor at our clinic.' },
  { q: 'best doctor for back pain', a: 'Orthopedic specialists or physiotherapists are usually best for back pain. You can browse our doctors by specialty.' },
  { q: 'contact my doctor', a: 'You can contact your doctor through your account dashboard or by calling our clinic.' },

  // Mental Health
  { q: 'depressed', a: 'If you think you are depressed, consider reaching out to a mental health professional. We are here to help.' },
  { q: 'therapy online', a: 'Yes, online therapy sessions are available. Please book through our website.' },
  { q: 'anxiety and depression', a: 'Anxiety and depression are different but can occur together. A mental health professional can help you understand and manage both.' },
  { q: 'panic attacks', a: 'If you experience panic attacks, try to stay calm and seek support. Professional help is available.' },
  { q: 'talk to a counselor', a: 'You can book a session with a counselor through our website or contact us for immediate support.' },

  // Children\'s Health
  { q: 'baby have a fever', a: 'A mild fever in babies is common, but if it is high or persistent, consult a pediatrician.' },
  { q: 'vaccinations child need', a: 'Children need several vaccinations as they grow. Your pediatrician can provide a schedule.' },
  { q: 'child isn\'t eating', a: 'If your child refuses to eat for more than a day or seems unwell, consult your doctor.' },
  { q: 'ear infection in kids', a: 'Common signs include ear pain, trouble hearing, and fever. See a doctor if you suspect an ear infection.' },
  { q: 'give adult medicine to my child', a: 'Do not give adult medicine to children unless prescribed by a doctor.' },

  // Pregnancy & Women\'s Health
  { q: 'am I pregnant', a: 'Early pregnancy symptoms include missed periods, nausea, and fatigue. Take a pregnancy test or consult a doctor.' },
  { q: 'foods avoid during pregnancy', a: 'Avoid raw or undercooked foods, certain fish, and unpasteurized products during pregnancy.' },
  { q: 'exercise while pregnant', a: 'Light to moderate exercise is usually safe during pregnancy, but consult your doctor first.' },
  { q: 'first prenatal visit', a: 'Your first prenatal visit should be scheduled as soon as you know you are pregnant.' },
  { q: 'early signs of labor', a: 'Early signs include regular contractions, back pain, and water breaking. Contact your doctor if you think you are in labor.' },

  // Vaccinations
  { q: 'what vaccines do I need', a: 'Vaccine needs depend on your age, health, and travel plans. Consult your doctor for recommendations.' },
  { q: 'flu vaccine safe', a: 'The flu vaccine is safe for most people. If you have concerns, ask your doctor.' },
  { q: 'covid-19 vaccine at your clinic', a: 'Please check our website or contact us to see if COVID-19 vaccines are available at our clinic.' },
  { q: 'booster shot', a: 'Booster shots are recommended for some vaccines. Your doctor can advise you.' },
  { q: 'travel vaccines available', a: 'Yes, we offer travel vaccines. Please book in advance.' },

  // Travel and Preventive Health
  { q: 'vaccines for travel', a: 'Travel vaccine requirements depend on your destination. Check with us or your doctor before traveling.' },
  { q: 'travel first-aid kit', a: 'A travel first-aid kit should include basic medicines, bandages, antiseptics, and any personal medications.' },
  { q: 'covid test to travel', a: 'Some destinations require a COVID-19 test before travel. Check the latest guidelines for your destination.' },
  { q: 'malaria pills', a: 'Malaria prevention pills are available. Consult your doctor for a prescription.' },
  { q: 'prevent traveler\'s diarrhea', a: 'To prevent traveler\'s diarrhea, drink safe water, eat cooked food, and practice good hygiene.' },

  // Emergency Questions
  { q: 'having chest pain', a: 'If you are having chest pain, seek emergency medical help immediately.' },
  { q: 'child is not breathing', a: 'Call emergency services right away if your child is not breathing.' },
  { q: 'been poisoned', a: 'If you suspect poisoning, call emergency services or go to the nearest hospital immediately.' },
  { q: 'call an ambulance', a: 'Please call your local emergency number for ambulance services.' },
  { q: 'emergency contact number', a: 'Our emergency contact number is listed on the Contact page of our website.' },

  // Website and Booking Help (existing)
  { q: 'how to book appointment', a: 'To book an appointment, browse doctors on the Doctors page, select a doctor, and click on Book Appointment. You will need to log in or create an account.' },
  { q: 'how to book bed', a: 'To book a hospital bed, go to the Bed Allocation page, select the type of bed, and follow the steps to book and pay.' },
  { q: 'how to login', a: 'Click on the Create Account button at the top right or go to the Login page. Enter your details to sign up or log in.' },
  { q: 'how to contact', a: 'You can contact us via the Contact page, where you will find a form and our contact details.' },
  { q: 'how to see my appointments', a: 'Go to My Appointments from the menu after logging in to view your upcoming and past appointments.' },
  { q: 'how to see my bed booking', a: 'Go to My Bed Booking from the menu after logging in to view your bed booking details.' },
  { q: 'how to pay for bed', a: 'After selecting a bed, you will be redirected to the payment page. Complete the payment to confirm your booking.' },
  { q: 'how to buy medicine', a: 'Visit the Medicine page to browse and purchase available medicines.' },
  { q: 'how to update profile', a: 'Go to My Profile from the menu to update your personal information.' },
  { q: 'how to logout', a: 'Click on your profile icon in the top right and select Logout.' },
  { q: 'what is medcarehub', a: 'MedCareHub is a platform to book doctor appointments, hospital beds, and buy medicines online easily.' },
  { q: 'how to get help', a: 'You can ask your question here or visit the Contact page for further assistance.' },
];

export default chatbotData; 