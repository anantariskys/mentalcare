import React from "react";
import Image from "next/image";
import Link from "next/link";

const Artikel = () => {
  const articles = [
    {
      id: 1,
      title: "Kenali Tanda-Tanda Burnout Sejak Dini",
      excerpt:
        "Pernah merasa lelah secara emosional padahal tidak banyak aktivitas? Bisa jadi itu burnout. Yuk, kenali gejalanya agar kamu bisa mengatasinya sebelum terlambat.",
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
      category: "Kesehatan Mental",
      author: "Tim CintaHidup",
      date: "10 Mei 2025",
      content: `
      <h2>Apa itu Burnout?</h2>
      <p>Burnout adalah kondisi kelelahan fisik, mental, dan emosional yang disebabkan oleh stres berkepanjangan. Kondisi ini sering terjadi akibat tekanan pekerjaan atau kehidupan yang berlebihan.</p>
      
      <h2>Tanda-tanda Burnout:</h2>
      <ul>
        <li>Kelelahan fisik dan mental yang berkelanjutan</li>
        <li>Kehilangan motivasi dan antusiasme</li>
        <li>Penurunan produktivitas</li>
        <li>Gangguan tidur</li>
        <li>Perubahan nafsu makan</li>
      </ul>

      <h2>Cara Mengatasi Burnout:</h2>
      <ol>
        <li>Identifikasi penyebab burnout</li>
        <li>Atur jadwal istirahat yang cukup</li>
        <li>Lakukan aktivitas yang menyenangkan</li>
        <li>Berbagi cerita dengan orang terdekat</li>
        <li>Konsultasi dengan profesional jika diperlukan</li>
      </ol>
    `,
    },
    {
      id: 2,
      title: "Mengatasi Kecemasan dalam Kehidupan Sehari-hari",
      excerpt:
        "Kecemasan bisa muncul kapan saja dan dimana saja. Mari pelajari cara mengatasinya dengan tepat dan efektif untuk kehidupan yang lebih tenang.",
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
      category: "Kesehatan Mental",
      author: "Tim CintaHidup",
      date: "9 Mei 2025",
      content: `
      <h2>Memahami Kecemasan</h2>
      <p>Kecemasan adalah respons alami tubuh terhadap stres, tetapi ketika berlebihan dapat mengganggu kehidupan sehari-hari.</p>

      <h2>Gejala Kecemasan:</h2>
      <ul>
        <li>Jantung berdebar kencang</li>
        <li>Keringat berlebih</li>
        <li>Pikiran yang tidak terkontrol</li>
        <li>Kesulitan berkonsentrasi</li>
        <li>Gangguan tidur</li>
      </ul>

      <h2>Tips Mengatasi Kecemasan:</h2>
      <ol>
        <li>Praktik teknik pernapasan</li>
        <li>Meditasi rutin</li>
        <li>Olahraga teratur</li>
        <li>Pola tidur yang teratur</li>
        <li>Konsumsi makanan sehat</li>
      </ol>
    `,
    },
    {
      id: 3,
      title: "Pentingnya Self-Care untuk Kesehatan Mental",
      excerpt:
        "Self-care bukan hanya tentang merawat diri secara fisik, tapi juga mental. Simak tips praktisnya untuk menjaga kesehatan mental Anda.",
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
      category: "Kesehatan Mental",
      author: "Tim CintaHidup",
      date: "8 Mei 2025",
      content: `
      <h2>Apa itu Self-Care?</h2>
      <p>Self-care adalah praktik merawat diri sendiri secara holistik, meliputi aspek fisik, mental, dan emosional.</p>

      <h2>Manfaat Self-Care:</h2>
      <ul>
        <li>Mengurangi stres dan kecemasan</li>
        <li>Meningkatkan kesejahteraan mental</li>
        <li>Memperbaiki kualitas hidup</li>
        <li>Meningkatkan produktivitas</li>
        <li>Memperkuat hubungan sosial</li>
      </ul>

      <h2>Praktik Self-Care Sehari-hari:</h2>
      <ol>
        <li>Meluangkan waktu untuk hobi</li>
        <li>Menjaga pola makan sehat</li>
        <li>Olahraga rutin</li>
        <li>Meditasi atau yoga</li>
        <li>Istirahat yang cukup</li>
      </ol>
    `,
    },
    {
      id: 4,
      title: "Membangun Hubungan yang Sehat",
      excerpt:
        "Hubungan yang sehat adalah kunci kesejahteraan mental. Pelajari cara membangun dan mempertahankan hubungan yang positif.",
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
      category: "Sakit Gigi",
      author: "Tim CintaHidup",
      date: "7 Mei 2025",
      content: `
      <h2>Karakteristik Hubungan Sehat</h2>
      <p>Hubungan yang sehat didasari oleh komunikasi yang baik, kepercayaan, dan saling menghargai.</p>

      <h2>Tips Membangun Hubungan Sehat:</h2>
      <ul>
        <li>Komunikasi terbuka dan jujur</li>
        <li>Menghargai batasan pribadi</li>
        <li>Menunjukkan empati</li>
        <li>Memberikan dukungan</li>
        <li>Menyelesaikan konflik dengan baik</li>
      </ul>
    `,
    },
    {
      id: 5,
      title: "Mengelola Stres di Tempat Kerja",
      excerpt:
        "Stres kerja dapat mempengaruhi produktivitas dan kesehatan mental. Temukan cara efektif mengelola stres di tempat kerja.",
      image: `https://picsum.photos/seed/${Math.random()}/400/300`,
      category: "Kesehatan Mental",
      author: "Tim CintaHidup",
      date: "6 Mei 2025",
      content: `
      <h2>Penyebab Stres Kerja</h2>
      <p>Stres kerja dapat disebabkan oleh beban kerja berlebih, konflik dengan rekan kerja, atau ketidakseimbangan work-life balance.</p>

      <h2>Dampak Stres Kerja:</h2>
      <ul>
        <li>Penurunan produktivitas</li>
        <li>Gangguan kesehatan</li>
        <li>Burnout</li>
        <li>Masalah hubungan sosial</li>
      </ul>

      <h2>Cara Mengelola Stres Kerja:</h2>
      <ol>
        <li>Manajemen waktu yang baik</li>
        <li>Istirahat secukupnya</li>
        <li>Olahraga rutin</li>
        <li>Komunikasi dengan atasan</li>
        <li>Work-life balance</li>
      </ol>
    `,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Artikel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="card bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="label mental inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-3">
                {article.category}
              </span>
              <h2 className="text-xl font-semibold mb-3 line-clamp-1">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="meta text-gray-500 text-sm mb-4">
                By {article.author} | {article.date}
              </div>
              <Link
                href={`/artikel/${article.id}`}
                className=""
              >
                <button className="bg-[#B07AB4] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#9A69A0] transition duration-300">
                  Baca Selengkapnya
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artikel;
