import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy · 隐私政策 | Rainbow Logistics',
  description: 'Rainbow Logistics Inc. Privacy Policy / 隐私政策',
};

const LAST_UPDATED = 'May 2, 2026';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-orange-600">
            Rainbow Logistics
          </Link>
          <Link href="/" className="text-sm text-gray-600 hover:text-orange-600">← Back to Home</Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <h2 className="text-2xl text-gray-700 mb-4">隐私政策</h2>
          <p className="text-sm text-gray-500">Last updated · 最后更新：{LAST_UPDATED}</p>
        </div>

        <Section
          en={{
            title: '1. Introduction',
            body: (
              <>
                <p>This Privacy Policy describes how Rainbow Logistics Inc. (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, and shares information from users of our websites, mobile applications (including the TongLink app), SMS communications, and related services (collectively, the &ldquo;Services&rdquo;).</p>
                <p>By using our Services, you agree to the practices described in this policy.</p>
              </>
            ),
          }}
          zh={{
            title: '1. 引言',
            body: (
              <>
                <p>本隐私政策说明 Rainbow Logistics Inc.（以下简称&ldquo;我们&rdquo;）如何收集、使用和共享网站、移动应用（含 TongLink）、短信通讯及相关服务（统称&ldquo;服务&rdquo;）的用户信息。</p>
                <p>使用本服务即表示您同意本政策所述的处理方式。</p>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '2. Information We Collect',
            body: (
              <>
                <p>We collect information in the following categories:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Account information</strong>: name, email, phone number, employee ID, customer code</li>
                  <li><strong>Operational data</strong>: container numbers, BL/AWB numbers, appointment times, gate transactions, driver assignments, warehouse activities</li>
                  <li><strong>Location data</strong> (drivers only, with consent): real-time GPS coordinates while a delivery task is in progress, used solely to provide ETA notifications and verify task completion</li>
                  <li><strong>Photos and documents</strong>: bills of lading, delivery proofs (POD/EIR), devanning sheets, attendance check-in photos</li>
                  <li><strong>Device information</strong>: device model, OS version, app version, push notification tokens</li>
                  <li><strong>Communications</strong>: SMS messages sent through our notification system, support emails</li>
                </ul>
                <p>We do not knowingly collect information from individuals under 13 years of age.</p>
              </>
            ),
          }}
          zh={{
            title: '2. 我们收集的信息',
            body: (
              <>
                <p>我们收集以下类别的信息：</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>账户信息</strong>：姓名、邮箱、手机号、员工编号、客户编号</li>
                  <li><strong>业务数据</strong>：海柜柜号、提单号、预约时间、码头进出闸记录、司机派单、仓库作业</li>
                  <li><strong>位置数据</strong>（仅司机端，需明确授权）：执行运输任务期间的实时 GPS 坐标，仅用于提供 ETA 通知和验证任务完成</li>
                  <li><strong>照片和文件</strong>：提单、提货凭证（POD/EIR）、拆柜单、考勤打卡照片</li>
                  <li><strong>设备信息</strong>：机型、系统版本、App 版本、推送通知 Token</li>
                  <li><strong>通讯记录</strong>：通过我们通知系统发送的短信、支持邮件</li>
                </ul>
                <p>我们不会有意收集 13 岁以下未成年人的信息。</p>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '3. How We Use Information',
            body: (
              <ul className="list-disc ml-6 space-y-1">
                <li>Provide and operate the Services (assign tasks, track containers, process devanning, generate reports)</li>
                <li>Send operational notifications via SMS, email, or push notification (e.g., container availability, schedule changes, ETA alerts)</li>
                <li>Communicate with terminals, carriers, and customs as required to fulfill shipments</li>
                <li>Improve service quality, troubleshoot issues, and prevent fraud</li>
                <li>Comply with legal obligations (tax records, transportation regulations, audits)</li>
              </ul>
            ),
          }}
          zh={{
            title: '3. 信息使用方式',
            body: (
              <ul className="list-disc ml-6 space-y-1">
                <li>提供和运营服务（派单、柜子追踪、拆柜处理、报表生成）</li>
                <li>通过短信、邮件、推送通知发送业务通知（如柜可提、时间变更、ETA 提醒）</li>
                <li>为完成运输与码头、船公司、海关等通讯</li>
                <li>提升服务质量、问题排查、欺诈防范</li>
                <li>遵守法律义务（税务记录、运输法规、审计）</li>
              </ul>
            ),
          }}
        />

        <Section
          en={{
            title: '4. SMS Communications',
            body: (
              <>
                <p>We send SMS notifications related to your business activity:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>For drivers: appointment changes, ETA reminders, task assignments</li>
                  <li>For warehouse staff: container arrival, devanning completion, urgent alerts</li>
                  <li>For customers: container status updates, delivery notifications</li>
                </ul>
                <p>Message frequency varies based on your role and activity. Standard message and data rates may apply.</p>
                <p><strong>Opt-out</strong>: Reply <strong>STOP</strong> to any message to unsubscribe. Reply <strong>HELP</strong> for assistance. SMS data is not shared with third parties for marketing purposes.</p>
              </>
            ),
          }}
          zh={{
            title: '4. 短信通讯',
            body: (
              <>
                <p>我们发送与您业务相关的短信通知：</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>司机：约时间变更、ETA 提醒、新任务分配</li>
                  <li>仓库员工：柜到仓、拆柜完成、紧急提醒</li>
                  <li>客户：柜状态更新、配送通知</li>
                </ul>
                <p>短信频率因角色和业务量而异，可能产生标准短信与数据费用。</p>
                <p><strong>取消订阅</strong>：回复 <strong>STOP</strong> 即可退订，回复 <strong>HELP</strong> 获取帮助。短信数据不会出于营销目的共享给第三方。</p>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '5. Location Data (Drivers)',
            body: (
              <>
                <p>The TongLink driver app collects location only when a task is active (status &ldquo;in transit&rdquo;) and only with explicit user consent at first launch. Specifically:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Foreground</strong>: when you tap &ldquo;Start Trip&rdquo;, GPS is captured to record trip starting point</li>
                  <li><strong>Background</strong>: periodic GPS updates (every 1-5 minutes) only while a task is in progress, to compute ETA for warehouse arrival notifications</li>
                  <li>Location collection stops automatically when the task is marked completed</li>
                </ul>
                <p>You may revoke location permission at any time in your device settings. Without location permission, ETA notifications will be unavailable but the rest of the app remains functional.</p>
              </>
            ),
          }}
          zh={{
            title: '5. 位置数据（司机）',
            body: (
              <>
                <p>TongLink 司机端仅在任务进行中（状态&ldquo;运输中&rdquo;）且经用户首次启动明确授权后才收集位置。具体：</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>前台</strong>：点击&ldquo;开始运输&rdquo;时记录起点 GPS</li>
                  <li><strong>后台</strong>：仅任务进行中每 1-5 分钟更新 GPS，用于计算到仓 ETA</li>
                  <li>任务完成标记后自动停止收集</li>
                </ul>
                <p>可随时在设备设置中撤销位置权限。撤销后 ETA 通知不可用，但 App 其他功能不受影响。</p>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '6. Information Sharing',
            body: (
              <>
                <p>We share information only as needed for the Services:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Terminals & Carriers</strong>: container numbers, appointment times, license plates—necessary to dispatch and pick up your cargo</li>
                  <li><strong>Service providers</strong>: SMS gateway (Twilio), cloud hosting (AWS/Vercel), document storage (S3), GPS tracking (Jimi). These providers are bound by data protection agreements.</li>
                  <li><strong>Legal</strong>: when required by law, court order, or to protect rights and safety</li>
                </ul>
                <p>We do <strong>not</strong> sell personal information to third parties.</p>
              </>
            ),
          }}
          zh={{
            title: '6. 信息共享',
            body: (
              <>
                <p>我们仅在服务必需的范围内共享信息：</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>码头与船公司</strong>：柜号、预约时间、车牌——派单提柜必需</li>
                  <li><strong>服务提供商</strong>：短信网关（Twilio）、云托管（AWS/Vercel）、文档存储（S3）、GPS 追踪（Jimi），均受数据保护协议约束</li>
                  <li><strong>法律要求</strong>：法律法规、法院命令、为保护权利安全等情况</li>
                </ul>
                <p>我们<strong>不会</strong>将个人信息出售给第三方。</p>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '7. Data Retention',
            body: (
              <p>We retain personal information as long as needed to provide the Services and comply with tax/transportation regulations (typically 7 years for shipping records). Drivers&apos; real-time location data is summarized into trip events and the raw GPS log is purged after 90 days. Account information is removed within 60 days of an account deletion request, except where retention is legally required.</p>
            ),
          }}
          zh={{
            title: '7. 数据保留',
            body: (
              <p>我们保留个人信息以提供服务并遵守税务/运输法规（运输记录通常 7 年）。司机实时位置原始 GPS 日志保留 90 天后会自动清除，仅汇总为行程事件保存。账户信息在收到删除请求后 60 天内删除，法律要求保留的除外。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '8. Your Rights',
            body: (
              <>
                <p><strong>California Residents (CCPA)</strong>: You have the right to know what personal information we collect, request deletion, opt out of any sale (we don&apos;t sell), and non-discrimination for exercising your rights.</p>
                <p>For all users: you may request access to, correction of, or deletion of your data by contacting us at the address below.</p>
              </>
            ),
          }}
          zh={{
            title: '8. 您的权利',
            body: (
              <>
                <p><strong>加州居民（CCPA）</strong>：您有权了解我们收集的个人信息、请求删除、拒绝出售（我们不出售），且行使权利不受歧视。</p>
                <p>所有用户均可通过下方联系方式请求访问、更正或删除您的数据。</p>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '9. Security',
            body: (
              <p>We use industry-standard security measures including HTTPS encryption, encrypted token storage (iOS Keychain / Android Keystore), bcrypt password hashing, and access controls. No system is 100% secure; please report suspected breaches to the contact below.</p>
            ),
          }}
          zh={{
            title: '9. 安全',
            body: (
              <p>我们采用行业标准安全措施，包括 HTTPS 加密、密钥库加密存储（iOS Keychain / Android Keystore）、bcrypt 密码哈希、访问控制。无任何系统能 100% 安全，如怀疑发生数据泄露请通过下方联系方式上报。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '10. Changes to This Policy',
            body: (
              <p>We may update this Policy from time to time. The latest version will always be posted at this URL with an updated &ldquo;Last updated&rdquo; date. Material changes affecting how we use your data will be communicated through email or in-app notification where appropriate.</p>
            ),
          }}
          zh={{
            title: '10. 政策变更',
            body: (
              <p>我们可能不时更新本政策。最新版本始终发布在本页面，并标注&ldquo;最后更新&rdquo;日期。涉及数据使用方式的重大变更会通过邮件或 App 内通知告知。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '11. Contact Us',
            body: (
              <>
                <p>For privacy questions, data requests, or concerns:</p>
                <div className="mt-3 p-4 bg-gray-50 rounded border border-gray-200">
                  <p><strong>Rainbow Logistics Inc.</strong></p>
                  <p>Email: <a href="mailto:privacy@rainbowlogisticsus.com" className="text-orange-600 hover:underline">privacy@rainbowlogisticsus.com</a></p>
                  <p>Website: <a href="https://www.rainbowlogisticsus.com" className="text-orange-600 hover:underline">www.rainbowlogisticsus.com</a></p>
                </div>
              </>
            ),
          }}
          zh={{
            title: '11. 联系我们',
            body: (
              <>
                <p>隐私问题、数据请求或反馈：</p>
                <div className="mt-3 p-4 bg-gray-50 rounded border border-gray-200">
                  <p><strong>Rainbow Logistics Inc.</strong></p>
                  <p>邮箱：<a href="mailto:privacy@rainbowlogisticsus.com" className="text-orange-600 hover:underline">privacy@rainbowlogisticsus.com</a></p>
                  <p>网站：<a href="https://www.rainbowlogisticsus.com" className="text-orange-600 hover:underline">www.rainbowlogisticsus.com</a></p>
                </div>
              </>
            ),
          }}
        />
      </main>

      <footer className="border-t border-gray-200 mt-12">
        <div className="mx-auto max-w-4xl px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Rainbow Logistics Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

interface SectionContent {
  title: string;
  body: React.ReactNode;
}

function Section({ en, zh }: { en: SectionContent; zh: SectionContent }) {
  return (
    <section className="mb-10">
      <div className="grid md:grid-cols-2 gap-8 border-t border-gray-100 pt-6">
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">{en.title}</h3>
          <div className="text-gray-700 leading-relaxed space-y-3 text-sm">{en.body}</div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">{zh.title}</h3>
          <div className="text-gray-700 leading-relaxed space-y-3 text-sm">{zh.body}</div>
        </div>
      </div>
    </section>
  );
}
