import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section 
        className="min-h-[80vh] text-center flex items-center py-20 px-4 relative"
        style={{
          backgroundImage: "url('/images/herobg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#B07AB4] bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl text-left text-white">
            Mental Wellness Starts Here: Ruang Aman untuk Pikiran yang Lelah
          </h1>
          <div className="flex justify-start space-x-6 mt-10">
            <Link href="/signin">
              <button className="bg-[#B07AB4] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#9A69A0] transition duration-300">
                Daftar
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-white text-[#B07AB4] border-2 border-[#B07AB4] px-8 py-3 rounded-lg font-medium hover:bg-[#B07AB4] hover:text-white transition duration-300">
                Masuk
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Section 1 */}
      <section className="py-20 container">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
          <div className="md:w-1/3 flex justify-center md:justify-start transform hover:scale-105 transition duration-300">
            <Image 
              src="/images/logo.png" 
              alt="MentalCare Logo" 
              width={240} 
              height={240}
              className="object-contain"
              priority
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-3xl text-center md:text-left leading-relaxed">
              <span className="text-[#B07AB4] font-bold hover:text-[#9A69A0] transition-colors duration-300">
                MentalCare
              </span>{" "}
              hadir untuk{" "}
              <span className="text-[#B07AB4] font-bold hover:text-[#9A69A0] transition-colors duration-300">
                menemanimu memahami, merawat, dan mencintai
              </span>{" "}
              kesehatan mentalmu — satu langkah kecil setiap hari.
            </h3>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className=" py-16  container ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="font-bold"> Kenapa </span>
            <span className="text-[#B07AB4]"> MentalCare? </span>
          </h2>
          <p className="text-center text-lg mb-2"><span className="text-[#B07AB4]">Karena kamu layak</span> merasa lebih baik.</p>
          <p className="text-center text-gray-700 mb-8">
            Kami tahu, tak selalu mudah untuk bicara tentang isi kepala. Karena itu, MentalCare hadir untuk jadi teman perjalananmu,
            bukan untuk menilai, tapi untuk menemani. Kami menyediakan:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded">
                <Image src={`/images/kenapa${i}.png`} alt="Kenapa MentalCare" width={400} height={400} className="mb-4 aspect-[9/8] object-cover rounded-xl" />
                <h3 className="font-semibold text-lg mb-2">Artikel bertemakan psikologi</h3>
                <p className="text-gray-600 text-sm">
                  Membahas topik seperti kecemasan, burnout, dan pengelolaan emosi. Ditulis dengan bahasa ringan dan mudah dipahami.
                  Cocok untuk menambah pemahaman soal kesehatan mental.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 container">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bersama,<span className="text-[#B07AB4]"> Bukan Sendiri</span>
            </h3>
            <h5 className="text-lg md:text-xl mb-6">
              Kamu <span className="text-[#B07AB4] font-medium">tidak sendiri</span>. Setiap orang <span className="text-[#B07AB4] font-medium">punya cerita</span>. Dan kamu <span className="text-[#B07AB4] font-medium">berhak didengar.</span>
            </h5>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Baca kisah inspiratif dari mereka yang pernah merasa kehilangan arah—dan bagaimana mereka bangkit. Atau bagikan ceritamu
              dan bantu orang lain merasa lebih dimengerti.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#B07AB4] text-white px-6 py-3 rounded-lg hover:bg-[#9A69A0] transition duration-300">
                Jelajahi Cerita Pengguna
              </button>
              <button className="border-2 border-[#B07AB4] text-[#B07AB4] px-6 py-3 rounded-lg hover:bg-[#B07AB4] hover:text-white transition duration-300">
                Tulis Ceritamu
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/images/bersama.png" 
              alt="Bersama" 
              width={500} 
              height={400}
              className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
              priority 
            />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className=" py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 px-4">
          <div className="md:w-1/3">
            <Image src="/images/logo.png" alt="Logo" width={240} height={240} />
          </div>
          <div className="md:w-2/3">
            <h4 className="text-xl font-bold mb-2">
              Jadi Bagian dari <span className="text-[#B07AB4]">Gerakan Kebaikan</span>
            </h4>
            <p className="text-gray-700">
              Kamu bisa ikut membentuk ruang ini. MentalCare tumbuh dari kolaborasi. Jika kamu ingin berkontribusi sebagai penulis,
              relawan, atau sekadar memberi masukan, kami terbuka untukmu.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
}
