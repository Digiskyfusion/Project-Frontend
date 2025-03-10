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

  return (
    <div>
      <ClientForm />
      <Footer />
    </div>
  );
}

export default ClientFormPage;
