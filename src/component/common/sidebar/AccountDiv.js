import React, { useState, useEffect } from 'react';
import { getUser} from './../../../services/authService';
import { Image } from 'react-bootstrap';

function AccountDiv(props) {
  const [iconLetter, setIcon] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [img, setImage] = useState(null)

  useEffect(() => {
    (async function anyNameFunction() {
      const {userEmail, userName} = await getUser()
      setEmail(userEmail)
      setUserName(userName)
       setIcon(userName[0].toUpperCase()) 
    })()
  }, [])

  return (
    <div className="user-div">
        {img ? <div className="user-img">
                <Image src={img}/>
              </div>
        : <div className="user-img-icon">
            <span>{iconLetter}</span>
        </div>
        }

        <div className="user-email">{email}</div>
    </div>
  );
}

export default AccountDiv;