// app/contact/page.tsx
import Image from 'next/image';

export default function Contact() {
  return (
    <main>
      <section className="py-12 sm:py-16 md:py-20 bg-white rounded-lg shadow-sm mt-6 sm:mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-6xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Image src="/images/laminated-glass.jpg" alt="Main_Banner" width={1200} height={600} className="w-full rounded-lg shadow-md mb-8 sm:mb-12" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12"><span className="text-black">CONTACT</span> <span className="text-red-600">ALL GLASS</span></h2>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10">
            <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
              <div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold block mb-2">สำนักงานใหญ่</span>
                <iframe src="/images/logo.jpg" className="w-full h-48 sm:h-64 md:h-80 rounded-lg shadow-md" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold block mb-2">โรงงานผลิต</span>
                <iframe src="/images/logo.jpg" className="w-full h-48 sm:h-64 md:h-80 rounded-lg shadow-md" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-lg sm:text-xl md:text-2xl text-black font-medium mb-3 sm:mb-4">สำนักงานใหญ่</h3>
              <h3 className="text-lg sm:text-xl md:text-2xl text-black font-medium mb-3 sm:mb-4">บริษัท ออล กลาส อลูมิเนียม จำกัด</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">8/122 ซอย01กาญจนาภิเษก 6/1 แขวงท่าแร้ง เขตบางเขน กรุงเทพมหานคร 10220</p>
              <h3 className="text-lg sm:text-xl md:text-2xl text-red-600 font-medium mb-3 sm:mb-4">โรงงานผลิต</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">8/122 Soi 01 Kanchanaphisek 6/1, Tha Raeng Subdistrict, Bang Khen District, Bangkok 10220</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4"><i className="fas fa-phone-alt text-black mr-2"></i> 092-262-2987</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4"><i className="fas fa-phone-alt text-black mr-2"></i> 093-608-1400</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4"><i className="fas fa-envelope text-black mr-2"></i> <a href="mailto:allglassaluminium@example.com" className="text-black hover:underline">allglassaluminium@example.com</a></p>
              <p><a href="https://www.facebook.com/profile.php?id=100064124831338&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-black hover:underline text-sm sm:text-base md:text-lg"><i className="fab fa-facebook-f text-black mr-2"></i> Facebook</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}