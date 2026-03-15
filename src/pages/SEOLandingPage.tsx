import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEOLandingPage = ({ 
  title, 
  h1, 
  content, 
  keywords, 
  faqs 
}: { 
  title: string; 
  h1: string; 
  content: string; 
  keywords: string[]; 
  faqs: { q: string; a: string }[] 
}) => {
  return (
    <div className="pt-24">
      <SEO title={title} description={`${h1}. Expert guidance and fast processing for all your passport and visa needs in Pune.`} />
      
      <section className="bg-slate-50 py-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl mb-8 leading-tight">{h1}</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {keywords.map(k => (
                <span key={k} className="text-xs font-bold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full uppercase tracking-wider">{k}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
              
              <div className="mt-16">
                <h2 className="text-3xl mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 p-8 rounded-3xl">
                      <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
                      <p className="text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-brand-red p-10 rounded-[2.5rem] text-white">
                  <h3 className="text-2xl font-bold mb-6">Need Assistance?</h3>
                  <p className="mb-8 text-white/80">Get expert guidance for your application today.</p>
                  <Link to="/contact" className="block w-full bg-white text-brand-red text-center py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all">
                    Contact Now
                  </Link>
                </div>

                <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
                  <h3 className="text-xl font-bold mb-6">Other Services</h3>
                  <ul className="space-y-4">
                    {[
                      { name: 'Tatkal Passport', path: '/tatkal-passport-pune' },
                      { name: 'Passport Renewal', path: '/passport-renewal-pune' },
                      { name: 'Visa Consultant', path: '/visa-consultant-pune' },
                      { name: 'Schengen Visa', path: '/schengen-visa-pune' },
                    ].map(s => (
                      <li key={s.name}>
                        <Link to={s.path} className="flex items-center justify-between group hover:text-brand-red transition-colors">
                          <span>{s.name}</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOLandingPage;
