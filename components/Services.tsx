"use client"

const services = [
  {id: '01', title: 'web design', description: 'Crafting visually stunning and user-friendly websites'},
  {id: '02', title: 'seo optimization', description: 'Enhancing your website visibility and ranking on search engines like Google'},
  {id: '03', title: 'UX/UI design', description: 'Creating intuitive and engaging user experiences and interfaces'},
  {id: '04', title: 'Digital marketing', description: 'Strategizing and executing comprehensive digital marketing methodelogy'},
  {id: '05', title: 'Social media Management', description: 'Managing your social media channels'},
]

export const Services = ()=> {

      
    return (
      <section className="text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
            <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">Services</h2>
          </div>


        <div className="md:w-3/4">
            {services.map(service => (
              <div key={service.id} className="mb-16 flex items-start">
                <div className="text-gray-300 font-bold text-5xl mr-6">
                  {service.id}

                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
        </div>

        </div>


      </section>
    )
  }