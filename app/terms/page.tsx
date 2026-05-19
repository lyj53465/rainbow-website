import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service · 服务条款 | Rainbow Logistics',
  description: 'Rainbow Logistics Inc. Terms of Service including SMS messaging terms / 服务条款,含短信通讯条款',
};

const LAST_UPDATED = 'May 18, 2026';

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <h2 className="text-2xl text-gray-700 mb-4">服务条款</h2>
          <p className="text-sm text-gray-500">Last updated · 最后更新:{LAST_UPDATED}</p>
        </div>

        <Section
          en={{
            title: '1. Acceptance of Terms',
            body: (
              <p>By accessing or using the websites, mobile applications (including TongLink driver / warehouse / customer apps), SMS notifications, and related services (collectively the &ldquo;Services&rdquo;) operated by Rainbow Logistics Inc. (&ldquo;Rainbow Logistics&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you agree to be bound by these Terms of Service and our <Link href="/privacy" className="text-orange-600 underline">Privacy Policy</Link>.</p>
            ),
          }}
          zh={{
            title: '1. 接受条款',
            body: (
              <p>访问或使用 Rainbow Logistics Inc.(以下简称&ldquo;我们&rdquo;)运营的网站、移动应用(含 TongLink 司机端 / 仓库端 / 客户端)、短信通知及相关服务(统称&ldquo;服务&rdquo;),即视为同意本服务条款及<Link href="/privacy" className="text-orange-600 underline">隐私政策</Link>。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '2. Who May Use the Services',
            body: (
              <>
                <p>The Services are designed for business use by:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Drivers contracted to or employed by Rainbow Logistics or its partners</li>
                  <li>Warehouse staff assigned to Rainbow Logistics warehouses</li>
                  <li>Customers (importers, freight forwarders, brokers) with an active service agreement</li>
                  <li>Authorized employees of Rainbow Logistics</li>
                </ul>
                <p>Public use is not intended. You must be 18 years or older and have authority to act on behalf of your organization.</p>
              </>
            ),
          }}
          zh={{
            title: '2. 用户资格',
            body: (
              <>
                <p>本服务面向以下业务用户:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>与 Rainbow Logistics 或其合作方签约/雇佣的司机</li>
                  <li>Rainbow Logistics 仓库的在岗员工</li>
                  <li>已签订服务协议的客户(进口商、货代、报关行)</li>
                  <li>Rainbow Logistics 的授权员工</li>
                </ul>
                <p>本服务不面向社会公众。使用者须年满 18 岁,且有权代表所属机构。</p>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '3. Account & Access',
            body: (
              <p>Accounts are issued by Rainbow Logistics dispatch / HR upon driver onboarding, customer signup, or employee hire. You are responsible for keeping your credentials confidential and for all activity under your account. Notify us immediately of unauthorized use.</p>
            ),
          }}
          zh={{
            title: '3. 账户与访问',
            body: (
              <p>账户由 Rainbow Logistics 调度 / 人事在司机入职、客户签约、员工入职时颁发。您应妥善保管账户凭证,对账户下所有活动负责。发现异常立即通知我们。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '4. SMS Messaging Terms',
            body: (
              <>
                <p><strong>By providing your mobile phone number when signing up for a driver / warehouse / customer account, or by separately opting in through our app or written agreement, you consent to receive operational SMS messages from Rainbow Logistics.</strong></p>
                <p className="mt-3"><strong>Message types you may receive:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Drivers</strong>: task assignments, appointment time changes, pickup PIN updates, ETA reminders</li>
                  <li><strong>Warehouse staff</strong>: container arrival notifications, devanning schedules, urgent alerts</li>
                  <li><strong>Customers</strong>: container status updates (in transit / arrived / devanned), delivery confirmations</li>
                </ul>
                <p className="mt-3"><strong>Message frequency:</strong> varies by role and activity. Drivers may receive 5-20 messages per active day; customers may receive 1-5 per shipment. Frequency is operational, not promotional.</p>
                <p className="mt-3"><strong>Cost:</strong> Message and data rates may apply per your wireless carrier&apos;s plan. Rainbow Logistics does not charge you for SMS.</p>
                <p className="mt-3"><strong>Opt-out / Help:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Reply <strong>STOP</strong> to any message to unsubscribe — you will receive a confirmation and no further messages.</li>
                  <li>Reply <strong>HELP</strong> for assistance, or contact <a href="mailto:support@rainbowlogisticsus.com" className="text-orange-600 underline">support@rainbowlogisticsus.com</a></li>
                  <li>After STOP, you may resume by replying <strong>START</strong> or by re-enabling notifications in your app settings.</li>
                </ul>
                <p className="mt-3"><strong>Carrier disclaimer:</strong> Wireless carriers are not liable for delayed or undelivered messages.</p>
                <p className="mt-3"><strong>No third-party marketing:</strong> SMS data is operational only. We do not share SMS opt-in lists with third parties for marketing.</p>
                <p className="mt-3">See our <Link href="/sms" className="text-orange-600 underline">SMS Opt-in page</Link> for details on how each user category opts in.</p>
              </>
            ),
          }}
          zh={{
            title: '4. 短信通讯条款',
            body: (
              <>
                <p><strong>当您在司机 / 仓库 / 客户账户注册时提供手机号,或通过 App 或书面协议单独 opt-in,即同意接收 Rainbow Logistics 的业务短信。</strong></p>
                <p className="mt-3"><strong>您可能收到的消息类型:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>司机</strong>:任务分配、约时间变更、提柜 PIN 更新、ETA 提醒</li>
                  <li><strong>仓库员</strong>:柜子到仓通知、拆柜安排、紧急提醒</li>
                  <li><strong>客户</strong>:柜状态更新(在途 / 到仓 / 已拆)、配送确认</li>
                </ul>
                <p className="mt-3"><strong>消息频率:</strong>因角色与活动量而异。司机活跃日可能收 5-20 条;客户每单可能收 1-5 条。频率随业务需要,非营销。</p>
                <p className="mt-3"><strong>费用:</strong>可能产生运营商标准短信和数据费用,Rainbow Logistics 不收取短信费。</p>
                <p className="mt-3"><strong>取消订阅 / 帮助:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>回复 <strong>STOP</strong> 即可退订,系统返回确认后不再发送。</li>
                  <li>回复 <strong>HELP</strong> 获取帮助,或邮件 <a href="mailto:support@rainbowlogisticsus.com" className="text-orange-600 underline">support@rainbowlogisticsus.com</a></li>
                  <li>退订后可回复 <strong>START</strong> 恢复,或到 App 设置重新开启通知。</li>
                </ul>
                <p className="mt-3"><strong>运营商免责:</strong>无线运营商不对延迟或未送达的消息负责。</p>
                <p className="mt-3"><strong>不用于第三方营销:</strong>短信数据仅用于业务运营,不会将 opt-in 名单出售或共享给第三方用于营销。</p>
                <p className="mt-3">各类用户的具体 opt-in 流程,见 <Link href="/sms" className="text-orange-600 underline">SMS 订阅说明页</Link>。</p>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '5. Acceptable Use',
            body: (
              <>
                <p>You agree NOT to:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Use the Services for any unlawful purpose or in violation of any applicable law</li>
                  <li>Submit false container, BL, or appointment information</li>
                  <li>Attempt to reverse-engineer, scrape, or interfere with the Services</li>
                  <li>Use the Services to harass, threaten, or defraud another party</li>
                  <li>Share your account with unauthorized persons</li>
                </ul>
              </>
            ),
          }}
          zh={{
            title: '5. 可接受使用',
            body: (
              <>
                <p>您同意不会:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>将服务用于任何违法目的或违反任何适用法律</li>
                  <li>提交虚假的柜号、提单或预约信息</li>
                  <li>试图逆向工程、爬取或干扰本服务</li>
                  <li>利用本服务骚扰、威胁或欺诈他人</li>
                  <li>将账户共享给未授权人员</li>
                </ul>
              </>
            ),
          }}
        />

        <Section
          en={{
            title: '6. Service Availability',
            body: (
              <p>We strive for high uptime but do not guarantee uninterrupted service. We may perform maintenance, deploy updates, or temporarily suspend features. Critical disruptions are communicated to active users via email or in-app notification.</p>
            ),
          }}
          zh={{
            title: '6. 服务可用性',
            body: (
              <p>我们努力保持高可用,但不保证服务永不中断。我们可能进行维护、部署更新或临时停用功能。重大中断通过邮件或 App 内通知告知活跃用户。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '7. Intellectual Property',
            body: (
              <p>All software, content, designs, and trademarks (including TongLink, Rainbow Logistics, OCOP) are the property of Rainbow Logistics Inc. or its licensors. Use of the Services does not transfer ownership. You may not reproduce or redistribute Services materials without written permission.</p>
            ),
          }}
          zh={{
            title: '7. 知识产权',
            body: (
              <p>所有软件、内容、设计和商标(含 TongLink、Rainbow Logistics、OCOP)归 Rainbow Logistics Inc. 或其许可方所有。使用服务不构成所有权转让,未经书面许可不得复制或再分发服务相关材料。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '8. Disclaimer of Warranties',
            body: (
              <p>The Services are provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo;. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. Operational notifications (ETA, container availability) are best-effort and should not be relied on as the sole source of truth for time-critical decisions.</p>
            ),
          }}
          zh={{
            title: '8. 免责声明',
            body: (
              <p>本服务按&ldquo;现状&rdquo;和&ldquo;可用&rdquo;提供。在法律允许的最大范围内,我们不作任何明示或默示担保,包括适销性、特定用途适用性和不侵权。业务通知(ETA、柜可提)为尽力而为,时间敏感决策请勿仅依赖本服务为唯一依据。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '9. Limitation of Liability',
            body: (
              <p>To the maximum extent permitted by law, Rainbow Logistics Inc. shall not be liable for any indirect, incidental, consequential, or punitive damages arising from or related to your use of the Services. Our aggregate liability for direct damages is limited to the fees paid by you to Rainbow Logistics in the 12 months preceding the claim (drivers/employees: equivalent operational fees, not wages).</p>
            ),
          }}
          zh={{
            title: '9. 责任限制',
            body: (
              <p>在法律允许的最大范围内,对于因使用本服务产生或相关的任何间接、附带、后果性或惩罚性损害,Rainbow Logistics Inc. 概不负责。我们对直接损害的累计赔偿责任以您在索赔前 12 个月向 Rainbow Logistics 支付的费用为上限(司机/员工以等额运营费计,不含工资)。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '10. Termination',
            body: (
              <p>We may suspend or terminate your account for breach of these Terms, fraudulent activity, end of contractual relationship, or extended inactivity. Upon termination, your data may be retained as required by tax/transportation regulations. You may request account closure at any time by emailing <a href="mailto:support@rainbowlogisticsus.com" className="text-orange-600 underline">support@rainbowlogisticsus.com</a>.</p>
            ),
          }}
          zh={{
            title: '10. 终止',
            body: (
              <p>违反本条款、欺诈行为、合作关系结束或长期不活跃,我们可暂停或终止您的账户。终止后数据可能依税务/运输法规继续保留。您可随时发邮件至 <a href="mailto:support@rainbowlogisticsus.com" className="text-orange-600 underline">support@rainbowlogisticsus.com</a> 请求注销账户。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '11. Governing Law',
            body: (
              <p>These Terms are governed by the laws of the State of California, United States, without regard to conflict of laws principles. Disputes shall be resolved in the state or federal courts located in Los Angeles County, California, unless required otherwise by law.</p>
            ),
          }}
          zh={{
            title: '11. 适用法律',
            body: (
              <p>本条款受美国加利福尼亚州法律管辖,不考虑冲突法原则。争议除法律另有规定外,提交加州洛杉矶县州法院或联邦法院解决。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '12. Changes',
            body: (
              <p>We may update these Terms from time to time. The latest version is always available at this URL with an updated &ldquo;Last updated&rdquo; date. Material changes affecting your rights will be communicated via email or in-app notification.</p>
            ),
          }}
          zh={{
            title: '12. 变更',
            body: (
              <p>我们可能不时更新本条款。最新版本始终发布在本页面,并标注&ldquo;最后更新&rdquo;日期。涉及权利的重大变更会通过邮件或 App 内通知告知。</p>
            ),
          }}
        />

        <Section
          en={{
            title: '13. Contact',
            body: (
              <div className="p-4 bg-gray-50 rounded border border-gray-200 space-y-1">
                <p><strong>Rainbow Logistics Inc.</strong></p>
                <p>Address: 415 S 7th Ave, City of Industry, CA 91746, United States</p>
                <p>Phone: <a href="tel:+18288886668" className="text-orange-600 hover:underline">+1 (828) 888-6668</a></p>
                <p>Email: <a href="mailto:support@rainbowlogisticsus.com" className="text-orange-600 hover:underline">support@rainbowlogisticsus.com</a></p>
                <p>Website: <a href="https://www.rainbowlogisticsus.com" className="text-orange-600 hover:underline">www.rainbowlogisticsus.com</a></p>
              </div>
            ),
          }}
          zh={{
            title: '13. 联系',
            body: (
              <div className="p-4 bg-gray-50 rounded border border-gray-200 space-y-1">
                <p><strong>Rainbow Logistics Inc.</strong></p>
                <p>地址:415 S 7th Ave, City of Industry, CA 91746, USA</p>
                <p>电话:<a href="tel:+18288886668" className="text-orange-600 hover:underline">+1 (828) 888-6668</a></p>
                <p>邮箱:<a href="mailto:support@rainbowlogisticsus.com" className="text-orange-600 hover:underline">support@rainbowlogisticsus.com</a></p>
                <p>网站:<a href="https://www.rainbowlogisticsus.com" className="text-orange-600 hover:underline">www.rainbowlogisticsus.com</a></p>
              </div>
            ),
          }}
        />
      </main>

      <footer className="border-t border-gray-200 mt-12">
        <div className="mx-auto max-w-4xl px-6 py-6 text-center text-sm text-gray-500 space-x-4">
          <span>© {new Date().getFullYear()} Rainbow Logistics Inc. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-orange-600">Privacy</Link>
          <Link href="/sms" className="hover:text-orange-600">SMS Opt-in</Link>
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
