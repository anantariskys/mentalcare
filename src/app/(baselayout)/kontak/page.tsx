import Image from 'next/image';
import { FaInstagram, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Kontak() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section 
        className="min-h-[80vh] text-center flex items-center py-20 px-4 relative"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#B07AB4] bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl text-center mx-auto text-[#B07AB4]">
          Kontak Kami
          </h1>
      
        </div>
      </section>


      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block">Kami percaya bahwa</span>
            <span className="text-[#B07AB4]">ruang sehat mental tumbuh dari kolaborasi.</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Jika kamu menemukan informasi yang perlu dikoreksi, ingin memberi masukan, 
            atau tertarik berkontribusi sebagai penulis, relawan, atau penyebar kebaikan, 
            kami ingin mendengarnya!
          </p>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block">Dukungan kecilmu</span>
            <span className="text-[#B07AB4]">berdampak besar</span>
          </h2>
          <p className="text-gray-700 text-lg mb-12">
            Dukungan kamu sangat berarti untuk membantu lebih banyak orang membangun
            kesehatan mental yang kuat dan seimbang.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaInstagram className="w-16 h-16 mx-auto mb-4 text-[#B07AB4]" />
              <p className="text-gray-700">@mentalcare_kel4</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaFacebook className="w-16 h-16 mx-auto mb-4 text-[#B07AB4]" />
              <p className="text-gray-700">mentalcare_kel4</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaLinkedin className="w-16 h-16 mx-auto mb-4 text-[#B07AB4]" />
              <p className="text-gray-700">MentalCare Kelompok 4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6">
                Silakan <span className="text-[#B07AB4]">Hubungi</span> Kami
              </h3>
              <p className="text-gray-700 text-lg mb-8">
                Kesehatan mental adalah hak semua orang, dan dukunganmu bisa
                menjadi cahaya bagi mereka yang sedang berjuang. Bersama, kita
                bisa membangun ruang aman, penuh empati, dan saling peduli.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4">
                <FaEnvelope className="w-12 h-12 text-[#B07AB4]" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-700">mentalcarekel4@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/images/tangan.jpg"
                alt="Support Image"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
