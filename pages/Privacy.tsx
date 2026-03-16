import React from 'react';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../constants';

const Privacy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description={`Privacy Policy and Terms of Service for ${COMPANY_INFO.name}.`}
      />
      <div className="bg-white min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <p>
              At {COMPANY_INFO.name}, accessible from kmwebdesign.xyz, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {COMPANY_INFO.name} and how we use it.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
            <ul className="list-none mt-4">
              <li><strong>Email:</strong> {COMPANY_INFO.email}</li>
              <li><strong>Address:</strong> {COMPANY_INFO.address}</li>
              <li><strong>Phone:</strong> {COMPANY_INFO.phone}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;