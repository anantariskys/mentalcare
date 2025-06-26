import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegSmile } from "react-icons/fa";

export default function Beranda() {
  return (
    <div className="font-sans">


      {/* Hero */}
      <section className="min-h-[80vh] bg-cover bg-center flex items-center  text-white text-center relative" style={{ backgroundImage: "url('/images/herobg.png')" }}>
        <div className="container">
        <div className="absolute inset-0 bg-[#B07AB4]/40"></div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-3xl md:text-5xl text-left font-bold">
            Mental Wellness Starts Here: Ruang Aman untuk Pikiran yang Lelah
          </h1>
        </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 container">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <div className="md:w-1/3 flex justify-center">
            <Image src="/images/logo.png" alt="MentalCare Logo" width={180} height={180} />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl leading-relaxed">
              <span className="text-[#B07AB4] font-bold">MentalCare</span> hadir untuk <span className="text-[#B07AB4] font-bold">menemanimu memahami, merawat, dan mencintai</span> kesehatan mentalmu — satu langkah kecil setiap hari.
            </h3>
            <button className="mt-6 bg-[#B07AB4] hover:bg-[#9A69A0] text-white px-6 py-2 rounded-lg">
              Temukan bantuanmu di sini!
            </button>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-[#B07AB4]">Apa Yang Sedang Kamu</span> Rasakan Hari Ini?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Burnout Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row-reverse overflow-hidden border border-gray-100">
              <div className="w-full aspect-square relative bg-[#FDF7FF]">
                <Image src="/images/burnout.png" alt="Burnout" fill className="object-contain p-4 hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-[#B07AB4]">Burnout</h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Burnout adalah keadaan kelelahan emosional, mental, dan fisik yang disebabkan oleh stres berkepanjangan. Ini terjadi ketika seseorang merasa terlalu tertekan dan kewalahan, dan tidak dapat lagi mengatasi tuntutan yang dihadapi.
                </p>
              </div>
            </div>

            {/* Stress Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row-reverse overflow-hidden border border-gray-100">
              <div className="w-full aspect-square relative bg-[#FDF7FF]">
                <Image src="/images/stress.png" alt="Stress" fill className="object-contain p-4 hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-[#B07AB4]">Stress</h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Stres adalah reaksi alami tubuh terhadap situasi yang penuh tekanan. Ini adalah alarm internal yang memperingatkan kita bahwa ada sesuatu yang perlu dihadapi. Dalam kadar yang wajar, stres bisa memotivasi kita untuk bertindak.
                </p>
              </div>
            </div>

            {/* Kecemasan Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row-reverse overflow-hidden border border-gray-100">
              <div className="w-full aspect-square relative bg-[#FDF7FF]">
                <Image src="/images/kecemasan.png" alt="Kecemasan" fill className="object-contain p-4 hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-[#B07AB4]">Kecemasan</h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Kecemasan adalah perasaan khawatir atau takut yang intens dan menetap. Meskipun rasa cemas sesekali adalah normal, terutama dalam situasi yang penuh tekanan, kecemasan yang berlebihan dapat mengganggu kehidupan sehari-hari.
                </p>
              </div>
            </div>

            {/* Depresi Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row-reverse overflow-hidden border border-gray-100">
              <div className="w-full aspect-square relative bg-[#FDF7FF]">
                <Image src="/images/depresi.png" alt="Depresi" fill className="object-contain p-4 hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-[#B07AB4]">Depresi</h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Depresi adalah gangguan kesehatan mental yang umum dan serius yang ditandai dengan suasana hati yang rendah, kehilangan minat atau kesenangan, dan berbagai gejala fisik dan mental lainnya.
                </p>
              </div>
            </div>

            {/* Trauma Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row-reverse overflow-hidden border border-gray-100">
              <div className="w-full aspect-square relative bg-[#FDF7FF]">
                <Image src="/images/trauma.png" alt="Trauma" fill className="object-contain p-4 hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-[#B07AB4]">Trauma</h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Trauma adalah reaksi emosional yang intens dan berkepanjangan terhadap peristiwa yang sangat menegangkan atau menakutkan. Peristiwa tersebut bisa berupa kekerasan fisik atau seksual, kecelakaan, atau bencana alam.
                </p>
              </div>
            </div>

            {/* Gangguan Mood Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row-reverse overflow-hidden border border-gray-100">
              <div className="w-full aspect-square relative bg-[#FDF7FF]">
                <Image src="/images/gangguanmood.png" alt="Gangguan Mood" fill className="object-contain p-4 hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-[#B07AB4]">Gangguan Mood</h4>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  Gangguan mood adalah kelompok gangguan kesehatan mental yang ditandai dengan perubahan suasana hati yang ekstrem dan berlangsung lama. Gangguan ini berbeda dengan fluktuasi emosi normal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Butuh <span className="text-[#B07AB4]">Konsultasi</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Berikut adalah <span className="text-[#B07AB4] font-semibold">daftar psikiater</span> yang dapat kamu hubungi
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Konselor Cards */}
            {[
              {
                name: "Sabrina L. Pratama, M.Psi",
                role: "Psikolog",
                image: "https://i.pravatar.cc/301",
                experience: "11 Tahun",
                satisfaction: "98%",
                rate: "Rp 59.000/bln"
              },
              {
                name: "Alyssa Rahmani, M.Psi.",
                role: "Konseling Pasangan dan Keluarga", 
                image: "https://i.pravatar.cc/302",
                experience: "8 Tahun",
                satisfaction: "95%",
                rate: "Rp 75.000/bln"
              },
              {
                name: "Michael Rafi, Sp.KJ",
                role: "Psikiater Remaja",
                image: "https://i.pravatar.cc/303",
                experience: "15 Tahun", 
                satisfaction: "99%",
                rate: "Rp 89.000/bln"
              },
              {
                name: "Raynald A. Hakim, M.Psi.",
                role: "Pendampingan Pasca Trauma dan Krisis",
                image: "https://i.pravatar.cc/304",
                experience: "12 Tahun",
                satisfaction: "97%",
                rate: "Rp 69.000/bln"
              },
              {
                name: "Nathaniel Faiz, M.Psi.",
                role: "Terapi Emosi & Mindfulness",
                image: "https://i.pravatar.cc/305", 
                experience: "9 Tahun",
                satisfaction: "96%",
                rate: "Rp 65.000/bln"
              },
              {
                name: "Sarah Amalia, M.Psi.",
                role: "Psikolog Klinis",
                image: "https://i.pravatar.cc/306",
                experience: "10 Tahun",
                satisfaction: "97%", 
                rate: "Rp 79.000/bln"
              }
            ].map((konselor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image src={konselor.image} alt={konselor.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{konselor.name}</h3>
                <p className="text-[#B07AB4] text-center mb-4">{konselor.role}</p>
                <div>
                  <div className="flex gap-4 mb-4 justify-center">
                    <div className="flex items-center gap-2">
                      <FaRegClock className="text-[#B07AB4] text-lg" />
                      <p className="font-medium">{konselor.experience}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegSmile className="text-[#B07AB4] text-lg" />
                      <p className="font-medium">{konselor.satisfaction}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-8 px-2">
                    <p className="text-xl font-medium text-[#B07AB4]">
                      {konselor.rate}
                    </p>
                    <button className="bg-[#B07AB4] text-white px-6 py-2 rounded-lg hover:bg-[#9A69A0] transition-colors">
                      Chat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cerita Mereka, <span className="text-[#B07AB4]">Harapan Kita</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            <div className="md:w-1/3">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden relative mb-4">
                  <Image 
                    src="https://i.pravatar.cc/310" 
                    alt="Foto Profil" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold">R</p>
                  <p className="text-gray-600">22 Tahun</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  "Aku dulu nggak sadar kalau aku burnout. Kupikir aku cuma malas, atau terlalu sensitif. Tiap bangun pagi rasanya berat banget. Aku tetap kuliah, tetap ikut organisasi, tapi semuanya seperti... hampa.
                  <br /><br />
                  Sampai suatu hari aku nangis sendirian di kamar, tanpa alasan yang jelas. Akhirnya aku cerita ke teman, dan dia bilang mungkin aku butuh istirahat—bukan cuma fisik, tapi juga mental.
                  <br /><br />
                  Sekarang aku sedang belajar mengenali batasan diri. Aku mulai journaling, cari bantuan profesional, dan pelan-pelan mengatur ulang hidupku.
                  <br /><br />
                  Aku belum 'sembuh', tapi aku lebih sadar. Dan itu awal yang baik."
                </p>
              </div>
              <button className="bg-[#B07AB4] hover:bg-[#9A69A0] text-white px-6 py-2 rounded-lg w-full md:w-auto">
                Baca Cerita Lainnya
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
