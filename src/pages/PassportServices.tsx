import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/src/components/SEO';

const PassportServices = () => {
  const services = [
    { title: 'New Passport Application', desc: 'Complete assistance for fresh passport applications with documentation guidance.' },
    { title: 'Tatkal Passport Assistance', desc: 'Urgent passport processing for those who need to travel on short notice.' },
    { title: 'Passport Renewal', desc: 'Hassle-free renewal of expired or soon-to-expire passports.' },
    { title: 'Passport Reissue', desc: 'Assistance for changes in personal particulars or exhausted pages.' },
    { title: 'Lost/Damaged Passport', desc: 'Expert help in applying for a duplicate passport in case of loss or damage.' },
    { title: 'Minor Passport', desc: 'Specialized guidance for passport applications for children below 18 years.' },
    { title: 'Address Change', desc: 'Updating your current residential address in your existing passport.' },
    { title: 'ECNR Assistance', desc: 'Emigration Check Not Required status updates for eligible applicants.' },
  ];

  const documents = [
    'Proof of Address (Aadhar Card, Utility Bills, etc.)',
    'Proof of Date of Birth (Birth Certificate, PAN Card, etc.)',
    'Old Passport (for renewals/reissue)',
    'Photographs (as per specifications)',
    'Annexures (if applicable)',
  ];

  return (
    <div className="pt-24">
      <SEO 
        title="Passport Services in Pune - New, Renewal & Tatkal" 
        description="Expert passport agent services in Pune. We assist with new passport applications, renewals, tatkal services, and lost passport cases."
      />

      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl mb-6">Professional <span className="text-brand-red">Passport Services</span></h1>
            <p className="text-xl text-slate-400">We simplify the complex passport application process, ensuring your documentation is accurate and your appointment is scheduled promptly.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 bg-white border border-slate-100 rounded-3xl shadow-lg shadow-slate-200/50 hover:border-brand-red transition-all group"
              >
                <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red/10 transition-colors">
                  <CheckCircle2 className="text-brand-red" size={24} />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">Standard Document Checklist</h2>
              <p className="text-slate-600 mb-10">While requirements vary based on the application type, these are the most common documents needed for passport services.</p>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-center space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle2 className="text-green-600" size={20} />
                    </div>
                    <span className="font-medium text-slate-700">{doc}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold flex items-center group">
                  Download Full Checklist <FileText className="ml-2" size={20} />
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/docs/800/1000" 
                alt="Documentation" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-brand-red/10 p-3 rounded-2xl">
                    <HelpCircle className="text-brand-red" />
                  </div>
                  <h4 className="font-bold">Need Help?</h4>
                </div>
                <p className="text-sm text-slate-600">Not sure which documents you need? Our experts can review your case for free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl mb-12">Common Passport Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {[
              { q: 'How long does it take to get a passport?', a: 'Normal processing takes 15-30 days, while Tatkal can take as little as 3-7 days after police verification.' },
              { q: 'Can I apply for a passport if my address is different from my Aadhar?', a: 'Yes, you can provide other valid address proofs like electricity bills, gas connections, or rent agreements.' },
            ].map((faq) => (
              <div key={faq.q} className="p-6 bg-slate-50 rounded-2xl">
                <h4 className="font-bold mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/faq" className="text-brand-red font-bold flex items-center justify-center hover:underline">
              View All FAQs <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PassportServices;
