// app/about/page.tsx
import Image from 'next/image';

export default function About() {
  return (
    <main>
      <section className="py-12 sm:py-16 md:py-20 bg-white rounded-lg shadow-sm mt-6 sm:mt-8 mx-4 sm:mx-auto max-w-6xl">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-bold text-center mb-8 sm:mb-12">เกี่ยวกับเรา</h2>
          <p className="text-gray-600 text-sm sm:text-base text-center mb-8 sm:mb-12">ALL GLASS ALUMINIUM ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะนำเสนอกระจกคุณภาพสูงและบริการที่เป็นเลิศ ด้วยประสบการณ์กว่า 10 ปี เราพร้อมตอบโจทย์ทุกความต้องการ</p>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl text-red-600 font-medium mb-4 sm:mb-6">ทีมงานของเรา</h3>
            <Image src="/images/team.jpg" alt="ทีมงาน" width={500} height={300} className="w-full max-w-[300px] sm:max-w-md mx-auto rounded-lg shadow-md" />
            <p className="text-gray-600 text-sm sm:text-base mt-4 sm:mt-6">ทีมงานมืออาชีพของเราพร้อมให้คำปรึกษาและดูแลทุกขั้นตอน</p>
          </div>
        </div>
      </section>
    </main>
  );
}