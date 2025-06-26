'use client'
import React, { useState, useRef } from 'react'

type User = {
  id: number
  name: string
  title: string
  avatar: string
}

type Message = {
  from: 'me' | 'them'
  text?: string
  image?: string
  time: string
}

const Chat: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const users: User[] = [
    {
      id: 1,
      name: 'Alyssa Rahmani, M.Psi.',
      title: 'Konseling Pasangan dan Keluarga',
      avatar: 'https://i.pravatar.cc/310'
    },
    {
      id: 2,
      name: 'Budi Santoso, M.Psi.',
      title: 'Konseling Remaja & Pendidikan',
      avatar: 'https://i.pravatar.cc/311'
    },
    {
      id: 3,
      name: 'Clara Widya, M.Psi.',
      title: 'Konseling Pranikah & Keluarga',
      avatar: 'https://i.pravatar.cc/312'
    }
  ]

  const initialMessages: Record<number, Message[]> = {
    1: [
      { from: 'them', text: 'Selamat pagi, ada yang bisa saya bantu?', time: '09:00 WIB' },
      { from: 'me', text: 'Saya ingin berkonsultasi soal hubungan.', time: '09:01 WIB' },
      { from: 'them', image: 'https://via.placeholder.com/150', time: '09:02 WIB' }
    ],
    2: [
      { from: 'them', text: 'Halo, konsultasi mengenai apa ya?', time: '1 hari lalu' },
      { from: 'me', text: 'Tentang tekanan belajar dan sekolah.', time: '1 hari lalu' }
    ],
    3: [
      { from: 'them', text: 'Selamat sore, konsultasi apa hari ini?', time: '2 minggu lalu' }
    ]
  }

  const [selectedUserId, setSelectedUserId] = useState<number>(users[0].id)
  const [messages, setMessages] = useState(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const selectedUser = users.find(u => u.id === selectedUserId)
  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSend = () => {
    if (!inputValue.trim()) return
    const newMessage: Message = {
      from: 'me',
      text: inputValue,
      time: new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit'
      }) + ' WIB'
    }
    setMessages(prev => ({
      ...prev,
      [selectedUserId]: [...(prev[selectedUserId] || []), newMessage]
    }))
    setInputValue('')
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => {
      const newMessage: Message = {
        from: 'me',
        image: reader.result as string,
        time: new Date().toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit'
        }) + ' WIB'
      }
      setMessages(prev => ({
        ...prev,
        [selectedUserId]: [...(prev[selectedUserId] || []), newMessage]
      }))
    }
    reader.readAsDataURL(file)
  }

  const handleUserSelect = (userId: number) => {
    setSelectedUserId(userId)
    setIsSidebarOpen(false) // Close sidebar on mobile after selection
  }

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans relative">
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-500 text-white p-2 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside className={`
        md:w-1/4 w-full bg-[#F5F2F7] p-4 border-r
        fixed md:relative z-40
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        h-full overflow-auto
      `}>
        <div className="pt-16 md:pt-0">
          <input
            type="text"
            placeholder="Cari Pesan"
            className="w-full px-4 py-2 mb-4 rounded-full border focus:outline-none"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {filteredUsers.map(user => (
            <div
              key={user.id}
              onClick={() => handleUserSelect(user.id)}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                user.id === selectedUserId ? 'bg-purple-100' : 'hover:bg-gray-100'
              }`}
            >
              <img src={user.avatar} alt="profile" className="rounded-full w-10 h-10" />
              <div>
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-gray-600 truncate max-w-[150px]">
                  {(messages[user.id] || []).slice(-1)[0]?.text
                    ? messages[user.id].slice(-1)[0].text
                    : messages[user.id].slice(-1)[0]?.image
                    ? '📷 Foto'
                    : 'Belum ada pesan'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat Main */}
      <div className="flex-1 flex flex-col bg-[#F8F4FA] relative">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b sticky top-0 bg-[#F8F4FA] z-30">
          <div className="flex items-center gap-3">
            <img src={selectedUser?.avatar} alt="profile" className="rounded-full w-10 h-10" />
            <div>
              <p className="text-sm font-bold">{selectedUser?.name}</p>
              <p className="text-xs text-gray-500">{selectedUser?.title}</p>
            </div>
          </div>
          <div className="text-purple-400 text-xl">🏠</div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="flex justify-center">
            <div className="bg-[#7F4A9E] text-white px-3 py-1 rounded-md text-xs">
              Hari Ini
            </div>
          </div>

          {(messages[selectedUserId] || []).map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 rounded-xl max-w-[80%] sm:max-w-xs text-sm ${
                  msg.from === 'me'
                    ? 'bg-[#EBDDF3] text-black rounded-br-none'
                    : 'bg-[#A971C6] text-white rounded-bl-none'
                }`}
              >
                {msg.text && <p className="break-words">{msg.text}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="Uploaded"
                    className="mt-2 rounded-lg w-full max-w-[200px]"
                  />
                )}
                <p className="text-[10px] text-right mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center p-4 border-t bg-white sticky bottom-0">
          <button className="text-gray-500 text-xl mr-2">😊</button>
          <input
            type="text"
            placeholder="Tulis Sesuatu"
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none text-sm"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button
            className="text-gray-500 text-xl ml-2"
            onClick={() => fileInputRef.current?.click()}
          >
            📎
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <button onClick={handleSend} className="text-purple-600 text-xl ml-2">
            📤
          </button>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default Chat
