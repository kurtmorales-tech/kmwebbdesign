import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Shield, User } from 'lucide-react';
import { TEAM } from '../constants';
import SEO from '../components/SEO';

const AdminTeamMember: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const member = TEAM.find(m => m.id === id);

  if (!member) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <>
      <SEO title={`${member.name} - Admin View`} description="Team member details" />
      <div className="min-h-screen bg-[#050505] text-slate-200 p-8 font-sans">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <button 
            onClick={() => navigate('/admin')}
            className="flex items-center text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </button>

          {/* Profile Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm">
            {/* Header/Cover */}
            <div className="h-48 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 relative">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>
            
            <div className="px-8 pb-8">
              <div className="relative flex flex-col md:flex-row items-start md:items-end -mt-20 mb-8">
                {/* Avatar */}
                <div className="relative">
                    <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-40 h-40 rounded-2xl border-4 border-[#080808] object-cover shadow-2xl bg-slate-800"
                    />
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#080808]"></div>
                </div>
                
                {/* Basic Info */}
                <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                  <h1 className="text-3xl font-bold text-white">{member.name}</h1>
                  <p className="text-blue-400 font-medium text-lg">{member.role}</p>
                </div>

                {/* Actions */}
                <div className="mt-6 md:mt-0 flex space-x-3">
                  <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors border border-slate-700">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-900/20">
                    Message
                  </button>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                   <div className="bg-[#0a0a0a] rounded-xl p-6 border border-slate-800">
                     <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                       <User className="w-5 h-5 mr-2 text-slate-500" />
                       Biography
                     </h3>
                     <p className="text-slate-400 leading-relaxed">
                       {member.bio}
                     </p>
                   </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-[#0a0a0a] rounded-xl p-6 border border-slate-800">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Contact Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center mr-3 text-slate-400">
                          <Mail size={16} />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs text-slate-500">Email Address</p>
                          <p className="text-sm text-white truncate">{member.name.split(' ')[0].toLowerCase()}@kmwebdesign.xyz</p>
                        </div>
                      </div>
                       <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center mr-3 text-slate-400">
                          <Shield size={16} />
                        </div>
                         <div>
                          <p className="text-xs text-slate-500">Role Level</p>
                          <p className="text-sm text-white">Admin Access</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTeamMember;