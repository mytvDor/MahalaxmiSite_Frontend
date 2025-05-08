import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  DollarSign,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  NotebookIcon as Lotus,
  Flame,
  Star,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Sun, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";
const templeImages = [
  "https://th.bing.com/th/id/OIP.UaXUXxX7dFV8cc5o2w9GsQHaJQ?w=208&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Replace with actual temple images
  "https://wallpaperaccess.com/full/9259061.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % templeImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % templeImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + templeImages.length) % templeImages.length
    );
  };

  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}

      <main>
        <section className="relative overflow-hidden">
          {/* Background with carousel */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-amber-800/70 to-amber-900/90 mix-blend-multiply z-10"></div>

            {/* Carousel images */}
            <div className="relative h-full w-full">
              {templeImages.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Temple view ${idx + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}

              {/* Carousel controls */}
              <div className="absolute inset-x-0 top-1/2 z-20 flex justify-between items-center px-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-amber-600/30 backdrop-blur-sm text-white hover:bg-amber-600/50 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-amber-600/30 backdrop-blur-sm text-white hover:bg-amber-600/50 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Carousel indicators */}
              <div className="absolute bottom-8 inset-x-0 flex justify-center gap-2 z-20">
                {templeImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImage
                        ? "bg-amber-400 w-6"
                        : "bg-amber-400/40 hover:bg-amber-400/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1)_0%,transparent_60%)] animate-pulse-slow"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -inset-0 opacity-30">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4 py-24 text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-600/20 animate-pulse">
                  <div className="h-full w-full rounded-full bg-amber-50/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">ॐ</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tighter mt-6 sm:text-6xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100">
                {/* श्री मंदिर */}Mahalaxmi
              </h1>

              <h2 className="text-2xl font-semibold text-amber-200">
                Shree Mandir
              </h2>

              <p className="mx-auto max-w-2xl text-lg text-amber-100 md:text-xl leading-relaxed">
                <span className="font-semibold text-amber-200">
                  सत्यं शिवं सुंदरम्
                </span>{" "}
                - A sacred space for worship, spiritual growth, and divine
                connection with our ancient traditions
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                <Button
                  onClick={() => navigate("/booking")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 rounded-full px-8 py-6 shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 transition-all duration-300"
                >
                  <Sun className="mr-2 h-5 w-5" />
                  Visit Bookings
                </Button>
              </div>

              <div className="pt-12 flex justify-center">
                <Link href="#about">
                  <div className="rounded-full p-3 bg-amber-500/20 backdrop-blur-sm animate-bounce">
                    <svg
                      className="w-6 h-6 text-amber-100"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-950 to-transparent"></div>
        </section>

        {/* Welcome Message with Animated Background */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100/50"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl animate-blob animation-delay-3000"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-gradient-to-r from-amber-200 to-amber-300 px-3 py-1 text-sm font-medium text-amber-900 shadow-md">
                  Welcome
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  A Sacred Space for Divine Connection
                </h2>
                <p className="text-amber-800 md:text-lg leading-relaxed">
                  The Mahalaxmi Temple of Kolhapur is a revered center of
                  devotion, rich in spiritual tradition, cultural significance,
                  and community faith. For centuries, it has drawn countless
                  devotees seeking the blessings of Goddess Mahalaxmi.
                </p>
                <p className="text-amber-800 md:text-lg leading-relaxed">
                  The temple is constructed following ancient{" "}
                  <span className="font-semibold">वास्तु शास्त्र</span> (Vastu
                  Shastra) principles, fostering a spiritually uplifting and
                  harmonious atmosphere that deepens the connection between
                  devotees and the divine.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-amber-200 transition-transform hover:scale-105">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mb-3">
                      <Lotus className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-amber-900">Guidance</h3>
                    <p className="text-sm text-amber-700 mt-1">
                      Expert priests providing authentic rituals and guidance
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-amber-200 transition-transform hover:scale-105">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mb-3">
                      {/* <Heart className="h-5 w-5 text-white" /> */}
                      <Lotus className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-amber-900">
                      Abhisheck Booking Service
                    </h3>
                    <p className="text-sm text-amber-700 mt-1">
                      Abhisheck Booking Service{" "}
                    </p>
                  </div>
                </div>

                <div className="flex pt-4">
                  {/* <Link href="/booking"> */}
                  <Button
                    onClick={() => navigate("/booking")}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Go to Abhishek Booking
                  </Button>
                  {/* </Link> */}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur opacity-30 animate-pulse-slow"></div>
                <div className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="https://th.bing.com/th/id/OIP.cu-KNxFIw5oqM9QvzZF05AAAAA?rs=1&pid=ImgDetMain"
                    alt="Temple Interior"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center p-2 border border-amber-200">
                  <div className="text-center">
                    <p className="text-xs text-amber-800">Established</p>
                    <p className="text-xl font-bold text-amber-900">1985</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Deities Section with Animated Cards */}
        <section id="deities" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-amber-100/80 to-amber-50/80 backdrop-blur-[2px]"></div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl mx-auto">
                <div className="inline-block rounded-lg bg-gradient-to-r from-amber-200 to-amber-300 px-3 py-1 text-sm font-medium text-amber-900 shadow-md">
                  Our Deities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  Divine Presence
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-lg">
                  Our temple houses several deities, each with their own
                  significance and dedicated space for worship.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "मराठी (Marathi)",
                  description:
                    "महालक्ष्मी देवी ही कोल्हापूरची अधिष्ठात्री देवी आहे. ती श्री विष्णूची अर्धांगिनी असून ऐश्वर्य, समृद्धी आणि सौभाग्याची देवता म्हणून पूजली जाते. कोल्हापुरातील मंदिर हे अठरापैकी एक शक्तिपीठ मानले जाते.",
                },
                {
                  title: "हिन्दी (Hindi)",
                  description:
                    "महालक्ष्मी देवी कोल्हापुर की अधिष्ठात्री देवी हैं। वे भगवान विष्णु की पत्नी हैं और धन, समृद्धि तथा सौभाग्य की देवी मानी जाती हैं। कोल्हापुर का मंदिर भारत के प्रमुख शक्तिपीठों में से एक है।",
                },
                {
                  title: "ಕನ್ನಡ (Kannada)",
                  description:
                    "ಮಹಾಲಕ್ಷ್ಮಿ ದೇವಿ ಕೊಲ್ಹಾಪುರದ ಅಧಿಷ್ಠಾತ್ರೀ ದೇವಿ ಆಗಿದ್ದಾರೆ. ಅವರು ವಿಷ್ಣುವಿನ ಪತ್ನಿಯಾಗ 있으며, ಐಶ್ವರ್ಯ, ಸಮೃದ್ಧಿ ಮತ್ತು ಶುಭದೇವತೆಯಾಗಿ ಪೂಜಿಸಲ್ಪಡುತ್ತಾರೆ. ಕೊಲ್ಹಾಪುರದ ದೇವಸ್ಥಾನವು ಪ್ರಮುಖ ಶಕ್ತಿಪೀಠಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
                },
                // {
                //   title: "தமிழ் (Tamil)",
                //   description:
                //     "மகாலட்சுமி தேவி கொல்ஹாபூரின் அதிஷ்டாத்ரி தேவியாகத் திகழ்கிறார். அவள் திருமால் என்பவரின் மனைவியாகவும், செல்வம், வளம் மற்றும் удаவுகூர்ந்த வாழ்வின் கடவுளியாகவும் போற்றப்படுகிறார். கொல்ஹாபூர் கோயில் முக்கிய சக்திபீடமாகக் கருதப்படுகிறது.",
                // },
                {
                  title: "English",
                  description:
                    "Goddess Mahalaxmi is the presiding deity of Kolhapur. She is the consort of Lord Vishnu and is revered as the goddess of wealth, prosperity, and good fortune. The Kolhapur temple is considered one of the eighteen Maha Shakti Peethas in India.",
                },
              ].map((deity, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-amber-200 bg-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-700 group-hover:w-full"></div>
                  <div className="absolute top-0 right-0 h-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 transition-all duration-700 group-hover:h-full delay-100"></div>
                  <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-amber-400 to-amber-600 transition-all duration-700 group-hover:w-full delay-200"></div>
                  <div className="absolute bottom-0 left-0 h-0 w-1 bg-gradient-to-t from-amber-400 to-amber-600 transition-all duration-700 group-hover:h-full delay-300"></div>

                  {/* <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={`/placeholder.svg?height=64&width=64&text=${i + 1}`}
                      alt={`Deity ${i + 1}`}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div> */}
                  <h3 className="mb-2 text-xl font-bold text-amber-900">
                    {deity.title}
                  </h3>
                  <p className="mb-3 text-amber-700">{deity.description}</p>
                  {/* <p className="text-sm font-medium text-amber-600 bg-amber-50 inline-block px-3 py-1 rounded-full">
                    {deity.day}
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Schedule with Animated Timeline */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-200/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-300/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl mx-auto">
                <div className="inline-block rounded-lg bg-gradient-to-r from-amber-200 to-amber-300 px-3 py-1 text-sm font-medium text-amber-900 shadow-md">
                  Temple Timings
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  Daily Schedule
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-lg">
                  Our temple follows a traditional schedule of rituals and
                  ceremonies throughout the day.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* Morning Rituals */}
              <div className="rounded-xl border border-amber-200 bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md">
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    Morning Rituals
                  </h3>
                </div>

                <div className="relative border-l-2 border-amber-300 pl-8 ml-6 space-y-8">
                  {[
                    {
                      time: "4:45 AM",
                      ritual: "मंदिर उघडते",
                      description: "सकाळी मंदिर दर्शनासाठी खुले होते.",
                    },
                    {
                      time: "6:10 AM",
                      ritual: "काकड आरती",
                      description: "महालक्ष्मी देवीची पहिली आरती.",
                    },
                    {
                      time: "6:30 AM",
                      ritual: "कापूर आरती",
                      description: "काकड आरतीनंतर कपूर आरती केली जाते.",
                    },
                    {
                      time: "8:30 AM",
                      ritual: "देवी स्नान",
                      description: "देवीला पवित्र जलाने स्नान घालणे.",
                    },
                    {
                      time: "9:30 AM",
                      ritual: "सकाळची आरती",
                      description: "दिवसाच्या आरंभासाठी विशेष पूजा.",
                    },
                    {
                      time: "11:30 AM",
                      ritual: "दुहेरी स्नान",
                      description: "देवीला दुसऱ्यांदा स्नान घालणे.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md"></div>
                      <div className="group bg-amber-50 rounded-lg p-4 border border-amber-200 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4 text-amber-600" />
                          <p className="font-medium text-amber-900">
                            {item.time}
                          </p>
                        </div>
                        <p className="text-lg font-semibold text-amber-800">
                          {item.ritual}
                        </p>
                        <p className="text-amber-700 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evening Rituals */}
              <div className="rounded-xl border border-amber-200 bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md">
                    <Moon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">
                    Evening Rituals
                  </h3>
                </div>

                <div className="relative border-l-2 border-amber-300 pl-8 ml-6 space-y-8">
                  {[
                    {
                      time: "12:30 PM",
                      ritual: "दुपारी आरती",
                      description: "महालक्ष्मी देवीची मध्यान्ह आरती.",
                    },
                    {
                      time: "नित्य",
                      ritual: "अलंकार पूजा",
                      description:
                        "दररोज देवीला दागिने आणि वस्त्राने सजवले जाते.",
                    },
                    {
                      time: "8:30 PM",
                      ritual: "रात्रीची आरती",
                      description: "दिवसाचा शेवट देवीच्या आरतीने.",
                    },
                    {
                      time: "10:10 PM",
                      ritual: "शेज आरती",
                      description: "देवीच्या विश्रांतीपूर्वीची अंतिम आरती.",
                    },
                    {
                      time: "Friday 9:30 PM",
                      ritual: "पालखी सेवा",
                      description: "प्रत्येक शुक्रवारी देवीची पालखी यात्रा.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md"></div>
                      <div className="group bg-amber-50 rounded-lg p-4 border border-amber-200 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-4 w-4 text-amber-600" />
                          <p className="font-medium text-amber-900">
                            {item.time}
                          </p>
                        </div>
                        <p className="text-lg font-semibold text-amber-800">
                          {item.ritual}
                        </p>
                        <p className="text-amber-700 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events with Animated Cards */}
        {/* Events Section */}
        {/* <section id="events" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-50"></div>

          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl mx-auto">
                <div className="inline-block rounded-lg bg-gradient-to-r from-amber-200 to-amber-300 px-3 py-1 text-sm font-medium text-amber-900 shadow-md">
                  Calendar
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  Upcoming Events
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-lg">
                  Join us for these special celebrations, festivals, and
                  community events.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "नवरात्रि उत्सव (Navratri Celebration)",
                  date: "October 15-24, 2023",
                  description:
                    "Nine nights of devotion to the divine feminine with special pujas, garba, and cultural programs.",
                },
                {
                  title: "दीपावली (Diwali Festival)",
                  date: "November 12, 2023",
                  description:
                    "Celebration of the festival of lights with special prayers, lamps, and community feast.",
                },
                {
                  title: "योग कार्यशाला (Yoga Workshop)",
                  date: "Every Sunday, 8:00 AM",
                  description:
                    "Weekly yoga sessions for physical, mental, and spiritual well-being.",
                },
                {
                  title: "भगवद्गीता अध्ययन (Bhagavad Gita Study)",
                  date: "Thursdays, 7:00 PM",
                  description:
                    "Weekly study and discussion of the Bhagavad Gita's teachings and philosophy for daily life application.",
                },
                {
                  title: "सांस्कृतिक कार्यक्रम (Cultural Program)",
                  date: "December 3, 2023",
                  description:
                    "Showcasing traditional dance, music, and art forms from India.",
                },
                {
                  title: "सेवा दिवस (Community Service Day)",
                  date: "Last Saturday of Month",
                  description:
                    "Join us in serving the community through various outreach programs.",
                },
              ].map((event, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-amber-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-100 to-transparent rounded-bl-full"></div>

                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md group-hover:shadow-lg transition-all duration-300">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>

                  <div className="bg-amber-50 text-amber-600 text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-2">
                    {event.date}
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-amber-900">
                    {event.title}
                  </h3>
                  <p className="text-amber-700">{event.description}</p>

                  <div className="mt-4 pt-4 border-t border-amber-100">
                    <Link
                      href="#"
                      className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      <span className="mr-1">View Details</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                View Full Calendar
              </Button>
            </div>
          </div>
        </section> */}

        {/* Services Section with Animated Icons */}
        {/* <section id="services" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100"></div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl mx-auto">
                <div className="inline-block rounded-lg bg-gradient-to-r from-amber-200 to-amber-300 px-3 py-1 text-sm font-medium text-amber-900 shadow-md">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  Temple Services
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-lg">
                  Our temple offers various religious services for devotees and
                  the community.
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "पूजा सेवाएं (Puja Services)",
                  description:
                    "Arrange special pujas for birthdays, anniversaries, and other important occasions.",
                  icon: "🪔",
                },
                {
                  title: "विवाह संस्कार (Wedding Ceremonies)",
                  description:
                    "Traditional Hindu wedding ceremonies performed by our experienced priests.",
                  icon: "💍",
                },
                {
                  title: "हवन और यज्ञ (Havan & Yagya)",
                  description:
                    "Sacred fire ceremonies for purification and spiritual growth.",
                  icon: "🔥",
                },
                {
                  title: "संस्कार समारोह (Sanskar Ceremonies)",
                  description:
                    "Traditional rites of passage including naming ceremonies, thread ceremonies, etc.",
                  icon: "👶",
                },
                {
                  title: "आध्यात्मिक परामर्श (Spiritual Counseling)",
                  description:
                    "Guidance on spiritual matters from our knowledgeable priests.",
                  icon: "🧘",
                },
                {
                  title:
                    "भाषा और संस्कृति कक्षाएं (Language & Cultural Classes)",
                  description:
                    "Learn Sanskrit, Hindi, classical dance, and music at our cultural center.",
                  icon: "🎭",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-amber-200 bg-white/80 backdrop-blur-sm p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute -right-4 -bottom-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {service.icon}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-amber-900">
                    {service.title}
                  </h3>
                  <p className="text-amber-700 mb-4">{service.description}</p>

                  <Link
                    href="#"
                    className="inline-flex items-center text-amber-600 hover:text-amber-800 transition-colors group-hover:underline"
                  >
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl overflow-hidden shadow-xl mx-auto max-w-5xl">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    अभिषेक बुकिंग (Abhishek Booking)
                  </h3>
                  <p className="mb-6 text-amber-100">
                    Book a special abhishek ceremony to offer your devotion and
                    receive divine blessings. Our priests perform the ritual
                    with authentic Vedic mantras.
                  </p>
                  <Link to="/booking">
                    <Button className="bg-white text-amber-600 hover:bg-amber-100 rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <Flame className="mr-2 h-4 w-4" />
                      Book Abhishek Now
                    </Button>
                  </Link>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://th.bing.com/th/id/OIP.cu-KNxFIw5oqM9QvzZF05AAAAA?rs=1&pid=ImgDetMain"
                    alt="Abhishek Ceremony"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-600/50"></div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Gallery Section with Animated Grid */}
        <section id="gallery" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-50"></div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl mx-auto">
                <div className="inline-block rounded-lg bg-gradient-to-r from-amber-200 to-amber-300 px-3 py-1 text-sm font-medium text-amber-900 shadow-md">
                  Gallery
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  Temple Gallery
                </h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-lg">
                  Glimpses of our beautiful temple, festivals, and community
                  events.
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-6xl mx-auto">
              <div className="grid gap-4">
                <div className="group relative overflow-hidden rounded-xl shadow-md h-40 md:h-80 transition-transform hover:scale-[1.02]">
                  <img
                    src="/placeholder.svg?height=320&width=240&text=Temple+Exterior"
                    alt="Temple Exterior"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">
                      Temple Exterior
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl shadow-md h-40 md:h-40 transition-transform hover:scale-[1.02]">
                  <img
                    src="/placeholder.svg?height=160&width=240&text=Diwali+Celebration"
                    alt="Diwali Celebration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">
                      Diwali Celebration
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="group relative overflow-hidden rounded-xl shadow-md h-40 md:h-40 transition-transform hover:scale-[1.02]">
                  <img
                    src="/placeholder.svg?height=160&width=240&text=Ganesh+Idol"
                    alt="Ganesh Idol"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">Ganesh Idol</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl shadow-md h-40 md:h-80 transition-transform hover:scale-[1.02]">
                  <img
                    src="/placeholder.svg?height=320&width=240&text=Holi+Festival"
                    alt="Holi Festival"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">Holi Festival</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="group relative overflow-hidden rounded-xl shadow-md h-40 md:h-80 transition-transform hover:scale-[1.02]">
                  <img
                    src="/placeholder.svg?height=320&width=240&text=Aarti+Ceremony"
                    alt="Aarti Ceremony"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">Aarti Ceremony</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl shadow-md h-40 md:h-40 transition-transform hover:scale-[1.02]">
                  <img
                    src="/placeholder.svg?height=160&width=240&text=Cultural+Dance"
                    alt="Cultural Dance"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">Cultural Dance</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="group relative overflow-hidden rounded-xl shadow-md h-40 md:h-40 transition-transform hover:scale-[1.02]">
                  <img
                    src="/placeholder.svg?height=160&width=240&text=Temple+Interior"
                    alt="Temple Interior"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">
                      Temple Interior
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl shadow-md h-40 md:h-80 transition-transform hover:scale-[1.02]">
                  <img
                    src="/placeholder.svg?height=320&width=240&text=Navratri+Celebration"
                    alt="Navratri Celebration"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">
                      Navratri Celebration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-12 flex justify-center">
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                View Full Gallery
              </Button>
            </div> */}
          </div>
        </section>

        {/* Donation Section with Animated Form */}
        {/* <section id="donate" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-amber-100"></div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl animate-blob animation-delay-5000"></div>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-gradient-to-r from-amber-200 to-amber-300 px-3 py-1 text-sm font-medium text-amber-900 shadow-md">
                  Support Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  Contribute to Our Temple
                </h2>
                <p className="text-amber-800 md:text-lg">
                  Your generous donations help us maintain the temple, conduct
                  religious ceremonies, and organize community events. All
                  donations are tax-deductible.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-amber-900">
                    Ways to Donate
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-amber-200 transition-transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600">
                          <DollarSign className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-amber-900">
                          One-time Donation
                        </h4>
                      </div>
                      <p className="text-sm text-amber-700">
                        Support our temple with a single contribution of any
                        amount
                      </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-amber-200 transition-transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600">
                          <Heart className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-amber-900">
                          Monthly Sponsorship
                        </h4>
                      </div>
                      <p className="text-sm text-amber-700">
                        Become a regular supporter with monthly contributions
                      </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-amber-200 transition-transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600">
                          <Calendar className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-amber-900">
                          Festival Sponsorship
                        </h4>
                      </div>
                      <p className="text-sm text-amber-700">
                        Sponsor specific festivals and religious ceremonies
                      </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-amber-200 transition-transform hover:scale-105">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-semibold text-amber-900">
                          Legacy Giving
                        </h4>
                      </div>
                      <p className="text-sm text-amber-700">
                        Include our temple in your estate planning
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    Donate Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-amber-500 text-amber-700 hover:bg-amber-100 rounded-full px-6 transition-all duration-300"
                  >
                    Become a Monthly Donor
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur opacity-30 animate-pulse-slow"></div>
                <div className="relative rounded-xl border border-amber-200 bg-white/90 backdrop-blur-sm p-6 shadow-xl">
                  <h3 className="mb-6 text-xl font-bold text-center text-amber-900">
                    Make a Donation
                  </h3>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium text-amber-900"
                        >
                          First Name
                        </label>
                        <input
                          id="first-name"
                          className="w-full rounded-md border border-amber-200 bg-white/80 px-3 py-2 text-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium text-amber-900"
                        >
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          className="w-full rounded-md border border-amber-200 bg-white/80 px-3 py-2 text-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-amber-900"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-amber-200 bg-white/80 px-3 py-2 text-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="amount"
                        className="text-sm font-medium text-amber-900"
                      >
                        Donation Amount
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-800">
                          $
                        </span>
                        <input
                          id="amount"
                          type="number"
                          className="w-full rounded-md border border-amber-200 bg-white/80 pl-8 pr-3 py-2 text-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="purpose"
                        className="text-sm font-medium text-amber-900"
                      >
                        Purpose of Donation
                      </label>
                      <select
                        id="purpose"
                        className="w-full rounded-md border border-amber-200 bg-white/80 px-3 py-2 text-sm focus:border-amber-500 focus:ring focus:ring-amber-500/20 transition-all"
                      >
                        <option value="general">General Temple Fund</option>
                        <option value="festival">Festival Celebration</option>
                        <option value="construction">
                          Temple Construction
                        </option>
                        <option value="community">Community Services</option>
                      </select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-md py-2.5 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Complete Donation
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
