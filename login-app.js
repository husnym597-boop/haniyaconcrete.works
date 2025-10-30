function LoginApp() {
  try {
    const [credentials, setCredentials] = React.useState({ email: '', password: '' });
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setError('Login functionality will be implemented with backend integration.');
    };

    const handleChange = (e) => {
      setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="py-20 bg-[var(--light-bg)] min-h-[calc(100vh-300px)] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-sm shadow-2xl overflow-hidden">
              <div className="bg-[var(--primary-color)] p-8 text-center">
                <div className="w-20 h-20 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="icon-lock text-3xl text-white"></div>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Client Portal</h1>
                <p className="text-[var(--secondary-color)]">Secure Access for B2B Clients</p>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
                
                {error && (
                  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={credentials.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-color)]"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2">Password</label>
                    <input 
                      type="password" 
                      name="password" 
                      required 
                      value={credentials.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-[var(--accent-color)]"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">Login to Portal</button>
                </form>

                <div className="mt-6 text-center space-y-3">
                  <a href="#" className="text-[var(--accent-color)] hover:underline text-sm">Forgot Password?</a>
                  <div className="text-sm text-[var(--text-light)]">
                    Need access? <a href="contact.html" className="text-[var(--accent-color)] hover:underline">Contact Support</a>
                  </div>
                  <div className="pt-4 border-t">
                    <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 hover:text-green-700">
                      <div className="icon-message-circle text-lg mr-2"></div>
                      WhatsApp Support
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--light-bg)] p-6 text-center text-sm text-[var(--text-light)]">
                <div className="flex items-center justify-center mb-2">
                  <div className="icon-shield-check text-lg mr-2"></div>
                  <span>Secure HTTPS Connection</span>
                </div>
                <p>Your data is protected and encrypted</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('LoginApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginApp />);
