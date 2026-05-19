import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMS Opt-in & Notifications · 短信订阅说明 | Rainbow Logistics',
  description: 'How drivers, warehouse staff, and customers opt in to Rainbow Logistics SMS notifications. STOP/HELP keywords, message frequency, sample messages, and privacy policy.',
};

const LAST_UPDATED = 'May 18, 2026';

export default function SmsOptInPage() {
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
          <h1 className="text-4xl font-bold mb-2">SMS Opt-in & Notifications</h1>
          <h2 className="text-2xl text-gray-700 mb-4">短信订阅说明</h2>
          <p className="text-sm text-gray-500">Last updated · 最后更新:{LAST_UPDATED}</p>
        </div>

        <div className="mb-10 p-5 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-sm text-gray-800 mb-2">
            <strong>Rainbow Logistics Inc.</strong> sends operational SMS notifications to drivers,
            warehouse staff, and customers via Twilio (Messaging Service SID begins with
            <code className="px-1.5 py-0.5 mx-1 bg-white border border-gray-200 rounded text-xs">MG118718…</code>).
            This page explains <strong>how each user category opts in</strong>, what messages they
            receive, and how to stop them. We do not send marketing or promotional SMS.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Rainbow Logistics Inc. 通过 Twilio 向司机、仓库员工和客户发送业务短信通知。本页说明三类用户的
            opt-in 流程、消息内容及退订方式。我们<strong>不发送营销/推广短信</strong>。
          </p>
        </div>

        {/* Twilio A2P 审核员看的关键说明:opt-in 走的是 B2B 合同 + 登录后表单,
            按 Twilio 30891 解决方案要求,本页提供 visual mockup 代替无法直链的真实表单 */}
        <div className="mb-10 p-5 bg-blue-50 border border-blue-300 rounded-lg">
          <p className="text-xs uppercase tracking-wide font-bold text-blue-700 mb-2">
            For Carrier / Twilio Reviewers
          </p>
          <p className="text-sm text-gray-800 mb-2">
            Rainbow Logistics is a <strong>B2B logistics service</strong>. SMS opt-in is collected
            in three channels, none of which are publicly browsable (driver contracts and the
            customer portal registration form sit behind a login). Per Twilio guidance on error
            30891, the visual mockups in <strong>Section 2 below</strong> show each opt-in form
            as it appears to the user, including the SMS-consent checkbox and consent language.
            These mockups are hosted on this same domain (
            <code className="px-1 bg-white border rounded text-xs">www.rainbowlogisticsus.com/sms</code>
            ) and accurately reflect the production opt-in screens.
          </p>
          <ul className="text-sm text-gray-700 list-disc ml-6 space-y-0.5">
            <li>Section 2.1 — Customer portal registration form (live, but behind login)</li>
            <li>Section 2.2 — TongLink driver app first-launch consent screen (native app)</li>
            <li>Section 2.3 — Driver / warehouse paper-contract SMS clause</li>
            <li>Section 3 — production SMS templates with STOP / HELP language</li>
          </ul>
        </div>

        <Section title="1. Who Receives SMS · 谁会收到短信" titleZh="">
          <div className="grid md:grid-cols-3 gap-4">
            <UserCard
              role="Drivers · 司机"
              when={[
                'Task assignment / 任务派单',
                'Appointment reschedule / 改约',
                'Pickup PIN updates / 提柜 PIN',
                'ETA reminders / ETA 提醒',
              ]}
              freq="5-20 / active day"
              freqZh="活跃日 5-20 条"
            />
            <UserCard
              role="Warehouse · 仓库"
              when={[
                'Container arrival / 柜到仓',
                'Devanning schedule / 拆柜安排',
                'Urgent alerts / 紧急提醒',
              ]}
              freq="2-10 / day"
              freqZh="每日 2-10 条"
            />
            <UserCard
              role="Customers · 客户"
              when={[
                'Container status / 柜状态',
                'Delivery confirmation / 配送确认',
                'Pickup notifications / 提柜通知',
              ]}
              freq="1-5 / shipment"
              freqZh="每单 1-5 条"
            />
          </div>
        </Section>

        <Section title="2. How You Opt In · 如何 Opt-in (with visual mockups)">
          <p className="mb-4">
            All SMS opt-in is <strong>explicit and individual</strong>. The mockups below
            accurately reproduce what each user sees at the moment of opt-in. SMS opt-in is{' '}
            <em>distinct</em> from email or push-notification opt-in.
          </p>
          <p className="mb-6">
            所有 opt-in 都<strong>明确且个人</strong>。下方 mockup 还原各类用户在 opt-in 时实际看到的界面。
            短信 opt-in 与邮件/推送通知 opt-in <em>分别独立</em>。
          </p>

          {/* === 2.1 Customer Portal Registration Mockup === */}
          <div className="mb-8">
            <h4 className="text-base font-bold text-gray-900 mb-2">
              2.1 Customer Portal Registration · 客户门户注册
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Live form at <code className="px-1.5 bg-gray-100 border rounded">https://ocop.rainbowlogisticsus.com/account-request</code>,
              behind login. Mockup below shows the SMS consent checkbox shown to every new customer:
            </p>
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-md max-w-md mx-auto bg-white">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-white text-sm font-medium">
                Rainbow Logistics · 客户账号申请
              </div>
              <div className="p-5 space-y-3">
                <FormField label="Company Name · 公司名称" value="ACME Trading LLC" />
                <FormField label="Contact Person · 联系人" value="Jane Doe" />
                <FormField label="Email · 邮箱" value="jane@acme.example" />
                <FormField label="Mobile Phone · 手机号" value="+1 (626) 555-0142" highlight />
                <div className="border border-orange-300 bg-orange-50 rounded p-3 mt-2">
                  <label className="flex items-start gap-2 text-xs text-gray-800">
                    <span className="inline-block w-4 h-4 mt-0.5 border-2 border-orange-500 bg-orange-500 rounded-sm shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
                      ✓
                    </span>
                    <span>
                      <strong>I consent to receive SMS notifications</strong> about my shipments
                      (container status, delivery confirmations) from Rainbow Logistics at the
                      mobile number provided above. Message and data rates may apply. Reply STOP
                      to opt out, HELP for help. See our{' '}
                      <span className="underline text-orange-700">Privacy Policy</span> and{' '}
                      <span className="underline text-orange-700">SMS Terms</span>.
                      <br />
                      <span className="text-gray-600 mt-1 inline-block">
                        本人同意以上述手机号接收 Rainbow Logistics 关于发货的短信通知。可能产生标准短信费。
                        回复 STOP 退订,HELP 求助。
                      </span>
                    </span>
                  </label>
                </div>
                <button className="w-full mt-2 bg-orange-600 text-white text-sm font-medium py-2 rounded">
                  Submit Application · 提交申请
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              ↑ Mockup reproducing the live registration form. The SMS consent checkbox is
              <strong> unchecked by default</strong> in production — user must explicitly tick it.
            </p>
          </div>

          {/* === 2.2 Driver App First-Launch Consent === */}
          <div className="mb-8">
            <h4 className="text-base font-bold text-gray-900 mb-2">
              2.2 TongLink Driver App First-Launch Consent · 司机端首启同意屏
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Shown on first launch of the native TongLink driver app (Android / iOS). Driver
              must tap &ldquo;Accept&rdquo; to enable SMS task notifications.
            </p>
            <div className="mx-auto" style={{ maxWidth: '320px' }}>
              <div className="border-[8px] border-gray-800 rounded-[36px] overflow-hidden bg-gray-900 shadow-lg">
                <div className="bg-gray-900 text-white text-[10px] px-4 py-1 flex justify-between">
                  <span>9:41</span>
                  <span>📶 📡 🔋</span>
                </div>
                <div className="bg-white px-5 py-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl">
                      🌈
                    </div>
                  </div>
                  <h5 className="text-center font-bold text-gray-900 mb-2">
                    Enable Notifications
                  </h5>
                  <h6 className="text-center text-sm text-gray-700 mb-4">开启通知</h6>
                  <p className="text-[11px] text-gray-700 mb-3">
                    Rainbow Logistics will send you <strong>SMS messages</strong> about:
                  </p>
                  <ul className="text-[11px] text-gray-700 list-disc ml-5 space-y-0.5 mb-3">
                    <li>New task assignments / 新任务派单</li>
                    <li>Appointment changes / 约时间变更</li>
                    <li>Pickup PIN updates / 提柜 PIN</li>
                    <li>ETA reminders / ETA 提醒</li>
                  </ul>
                  <p className="text-[10px] text-gray-500 mb-4 leading-snug">
                    Reply STOP to opt out. Standard rates may apply. By tapping Accept, you
                    agree to receive operational SMS at your registered mobile number.
                    <br />
                    回复 STOP 退订。点击同意即视为同意接收业务短信。
                  </p>
                  <button className="w-full bg-orange-600 text-white text-sm font-medium py-2.5 rounded-lg mb-2">
                    Accept · 同意接收
                  </button>
                  <button className="w-full text-gray-500 text-xs py-1">
                    Not now · 暂不开启
                  </button>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              ↑ Mockup of the native app consent screen. Tapping &ldquo;Accept&rdquo; calls
              Rainbow Logistics&apos; opt-in API and triggers a welcome SMS confirmation.
            </p>
          </div>

          {/* === 2.3 Paper Contract SMS Clause === */}
          <div className="mb-8">
            <h4 className="text-base font-bold text-gray-900 mb-2">
              2.3 Driver / Warehouse Contractor Agreement — SMS Clause · 司机/仓库合同 SMS 条款
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              All drivers and warehouse staff sign a contractor / employment agreement before
              their account is created. Section 9 of every agreement contains the SMS consent
              language reproduced verbatim below:
            </p>
            <div className="border border-gray-400 bg-gray-50 rounded shadow-inner p-6 font-serif text-[13px] leading-relaxed">
              <div className="text-center mb-4 pb-3 border-b border-gray-300">
                <p className="font-bold">CONTRACTOR / EMPLOYEE AGREEMENT</p>
                <p className="text-xs text-gray-600">Rainbow Logistics Inc. · 415 S 7th Ave, City of Industry, CA</p>
              </div>
              <p className="text-gray-500 text-[11px] mb-2">... pages 1-8 omitted ...</p>
              <div className="bg-yellow-100 border border-yellow-300 px-3 py-2 rounded">
                <p className="font-bold mb-1">9. SMS / Text-Message Communications</p>
                <p>
                  The undersigned <strong>consents to receive operational SMS text messages</strong>{' '}
                  from Rainbow Logistics Inc. at the mobile phone number provided in Section 1
                  &ldquo;Contact Information&rdquo; above. Such messages may include but are not
                  limited to: dispatch task assignments, appointment changes, pickup-PIN updates,
                  and ETA reminders. The undersigned understands that:
                </p>
                <ul className="list-disc ml-5 mt-1 space-y-0.5">
                  <li>Message frequency varies with dispatch activity</li>
                  <li>Standard carrier message and data rates may apply</li>
                  <li>The undersigned may opt out at any time by replying STOP to any message</li>
                  <li>Replying HELP returns support contact information</li>
                </ul>
                <p className="mt-1">
                  This consent is separate from email or push-notification consent and may be
                  revoked at any time without affecting employment / contractor status.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 text-xs">
                <div>
                  <div className="border-b border-gray-700 pb-0.5 mb-1">Driver Signature</div>
                  <div className="text-gray-600">Date: ____________</div>
                </div>
                <div>
                  <div className="border-b border-gray-700 pb-0.5 mb-1">Rainbow Logistics Authorized Rep.</div>
                  <div className="text-gray-600">Date: ____________</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              ↑ Verbatim reproduction of Section 9 from the standard driver/warehouse agreement.
              Account is not created in our dispatch system until the signed agreement is on file.
            </p>
          </div>
        </Section>

        <Section title="3. Sample Messages · 短信示例">
          <p className="mb-4 text-sm text-gray-600">
            Below are real templates used in production. Variables in <code>{'{braces}'}</code>{' '}
            are replaced at send time.<br />
            以下为生产实际使用的模板,<code>{'{}'}</code> 内为发送时填入的变量。
          </p>
          <div className="space-y-4">
            <SampleMessage
              category="Driver: Task Assignment"
              body={`【Rainbow】您有新任务 K0000123\n柜号: TGBU1234567 (40HQ)\n提柜约时: 05/20 14:30 ITS\n请在 TongLink 接单确认。\n\nNew task K0000123 assigned. Check TongLink app.\nReply STOP to opt out.`}
            />
            <SampleMessage
              category="Driver: ETA Reminder"
              body={`【Rainbow】任务 K0000123 距仓库约 8 分钟,请准备签到。\nTask K0000123 ~8 min to warehouse.\nReply STOP to unsubscribe.`}
            />
            <SampleMessage
              category="Warehouse: Container Arrived"
              body={`【Rainbow】柜 TGBU1234567 已到 415 仓,司机 张三 ( ABC123 )。\nContainer TGBU1234567 arrived at warehouse 415.\nReply STOP to unsubscribe.`}
            />
            <SampleMessage
              category="Customer: Status Update"
              body={`【Rainbow】您的柜 TGBU1234567 已拆柜完成 ( 137 箱 / 18 托盘 )。详情登录客户门户。\nYour container TGBU1234567 has been devanned.\nReply STOP to opt out.`}
            />
          </div>
        </Section>

        <Section title="4. STOP / HELP / START">
          <div className="space-y-3">
            <KeywordRow keyword="STOP" desc="Unsubscribe from all Rainbow Logistics SMS. We send one confirmation, then nothing further."
                       descZh="退订所有 Rainbow Logistics 短信。系统发送一条确认后不再发送任何短信。" />
            <KeywordRow keyword="HELP" desc="Receive help text with our support email and a link to this page."
                       descZh="收到帮助短信,含技术支持邮箱和本页链接。" />
            <KeywordRow keyword="START" desc="Resume SMS after STOP. You may also re-enable notifications in your TongLink app settings."
                       descZh="STOP 退订后,回复 START 可恢复;也可在 TongLink App 设置中重新开启。" />
          </div>
          <p className="mt-4 text-sm text-gray-600">
            For other questions:{' '}
            <a href="mailto:support@rainbowlogisticsus.com" className="text-orange-600 underline">
              support@rainbowlogisticsus.com
            </a>
            {' · '}
            <a href="tel:+18288886668" className="text-orange-600 underline">+1 (828) 888-6668</a>
          </p>
        </Section>

        <Section title="5. Cost · 费用">
          <p>
            Message and data rates may apply per your wireless carrier&apos;s plan.{' '}
            <strong>Rainbow Logistics does not charge you for SMS.</strong>
          </p>
          <p>可能产生运营商标准短信和数据费用。<strong>Rainbow Logistics 不收取短信费。</strong></p>
        </Section>

        <Section title="6. Privacy · 隐私">
          <p>
            We do not share your phone number or SMS history with third parties for marketing.
            Twilio is our SMS service provider and is bound by a data processing agreement. See
            the full <Link href="/privacy" className="text-orange-600 underline">Privacy Policy</Link>{' '}
            for retention, security, and your CCPA rights.
          </p>
          <p>
            我们不会将您的手机号或短信记录共享给第三方用于营销。Twilio 是我们的短信服务商,受数据处理协议约束。
            数据保留、安全和加州 CCPA 权利详见 <Link href="/privacy" className="text-orange-600 underline">隐私政策</Link>。
          </p>
        </Section>

        <Section title="7. Contact · 联系">
          <div className="p-4 bg-gray-50 rounded border border-gray-200 space-y-1 text-sm">
            <p><strong>Rainbow Logistics Inc.</strong></p>
            <p>Address · 地址: 415 S 7th Ave, City of Industry, CA 91746, USA</p>
            <p>Phone · 电话:{' '}
              <a href="tel:+18288886668" className="text-orange-600 hover:underline">+1 (828) 888-6668</a>
            </p>
            <p>Email · 邮箱:{' '}
              <a href="mailto:support@rainbowlogisticsus.com" className="text-orange-600 hover:underline">
                support@rainbowlogisticsus.com
              </a>
            </p>
            <p>Privacy · 隐私:{' '}
              <a href="mailto:privacy@rainbowlogisticsus.com" className="text-orange-600 hover:underline">
                privacy@rainbowlogisticsus.com
              </a>
            </p>
          </div>
        </Section>
      </main>

      <footer className="border-t border-gray-200 mt-12">
        <div className="mx-auto max-w-4xl px-6 py-6 text-center text-sm text-gray-500 space-x-4">
          <span>© {new Date().getFullYear()} Rainbow Logistics Inc. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-orange-600">Privacy</Link>
          <Link href="/terms" className="hover:text-orange-600">Terms</Link>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, titleZh: _titleZh, children }: { title: string; titleZh?: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 border-t border-gray-100 pt-6">
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <div className="text-gray-700 leading-relaxed space-y-3 text-sm">{children}</div>
    </section>
  );
}

function UserCard({ role, when, freq, freqZh }: { role: string; when: string[]; freq: string; freqZh: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <h4 className="font-semibold text-gray-900 mb-2">{role}</h4>
      <ul className="list-disc ml-5 text-xs text-gray-700 space-y-1">
        {when.map(w => <li key={w}>{w}</li>)}
      </ul>
      <div className="mt-3 pt-3 border-t border-gray-100 text-xs">
        <span className="text-gray-500">Frequency: </span>
        <span className="text-gray-800">{freq}</span>
        <br />
        <span className="text-gray-500">{freqZh}</span>
      </div>
    </div>
  );
}

function OptInRow({ user, steps }: { user: string; steps: React.ReactNode[] }) {
  return (
    <div className="mb-5 border border-gray-200 rounded-lg p-4 bg-gray-50">
      <p className="font-semibold text-gray-900 mb-2">{user}</p>
      <ul className="list-decimal ml-5 text-sm text-gray-700 space-y-2">
        {steps.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}

function SampleMessage({ category, body }: { category: string; body: string }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="px-3 py-2 bg-gray-100 text-xs font-medium text-gray-700">{category}</div>
      <pre className="px-3 py-3 text-xs text-gray-800 whitespace-pre-wrap font-mono bg-white">{body}</pre>
    </div>
  );
}

function FormField({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] text-gray-600 mb-0.5">{label}</label>
      <input
        readOnly
        value={value}
        className={`w-full px-3 py-1.5 text-sm border rounded ${
          highlight ? 'border-orange-400 bg-orange-50' : 'border-gray-300 bg-gray-50'
        }`}
      />
    </div>
  );
}

function KeywordRow({ keyword, desc, descZh }: { keyword: string; desc: string; descZh: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="shrink-0 inline-block min-w-[68px] px-2 py-1 bg-orange-100 border border-orange-300 rounded font-mono font-bold text-orange-800 text-center text-sm">
        {keyword}
      </span>
      <div className="text-sm text-gray-700">
        <p>{desc}</p>
        <p className="text-gray-500 text-xs mt-0.5">{descZh}</p>
      </div>
    </div>
  );
}
