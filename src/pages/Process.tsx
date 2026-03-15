import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { Search, FileCheck, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: 'Initial Consultation',
      desc: 'We discuss your requirements and check your eligibility for the specific service.',
      icon: Search,
      color: 'bg-blue-500',
    },
    {
      title: 'Document Verification',
      desc: 'Our experts meticulously review your documents to ensure they meet all government standards.',
      icon: FileCheck,
      color: 'bg-purple-500',
    },
    {
      title: 'Appointment Booking',
      desc: 'We schedule your appointment at the Passport Seva Kendra or Visa Application Center at your convenience.',
      icon: Calendar,
      color: 'bg-orange-500',
    },
    {
      title: 'Final Submission',
      desc: 'We guide you through the submission process and handle any follow-ups required.',
      icon: CheckCircle,
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="pt-24">
      <SEO 
        title="Our Process - How We Help You" 
        description="Understand the step-by-step process of applying for a passport or visa with I Max Passport and Visa Assistance Pune."
      />

      <section className="bg-slate-900 py-20 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Our <span className="text-brand-red">Seamless Process</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">We've refined our workflow over 15 years to make your application journey as smooth as possible.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24">
              {steps.map((step, idx) => (
                <div key={step.title} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="relative"
                    >
                      <div className={`${step.color} w-32 h-32 rounded-[2.5rem] flex items-center justify-center shadow-2xl relative z-10`}>
                        <step.icon className="text-white" size={48} />
                      </div>
                      <div className={`absolute inset-0 ${step.color} blur-3xl opacity-20 scale-150`} />
                    </motion.div>
                  </div>
                  
                  <div className="md:w-1/2 text-center md:text-left">
                    <div className="inline-block bg-slate-100 text-slate-500 px-4 py-1 rounded-full text-xs font-bold mb-4">STEP 0{idx + 1}</div>
                    <h3 className="text-3xl mb-4">{step.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl mb-8">Ready to get started?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Our experts are standing by to guide you through the first step of your application.</p>
          <button className="bg-brand-red text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-red-dark transition-all inline-flex items-center group">
            Start Your Application <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Process;
