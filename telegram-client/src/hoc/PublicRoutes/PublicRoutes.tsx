import React, {useLayoutEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const PublicRoutes = () => {

  const [isLogIn, setIsLogIn] = useState<boolean>(false)
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if(isLogIn){
      navigate("/app")
    }
  }, [isLogIn])


  return (
    <div>
      Hello PublicRoutes
    </div>
  );
};

export default PublicRoutes;