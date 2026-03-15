import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { Award, Target, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      <SEO 
        title="About Us - I Max Passport and Visa Assistance" 
        description="Learn more about I Max Passport and Visa Assistance, Pune's leading travel documentation consultancy with over 15 years of experience."
      />

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-6xl mb-8">Pune's Most Trusted <span className="text-brand-red">Travel Partner</span></h1>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Founded with a vision to simplify international travel for Indians, I Max Passport and Visa Assistance has grown into a premier consultancy in Pune. We understand that behind every passport application and visa request is a dream—a dream to study abroad, a dream to explore new cultures, or a dream to reunite with family.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our team of experts brings over 15 years of collective experience in navigating the complexities of government portals and embassy requirements. We pride ourselves on our meticulous attention to detail and our commitment to transparency.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-red mb-1">15+</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-red mb-1">Trusted by</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wider">Thousands of Clients</div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/office/800/1000" 
                alt="Our Office" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-red p-12 rounded-[3rem] text-white hidden md:block">
                <h3 className="text-2xl font-bold mb-2">Quality First</h3>
                <p className="text-white/80">We never compromise on documentation accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl mb-6">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide our every interaction and service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We provide honest advice, even if it means telling you a visa is unlikely.', icon: Shield },
              { title: 'Excellence', desc: 'We strive for perfection in every document we process.', icon: Award },
              { title: 'Customer Centric', desc: 'Your convenience and peace of mind are our top priorities.', icon: Heart },
              { title: 'Innovation', desc: 'We use the latest tools to track and manage your applications efficiently.', icon: Target },
            ].map((value, idx) => (
              <div key={value.title} className="text-center p-8">
                <div className="bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="text-brand-red" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
