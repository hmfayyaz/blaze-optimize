

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




async function handleSubmit(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const name = e.target.name.value;
  const message = e.target.message.value;
  const companyname = e.target.companyname.value;
  var gclid = localStorage.getItem('gclid');



  try {
    const form = document.getElementById('emailForm');
    form.innerHTML = `<div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"><div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg"><div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"><defs><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse"><path d="M130 200V.5M.5 .5H200" fill="none" /></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="white" /><svg x="100%" y="-1" class="overflow-visible fill-gray-50"><path d="M-470.5 0h201v201h-201Z" stroke-width="0" /></svg><rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" /></div><h2 class="text-3xl font-bold tracking-tight text-gray-900">We'll be in touch.</h2><p class="mt-6 text-lg leading-8 text-gray-600">We'll immediately review your info, and reach out soon.</p> </div></div>`;
    await db.collection('general_contact_requests').add({ email, name, message, companyname, gclid });
    console.log('Email added successfully');

  } catch (error) {
    console.error('Error adding email:', error);
  }
}
document.getElementById('emailForm').addEventListener('submit', handleSubmit);
