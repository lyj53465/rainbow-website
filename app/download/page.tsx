'use client';

/**
 * TongLink mobile app 下载页 / download page
 *
 * 路径：/download
 *
 * 安卓走 APK 直发（兼容华为/小米/vivo 等无 Play 商店的机型）；
 * 每次发新版本，更新下方 ANDROID_APK_URL 常量 + APP_VERSION 即可。
 *
 * iOS TestFlight Public Link 等审核通过后填到 IOS_TESTFLIGHT_URL。
 */

import { Download, Smartphone, AlertCircle, ExternalLink } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// ============================================================
// ⚠️ 发布新版本时更新这 3 个常量
// ============================================================
const APP_VERSION = '1.3.0';
const RELEASE_DATE = '2026-05-28';
// EAS 输出的 APK 直链（每次构建会变）。新 build 后到 expo.dev/.../builds 复制
const ANDROID_APK_URL = 'https://expo.dev/artifacts/eas/kEFnBgaAEPihGNxxCgZfej.apk';
// TestFlight 公测链接（External Group 审核通过 + Enable Public Link 后填）
const IOS_TESTFLIGHT_URL = 'https://testflight.apple.com/join/W56N3svT';
// ============================================================

const QR_API = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=10&data=';

export default function DownloadPage() {
  const androidQr = QR_API + encodeURIComponent(ANDROID_APK_URL);
  const iosQr = IOS_TESTFLIGHT_URL ? QR_API + encodeURIComponent(IOS_TESTFLIGHT_URL) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <img
                src="/tonglink-icon.png"
                alt="TongLink"
                className="w-16 h-16 rounded-2xl shadow-lg"
              />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                TongLink
              </h1>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              友仓 · Rainbow 团队协同 APP
            </p>
            <p className="mt-1 text-sm text-gray-500">
              司机 / 仓库 / 调度 / 员工 / 空运 / 友仓 / 码头
            </p>
            <p className="mt-0.5 text-xs text-gray-400">
              For internal team, partner warehouses &amp; terminals
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500">
              <span>Version {APP_VERSION}</span>
              <span>·</span>
              <span>{RELEASE_DATE}</span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Android */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="text-green-600" size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Android</h2>
                  <p className="text-xs text-gray-500">兼容 华为 / 小米 / OPPO / vivo / Samsung 等</p>
                </div>
              </div>

              <a
                href={ANDROID_APK_URL}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
              >
                <Download size={18} />
                下载 APK / Download
              </a>

              <div className="mt-4 flex items-center gap-4">
                <img src={androidQr} alt="Android APK QR" className="w-28 h-28 border border-gray-200 rounded-lg" />
                <div className="text-xs text-gray-500 leading-relaxed">
                  手机扫码下载<br />
                  Scan with your phone
                </div>
              </div>

              <div className="mt-5 rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
                <div className="flex items-start gap-2 mb-2">
                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                  <strong>首次安装提示</strong>
                </div>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>下载 APK 后点击文件</li>
                  <li>系统提示「未知来源」时点 <b>设置</b> → 打开「允许此来源」</li>
                  <li>返回点击 <b>安装</b></li>
                  <li>装好后返回桌面找到 TongLink 图标打开</li>
                </ol>
              </div>
            </div>

            {/* iOS */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="text-gray-700" size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">iOS / iPhone</h2>
                  <p className="text-xs text-gray-500">通过 Apple TestFlight 安装</p>
                </div>
              </div>

              {IOS_TESTFLIGHT_URL ? (
                <>
                  <a
                    href={IOS_TESTFLIGHT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    在 TestFlight 中打开
                  </a>
                  {iosQr && (
                    <div className="mt-4 flex items-center gap-4">
                      <img src={iosQr} alt="TestFlight QR" className="w-28 h-28 border border-gray-200 rounded-lg" />
                      <div className="text-xs text-gray-500 leading-relaxed">
                        手机扫码加入测试<br />
                        Scan with your iPhone
                      </div>
                    </div>
                  )}
                  <div className="mt-5 rounded-lg bg-blue-50 border border-blue-200 p-3 text-xs text-blue-800">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle size={14} className="mt-0.5 shrink-0" />
                      <strong>首次安装提示</strong>
                    </div>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>App Store 搜「TestFlight」并安装</li>
                      <li>用你常用的 Apple ID 登录 TestFlight</li>
                      <li>点上方按钮（或扫码）→ 接受测试邀请</li>
                      <li>装好后回桌面打开 TongLink</li>
                    </ol>
                  </div>
                  <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-800">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={14} className="mt-0.5 shrink-0" />
                      <div>
                        若所在地区 App Store 找不到 TestFlight，请访问{' '}
                        <a
                          href="https://ocop.rainbowlogisticsus.com/app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium hover:text-amber-900"
                        >
                          详细安装指引
                        </a>
                        {' '}或联系客服协助。
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-gray-600 text-center">
                  <AlertCircle size={20} className="mx-auto mb-2 text-gray-400" />
                  <p className="font-medium text-gray-900">即将上线 / Coming Soon</p>
                  <p className="mt-1 text-xs">
                    iOS 版正在 Apple 审核中，<br />
                    审核通过后此处会显示 TestFlight 安装链接
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-10 text-center text-xs text-gray-500">
            <p>
              本 App 仅供 Rainbow Logistics US Inc. 团队使用 ·
              For internal team use only.
            </p>
            <p className="mt-1">
              安装与使用即表示您同意我们的{' '}
              <a href="https://ocop.rainbowlogisticsus.com/privacy/tonglink" className="text-purple-600 hover:underline">
                隐私政策 / Privacy Policy
              </a>
            </p>
            <p className="mt-1">
              问题反馈：<a href="mailto:lyj53465@gmail.com" className="text-purple-600 hover:underline">lyj53465@gmail.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
