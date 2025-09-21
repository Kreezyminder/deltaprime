import React, { useState, useEffect } from 'react';
import { User } from '../lib/db';

interface ProfilePageProps {
  user: User;
  onUserUpdate: (updatedData: Partial<User>) => Promise<User>;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onUserUpdate }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profileMessage, setProfileMessage] = useState({ type: '', text: '' });
  const [isProfileSaving, setIsProfileSaving] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' });
  const [isPasswordSaving, setIsPasswordSaving] = useState(false);

  // Effect to reset form when user prop changes (e.g., after an update)
  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileMessage({ type: '', text: '' });
    setIsProfileSaving(true);
    try {
      await onUserUpdate({ name, email });
      setProfileMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (err: any) {
      setProfileMessage({ type: 'error', text: err.message || 'Failed to update profile.' });
    } finally {
      setIsProfileSaving(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMessage({ type: '', text: '' });

    if (newPassword !== confirmPassword) {
      setPasswordMessage({ type: 'error', text: 'New passwords do not match.' });
      return;
    }
    if (newPassword.length < 6) {
      setPasswordMessage({ type: 'error', text: 'New password must be at least 6 characters.' });
      return;
    }
    // In a real app, you'd verify the currentPassword against the server's stored hash.
    // For this mock, we'll check it against the one in our localStorage DB.
    if (currentPassword !== user.passwordHash) {
        setPasswordMessage({ type: 'error', text: 'Current password is incorrect.' });
        return;
    }

    setIsPasswordSaving(true);
    try {
      await onUserUpdate({ passwordHash: newPassword });
      setPasswordMessage({ type: 'success', text: 'Password changed successfully!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setPasswordMessage({ type: 'error', text: err.message || 'Failed to change password.' });
    } finally {
      setIsPasswordSaving(false);
    }
  };

  return (
    <main className="flex-grow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="pb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Your Profile
          </h1>
          <p className="mt-2 text-lg text-slate-400">
            Manage your personal information and password.
          </p>
        </header>

        <div className="space-y-10">
          {/* Profile Information Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white">Profile Information</h2>
            <form onSubmit={handleProfileSubmit} className="mt-6 space-y-6">
              {profileMessage.text && (
                <p className={`${profileMessage.type === 'success' ? 'text-green-400' : 'text-red-500'} text-sm text-center bg-slate-700/50 py-2 rounded-md`}>{profileMessage.text}</p>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                <input type="text" name="name" id="name" required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
              </div>
              <div className="text-right">
                <button type="submit" disabled={isProfileSaving} className="inline-flex justify-center py-2 px-6 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-all disabled:opacity-50">
                  {isProfileSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>

          {/* Change Password Form */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white">Change Password</h2>
            <form onSubmit={handlePasswordSubmit} className="mt-6 space-y-6">
               {passwordMessage.text && (
                <p className={`${passwordMessage.type === 'success' ? 'text-green-400' : 'text-red-500'} text-sm text-center bg-slate-700/50 py-2 rounded-md`}>{passwordMessage.text}</p>
              )}
              <div>
                {/* FIX: Corrected typo from `cla ssName` to `className` */}
                <label htmlFor="current-password" className="block text-sm font-medium text-slate-300">Current Password</label>
                <input type="password" name="current-password" id="current-password" required value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="mt-1 block w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
              </div>
              <div>
                {/* FIX: Corrected typo from `cla ssName` to `className` */}
                <label htmlFor="new-password" className="block text-sm font-medium text-slate-300">New Password</label>
                <input type="password" name="new-password" id="new-password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="mt-1 block w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
              </div>
              <div>
                {/* FIX: Corrected typo from `cla ssName` to `className` */}
                <label htmlFor="confirm-new-password" className="block text-sm font-medium text-slate-300">Confirm New Password</label>
                <input type="password" name="confirm-new-password" id="confirm-new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 block w-full bg-slate-800 border border-slate-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
              </div>
              <div className="text-right">
                <button type="submit" disabled={isPasswordSaving} className="inline-flex justify-center py-2 px-6 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-all disabled:opacity-50">
                   {isPasswordSaving ? 'Saving...' : 'Change Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;