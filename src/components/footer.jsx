"use client";
import { Instagram, Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export const FOOTER = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const toggleCompany = () => setIsCompanyOpen(!isCompanyOpen);
  const toggleLegal = () => setIsLegalOpen(!isLegalOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto">
      <footer className="bg-[#0F0F1A] text-white py-16 px-12 relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(78, 78, 255, 0.15) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-8">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF3366 0%, #CB5EEE 100%)",
                  }}
                />
                <span className="text-xl font-bold">NFTopia</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Our platform brings together cutting-edge digital art from both
                emerging talents and renowned creators.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(78, 78, 255, 0.12) 0%, rgba(78, 78, 255, 0.06) 100%)",
                  }}
                >
                  <Instagram size={20} className="text-gray-400" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(78, 78, 255, 0.12) 0%, rgba(78, 78, 255, 0.06) 100%)",
                  }}
                >
                  <Facebook size={20} className="text-gray-400" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(78, 78, 255, 0.12) 0%, rgba(78, 78, 255, 0.06) 100%)",
                  }}
                >
                  <Twitter size={20} className="text-gray-400" />
                </Link>
                <Link
                  href="#"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(78, 78, 255, 0.12) 0%, rgba(78, 78, 255, 0.06) 100%)",
                  }}
                >
                  <Linkedin size={20} className="text-gray-400" />
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <h3 className="text-white font-medium text-lg mb-6 flex justify-between items-center">
                Company
                <button
                  className="lg:hidden text-gray-400"
                  onClick={toggleCompany}
                >
                  {isCompanyOpen ? "Hide" : "Show"}
                </button>
              </h3>
              {isCompanyOpen || isWideScreen ? (
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Market
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Discover
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>
            <div className="w-full sm:w-auto">
              <h3 className="text-white font-medium text-lg mb-6 flex justify-between items-center">
                Support
                <button
                  className="lg:hidden text-gray-400"
                  onClick={toggleLegal}
                >
                  {isLegalOpen ? "Hide" : "Show"}
                </button>
              </h3>
              {isLegalOpen || isWideScreen ? (
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>

            <div className="w-full sm:w-auto">
              <h3 className="text-white font-medium text-lg mb-6 flex justify-between items-center">
                Legal
                <button
                  className="lg:hidden text-gray-400"
                  onClick={toggleLegal}
                >
                  {isLegalOpen ? "Hide" : "Show"}
                </button>
              </h3>
              {isLegalOpen || isWideScreen ? (
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Terms & use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
          <div className="text-center mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © All Right Reserved. 2024, NFTopia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
