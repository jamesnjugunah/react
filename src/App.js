import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'; // Assume you have some basic styles in styles.css

const Header = () => (
  <header>
    <h1>Plumbing Services</h1>
    <nav>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

const Services = () => (
  <section id="services">
    <h2>Our Services</h2>
    <ul>
      <li>Pipe Installation</li>
      <li>Leak Repair</li>
      <li>Drain Cleaning</li>
      <li>Emergency Plumbing</li>
    </ul>
  </section>
);

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', this.state);
    // Here you can add code to send the form data to a server
  }

  render() {
    return (
      <section id="contact">
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Message:
            <textarea name="message" value={this.state.message} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

const App = () => (
  <div>
    <Header />
    <main>
      <Services />
      <ContactForm />
    </main>
    <footer>
      <p>&copy; 2024 Plumbing Services. All rights reserved.</p>
    </footer>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
