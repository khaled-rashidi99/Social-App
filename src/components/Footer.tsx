import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="mt-auto bg-[#201E43] ">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-[#EEEEEE]">
                © 2024 Social Media Feed App. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-sm text-[#EEEEEE] hover:text-blue-500"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-[#EEEEEE] hover:text-blue-500"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-[#EEEEEE] hover:text-blue-500"
              >
                Contact Us
              </a>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EEEEEE] hover:text-blue-600"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EEEEEE] hover:text-blue-400"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EEEEEE] hover:text-pink-600"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EEEEEE] hover:text-blue-800"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
