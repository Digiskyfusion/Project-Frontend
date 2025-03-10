<<<<<<< HEAD
import React from 'react'
import ClientForm from '../Components/ClientForm'
import Footer from '../Components/Footer'

function ClientFormPage() {
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import ClientForm from '../Components/ClientFormPage/ClientForm';


function ClientFormPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage

  // Redirect to login if no token
  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

>>>>>>> 5bdeadc (Fresh start with clean code)
  return (
    <div>
      <ClientForm />
      <Footer />
    </div>
<<<<<<< HEAD
  )
}

export default ClientFormPage
=======
  );
}

export default ClientFormPage;
>>>>>>> 5bdeadc (Fresh start with clean code)
