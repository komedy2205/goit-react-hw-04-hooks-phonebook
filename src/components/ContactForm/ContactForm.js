import { useState } from "react";
 

export default function Contactform({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ name, number });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} >
                <label>
                    Name
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        autoComplete="off"
                        required
                    />
                </label>
                <br />

                <label>
                    Number
                    <br />
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        autoComplete="off"
                        required
                    />
                    <br />
                </label>
          
                <button type='submit'>Add contact</button>
            </form>
        </>
    );

};

// class Contactform extends Component {
//     state = {
//         name: '',
//         number: '',
//     }
  
//   handleChange = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value});
//      };

//   handleSubmit = e => {
//     e.preventDefault();

//       this.props.onSubmit(this.state);
//       this.reset();
//   };
  
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//     render() {
        
//     const { name, number } = this.state;
//     const submit = this.handleSubmit;
//     const change = this.handleChange;

        // return (
        //     <>
        //     <form onSubmit={submit} >
        //         <label>
        //             Name
        //             <br />
        //             <input
        //                 type="text"
        //                 name="name"
        //                 value={name}
        //                 onChange={change}
        //                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        //                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        //                 autoComplete="off"
        //                 required
        //             />
        //         </label>
        //         <br />

        //         <label>
        //             Number
        //             <br />
        //             <input
        //                 type="tel"
        //                 name="number"
        //                 value={number}
        //                 onChange={change}
        //                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        //                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        //                 autoComplete="off"
        //                 required
        //             />
        //             <br />
        //         </label>
          
        //         <button type='submit'>Add contact</button>
        //     </form>
        // </>
        // );
//     }
// };

// Contactform.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

// export default Contactform;