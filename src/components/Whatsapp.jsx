import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { RiWhatsappFill } from "react-icons/ri";
const WhatsApp = () => {
  return (

        
        <main>
        <a
          href="https://wa.me/+923085417057."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[50px] z-50 left-[30px]"
        >
          <RiWhatsappFill className="text-[50px] text-green-500 bg-white rounded-full px-2 shadow-md shadow-slate-400" />
        </a>

      </main>


  )
}

export default WhatsApp