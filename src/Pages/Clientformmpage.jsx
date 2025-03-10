<<<<<<< HEAD
import React from 'react'
import Clientformm from '../Components/Clientformm'

function Clientformmpage() {
  return (
    <>
    <Clientformm />
      
    </>
  )
}

export default Clientformmpage
=======
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Clientformm from '../Components/ClientFormm/Clientformm';


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
      <Clientformm />
    </>
  );
}

export default Clientformmpage;
>>>>>>> 5bdeadc (Fresh start with clean code)
