 // app/services/page.tsx
export default function Services() {
  return (
    <main>
      <section className="py-12 sm:py-16 md:py-20 bg-white rounded-lg shadow-sm mt-6 sm:mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-6xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold text-center mb-8 sm:mb-12">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-red-600 mb-3 sm:mb-4">กระจกนิรภัย</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">กระจกที่แข็งแรงและปลอดภัย</p>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-red-600 mb-3 sm:mb-4">กระจกตกแต่ง</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">ออกแบบตามสไตล์ที่คุณต้องการ</p>
            </div>
            <div className="text-center bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-red-600 mb-3 sm:mb-4">ติดตั้งกระจก</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">บริการติดตั้งโดยทีมงานมืออาชีพ</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}