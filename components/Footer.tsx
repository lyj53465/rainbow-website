'use client';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span>🌈</span>
              </div>
              <div>
                <h3 className="text-lg">Rainbow Logistics Inc</h3>
              </div>
            </div>
            <p className="text-gray-400">
              专业的国际物流服务提供商，致力于为客户提供高效、可靠的物流解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">快速链接</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  首页
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  服务
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  关于我们
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  联系我们
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">我们的服务</h3>
            <ul className="space-y-2 text-gray-400">
              <li>海运拆柜服务</li>
              <li>空运提货转派</li>
              <li>Y2换单服务</li>
              <li>一件代发</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rainbow Logistics Inc. All rights reserved.</p>
          <a href="/privacy" className="hover:text-white transition-colors text-sm">
            Privacy Policy · 隐私政策
          </a>
        </div>
      </div>
    </footer>
  );
}
