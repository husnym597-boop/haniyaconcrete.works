function ServicesApp() {
  try {
    const services = [
      {
        icon: 'layers',
        title: 'Foundation Laying',
        desc: 'Critical precision work ensuring structural integrity and longevity for your building projects.',
        details: [
          'Strip foundations for load-bearing walls',
          'Pad foundations for columns',
          'Raft foundations for challenging soil conditions',
          'Deep foundation solutions'
        ]
      },
      {
        icon: 'square-stack',
        title: 'Concrete Slabs & Floors',
        desc: 'Durable commercial and residential flooring solutions built to last.',
        details: [
          'Ground floor slabs',
          'Suspended concrete floors',
          'Industrial-grade flooring',
          'Polished concrete finishes'
        ]
      },
      {
        icon: 'move',
        title: 'Driveways & Paving',
        desc: 'Long-lasting driveways and paved areas with various finish options.',
        details: [
          'Residential driveways',
          'Commercial parking areas',
          'Pathways and walkways',
          'Reinforced paving solutions'
        ]
      },
      {
        icon: 'sparkles',
        title: 'Decorative Concrete',
        desc: 'Stamped, stained, and polished finishes for aesthetic appeal.',
        details: [
          'Stamped concrete patterns',
          'Colored and stained concrete',
          'Exposed aggregate finishes',
          'Custom design work'
        ]
      },
      {
        icon: 'wrench',
        title: 'Custom Projects',
        desc: 'Flexible solutions for unique client needs and specialized requirements.',
        details: [
          'Retaining walls',
          'Swimming pool structures',
          'Custom architectural elements',
          'Specialized industrial applications'
        ]
      }
    ];

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="py-20 bg-[var(--light-bg)]">
          <div className="container mx-auto px-4">
            <h1 className="section-title text-center mb-6">Our Services</h1>
            <p className="text-xl text-center text-[var(--text-light)] max-w-3xl mx-auto mb-12">
              Comprehensive concrete solutions for residential and commercial projects across North Central Province
            </p>
            
            <div className="space-y-12 max-w-6xl mx-auto">
              {services.map((service, idx) => (
                <div key={idx} className="bg-white rounded-sm shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-[var(--primary-color)] p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-[var(--accent-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className={`icon-${service.icon} text-4xl text-white`}></div>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <p className="text-lg text-[var(--text-dark)] mb-6">{service.desc}</p>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <div className="icon-check text-lg text-[var(--accent-color)] mr-3 mt-1"></div>
                            <span className="text-[var(--text-light)]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <a href="contact.html" className="btn-primary inline-block mt-6">Request Quote</a>
                    </div>
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
    console.error('ServicesApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ServicesApp />);