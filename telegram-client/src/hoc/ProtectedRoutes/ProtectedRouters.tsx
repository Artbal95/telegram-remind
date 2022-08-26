import {useLayoutEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const ProtectedRoutes = () => {

  const [isLogIn, setIsLogIn] = useState<boolean>(false)
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if(!isLogIn){
      navigate("/")
    }
  }, [isLogIn])


  return (
    <div>
      Hello ProtectedRouters
    </div>
  );
};

export default ProtectedRoutes;