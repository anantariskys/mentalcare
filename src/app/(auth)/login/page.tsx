import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-t from-[#B07AB4] to-[#E0CBDB] relative">
     
      
      <div className="flex flex-col md:flex-row items-center justify-end max-w-4xl w-full gap-8">
        <div className="w-full md:w-2/5 absolute left-0">
          <Image
            src="/images/loginimg.png"
            alt="Login illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        <div className='md:w-1/2 '>
        <h1 className="text-3xl text-center  font-bold mb-8">Selamat datang kembali</h1>


        <form className=" space-y-6 w-full  bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center">Masuk</h3>
          
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-gray-700"
              >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B07AB4] focus:border-transparent"
              />
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="block text-gray-700"
              >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#B07AB4] focus:border-transparent"
              />
          </div>

          <Link 
            href="#" 
            className="block text-[#B07AB4] hover:text-[#B07AB4]/80 text-right"
            >
            Lupa kata sandi?
          </Link>

          <button 
            type="submit"
            className="w-full bg-[#B07AB4] text-white py-2 rounded-lg hover:bg-[#B07AB4]/90 transition duration-200"
            >
            Login
          </button>

          <p className="text-center text-gray-600">
            Belum punya akun?{' '}
            <Link 
              href="/register" 
              className="text-[#B07AB4] hover:text-[#B07AB4]/80"
              >
              Daftar
            </Link>
          </p>
        </form>
                </div>
      </div>
    </section>
  );
};

export default Login;
