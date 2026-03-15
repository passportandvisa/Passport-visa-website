import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { SEO } from '@/src/components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Passport',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. Our experts will contact you shortly.');
  };

  return (
    <div className="pt-24">
      <SEO 
        title="Contact Us - I Max Passport and Visa Assistance Pune" 
        description="Get in touch with I Max Passport and Visa Assistance in Pune for expert assistance with your passport and visa applications."
      />

      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6">Get in <span className="text-brand-red">Touch</span></h1>
            <p className="text-xl text-slate-600">Have questions? Our experts are here to help you with all your travel documentation needs.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-brand-red/10 p-4 rounded-2xl">
                      <MapPin className="text-brand-red" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Office</h4>
                      <p className="text-slate-600">Pune, Maharashtra, India</p>
                      <a 
                        href="https://share.google/lAZEemNVU0cZa8McT" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-red text-sm font-bold hover:underline mt-2 inline-block"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-brand-red/10 p-4 rounded-2xl">
                      <Phone className="text-brand-red" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-slate-600">+91-8766993798</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-brand-red/10 p-4 rounded-2xl">
                      <Mail className="text-brand-red" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-slate-600">imaxpassport@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-[2rem] text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between text-brand-red font-bold">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100">
              <h3 className="text-3xl mb-8">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Required</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Passport Application</option>
                    <option>Passport Renewal</option>
                    <option>Tatkal Passport</option>
                    <option>Tourist Visa</option>
                    <option>Business Visa</option>
                    <option>Schengen Visa</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-red-dark transition-all flex items-center justify-center group"
                >
                  Send Enquiry <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-slate-200 relative group overflow-hidden">
        <a 
          href="https://share.google/lAZEemNVU0cZa8McT" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors z-10"
        >
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 text-brand-red" />
            <p className="font-bold text-slate-900">Click to View Office Location on Google Maps</p>
            <p className="text-sm">Pune, Maharashtra</p>
          </div>
        </a>
        <img 
          src="https://picsum.photos/seed/pune-map/1920/400?grayscale" 
          alt="Map Background" 
          className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </section>
    </div>
  );
};

export default Contact;
