import { useState, useEffect } from 'react';
import Contactform from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter';
import { nanoid } from 'nanoid';

export default function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFiltered] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    for (const contact of contacts) {
      if (name === contact.name) {
        alert(`${name} is allready in contacts`)
        return
      }
    }
    
    setContacts(prevState => [ ...prevState, contact]);
        
  };
   
  const deleteContact = id => {
    return setContacts(contacts => contacts.filter(contact => contact.id !== id),
    );
  };

  const formSubmitHandler = ({ name, number }) => {
    addContact(name, number);
  };

  const normalizedFilter = filter.toLowerCase();
  const realContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  const changeFilter = (e) => {
    setFiltered(e.target.value);
  };

  useEffect(() => {
    if (localStorage.setItem('contacts', JSON.stringify(contacts)) > 0) {
      setContacts(localStorage.getItem('contacts', JSON.parse(contacts)));
    }
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <Contactform
        onSubmit={formSubmitHandler} />
          
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={changeFilter}
      />
        
      <ContactList
        option={realContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
};
  


// class Phonebook extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   }
  
// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts })
//   };
// }
//   componentDidUpdate(prevProps, prevState) {
    // if (this.state.contacts !== prevState.contacts) {
      // localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    // }
//   }
  

  // deleteContact = (contactId) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

//     for (const contact of this.state.contacts) {
//       if (name === contact.name) {
//         alert(`${name} is allready in contacts`)
//         return
//       }
//     }
    
//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
        
//   };

  // formSubmitHandler = ({name,number}) => {
  //   this.addContact(name,number);
  // };

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getRealContacts = () => {
  //   const {contacts, filter } = this.state;
    
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
  //   );

    
//   }

//   render() {

//     const { filter } = this.state;
//     const realContacts = this.getRealContacts();

//     return (
//       <>
//         <h1>Phonebook</h1>
//         <Contactform
//           onSubmit={this.formSubmitHandler} />
          
//         <h2>Contacts</h2>
//         <Filter
//           value={filter}
//           onChange={this.changeFilter}
//         />
        
//         <ContactList
//           option={realContacts}
//           onDeleteContact={this.deleteContact}
//         />
//         </>
//     )
  
//   }
// }

// export default Phonebook;