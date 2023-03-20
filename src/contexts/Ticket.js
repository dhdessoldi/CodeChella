import { createContext, useState } from 'react';

export const TicketContext = createContext();
TicketContext.displayName = "Ticket"

export default function TicketProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [birthdate, setBirthdate] = useState('');
  return (
    <TicketContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        place,
        setPlace,
        birthdate,
        setBirthdate,
      }}
    >
      {children}
    </TicketContext.Provider>
  )
}