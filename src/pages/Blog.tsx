import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'How to Apply for a Passport in Pune: A Step-by-Step Guide',
      excerpt: 'Everything you need to know about the passport application process in Pune, from document collection to police verification.',
      date: 'March 10, 2026',
      author: 'I Max Expert',
      image: 'https://picsum.photos/seed/blog1/800/500',
      category: 'Passport',
    },
    {
      title: 'Top 5 Reasons for Visa Rejection and How to Avoid Them',
      excerpt: 'Learn about the common mistakes travelers make during visa applications and how our experts can help you avoid them.',
      date: 'March 05, 2026',
      author: 'Visa Consultant',
      image: 'https://picsum.photos/seed/blog2/800/500',
      category: 'Visa Tips',
    },
    {
      title: 'Schengen Visa Guide for Indian Travelers in 2026',
      excerpt: 'Planning a trip to Europe? Here is the latest update on Schengen visa requirements and processing times for Indians.',
      date: 'February 28, 2026',
      author: 'Travel Specialist',
      image: 'https://picsum.photos/seed/blog3/800/500',
      category: 'International Travel',
    },
  ];

  return (
    <div className="pt-24">
      <SEO 
        title="Blog - Travel Tips, Passport & Visa Guides" 
        description="Stay updated with the latest news and guides on passport applications, visa requirements, and international travel tips."
      />

      <section className="bg-slate-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Travel <span className="text-brand-red">Insights</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Expert guides and the latest updates to help you navigate the world of travel documentation.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <motion.article 
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</div>
                  <div className="flex items-center"><User size={14} className="mr-1" /> {post.author}</div>
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-brand-red transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center font-bold text-slate-900 group-hover:text-brand-red transition-colors">
                  Read More <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
