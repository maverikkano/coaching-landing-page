import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black/75 backdrop-blur-md border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-bold text-white">€uroCareers</div>

          {/* Navigation Links */}
          <nav className="hidden sm:flex space-x-6 text-sm text-white">
            <a href="#hero-content" className="hover:text-purple-400">Webinar</a>
            <a href="#1on1-coaching-section" className="hover:text-purple-400">1-on-1 Sessions</a>
          </nav>

          {/* Action Button */}
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Join Free</Button>
        </div>
      </header>
      <div className="min-h-screen text-white flex flex-col items-center justify-center ">

        <div className="relative flex flex-col items-center text-center px-4 w-full h-screen overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
            <source src="/Amsterdam-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="absolute inset-0 bg-black/70 z-10"></div> */}
          <div className="relative z-10 flex flex-col items-center bg-black/75 mt-20 p-8 rounded-lg max-w-3xl w-full" id="hero-content">
            <h1 className="text-4xl md:text-8xl font-extrabold mb-6">
              <br className="md:hidden" /> Welcome to <br className="md:invisible" /><span className="text-amber-500">Road to €uro Careers</span>
            </h1>
            <p className="text-white text-xl mb-10">
              10 JULY 2025 <span className="font-semibold">ONLINE</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Input type="email" placeholder="Enter email to register free" className="w-72" />
              <Button className="bg-purple-600 hover:bg-purple-700">Register</Button>
            </div>
          </div>
        </div>

        <div id="1on1-coaching-section" className="w-full bg-gray-800 py-16 px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">1-on-1 Career Coaching</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-300">
            Personalized guidance from experts who’ve been where you are. Get resume help, job hunting strategy, and mock interviews tailored to your goals.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">Book a Free Session</Button>
        </div>

        <div id="testimonials" className="w-full bg-blue-900 py-16 px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">What Our Clients Say</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600 text-white rounded-xl border border-gray-700 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg" alt="Aisha" className="w-24 h-24 rounded-full mb-4 object-cover" />
                <p className="text-gray-300 mb-4 text-sm">"Thanks to their coaching, I landed a job in Germany within 3 months! The mock interviews and CV feedback were spot on."</p>
                <span className="font-semibold text-purple-400 text-sm">— Jane, Software Engineer</span>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600 text-white rounded-xl border border-gray-700 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg" alt="Raj" className="w-24 h-24 rounded-full mb-4 object-cover" />
                <p className="text-gray-300 mb-4 text-sm">"Truly personalized advice. I felt confident applying to jobs across Europe after our sessions."</p>
                <span className="font-semibold text-purple-400 text-sm">— John, Marketing Analyst</span>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600 text-white rounded-xl border border-gray-700 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img src="https://images.pexels.com/photos/3778602/pexels-photo-3778602.jpeg" alt="Elena" className="w-24 h-24 rounded-full mb-4 object-cover" />
                <p className="text-gray-300 mb-4 text-sm">"The team understands what employers look for. Their tips made my application stand out."</p>
                <span className="font-semibold text-purple-400 text-sm">— Harry, UX Designer</span>
              </CardContent>
            </Card>
          </div>
        </div>

        <footer className="w-full mt-auto text-xs text-gray-500 px-4 py-6 flex justify-between">
          <span>Copyright © 2025 Vercel Inc. All rights reserved.</span>
          <div className="space-x-4">
            <a href="#">Source Code</a>
            <a href="#">Code of Conduct</a>
            <a href="#">Legal</a>
          </div>
        </footer>
      </div >
    </>
  );
}