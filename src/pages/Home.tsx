import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/src/components/SEO';

const Home = () => {
  const stats = [
    { label: 'Clients', value: 'Trusted by Thousands', icon: Users },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Success Rate', value: '99.9%', icon: ShieldCheck },
    { label: 'Processing Time', value: 'Fastest', icon: Clock },
  ];

  const services = [
    {
      title: 'Passport Services',
      desc: 'New applications, renewals, tatkal assistance, and lost passport recovery.',
      link: '/passport-services',
      image: 'https://picsum.photos/seed/passport/800/600',
    },
    {
      title: 'Visa Assistance',
      desc: 'Tourist, business, and family visit visas for Schengen, USA, UK, and more.',
      link: '/visa-services',
      image: 'https://picsum.photos/seed/visa/800/600',
    },
  ];

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Trusted Passport & Visa Assistance in Pune" 
        description="I Max Passport and Visa Assistance offers professional documentation guidance for passport applications, renewals, and international visa services in Pune."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/travel/1920/1080" 
            alt="International Travel" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              #1 Rated Consultant in Pune
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Trusted Passport & <span className="text-brand-red">Visa Assistance</span> in Pune
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Professional documentation guidance for passport applications, renewals and international visa services. We make your travel dreams a reality with zero stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center group"
              >
                Apply for Passport <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/visa-services" 
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
              >
                Get Visa Assistance
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 to-transparent pb-12">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-brand-red text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Why Choose I Max Services?</h2>
            <p className="text-slate-600">We combine years of expertise with a customer-first approach to ensure your documentation is perfect every time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Guidance', desc: 'Our consultants are well-versed with the latest government regulations and visa policies.', icon: Award },
              { title: 'Fast Processing', desc: 'We prioritize speed without compromising on accuracy to get your documents ready on time.', icon: Clock },
              { title: 'End-to-End Support', desc: 'From initial consultation to final delivery, we handle everything for you.', icon: ShieldCheck },
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="bg-brand-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="text-brand-red w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl mb-6">Our Core Services</h2>
              <p className="text-slate-600">Comprehensive solutions for all your travel documentation needs in Pune and across India.</p>
            </div>
            <Link to="/passport-services" className="text-brand-red font-bold flex items-center hover:underline">
              View All Services <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.title} className="group cursor-pointer">
                <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <h3 className="text-3xl text-white mb-4">{service.title}</h3>
                    <p className="text-white/70 mb-6">{service.desc}</p>
                    <Link 
                      to={service.link} 
                      className="inline-flex items-center text-white font-bold group-hover:text-brand-red transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Serving All Major Cities</h2>
            <p className="text-slate-400">While we are based in Pune, we provide remote assistance across India.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'].map((city) => (
              <div key={city} className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-brand-red hover:border-brand-red transition-all cursor-default">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-brand-red rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl mb-8">Ready to Start Your Journey?</h2>
              <p className="text-xl text-white/80 mb-12">
                Join thousands of satisfied travelers who trusted I Max for their passport and visa needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-white text-brand-red px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all">
                  Request Consultation
                </Link>
                <a href="tel:+918766993798" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                  Call Experts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
