import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Clientformm from '../Components/ClientFormm/Clientformm';
import Header2 from "../Components/Client/Header"

function Clientformmpage() {
  const navigate = useNavigate();
  
  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login"); // Redirect to login if no token
      }
    }, [navigate]);

  return (
    <>
    <Header2 />    
      <Clientformm />
    </>
  );
}

export default Clientformmpage;
