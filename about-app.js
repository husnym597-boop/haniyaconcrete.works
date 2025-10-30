function AboutApp() {
  try {
    const values = [
      { icon: 'shield-check', title: 'Integrity', desc: 'Honest and transparent in all our dealings' },
      { icon: 'hard-hat', title: 'Safety', desc: 'Prioritizing safety on every job site' },
      { icon: 'target', title: 'Precision', desc: 'Meticulous attention to detail in every pour' }
    ];

    const team = [
      { name: 'Mohammed Rizan', role: 'Founder & Director', image: 'https://i.postimg.cc/tRxJLtkg/20221008-114644nj.jpg?w=400&q=80' },
      { name: 'Y.L.M.Rimzikan', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
      { name: 'M.R.Husny Mohammed', role: 'Quality Control', image: 'https://i.postimg.cc/VvL7bLDq/IMG-20240322-WA0048.jpg?w=400&q=80' }
    ];

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="py-20 bg-[var(--light-bg)]">
          <div className="container mx-auto px-4">
            <h1 className="section-title text-center mb-12">About Haniya Concrete Works</h1>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-[var(--text-light)]">
              <p>Founded in the heart of North Central Province, Haniya Concrete Works has been building the foundation of Sri Lanka's development for over a decade. Our commitment to quality, safety, and precision has made us the trusted choice for both residential and commercial concrete projects.</p>
              <p>We understand that concrete work is more than just mixing and pouring—it's about creating structures that stand the test of time. Every project we undertake is executed with meticulous attention to detail and adherence to the highest industry standards.</p>
              <p>From small residential driveways to large commercial foundations, we bring the same level of dedication and expertise to every job. Our team of skilled professionals uses premium materials and modern techniques to ensure superior results.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-[var(--secondary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className={`icon-${value.icon} text-3xl text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-[var(--text-light)]">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--light-bg)]">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, idx) => (
                <div key={idx} className="bg-white rounded-sm overflow-hidden shadow-lg">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-[var(--accent-color)] font-semibold">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppWidget />
      </div>
    );
  } catch (error) {
    console.error('AboutApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutApp />);