import { useState } from 'react';

function RegistrationForm() {
  const [userFormData, setUserFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhoneNumber: '',
  });

  const [alertMessages, setAlertMessages] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhoneNumber: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [focusState, setFocusState] = useState({
    userFirstName: false,
    userLastName: false,
    userEmail: false,
    userPhoneNumber: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFocus = (name) => {
    setFocusState((prevFocusState) => ({ ...prevFocusState, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlertMessages = {};

    if (userFormData.userFirstName === '') {
      newAlertMessages.userFirstName = 'Please enter your first name.';
    } else {
      newAlertMessages.userFirstName = '';
    }

    if (userFormData.userLastName === '') {
      newAlertMessages.userLastName = 'Please enter your last name.';
    } else {
      newAlertMessages.userLastName = '';
    }

    if (userFormData.userPhoneNumber === '') {
      newAlertMessages.userPhoneNumber = 'Please enter your phoneNumber.';
    } else {
      newAlertMessages.userPhoneNumber = '';
    }

    if (userFormData.userEmail === '') {
      newAlertMessages.userEmail = 'Please enter your email.';
    } else {
      newAlertMessages.userEmail = '';
    }

    setAlertMessages(newAlertMessages);

    if (
      newAlertMessages.userFirstName === '' &&
      newAlertMessages.userLastName === '' &&
      newAlertMessages.userPhoneNumber === '' &&
      newAlertMessages.userEmail === ''
    ) {
      setRegistrationSuccess(true);
    }
  };

  return (
    <div className='all'>
      <h2>Registration Form</h2>
      <div className="App">
        {registrationSuccess && (
          <div
            style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '10px',
              marginTop: '10px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >Registration Successful!!</div>
        )}
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="userFirstName"
              value={userFormData.userFirstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              onFocus={() => handleFocus('userFirstName')}
              style={{
                borderColor: focusState.userFirstName ? 'navy' : '#ccc',
              }}
            />
            <div className="alert">{alertMessages.userFirstName}</div>
          </label>

          <br />

          <label>
            <input
              type="text"
              name="userLastName"
              value={userFormData.userLastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              onFocus={() => handleFocus('userLastName')}
              style={{
                borderColor: focusState.userLastName ? 'navy' : '#ccc',
              }}
            />
            <div className="alert">{alertMessages.userLastName}</div>
          </label>

          <br />

          <label>
            <input
              type="email"
              name="userEmail"
              value={userFormData.userEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              onFocus={() => handleFocus('userEmail')}
              style={{
                borderColor: focusState.userEmail ? 'navy' : '#ccc',
              }}
            />
            <div className="alert">{alertMessages.userEmail}</div>
          </label>
              <br />
          <label>
            <input
              type="tel"
              name="userPhoneNumber"
              value={userFormData.userPhoneNumber}
              onChange={handleChange}
              placeholder="Enter your phoneNumber"
              onFocus={() => handleFocus('userPhoneNumber')}
              style={{
                borderColor: focusState.userPhoneNumber ? 'navy' : '#ccc',
              }}
            />
            <div className="alert">{alertMessages.userPhoneNumber}</div>
          </label>
              <br />
          {/*Submit button */}
          <button
            type="submit"
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {' '}
            Register{' '}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
