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

        <Section title="2. How You Opt In · 如何 Opt-in">
          <p className="mb-4">
            All SMS opt-in is <strong>explicit and individual</strong>. By providing your mobile
            phone number through the channel below, you give Rainbow Logistics consent to send SMS
            messages described above. SMS opt-in is <em>distinct</em> from email or push-notification
            opt-in.
          </p>
          <p className="mb-4">
            所有 opt-in 都<strong>明确且个人</strong>。通过下方任一渠道提供手机号,即视为同意接收上述短信。
            短信 opt-in 与邮件/推送通知 opt-in <em>分别独立</em>。
          </p>

          <OptInRow
            user="Drivers · 司机"
            steps={[
              <>
                During onboarding, dispatch creates a driver account with your mobile number.
                You sign a contractor agreement that includes:{' '}
                <em>&ldquo;I consent to receive SMS notifications related to my dispatch tasks
                from Rainbow Logistics.&rdquo;</em>
              </>,
              <>司机入职时,调度根据您签订的合同(含&ldquo;同意接收任务派单相关短信&rdquo;条款)在系统中创建账户并录入手机号。</>,
              <>
                On first login to the <strong>TongLink driver app</strong> (Android / iOS), you
                see a notification consent screen and tap <strong>&ldquo;Accept&rdquo;</strong>.
                A welcome SMS is sent: <em>&ldquo;Rainbow Logistics 司机端已激活。回复 STOP 退订
                / Reply STOP to opt out.&rdquo;</em>
              </>,
            ]}
          />

          <OptInRow
            user="Warehouse Staff · 仓库员"
            steps={[
              <>
                HR enters your phone number when creating your employee profile in the OCOP HR
                system, after you sign the offer letter that includes SMS consent language.
              </>,
              <>人事在签订录用书(含短信同意条款)后,在 OCOP HR 系统创建员工档案并录入手机号。</>,
              <>
                Login to the <strong>TongLink warehouse app</strong> triggers a welcome SMS with
                opt-out instructions.
              </>,
            ]}
          />

          <OptInRow
            user="Customers · 客户"
            steps={[
              <>
                When signing your <strong>Service Agreement</strong> with Rainbow Logistics, you
                tick a checkbox: <em>&ldquo;I consent to receive SMS notifications about my
                shipments at the phone number provided above.&rdquo;</em>
              </>,
              <>客户签订《服务合作协议》时,在合同中勾选&ldquo;同意以所留手机号接收发货状态短信通知&rdquo;。</>,
              <>
                Alternatively, you may sign up online at the <strong>customer portal</strong>
                {' '}(/customer/register) and explicitly tick the SMS opt-in box before submitting.
                A welcome SMS confirms the subscription.
              </>,
              <>或通过客户门户在线注册,在提交前勾选 SMS opt-in 复选框。注册后系统发送欢迎短信确认订阅。</>,
            ]}
          />
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
