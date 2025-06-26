
import Image from "next/image";

export default function TentangKami() {
  return (
    <main className="min-h-screen">
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
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl text-center mx-auto text-[#B07AB4]">
          Tentang Kami
          </h1>
      
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-[#B07AB4] text-left ">
            Tentang <span className="text-black">MentalCare</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/tangan.jpg"
                alt="Tangan bersentuhan"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">
                Kami hadir untuk{" "}
                <span className="text-[#B07AB4]">mendengarkan</span>,{" "}
                <span className="text-[#B07AB4]">memahami</span>, dan{" "}
                <span className="text-[#B07AB4]">menemani</span>.
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  MentalCare adalah ruang digital yang berfokus pada kesehatan
                  mental, tempat siapa pun bisa merasa aman untuk mengenal diri,
                  berbagi cerita, dan tumbuh bersama. Kami percaya bahwa setiap
                  orang berhak mendapat akses terhadap informasi yang benar,
                  dukungan emosional, dan rasa bahwa mereka tidak sendirian.
                </p>
                <p className="text-gray-700">
                  Didirikan oleh sekelompok individu dengan latar belakang
                  psikologi, pendidikan, dan desain sosial, Mental Caare bertujuan
                  menjadi jembatan antara kebutuhan akan pemahaman mental health dan
                  cara menyampaikannya dengan empati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="text-white py-16 relative min-h-[50vh]"
        style={{
          backgroundImage: "url('/images/konsultasi.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8">Apa yang Kami Lakukan?</h2>
          <div className="space-y-4">
            <p className="text-lg">Menyediakan konten edukatif seputar kesehatan mental</p>
            <p className="text-lg">Menghubungkan pengguna dengan layanan bantuan profesional</p>
            <p className="text-lg">Menawarkan ruang aman untuk berbagi cerita</p>
            <p className="text-lg">Mendorong kolaborasi dan kontribusi dari komunitas</p>
          </div>
        </div>
      </section>

      <section className=" py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-xl font-bold text-primary-600 mb-4">Visi Kami</div>
              <p>
                Menjadi platform inklusif dan terpercaya yang mendukung kesehatan
                mental masyarakat Indonesia melalui pendekatan yang empatik,
                terbuka, dan mudah diakses.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-xl font-bold text-primary-600 mb-4">Misi Kami</div>
              <ol className="list-decimal list-inside space-y-2">
                <li>Meningkatkan kesadaran dan literasi tentang kesehatan mental</li>
                <li>Membangun komunitas suportif yang saling mendengarkan</li>
                <li>Memberikan wadah bagi siapa saja yang ingin berkontribusi dalam kebaikan bersama</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tim di Balik <span className="text-primary-600">MentalCare</span></h2>
          <p className="text-gray-600 mb-12">MentalCare dibangun atas semangat kolaborasi...</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Image 
                src="/images/khansa.jpg" 
                alt="Zahwa Naurah"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <p className="font-bold">Zahwa Naurah, P.</p>
              <p className="text-gray-600">UX Research & Programmer</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/pani.jpg" 
                alt="Stephanie Marito"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <p className="font-bold">Stephanie Marito, H.</p>
              <p className="text-gray-600">UX Research & Programmer</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/kamil.jpg" 
                alt="Kamila Luthfiah"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <p className="font-bold">Kamila Luthfiah</p>
              <p className="text-gray-600">UI Design & Programmer</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/kia.jpg" 
                alt="Azkia Aulia"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <p className="font-bold">Azkia Aulia Barus</p>
              <p className="text-gray-600">UI Design & Programmer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
