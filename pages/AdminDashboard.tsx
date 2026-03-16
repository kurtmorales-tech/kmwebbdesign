
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart3, 
  Settings, 
  Users, 
  Search, 
  Bell, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight,
  LogOut,
  Moon,
  Sun,
  Sparkles
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { TEAM } from '../constants';
import AIMarketingSuite from '../components/AIMarketingSuite';

// --- Mock Data ---
const ANALYTICS_DATA = [
  { name: 'Mon', revenue: 4000, bookings: 24 },
  { name: 'Tue', revenue: 3000, bookings: 13 },
  { name: 'Wed', revenue: 2000, bookings: 98 },
  { name: 'Thu', revenue: 2780, bookings: 39 },
  { name: 'Fri', revenue: 1890, bookings: 48 },
  { name: 'Sat', revenue: 2390, bookings: 38 },
  { name: 'Sun', revenue: 3490, bookings: 43 },
];

const RECENT_BOOKINGS = [
  { id: 'BK-102', customer: 'Alex Rivera', service: 'Premium Suite', status: 'confirmed', amount: '$450.00', date: '2024-05-12' },
  { id: 'BK-103', customer: 'Sarah Jenkins', service: 'Standard Room', status: 'pending', amount: '$210.00', date: '2024-05-12' },
  { id: 'BK-104', customer: 'Marcus Chen', service: 'Meeting Room', status: 'cancelled', amount: '$85.00', date: '2024-05-11' },
  { id: 'BK-105', customer: 'Elena Gilbert', service: 'Luxury Penthouse', status: 'confirmed', amount: '$1,200.00', date: '2024-05-11' },
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick, isSidebarOpen }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center relative group ${isSidebarOpen ? 'px-4' : 'px-3 justify-center'} py-3.5 rounded-2xl transition-all duration-300 ${
      active 
        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' 
        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'
    }`}
  >
    <Icon size={22} className={`shrink-0 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`} />
    {isSidebarOpen ? (
      <span className="font-bold ml-4 tracking-tight text-sm truncate">{label}</span>
    ) : (
      <div className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap z-50 border border-slate-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {label}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-slate-900 border-l border-b border-slate-700 transform rotate-45"></div>
      </div>
    )}
  </button>
);

const Card = ({ title, children, extra }: any) => (
  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {extra}
    </div>
    {children}
  </div>
);

const StatCard = ({ title, value, change, trend, icon: Icon }: any) => (
  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
        <Icon size={24} />
      </div>
      <div className={`flex items-center text-sm ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
        {change}
        {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      </div>
    </div>
    <h4 className="text-slate-400 text-sm font-medium">{title}</h4>
    <p className="text-2xl font-bold text-white mt-1">{value}</p>
  </div>
);

// --- Main Admin Dashboard ---

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  }

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Total Revenue" value="$48,250.00" change="+12.5%" trend="up" icon={BarChart3} />
              <StatCard title="Active Bookings" value="1,284" change="+5.2%" trend="up" icon={Calendar} />
              <StatCard title="New Customers" value="42" change="-2.1%" trend="down" icon={Users} />
              <StatCard title="Efficiency Rate" value="94.2%" change="+0.4%" trend="up" icon={LayoutDashboard} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card title="Revenue Analytics" extra={<button className="text-sm text-blue-400">View Report</button>}>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={ANALYTICS_DATA}>
                        <defs>
                          <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRev)" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
              <div className="lg:col-span-1">
                <Card title="Bookings by Day">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ANALYTICS_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                           contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px' }}
                           cursor={{fill: '#1e293b'}}
                        />
                        <Bar dataKey="bookings" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </div>

            <Card title="Recent Transactions">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-sm">
                      <th className="pb-4 font-medium">Customer</th>
                      <th className="pb-4 font-medium">Status</th>
                      <th className="pb-4 font-medium">Date</th>
                      <th className="pb-4 font-medium text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {RECENT_BOOKINGS.map((booking) => (
                      <tr key={booking.id} className="text-slate-100 text-sm">
                        <td className="py-4">
                          <div className="font-medium text-white">{booking.customer}</div>
                          <div className="text-xs text-slate-500">{booking.service}</div>
                        </td>
                        <td className="py-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400' :
                            booking.status === 'pending' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 text-slate-400">{booking.date}</td>
                        <td className="py-4 text-right font-semibold text-white">{booking.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        );
      
      case 'marketing':
        return <AIMarketingSuite />;

      case 'users':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">User Management</h2>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors">
                <Plus size={20} />
                <span>Invite User</span>
              </button>
            </div>
            <Card title="Active Team Members">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TEAM.map(user => (
                  <div 
                    key={user.id} 
                    className="bg-slate-800/30 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors cursor-pointer group"
                    onClick={() => navigate(`/admin/team/${user.id}`)}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-700">
                        <img src={user.imageUrl} alt={user.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">{user.name}</h4>
                        <p className="text-sm text-slate-400 truncate w-32">{user.role}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                      <span className="text-xs font-medium px-2 py-1 bg-slate-800 rounded text-slate-300">Active</span>
                      <button className="text-blue-400 text-sm hover:underline">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case 'settings':
        return (
          <div className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-white">System Settings</h2>
            <Card title="General Appearance">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Dark Mode</h4>
                    <p className="text-sm text-slate-400">Toggle the public site appearance</p>
                  </div>
                  <button 
                    onClick={toggleTheme}
                    className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${theme === 'dark' ? 'bg-blue-600' : 'bg-slate-700'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${theme === 'dark' ? 'left-7' : 'left-1'}`}></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Email Notifications</h4>
                    <p className="text-sm text-slate-400">Receive alerts for new bookings</p>
                  </div>
                  <div className="w-12 h-6 bg-slate-700 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </Card>
            <Card title="Integrations">
               <div className="space-y-4">
                 {['Stripe Payments', 'Slack Alerts', 'Google Calendar'].map((app) => (
                   <div key={app} className="flex items-center justify-between p-4 bg-slate-800/20 border border-slate-800 rounded-xl">
                     <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-800 rounded-lg"></div>
                        <span className="text-white font-medium">{app}</span>
                     </div>
                     <button className="text-xs text-slate-400 border border-slate-700 px-3 py-1 rounded-lg hover:bg-slate-800 transition-colors">Configure</button>
                   </div>
                 ))}
               </div>
            </Card>
          </div>
        );

      default:
        return <div className="text-white">Content for {activeTab} coming soon...</div>;
    }
  };

  return (
    <>
      <SEO title="Vortex Dashboard" description="Admin management area" />
      <div className="min-h-screen bg-[#050505] text-slate-200 flex font-sans selection:bg-blue-500/30">
        <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} border-r border-slate-800 transition-all duration-300 hidden md:flex flex-col bg-[#080808]`}>
          <div className={`p-6 flex items-center ${isSidebarOpen ? 'space-x-3' : 'justify-center'}`}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <LayoutDashboard className="text-white" size={20} />
            </div>
            {isSidebarOpen && <span className="text-xl font-bold text-white tracking-tight">Vortex<span className="text-blue-500">UI</span></span>}
          </div>

          <nav className="flex-1 px-3 space-y-1 mt-4">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} isSidebarOpen={isSidebarOpen} />
            <SidebarItem icon={Sparkles} label="AI Suite" active={activeTab === 'marketing'} onClick={() => setActiveTab('marketing')} isSidebarOpen={isSidebarOpen} />
            <SidebarItem icon={Calendar} label="Bookings" active={activeTab === 'bookings'} onClick={() => setActiveTab('bookings')} isSidebarOpen={isSidebarOpen} />
            <SidebarItem icon={BarChart3} label="Analytics" active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} isSidebarOpen={isSidebarOpen} />
            <SidebarItem icon={Users} label="Team" active={activeTab === 'users'} onClick={() => setActiveTab('users')} isSidebarOpen={isSidebarOpen} />
            
            {isSidebarOpen ? (
              <div className="pt-4 pb-2 px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Preferences</div>
            ) : (
               <div className="pt-4 pb-2 flex justify-center"><div className="w-4 h-[1px] bg-slate-800"></div></div>
            )}
            
            <SidebarItem icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} isSidebarOpen={isSidebarOpen} />
          </nav>

          <div className="p-4 border-t border-slate-800">
            <div className={`flex items-center ${isSidebarOpen ? 'space-x-3' : 'justify-center'} p-2`}>
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 overflow-hidden cursor-pointer" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                <img src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff" alt="Avatar" />
              </div>
              {isSidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">Marcus Vane</p>
                  <p className="text-xs text-slate-500 truncate">Super Admin</p>
                </div>
              )}
              {isSidebarOpen && <LogOut size={16} className="text-slate-500 cursor-pointer hover:text-white" onClick={handleLogout} />}
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          <header className="h-16 border-b border-slate-800 bg-[#080808]/80 backdrop-blur-xl flex items-center justify-between px-8 shrink-0 z-10">
            <div className="flex items-center">
                <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="mr-4 text-slate-400 hover:text-white md:hidden">
                    <LayoutDashboard size={20} />
                </button>

                <div className="relative w-full max-w-md group hidden sm:block">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search data, users, bookings..." 
                    className="bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                title="Toggle Public Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#080808]"></span>
              </button>
              <div className="h-8 w-[1px] bg-slate-800 mx-2"></div>
              <button className="flex items-center space-x-2 text-sm font-medium text-white hover:text-blue-400 transition-colors" onClick={() => window.open('/', '_blank')}>
                <span>View Site</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-tight capitalize">
                  {activeTab === 'dashboard' ? 'Good morning, Marcus' : activeTab === 'marketing' ? 'Marketing AI' : activeTab}
                </h1>
                <p className="text-slate-400 mt-1">Here's what's happening with your business today.</p>
              </div>
              
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminDashboard;
