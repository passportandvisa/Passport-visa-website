import React from 'react';
import { motion } from 'motion/react';
import { Plane, Briefcase, Users, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Link } from 'react-router-dom';

const VisaServices = () => {
  const visaTypes = [
    { title: 'Tourist Visa', icon: Plane, desc: 'For leisure travel, sightseeing, and visiting friends or family abroad.' },
    { title: 'Business Visa', icon: Briefcase, desc: 'For attending meetings, conferences, or exploring business opportunities.' },
    { title: 'Family Visit Visa', icon: Users, desc: 'Specifically for visiting immediate family members residing in another country.' },
    { title: 'Schengen Visa', icon: Globe, desc: 'A single visa that allows you to travel across 27 European countries.' },
  ];

  const countries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Dubai', flag: '🇦🇪' },
    { name: 'Europe', flag: '🇪🇺' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Thailand', flag: '🇹🇭' },
  ];

  return (
    <div className="pt-24">
      <SEO 
        title="Visa Consultant in Pune - Tourist, Business & Schengen Visas" 
        description="I Max Passport and Visa Assistance provides expert visa assistance for USA, UK, Canada, Australia, and Schengen countries in Pune."
      />

      {/* Header */}
      <section className="bg-brand-red py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl mb-6">Expert <span className="text-slate-900">Visa Assistance</span></h1>
            <p className="text-xl text-white/80">Navigating international visa requirements can be daunting. We provide end-to-end support to ensure your application is successful.</p>
          </motion.div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Visa Categories We Handle</h2>
            <p className="text-slate-600">Tailored solutions for every type of international travel.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaTypes.map((type, idx) => (
              <motion.div 
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 text-center group hover:bg-slate-900 hover:text-white transition-all duration-500"
              >
                <div className="bg-brand-red/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:bg-brand-red transition-colors">
                  <type.icon className="text-brand-red group-hover:text-white" size={32} />
                </div>
                <h3 className="text-2xl mb-4">{type.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-400 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl mb-8">Popular Destinations</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                We specialize in high-demand destinations with complex visa processes. Our success rate for these countries is among the highest in Pune.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {countries.map((country) => (
                  <div key={country.name} className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:border-brand-red transition-all cursor-default">
                    <div className="text-3xl mb-2">{country.flag}</div>
                    <div className="font-bold text-slate-700">{country.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/paris/400/500" alt="Paris" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/nyc/400/500" alt="New York" className="rounded-3xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us for Visa */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                { title: 'Document Review', desc: 'Meticulous verification of all your documents to prevent rejection.' },
                { title: 'Interview Prep', desc: 'Mock interviews and guidance for USA, UK, and other high-scrutiny visas.' },
                { title: 'Form Filling', desc: 'Accurate completion of complex online and offline visa application forms.' },
              ].map((item) => (
                <div key={item.title} className="space-y-4">
                  <div className="bg-brand-red w-12 h-12 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl mb-8">Need Visa Assistance?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            Contact our visa experts today for a free initial consultation and document check.
          </p>
          <Link to="/contact" className="bg-brand-red text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-red-dark transition-all inline-flex items-center">
            Get Started Now <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VisaServices;
