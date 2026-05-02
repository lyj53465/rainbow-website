import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">联系我们</h2>
          <p className="text-xl text-gray-600">我们随时准备为您提供服务</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">地址</h3>
                  <p className="text-gray-600">
                    415 S 7th Ave<br />
                    City of Industry, CA 91746<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">电话</h3>
                  <p className="text-gray-600">
                    (828) 888-6668<br />
                    欢迎来电咨询
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">邮箱</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><span className="font-medium">代发换单:</span> jim@rainbowlogisticsus.com</p>
                    <p><span className="font-medium">空运部:</span> leah@rainbowlogisticsus.com</p>
                    <p><span className="font-medium">海运部:</span> zz@rainbowlogisticsus.com</p>
                    <p><span className="font-medium">客服部:</span> cs@rainbowlogisticsus.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">营业时间</h3>
                  <p className="text-gray-600">
                    周一至周五: 9:00 AM - 6:00 PM<br />
                    周六周日: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
