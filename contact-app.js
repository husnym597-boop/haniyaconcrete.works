function ContactApp() {
  try {
    const [formData, setFormData] = React.useState({
      name: '', phone: '', email: '', location: '', service: '', details: ''
    });
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="py-20 bg-[var(--light-bg)]">
          <div className="container mx-auto px-4">
            <h1 className="section-title text-center mb-6">Contact Us</h1>
            <p className="text-xl text-center text-[var(--text-light)] max-w-3xl mx-auto mb-12">
              Get a free quote for your concrete project. We'll respond within 24 hours.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                {submitted && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    Thank you! We'll contact you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="name" placeholder="Full Name *" required 
                    value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-color)]" />
                  <input type="tel" name="phone" placeholder="Phone (+94) *" required 
                    value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-color)]" />
                  <input type="email" name="email" placeholder="Email Address *" required 
                    value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-color)]" />
                  <select name="location" required value={formData.location} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-color)]">
                    <option value="">Select Location *</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Dambulla">Dambulla</option>
                    <option value="Other NCP">Other NCP Area</option>
                  </select>
                  <select name="service" required value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-color)]">
                    <option value="">Service Needed *</option>
                    <option value="Foundation">Foundation Laying</option>
                    <option value="Slabs">Concrete Slabs & Floors</option>
                    <option value="Driveways">Driveways & Paving</option>
                    <option value="Decorative">Decorative Concrete</option>
                    <option value="Custom">Custom Project</option>
                  </select>
                  <textarea name="details" placeholder="Project Details" rows="4" 
                    value={formData.details} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-color)]"></textarea>
                  <button type="submit" className="btn-primary w-full">Submit Quote Request</button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-sm shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="icon-phone text-2xl text-[var(--accent-color)] mr-4 mt-1"></div>
                      <div>
                        <p className="font-bold">Phone</p>
                        <p className="text-[var(--text-light)]">+94 71 523 6222</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="icon-mail text-2xl text-[var(--accent-color)] mr-4 mt-1"></div>
                      <div>
                        <p className="font-bold">Email</p>
                        <p className="text-[var(--text-light)]">haniyaconcreteworks@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="icon-map-pin text-2xl text-[var(--accent-color)] mr-4 mt-1"></div>
                      <div>
                        <p className="font-bold">Location</p>
                        <p className="text-[var(--text-light)]">Udanidigama, Madatugama, Kekirawa, North Central Province, Sri Lanka</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="icon-clock text-2xl text-[var(--accent-color)] mr-4 mt-1"></div>
                      <div>
                        <p className="font-bold">Operating Hours</p>
                        <p className="text-[var(--text-light)]">Mon-Sun: 7:30 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-sm shadow-lg h-64">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1011525.6189576022!2d80.60991035931106!3d7.97082164022714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcbcaa7110a87d%3A0x24fd680d8e9658e6!2sXJC6%2B84G%2C%20Madatugama!5e0!3m2!1sen!2slk!4v1761434767098!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppWidget />
      </div>
    );
  } catch (error) {
    console.error('ContactApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactApp />);