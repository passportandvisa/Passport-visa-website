import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import PassportServices from './pages/PassportServices';
import VisaServices from './pages/VisaServices';
import About from './pages/About';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SEOLandingPage from './pages/SEOLandingPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/passport-services" element={<PassportServices />} />
              <Route path="/visa-services" element={<VisaServices />} />
              <Route path="/about" element={<About />} />
              <Route path="/process" element={<Process />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* SEO Landing Pages */}
              <Route path="/passport-agent-pune" element={
                <SEOLandingPage 
                  title="Passport Agent in Pune – Passport Assistance Services"
                  h1="Expert Passport Agent in Pune"
                  keywords={['passport agent pune', 'passport consultant pune', 'passport assistance pune']}
                  content={`
                    <p>Are you looking for a reliable <strong>passport agent in Pune</strong>? I Max Passport and Visa Assistance is your trusted partner for all passport-related documentation and application needs. We understand that the passport application process can be overwhelming, which is why our experts are here to guide you every step of the way.</p>
                    <p>Whether you are applying for a fresh passport, need a renewal, or have complex issues like a lost or damaged passport, our team in Pune provides comprehensive support. We ensure that your documents are verified, your online forms are filled accurately, and your appointment at the Passport Seva Kendra (PSK) is scheduled at your convenience.</p>
                    <h3>Why Choose Our Passport Services in Pune?</h3>
                    <ul>
                      <li>Expert guidance on documentation to avoid rejections.</li>
                      <li>Fast and efficient online form filling.</li>
                      <li>Assistance with police verification process.</li>
                      <li>Specialized support for minor and senior citizen applications.</li>
                    </ul>
                  `}
                  faqs={[
                    { q: 'Where is the Passport Seva Kendra in Pune?', a: 'The main PSK in Pune is located in Mundhwa. There are also Post Office Passport Seva Kendras (POPSK) in various parts of the city.' },
                    { q: 'What documents are required for a fresh passport?', a: 'Generally, you need proof of address (like Aadhar or utility bills) and proof of date of birth (like Birth Certificate or School Leaving Certificate).' }
                  ]}
                />
              } />
              
              <Route path="/tatkal-passport-pune" element={
                <SEOLandingPage 
                  title="Tatkal Passport Assistance in Pune – Fast Passport Services"
                  h1="Tatkal Passport Assistance in Pune"
                  keywords={['tatkal passport pune', 'urgent passport pune', 'fast passport services']}
                  content={`
                    <p>Need a passport urgently? Our <strong>Tatkal passport assistance in Pune</strong> is designed for travelers who need their documents processed on priority. The Tatkal scheme allows for faster issuance of passports, often within a few days of the appointment.</p>
                    <p>At I Max, we help you navigate the stricter documentation requirements of the Tatkal scheme. We ensure you have the necessary annexures and proofs to qualify for urgent processing, helping you avoid delays in your international travel plans.</p>
                  `}
                  faqs={[
                    { q: 'How much extra does a Tatkal passport cost?', a: 'The government charges an additional fee of ₹2,000 for Tatkal applications over the normal fee.' },
                    { q: 'How fast can I get a Tatkal passport?', a: 'Typically, the passport is dispatched within 1-3 working days after a successful appointment, provided police verification is not required pre-issuance.' }
                  ]}
                />
              } />

              <Route path="/passport-renewal-pune" element={
                <SEOLandingPage 
                  title="Passport Renewal Services in Pune – Expert Guidance"
                  h1="Passport Renewal Services in Pune"
                  keywords={['passport renewal pune', 'renew passport pune', 'expired passport assistance']}
                  content={`
                    <p>Is your passport expiring soon? Don't wait until the last minute. Our <strong>passport renewal services in Pune</strong> ensure a smooth transition from your old passport to a new one. You can apply for renewal up to one year before the expiry date.</p>
                    <p>We assist with the entire renewal process, including cases where there are changes in personal details like address, spouse name, or appearance. Our experts ensure that your old passport is handled correctly and your new one is issued without any hiccups.</p>
                  `}
                  faqs={[
                    { q: 'Can I renew my passport after it has expired?', a: 'Yes, you can renew it even after expiry, but it is recommended to do it before to avoid any travel restrictions.' },
                    { q: 'Do I get a new passport number on renewal?', a: 'Yes, every time a passport is renewed or reissued, a new passport number is assigned.' }
                  ]}
                />
              } />

              <Route path="/visa-consultant-pune" element={
                <SEOLandingPage 
                  title="Visa Consultant in Pune – Tourist & Business Visa Services"
                  h1="Top Visa Consultant in Pune"
                  keywords={['visa consultant pune', 'visa agent pune', 'tourist visa assistance']}
                  content={`
                    <p>Planning an international trip? As a leading <strong>visa consultant in Pune</strong>, I Max Passport and Visa Assistance provides expert guidance for tourist, business, and family visit visas across the globe. We specialize in complex visa processes for countries like the USA, UK, Canada, and Australia.</p>
                    <p>Our visa experts stay updated with the latest embassy requirements and documentation standards. We provide a personalized checklist, assist with form filling, and offer mock interview sessions to increase your chances of visa approval.</p>
                  `}
                  faqs={[
                    { q: 'Do you guarantee visa approval?', a: 'No consultant can guarantee a visa as the final decision rests with the embassy. However, we ensure your application is as strong as possible to maximize approval chances.' },
                    { q: 'How early should I apply for a visa?', a: 'It is generally recommended to apply at least 2-3 months before your intended travel date.' }
                  ]}
                />
              } />

              <Route path="/schengen-visa-pune" element={
                <SEOLandingPage 
                  title="Schengen Visa Consultant in Pune"
                  h1="Schengen Visa Consultant in Pune"
                  keywords={['schengen visa pune', 'europe visa agent pune', 'france visa pune']}
                  content={`
                    <p>Dreaming of a European vacation? Our <strong>Schengen visa consultancy in Pune</strong> helps you navigate the requirements for all 27 Schengen countries. Whether you are visiting France, Switzerland, Germany, or Italy, we provide the right guidance for your entry into Europe.</p>
                    <p>We assist with itinerary planning, flight and hotel bookings for visa purposes, travel insurance, and cover letter drafting—all critical components of a successful Schengen visa application.</p>
                  `}
                  faqs={[
                    { q: 'Which country should I apply to for a Schengen visa?', a: 'You should apply to the country that is your primary destination (where you spend the most days) or your first point of entry if spending equal time in multiple countries.' },
                    { q: 'Is travel insurance mandatory for a Schengen visa?', a: 'Yes, travel insurance with a minimum coverage of €30,000 is mandatory for all Schengen visa applicants.' }
                  ]}
                />
              } />

              {/* Catch-all for other SEO pages mentioned in bonus advice */}
              <Route path="/usa-visa-consultant-pune" element={
                <SEOLandingPage 
                  title="USA Visa Consultant in Pune – Expert Guidance"
                  h1="USA Visa Assistance in Pune"
                  keywords={['USA visa Pune', 'US visa agent Pune', 'embassy appointment Pune']}
                  content={`
                    <p>Navigating the <strong>USA visa process in Pune</strong> can be complex, but with I Max Passport and Visa Assistance, you get expert guidance every step of the way. Whether you are applying for a B1/B2 visitor visa, a student visa, or a business visa, our consultants ensure your application is accurate and your documentation is complete.</p>
                    
                    <h3>USA Visa Application Process</h3>
                    <p>The US visa process involves several critical steps that require meticulous attention to detail:</p>
                    <ol>
                      <li><strong>DS-160 Form:</strong> Accurate completion of the online non-immigrant visa application form.</li>
                      <li><strong>Fee Payment:</strong> Paying the MRV fee through authorized channels.</li>
                      <li><strong>OFC Appointment:</strong> Scheduling and attending the Biometrics appointment at the Offsite Facilitation Center.</li>
                      <li><strong>Consular Interview:</strong> Preparing for and attending the personal interview at the US Consulate (Mumbai is the closest for Pune residents).</li>
                    </ol>

                    <h3>Required Documents for US B1/B2 Visa</h3>
                    <ul>
                      <li>Current and all old passports.</li>
                      <li>Digital and hard copy of the US visa specification photograph.</li>
                      <li>DS-160 confirmation page with barcode.</li>
                      <li>Appointment confirmation letter.</li>
                      <li>Financial documents (Bank statements, ITR for last 3 years).</li>
                      <li>Employment/Business proof (NOC, Salary slips, or Business registration).</li>
                      <li>Invitation letter (if visiting family or for business).</li>
                    </ul>

                    <p>As your trusted <strong>US visa agent in Pune</strong>, we provide mock interview sessions to build your confidence and help you understand the common questions asked by consular officers.</p>
                  `}
                  faqs={[
                    { q: 'How long is the wait time for a US visa appointment?', a: 'Wait times vary significantly depending on the visa category and current demand. It is advisable to plan and apply several months in advance.' },
                    { q: 'What is a B1/B2 visa?', a: 'The B1 visa is for business purposes, while the B2 visa is for tourism, pleasure, or visiting friends and family. They are often issued together as a B1/B2 visa.' },
                    { q: 'Do I need to travel to Mumbai for the interview?', a: 'Yes, for residents of Pune, the US Consulate in Mumbai is the designated location for the personal interview and biometrics.' },
                    { q: 'Can I apply for a US visa renewal without an interview?', a: 'Some applicants may qualify for the Interview Waiver (Dropbox) program if they meet specific criteria, such as renewing a visa in the same category that is still valid or expired within the last 48 months.' }
                  ]}
                />
              } />
              <Route path="/dubai-visa-pune" element={<VisaServices />} />
              <Route path="/passport-reissue-pune" element={<PassportServices />} />
              <Route path="/lost-passport-pune" element={<PassportServices />} />
              <Route path="/minor-passport-pune" element={<PassportServices />} />

            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
