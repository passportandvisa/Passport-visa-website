import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { Plus, Minus, Search } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Passport',
      q: 'What is the difference between Normal and Tatkal passport?',
      a: 'Normal passport applications take 15-30 days for processing, while Tatkal applications are prioritized and can be processed in 3-7 days. Tatkal requires an additional fee and specific documentation.',
    },
    {
      category: 'Passport',
      q: 'Can I apply for a passport if I don\'t have a birth certificate?',
      a: 'Yes, for applicants born on or after 26/01/1989, other documents like School Leaving Certificate, PAN Card, or Aadhar Card with the full date of birth are also accepted.',
    },
    {
      category: 'Visa',
      q: 'What is a Schengen Visa?',
      a: 'A Schengen Visa allows you to travel to any of the 27 member countries in the Schengen Area for up to 90 days for tourism or business purposes.',
    },
    {
      category: 'Visa',
      q: 'What are the chances of my visa getting rejected?',
      a: 'Visa rejection depends on many factors like incomplete documentation, lack of funds, or unclear travel intent. Our experts review your application to minimize these risks.',
    },
    {
      category: 'General',
      q: 'Do I need to visit your office in person?',
      a: 'While we love meeting our clients, most of our services can be handled remotely via email, WhatsApp, and courier services for your convenience.',
    },
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24">
      <SEO 
        title="Frequently Asked Questions - Passport & Visa Services" 
        description="Find answers to common questions about passport applications, renewals, and visa requirements in Pune."
      />

      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-8">Common <span className="text-brand-red">Questions</span></h1>
            <div className="relative max-w-xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for a question..." 
                className="w-full bg-white border border-slate-200 rounded-2xl px-12 py-5 focus:outline-none focus:border-brand-red shadow-lg shadow-slate-200/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  className="w-full flex items-center justify-between p-8 text-left bg-white"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest mb-2">{faq.category}</span>
                    <span className="text-lg font-bold text-slate-800">{faq.q}</span>
                  </div>
                  <div className={`shrink-0 ml-4 p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-brand-red text-white' : 'bg-slate-50 text-slate-400'}`}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50"
                    >
                      <div className="p-8 pt-0 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p>No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
