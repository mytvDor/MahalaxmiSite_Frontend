import React from "react";
import { Instagram, MessageCircle } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img
              src="./logo.png"
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
              alt="Temple Logo"
            />
            <span class="ml-3 text-xl"> परब्रम्हस्वरूपिणी</span>
          </a>
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2025 परब्रम्हस्वरूपिणी
            <a
              href="https://twitter.com/knyttneve"
              class="text-gray-100 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              +91 9130340304 <br></br> +91 8956594343
            </a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.instagram.com/official_aai.mahalaxmi_ambabai/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-400 hover:text-pink-500"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/+919130340304" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-gray-400 hover:text-green-500"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 .063C7.164.063.063 7.164.063 16c0 2.828.75 5.578 2.172 7.969L0 32l8.25-2.203C10.625 30.812 13.312 32 16 32c8.836 0 15.937-7.101 15.937-15.938C31.938 7.164 24.836.063 16 .063zM16 29.25c-2.469 0-4.844-.656-6.938-1.875l-.5-.281-4.875 1.313 1.313-4.781-.312-.5c-1.25-2.125-1.906-4.5-1.906-6.938 0-7.375 5.969-13.344 13.344-13.344S29.344 8.625 29.344 16 23.375 29.25 16 29.25zm7.125-8.875c-.375-.188-2.188-1.063-2.531-1.188-.344-.125-.594-.188-.844.188-.25.375-.969 1.188-1.188 1.438-.219.25-.438.281-.812.094-.375-.188-1.563-.594-2.969-1.875-1.094-.969-1.813-2.156-2.031-2.531-.219-.375-.031-.578.156-.75.156-.156.375-.438.531-.656.188-.219.25-.375.375-.625.125-.25.062-.469 0-.656-.094-.188-.844-2.063-1.156-2.812-.312-.75-.625-.656-.844-.656h-.719c-.219 0-.562.094-.844.438-.281.344-1.094 1.063-1.094 2.594s1.125 3.031 1.281 3.219c.156.188 2.25 3.438 5.469 4.812.766.313 1.359.5 1.812.625.75.219 1.438.188 1.969.125.594-.094 1.813-.75 2.063-1.5.25-.75.25-1.406.188-1.531-.063-.125-.281-.188-.594-.344z" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
