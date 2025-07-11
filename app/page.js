import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 flex flex-col items-center justify-center ">
      <div className="relative flex flex-col items-center text-center w-full h-screen">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 overflow-hidden">
          <source src="/Amsterdam-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <header className="w-full py-6 px-8 flex justify-between items-center border-b backdrop-blur-xs bg-blue-50/70 sticky top-0 z-20 border-blue-200">
          <div className="text-xl font-bold text-blue-900">€uro Careers</div>
          <NavigationMenu className="hidden sm:flex">
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem><a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">LIVE Webinar</a></NavigationMenuItem>
              <NavigationMenuItem><a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">1-on-1 Coaching</a></NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="outline" className="hidden sm:flex items-center gap-2 text-blue-700 border-blue-300 hover:bg-blue-50 cursor-pointer">
            <Image src="/WhatsApp.svg.webp" alt="WhatsApp Icon" width={20} height={20} className="w-5 h-5" /> WhatsApp Us</Button>
        </header>
        {/* <div className="absolute inset-0 bg-black/70 z-10"></div> */}
        <div className="relative z-10 flex flex-col items-center bg-gradient-to-br from-blue-50/70 to-yellow-50/60 mt-0 md:mt-20 p-8 rounded-lg max-w-3xl w-full shadow-xl border border-blue-200 backdrop-blur-sm" id="hero-content">
          <h1 className="text-4xl md:text-8xl font-extrabold mb-6 text-blue-900">
            <br className="md:hidden" /> <span className="text-yellow-600">Welcome to</span> <br className="md:invisible" /><span className="text-blue-900">Road to €uro Careers</span>
          </h1>
          <p className="text-purple-800 text-xl mb-6">
            10 JULY 2025 <span className="font-semibold">ONLINE</span>
          </p>
          <p className="text-blue-800 text-lg mb-8 text-center max-w-2xl">
            Best stop to learn the insider strategies for landing a job in Europe / UK. <br /><br />
            Soniya & Rajat are young software pros and international job experts, have worked across top MNCs across the UK, India and now the Netherlands.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Input type="email" placeholder="Enter email to register free" className="w-72 bg-white/95 border-blue-300 focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-600 shadow-lg backdrop-blur-sm" />
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white cursor-pointer">Register</Button>
          </div>
        </div>
      </div>

      <div id="1on1-coaching-section" className="w-full bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 py-16 px-6 text-center text-blue-900">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-blue-800">
          We help you with all the impactful ways and hacks to land a visa sponsored job in Europe - UK from all the way India. Already based in Europe / UK? You&apos;re closer than you think. Let&apos;s connect and tackle the toughest part: &quot;getting the interviews&quot;. No fluff. Just what works!
        </p>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white text-blue-900 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">MASTERCLASS</h3>
              <p className="text-sm mb-3">Knows & Hows for getting a job in Europe / UK</p>
              <p className="text-xs text-gray-600 mb-2">Time: 60 mins</p>
              <p className="text-lg font-bold text-blue-700 mb-3">₹200 INR</p>
              <p className="text-xs text-gray-600">Free: CV template, cover letter, FAQs</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white text-blue-900 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">SIGNATURE PROGRAM</h3>
              <p className="text-sm mb-3">Proven in-depth strategies. All about CV, LinkedIn, Job Applications and interview hacks</p>
              <p className="text-xs text-gray-600 mb-2">Duration: 4 days</p>
              <p className="text-lg font-bold text-blue-700 mb-3">₹5000 INR</p>
              <p className="text-xs text-gray-600">Free: List of 50 sponsored companies, interview prep sheet, 2 follow ups</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white text-blue-900 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">1:1 SESSION</h3>
              <p className="text-sm mb-3">Comprehensive guide specially curated for you for landing a job in Europe / UK</p>
              <p className="text-xs text-gray-600 mb-2">Duration: 2 days</p>
              <p className="text-lg font-bold text-blue-700 mb-3">₹6000 INR</p>
              <p className="text-xs text-gray-600">Free: List of 50 sponsored companies, interview prep sheet, 2 follow ups</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white text-blue-900 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-yellow-600">SPECIALISED WORKSHOPS</h3>
              <p className="text-sm mb-3">• ChatGPT for interview prep<br/>• Mastering LinkedIn for jobs</p>
              <p className="text-xs text-gray-600">Free: Interview guide & LinkedIn optimisation checklist</p>
            </CardContent>
          </Card>
        </div>
        
        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-semibold cursor-pointer">Book a Free Session</Button>
      </div>

      <div id="about-us" className="w-full bg-gradient-to-br from-yellow-50 to-blue-50 py-16 px-6 text-center text-blue-900">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Know Soniya & Rajat</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-blue-800 leading-relaxed">
            Young software pros, Soniya with 8 YOE and Rajat with 4 YOE. Alongside their tech careers they also specialise in guiding expats toward successful careers in the international job market, with a strong focus on the European continent.
          </p>
          <p className="text-lg mb-8 text-blue-800 leading-relaxed">
            Beyond their professional roles, they are passionate meditation and wellness coaches, volunteering with the Art of Living Foundation. So far, they have taught meditation and yoga to over 7,000 people worldwide, helping them manage stress, overcome anxiety, and boost their overall well-being and productivity.
          </p>
          <p className="text-lg text-blue-800 leading-relaxed">
            They are keen explorers, who have traveled to over 20 countries across 4 continents, gaining an understanding of different cultures, people, and ways of life.
          </p>
        </div>
      </div>

      <div id="testimonials" className="w-full bg-blue-50 py-16 px-6 text-center text-gray-900">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">What Our Clients Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="bg-white text-gray-900 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg" alt="Aisha" width={96} height={96} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 mb-4 text-sm">Thanks to their coaching, I landed a job in Germany within 3 months! The mock interviews and CV feedback were spot on.</p>
              <span className="font-semibold text-gray-900 text-sm">— Jane, Software Engineer</span>
            </CardContent>
          </Card>
          <Card className="bg-white text-gray-900 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg" alt="Raj" width={96} height={96} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 mb-4 text-sm">Truly personalized advice. I felt confident applying to jobs across Europe after our sessions.</p>
              <span className="font-semibold text-gray-900 text-sm">— John, Marketing Analyst</span>
            </CardContent>
          </Card>
          <Card className="bg-white text-gray-900 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src="https://images.pexels.com/photos/3778602/pexels-photo-3778602.jpeg" alt="Elena" width={96} height={96} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 mb-4 text-sm">The team understands what employers look for. Their tips made my application stand out.</p>
              <span className="font-semibold text-gray-900 text-sm">— Harry, UX Designer</span>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="w-full mt-auto text-xs text-gray-600 px-4 py-12 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-50 to-yellow-50 border-t border-blue-200">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6 md:mb-0">
          <span className="font-semibold text-blue-900">€uro Careers</span>
          <span className="text-gray-500">•</span>
          <span>Copyright © 2025 Euro Careers. All rights reserved.</span>
        </div>
        <div className="flex flex-col items-start gap-3">
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">Privacy Policy</a>
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">Terms of Service</a>
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-medium">Contact Us</a>
          <div className="flex items-center gap-2">
            <Image src="/WhatsApp.svg.webp" alt="WhatsApp" width={16} height={16} className="w-4 h-4" />
            <span className="text-blue-700 font-medium">+31 6 12345678</span>
          </div>
        </div>
        <div className="hidden md:block w-1/3"></div>
      </footer>
    </div >
  );
}