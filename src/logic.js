const firebaseConfig = {
  apiKey: "AIzaSyBAdFxxLXzH2wF-XcLxbCauJeLAy5LdQHM",
  authDomain: "querycomposer.firebaseapp.com",
  projectId: "querycomposer",
  storageBucket: "querycomposer.appspot.com",
  messagingSenderId: "486039605657",
  appId: "1:486039605657:web:ebe70b07e1183d503d4308",
  measurementId: "G-6MMGM5MCN3"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function validateForm() {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const companyname = document.getElementById('companyname').value;
  const teamsize = document.getElementById('teamsize').value;
  const message = document.getElementById('message').value;
  const phone = document.getElementById('phone').value;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const genericDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
  const emailDomain = email.substring(email.lastIndexOf('@') + 1);

  if (genericDomains.includes(emailDomain)) {
    alert('Please enter your company email address.');
    return false;
  }

  // Phone number validation
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number.');
    return false;
  }

  // Mandatory fields validation
  if (!name || !companyname || !teamsize || !message || !email || !phone) {
    alert('This form is for business inquiries. Please fill out all fields.');
    return false;
  }

  return true; // All validations passed
}

async function handleSubmit(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const name = e.target.name.value;
  const message = e.target.message.value;
  const companyname = e.target.companyname.value;
  const teamsize = e.target.teamsize.value;
  const phone = e.target.phone.value;
  var gclid = localStorage.getItem('gclid');
  var li_fat_id = localStorage.getItem('li_fat_id');
  var utm_term = localStorage.getItem('utm_term');
  var utm_content = localStorage.getItem('utm_content');
  var utm_source = localStorage.getItem('utm_source');
  var full_url = localStorage.getItem('fullUrl');
  const timestamp = firebase.firestore.Timestamp.fromDate(new Date());

  try {
    const form = document.getElementById('emailForm');
    form.innerHTML = `<div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"><div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg"><div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"><defs><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse"><path d="M130 200V.5M.5 .5H200" fill="none" /></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="white" /><svg x="100%" y="-1" class="overflow-visible fill-gray-50"><path d="M-470.5 0h201v201h-201Z" stroke-width="0" /></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" /></div><h2 class="text-3xl font-bold tracking-tight text-gray-900">We'll be in touch.</h2><p class="mt-6 text-lg leading-8 text-gray-600">We'll immediately review your info, and reach out soon.</p> </div></div>`;
    await db.collection('demo_requests').add({timestamp, email, name, message, companyname, teamsize, phone, gclid, li_fat_id, utm_term, utm_content, utm_source, full_url });
    console.log('Email added successfully');
    var teamCategory = "";
    const teamSizeInt = parseInt(teamsize);

    if (isNaN(teamSizeInt)) {
      teamCategory = "Invalid Team Size";
    } else if (teamSizeInt < 5) {
      teamCategory = "Small Team";
    } else if (teamSizeInt >= 5 && teamSizeInt < 10) {
      teamCategory = "Medium Team";
    } else if (teamSizeInt >= 10) {
      teamCategory = "Big Team";
    }

    gtag('event', 'submit', {
      'event_category': 'Form Submission',
      'event_label': teamCategory
    });
    console.log('event logged successfully');

  } catch (error) {
    console.error('Error adding email:', error);
  }
}

document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (validateForm()) {
    handleSubmit(e); // Only call handleSubmit if validation passes
  }
});