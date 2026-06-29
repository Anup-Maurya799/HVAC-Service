import "./index.css";
import { IoCallOutline } from "react-icons/io5";
import { LuShield } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { FiTool } from "react-icons/fi";
import man from "./assets/image/man.jpg";
import { FaRegSnowflake } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { GiNinjaStar } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { MdOutlinePersonOutline } from "react-icons/md";
import { PiMedalLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import two from "./assets/image/people.jpg";
import { SiComma } from "react-icons/si";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Figma1() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
        <nav className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <a href="#home">
                <h3 className="text-xl">
                  AMSUNO <span className="text-blue-600">HVAC</span>
                </h3>
              </a>
              <ul className="hidden lg:flex gap-8 text-gray-600 items-center">
                <li>
                  <a
                    href="#home"
                    className="hover:text-blue-500 active:text-blue-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#service"
                    className="hover:text-blue-500 active:text-blue-500"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-500 active:text-blue-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-500 active:text-blue-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="hidden lg:flex items-center gap-6 text-gray-600">
                <a href="https://wa.me/918064206918" target="_blank">
                  <p className="flex items-center gap-2">
                    <IoCallOutline className="cursor-pointer" />
                    08064206918
                  </p>
                </a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-800 active:bg-blue-800 transition transform hover:-translate-y-1 active:-translate-y-1 duration-300">
                  Get Quote
                </button>
              </div>
              <div className="lg:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ?
                    <IoClose className="text-3xl text-blue-600" />
                  : <IoMenu className="text-3xl text-blue-600" />}
                </button>
              </div>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden px-5 pb-4 bg-white border-t border-gray-200 flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 active:text-blue-600"
              >
                Home
              </a>
              <a
                href="#service"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 active:text-blue-600"
              >
                Service
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 active:text-blue-600"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 active:text-blue-600"
              >
                Contact
              </a>

              <div className="flex items-center gap-2 pt-2 text-gray-700">
                <IoCallOutline className="text-lg" />
                08064206918
              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 active:bg-blue-800 transition w-full">
                Get Quote
              </button>
            </div>
          )}
        </nav>

        <div>
          <div id="home" className="bg-blue-100 py-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-4xl lg:text-5xl">
                    Professional HVAC Services in
                    <span className="text-blue-600">Abuja</span>
                  </p>
                  <p className="text-gray-600 mt-5 mb-5 text-xl">
                    Keep your home and business comfortable year-round with our
                    expert heating, ventilation, and air conditioning services.
                    Licensed, insured, and trusted by Abuja residents.
                  </p>
                  <div className=" flex flex-col sm:flex-row gap-4">
                    <button className="bg-white  text-blue-600 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white border border-blue-500 transition transform hover:-translate-y-1 active:-translate-y-1 duration-300">
                      Schedule Service
                    </button>
                    <button className="bg-white  text-blue-600 px-5 py-2 rounded-lg border border-blue-500 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white cursor-pointer transition transform hover:-translate-y-1 active:-translate-y-1 duration-300">
                      Emergency Service
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-10">
                    <div className="flex flex-col text-center">
                      <span className="text-blue-500 text-3xl text-center mx-auto">
                        <LuShield className="cursor-pointer" />
                      </span>
                      <p className="text-gray-600 justify-center items-center text-center">
                        Licensed & Insured
                      </p>
                    </div>
                    <div className="flex flex-col text-center">
                      <span className="text-blue-500 text-3xl text-center mx-auto">
                        <FaRegClock className="cursor-pointer" />
                      </span>
                      <p className="text-gray-600 justify-center items-center text-center">
                        24/7 Emergency
                      </p>
                    </div>
                    <div className="flex flex-col text-center">
                      <span className="text-blue-500 text-3xl text-center mx-auto">
                        <FiTool className="cursor-pointer" />
                      </span>
                      <p className="text-gray-600 justify-center items-center text-center">
                        Expert Technicians
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img className="rounded-lg w-full h-auto" src={man} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="service" className="py-10 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl">Our HVAC Services</h3>
              <p className="text-gray-500 mt-5 text-xl max-w-3xl mx-auto">
                From installation to maintenance, we provide comprehensive HVAC
                solutions for homes and businesses across Abuja.
              </p>
            </div>
            <div className="p-6 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 rounded-2xl shadow border border-gray-300 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="text-3xl text-blue-600">
                      <FaRegSnowflake />
                    </p>
                    <h4 className="text-xl mt-3">Air Conditioning</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Installation, repair, and maintenance of residential and
                      commercial AC systems.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    <ul>
                      <li className="flex items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Central AC Installation
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        AC Troubleshooting
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Preventive Maintenance
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Energy Efficiency Upgrades
                      </li>
                    </ul>
                    <button className="inline-flex w-full justify-center items-center text-center border border-blue-600 rounded-lg text-blue-600 mt-4 p-1 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white transition transform hover:-translate-y-1 active:-translate-y-1 duration-300 cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl shadow border border-gray-300 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="text-3xl text-blue-600">
                      <AiOutlineFire />
                    </p>
                    <h4 className="text-xl mt-3">Heating Services</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Complete heating solutions to keep your space warm and
                      comfortable.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    <ul>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Furnace Installation
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Heat Pump Services
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Boiler Repair
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        System Maintenance
                      </li>
                    </ul>
                    <button className="inline-flex w-full justify-center items-center text-center border border-blue-600 rounded-lg text-blue-600 mt-4 p-1 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white transition transform hover:-translate-y-1 active:-translate-y-1 duration-300 cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl shadow border border-gray-300 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="text-3xl text-blue-600">
                      <GiNinjaStar />
                    </p>
                    <h4 className="text-xl mt-3">Ventilation</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Improve your indoor air quality with proper ventilation
                      have a better systems.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    <ul>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Ductwork Installation
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Air Duct Cleaning
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Ventilation Design
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Indoor Air Quality Testing
                      </li>
                    </ul>
                    <button className="inline-flex w-full justify-center items-center text-center border border-blue-600 rounded-lg text-blue-600 mt-4 p-1 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white transition transform hover:-translate-y-1 active:-translate-y-1 duration-300 cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl shadow border border-gray-300 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="text-3xl text-blue-600">
                      <IoSettingsOutline />
                    </p>
                    <h4 className="text-xl mt-3">System Maintenance</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Regular maintenance to keep your HVAC system help them
                      running efficiently.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    <ul>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Seasonal Tune-ups
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Filter Replacement
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        System Inspection
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        System Inspection
                      </li>
                    </ul>
                    <button className="inline-flex w-full justify-center items-center text-center border border-blue-600 rounded-lg text-blue-600 mt-4 p-1 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white transition transform hover:-translate-y-1 active:-translate-y-1 duration-300 cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl shadow border border-gray-300 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="text-3xl text-blue-600">
                      <SlEnergy />
                    </p>
                    <h4 className="text-xl mt-3">Emergency Repair</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      24/7 emergency HVAC repair services when you need them
                      help them most.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    <ul>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        24/7 Availability
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Rapid Response
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Same-Day Service
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Emergency Diagnostics
                      </li>
                    </ul>
                    <button className="inline-flex w-full justify-center items-center text-center border border-blue-600 rounded-lg text-blue-600 mt-4 p-1 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white transition transform hover:-translate-y-1 active:-translate-y-1 duration-300 cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="p-6 rounded-2xl shadow border border-gray-300 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="text-3xl text-blue-600">
                      <CiCircleChevRight />
                    </p>
                    <h4 className="text-xl mt-3">New Installations</h4>
                    <p className="text-sm text-gray-500 mt-2">
                      Complete HVAC system design and installation for new help
                      them construction.
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    <ul>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        System Design
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Equipment Selection
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Professional Installation
                      </li>
                      <li className="flex text-center items-center gap-2">
                        <span className="text-green-800">
                          <CiCircleChevRight />
                        </span>
                        Warranty Support
                      </li>
                    </ul>
                    <button className="inline-flex w-full justify-center items-center text-center border border-blue-600 rounded-lg text-blue-600 mt-4 p-1 hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white transition transform hover:-translate-y-1 active:-translate-y-1 duration-300 cursor-pointer">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 items-center bg-gray-50">
              <div>
                <h2 className="text-3xl lg:text-4xl">About AMSUNO HVAC</h2>
                <p className="text-lg text-gray-600 mt-5">
                  For over 15 years, AMSUNO HVAC has been Abuja's trusted
                  partner for all heating, ventilation, and air conditioning
                  needs. We pride ourselves on delivering exceptional service,
                  quality workmanship, and reliable solutions that keep our
                  customers comfortable year-round.
                </p>
                <p className="text-lg text-gray-600 mt-5">
                  Our team of licensed and certified technicians brings
                  extensive experience and expertise to every project. Whether
                  you need emergency repairs, routine maintenance, or a complete
                  system installation, we're committed to exceeding your
                  expectations.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-5">
                  <div className="border border-gray-300 justify-center items-center text-center rounded-lg p-3">
                    <div className="flex justify-center items-center text-center text-3xl text-blue-600">
                      <MdOutlinePersonOutline />
                    </div>
                    <p className="text-xl">500+</p>
                    <p className="text-xs">Happy Customers</p>
                  </div>
                  <div className="border border-gray-300 justify-center items-center text-center rounded-lg p-3">
                    <div className="flex justify-center items-center text-center text-3xl text-blue-600">
                      <PiMedalLight />
                    </div>
                    <p className="text-xl">15+</p>
                    <p className="text-xs">Years Experience</p>
                  </div>
                  <div className="border border-gray-300 justify-center items-center text-center rounded-lg p-3">
                    <div className="flex justify-center items-center text-center text-3xl text-blue-600">
                      <IoLocationOutline />
                    </div>
                    <p className="text-xl">50+</p>
                    <p className="text-xs">Areas Served</p>
                  </div>
                  <div className="border border-gray-300 justify-center items-center text-center rounded-lg p-3">
                    <div className="flex justify-center items-center text-center text-3xl text-blue-600">
                      <FaRegClock />
                    </div>
                    <p className="text-xl">24/7</p>
                    <p className="text-xs">Emergency Service</p>
                  </div>
                </div>
              </div>
              <div>
                <img className="rounded-md w-full h-auto" src={two} />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl">What Our Customers Say</h3>
              <p className="mt-5 text-xl text-gray-500">
                Don't just take our word for it. Here what's our satisfied
                customers among Abuja have to say about our HVAC services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-15">
              <div className="border border-gray-300 p-4 rounded-md">
                <div>
                  <p className="flex">
                    <SiComma className="text-blue-600 text-lg" />
                    <span className="flex text-yellow-300 text-lg">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                    </span>
                  </p>
                </div>
                <p className="text-gray-500 mt-3">
                  "AMSUNO HVAC installed our new central air system last month.
                  The team was professional, punctual, and the installation was
                  flawless. Our more comfortable!"
                </p>
                <hr className="flex justify-center text-gray-300 mt-3" />
                <div>
                  <p className="mt-3">Adebayo Johnson</p>
                  <p className="text-gray-500 text-sm mt-1">Maitama, Abuja</p>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-md">
                <div>
                  <p className="flex">
                    <SiComma className="text-blue-600 text-lg" />
                    <span className="flex text-yellow-300 text-lg">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mt-3">
                    "When our AC broke down during the peak of dry season,
                    AMSUNO HVAC came to our rescue within hours. Excellent
                    emergency service and very reasonable pricing."
                  </p>
                </div>
                <hr className="flex justify-center text-gray-300 mt-3" />
                <div>
                  <p className="mt-3">Fatima Hassan</p>
                  <p className="text-gray-500 text-sm mt-1">Wuse II, Abuja</p>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-md">
                <div>
                  <p className="flex">
                    <SiComma className="text-blue-600 text-lg" />
                    <span className="flex text-yellow-300 text-lg">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mt-3">
                    "I've been using AMSUNO HVAC for maintenance on our office
                    building for 3 years. They're reliable, knowledgeable, and
                    always deliver quality service. Highly recommended!"
                  </p>
                </div>
                <hr className="flex justify-center text-gray-300 mt-3" />
                <div>
                  <p className="mt-3">Michael Okafor</p>
                  <p className="text-gray-500 text-sm mt-1">Garki, Abuja</p>
                </div>
              </div>
              <div className="border border-gray-300 p-4 rounded-md">
                <div>
                  <p className="flex">
                    <SiComma className="text-blue-600 text-lg" />
                    <span className="flex text-yellow-300 text-lg">
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                      <MdOutlineStar />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mt-3">
                    "The technicians were courteous and explained everything
                    they were doing. The repair was completed quickly and our
                    system is running better. Great customer service!"
                  </p>
                </div>
                <hr className="flex justify-center text-gray-300 mt-3" />
                <div>
                  <p className="mt-3">Sarah Ibrahim</p>
                  <p className="text-gray-500 text-sm mt-1">Asokoro, Abuja</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="bg-gray-50 py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl mt-5">Get In Touch</h3>
              <p className="text-gray-400 mt-5">
                Ready to improve your comfort? Contact us today for a free
                consultation and quote.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-4">
              <div className="space-y-6">
                <div className="flex flex-col border border-gray-300 bg-white rounded-2xl p-3 m-4 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="flex items-center gap-3">
                      <span className="text-blue-500">
                        <IoCallOutline />
                      </span>
                      Phone
                    </p>
                  </div>
                  <div className="text-gray-500 mt-4">
                    <p>08064206913</p>
                    <p className="text-sm">24/7 Emergency Line</p>
                  </div>
                </div>
                <div className="flex flex-col border border-gray-300 bg-white rounded-2xl p-3 m-4 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="flex items-center gap-3">
                      <span className="text-blue-500">
                        <MdOutlineMail />
                      </span>
                      Email
                    </p>
                  </div>
                  <div className="text-gray-500 mt-4">
                    <p>info@amsunohvac.com</p>
                    <p className="text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex flex-col border border-gray-300 bg-white rounded-2xl p-3 m-4 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="flex items-center gap-3">
                      <span className="text-blue-500">
                        <IoLocationOutline />
                      </span>
                      Service Area
                    </p>
                  </div>
                  <div className="text-gray-500 mt-4">
                    <p>107 Gbagalape, Abuja 900103</p>
                    <p className="text-sm">Federal Capital Territory</p>
                  </div>
                </div>
                <div className="flex flex-col border border-gray-300 bg-white rounded-2xl p-3 m-4 transition-all duration-300 hover:scale-105 active:scale-105 cursor-pointer">
                  <div>
                    <p className="flex items-center gap-3">
                      <span className="text-blue-500">
                        <FaRegClock />
                      </span>
                      Business Hours
                    </p>
                  </div>
                  <div className="text-gray-500 mt-4">
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 border border-gray-300 rounded-md p-5">
                <div>
                  <h4>Request a quote</h4>
                  <p className="text-sm text-gray-400">
                    Fill out the form below and we'll get back to you with a
                    personalized quote.
                  </p>
                </div>
                <div>
                  <div className="mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="First Name">First Name</label>
                        <input
                          className="bg-gray-100 rounded-md p-1"
                          type="text"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="Last Name">Last Name</label>
                        <input
                          className="bg-gray-100 rounded-md p-1"
                          type="text"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="flex flex-col">
                        <label htmlFor="Email">Email</label>
                        <input
                          className="bg-gray-100 rounded-md p-1"
                          type="text"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="Phone">Phone</label>
                        <input
                          className="bg-gray-100 rounded-md p-1"
                          type="text"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-4">
                      <label htmlFor="Service Needed">Service Needed</label>
                      <select
                        id="Service Needed"
                        className="bg-gray-100 rounded-md mt-4 p-1"
                      >
                        <option value="New Installation">
                          New Installation
                        </option>
                        <option value="Repair Service">Repair Service</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Emergency Service">
                          Emergency Service
                        </option>
                        <option value="Consultation">Consultation</option>
                      </select>
                    </div>
                    <div className="flex flex-col mt-4">
                      <label htmlFor="Message">Message</label>
                      <textarea
                        className="bg-gray-100 rounded-md p-1"
                        name="message"
                        rows={"6"}
                        cols={"60"}
                        placeholder="Describe your HVAC needs or any specific requirement"
                      ></textarea>
                    </div>
                    <div className="mt-4 bg-blue-500 flex justify-center rounded-md text-white p-1 hover:bg-blue-900 active:bg-blue-900 transition transform hover:-translate-y-1 active:-translate-y-1 duration-300 cursor-pointer">
                      <button>Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-950 p-2 mt-5 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <a href="#home">
                  <h3 className="text-lg cursor-pointer">
                    AMSUNO <span className="text-blue-500">HVAC</span>
                  </h3>
                </a>
                <div className="mt-4">
                  <p>
                    Your trusted HVAC partner in Abuja. We provide professional
                    heating, ventilation, and air conditioning services with a
                    commitment to excellence and customer satisfaction.
                  </p>
                </div>
                <div className="mt-4">
                  <a href="https://wa.me/918064206913" target="_blank">
                    <p className="flex gap-4 items-center hover:text-blue-600 active:text-blue-600">
                      <span>
                        <IoCallOutline className="cursor-pointer" />
                      </span>
                      08064206913
                    </p>
                  </a>
                  <a href="https://mail.google.com" target="_blank">
                    <p className="flex gap-4 items-center mt-1 hover:text-blue-600 active:text-blue-600">
                      <span>
                        <MdOutlineMail className="cursor-pointer" />
                      </span>
                      info@amsunohvac.com
                    </p>
                  </a>
                  <p className="flex gap-4 items-center mt-1">
                    <span>
                      <IoLocationOutline className="cursor-pointer" />
                    </span>
                    107 Gbagalape, Abuja 900103, FCT
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg">Services</h3>
                <ul className="mt-4 cursor-pointer">
                  <li className="hover:text-blue-500 active:text-blue-500 text-xm ">
                    Air Conditioning
                  </li>
                  <li className="hover:text-blue-500 active:text-blue-500 mt-1 text-xm">
                    Heating Services
                  </li>
                  <li className="hover:text-blue-500 active:text-blue-500 mt-1 text-xm">
                    Ventilation
                  </li>
                  <li className="hover:text-blue-500 active:text-blue-500 mt-1 text-xm">
                    Maintenance
                  </li>
                  <li className="hover:text-blue-500 active:text-blue-500 mt-1 text-xm">
                    Emergency Repair
                  </li>
                  <li className="hover:text-blue-500 active:text-blue-500 mt-2 text-xm">
                    Installation
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg">Quick Links</h3>
                <ul className="mt-4 cursor-pointer">
                  <li className="hover:text-blue-500 active:text-blue-500 text-xm">
                    <a href="#home">Home</a>
                  </li>
                  <li className="hover:text-blue-500 active:text-blue-500 mt-1 text-xm">
                    <a href="#service">Service</a>
                  </li>
                  <li className="hover:text-blue-500 active:text-blue-500 mt-1 text-xm">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="hover:text-blue-500 active:text-blue-500 mt-1 text-xm">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
                <p className="mt-4">Follow Us</p>
                <div className="flex gap-4 mt-2 cursor-pointer">
                  <a href="https://facebook.com" target="_blank">
                    <SlSocialFacebook className="hover:text-blue-500 active:text-blue-500" />
                  </a>
                  <a href="https://instagram.com" target="_blank">
                    <FaInstagram className="hover:text-blue-500 active:text-blue-500" />
                  </a>
                  <a href="https://linkedin.com" target="_blank">
                    <LuLinkedin className="hover:text-blue-500 active:text-blue-500" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <hr className="border-gray-600" />
              <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>@ 2024 AMSUNO HVAC. All rights reserved.</p>
                <div className="flex gap-6 mt-2 md:mt-0">
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                  <p>License Info</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Figma1;
