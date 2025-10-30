function ProjectsApp() {
  try {
    const [filter, setFilter] = React.useState('All');

    const projects = [
      { type: 'Residential', title: 'School Classroom', location: 'Anuradhapura', image: 'https://i.postimg.cc/59L8WFqh/IMG-20251028-WA0111.jpg?w=600&q=80', testimonial: 'Outstanding precision work' },
      { type: 'Commercial', title: 'Shopping Complex Slab', location: 'Polonnaruwa', image: 'https://i.postimg.cc/7Pt1Vy98/IMG-20231014-WA0082.jpg?w=600&q=80', testimonial: 'Completed ahead of schedule' },
      { type: 'Driveways', title: 'Residential Driveway', location: 'Dambulla', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', testimonial: 'Beautiful finish quality' },
      { type: 'Foundations', title: 'Industrial Warehouse', location: 'Anuradhapura', image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80', testimonial: 'Solid structural work' },
      { type: 'Residential', title: 'Modern Home Floors', location: 'Polonnaruwa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', testimonial: 'Excellent craftsmanship' },
      { type: 'Commercial', title: 'Office Building Foundation', location: 'Dambulla', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', testimonial: 'Professional team' }
    ];

    const categories = ['All', 'Residential', 'Commercial', 'Driveways', 'Foundations'];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.type === filter);

    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        <section className="py-20 bg-[var(--light-bg)]">
          <div className="container mx-auto px-4">
            <h1 className="section-title text-center mb-6">Our Projects</h1>
            <p className="text-xl text-center text-[var(--text-light)] max-w-3xl mx-auto mb-12">
              Explore our portfolio of completed concrete projects across North Central Province
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-sm font-semibold transition-all ${
                    filter === cat 
                      ? 'bg-[var(--accent-color)] text-white' 
                      : 'bg-white text-[var(--text-dark)] hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-4 right-4 bg-[var(--accent-color)] text-white px-3 py-1 rounded-sm text-sm font-bold">
                      {project.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="text-[var(--text-light)] flex items-center mb-3">
                      <div className="icon-map-pin text-lg mr-2"></div>
                      <span>{project.location}</span>
                    </div>
                    <p className="text-sm italic text-[var(--text-dark)]">"{project.testimonial}"</p>
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
    console.error('ProjectsApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProjectsApp />);