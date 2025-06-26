"use client";

import Image from "next/image";
import { FaRegClock, FaRegSmile } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function PsikiaterPage() {
const psychiatrists = [
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
    },
    {
      name: "Diana Putri, M.Psi.",
      role: "Psikolog Anak",
      image: "https://i.pravatar.cc/307",
      experience: "7 Tahun",
      satisfaction: "94%",
      rate: "Rp 69.000/bln"
    },
    {
      name: "Farhan Ahmad, Sp.KJ",
      role: "Psikiater Dewasa",
      image: "https://i.pravatar.cc/308",
      experience: "13 Tahun",
      satisfaction: "98%",
      rate: "Rp 85.000/bln"
    },
    {
      name: "Jasmine Widodo, M.Psi.",
      role: "Terapi Kognitif Perilaku",
      image: "https://i.pravatar.cc/309",
      experience: "9 Tahun",
      satisfaction: "96%",
      rate: "Rp 72.000/bln"
    },
    {
      name: "Kevin Tanaka, M.Psi.",
      role: "Konseling Karir",
      image: "https://i.pravatar.cc/310",
      experience: "6 Tahun",
      satisfaction: "93%",
      rate: "Rp 65.000/bln"
    },
    {
      name: "Linda Sari, M.Psi.",
      role: "Psikolog Pendidikan",
      image: "https://i.pravatar.cc/311",
      experience: "8 Tahun",
      satisfaction: "95%",
      rate: "Rp 70.000/bln"
    },
    {
      name: "Marco Wijaya, Sp.KJ",
      role: "Psikiater Geriatri",
      image: "https://i.pravatar.cc/312",
      experience: "14 Tahun",
      satisfaction: "97%",
      rate: "Rp 82.000/bln"
    },
    {
      name: "Rachel Kusuma, M.Psi.",
      role: "Psikolog Remaja",
      image: "https://i.pravatar.cc/313",
      experience: "9 Tahun", 
      satisfaction: "96%",
      rate: "Rp 68.000/bln"
    },
    {
      name: "Adrian Wijaya, Sp.KJ",
      role: "Psikiater Adiksi",
      image: "https://i.pravatar.cc/314",
      experience: "16 Tahun",
      satisfaction: "98%",
      rate: "Rp 92.000/bln"
    },
    {
      name: "Sofia Rahman, M.Psi.",
      role: "Terapi Keluarga",
      image: "https://i.pravatar.cc/315",
      experience: "11 Tahun",
      satisfaction: "97%",
      rate: "Rp 76.000/bln"
    },
    {
      name: "Daniel Susanto, M.Psi.",
      role: "Psikolog Industri",
      image: "https://i.pravatar.cc/316",
      experience: "13 Tahun",
      satisfaction: "96%",
      rate: "Rp 78.000/bln"
    },
    {
      name: "Maya Anggraini, M.Psi.",
      role: "Konseling Pernikahan",
      image: "https://i.pravatar.cc/317",
      experience: "10 Tahun",
      satisfaction: "95%",
      rate: "Rp 73.000/bln"
    },
    {
      name: "Richard Tanuwijaya, Sp.KJ",
      role: "Psikiater Anak & Remaja",
      image: "https://i.pravatar.cc/318",
      experience: "14 Tahun",
      satisfaction: "98%",
      rate: "Rp 88.000/bln"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredPsychiatrists = psychiatrists.filter(psychiatrist => 
    psychiatrist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    psychiatrist.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPsychiatrists.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPsychiatrists.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Butuh <span className="text-[#B07AB4]">Konsultasi</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Berikut adalah <span className="text-[#B07AB4] font-semibold">daftar psikiater</span> yang dapat kamu hubungi
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Cari psikiater atau spesialisasi..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B07AB4] focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((psychiatrist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src={psychiatrist.image} alt={psychiatrist.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{psychiatrist.name}</h3>
              <p className="text-[#B07AB4] text-center mb-4">{psychiatrist.role}</p>
              <div>
                <div className="flex gap-4 mb-4 justify-center">
                  <div className="flex items-center gap-2">
                    <FaRegClock className="text-[#B07AB4] text-lg" />
                    <p className="font-medium">{psychiatrist.experience}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegSmile className="text-[#B07AB4] text-lg" />
                    <p className="font-medium">{psychiatrist.satisfaction}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-8 px-2">
                  <p className="text-xl font-medium text-[#B07AB4]">
                    {psychiatrist.rate}
                  </p>
                  <Link href="/payment" className="bg-[#B07AB4] text-white px-6 py-2 rounded-lg hover:bg-[#9A69A0] transition-colors">
                    Chat
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === pageNumber
                  ? "bg-[#B07AB4] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
