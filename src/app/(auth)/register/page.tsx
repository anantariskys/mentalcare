import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-t from-[#B07AB4] to-[#E0CBDB] relative">
      <div className="flex flex-col md:flex-row items-center justify-start max-w-4xl w-full gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl text-center font-bold mb-8">Bergabunglah dengan MentalCare!</h1>

          <form className="space-y-6 w-full bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-center">Daftar</h3>

            <div className="space-y-2">
              <label htmlFor="nama" className="block text-gray-700">Nama</label>
              <input
                id="nama"
                type="text"
                placeholder="Nama Lengkap"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B07AB4] focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder="yourname@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B07AB4] focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B07AB4] focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password-confirm" className="block text-gray-700">Konfirmasi Password</label>
              <input
                id="password-confirm"
                type="password"
                placeholder="Konfirmasi Password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B07AB4] focus:border-transparent"
              />
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Dengan mendaftar, saya menyetujui{' '}
                <span className="text-[#B07AB4]">Syarat dan Ketentuan</span> serta{' '}
                <span className="text-[#B07AB4]">Kebijakan Privasi MentalCare</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#B07AB4] text-white py-2 rounded-lg hover:bg-[#B07AB4]/90 transition duration-200"
            >
              Daftar
            </button>

            <p className="text-center text-gray-600">
              Sudah punya akun?{' '}
              <Link href="/login" className="text-[#B07AB4] hover:text-[#B07AB4]/80">
                Masuk
              </Link>
            </p>
          </form>
        </div>

        <div className="w-full md:w-2/5 absolute right-0">
          <Image
            src="/images/registerbg.png"
            alt="Register illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
