import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import ClientForm from '../Components/ClientFormPage/ClientForm';
import Header2 from "../Components/Client/Header";

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
    <Header2 />
      <ClientForm />
      <Footer />
    </div>
  );
}

export default ClientFormPage;
