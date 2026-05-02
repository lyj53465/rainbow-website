import { CheckCircle, Globe, Clock, Shield } from 'lucide-react';

export function About() {
  const advantages = [
    {
      icon: Globe,
      title: '地理优势',
      description: '位于洛杉矶工业市（City of Industry），毗邻美国西海岸核心物流走廊，快速连接洛杉矶国际机场（LAX）及南加州主要港口。依托工业市成熟的物流生态，周边集聚大量卡车、空运及快递枢纽资源，具备高度集中的中转能力与稳定运力，支持高频中转与快速分拨，适合大规模、高周转业务。',
    },
    {
      icon: Clock,
      title: '高效快捷',
      description: '依托系统化作业流程与 24/7 运营团队，实现货物到港即处理、到仓即分拨。支持当天提货、快速拆解与高频出库，有效缩短整体操作与交付周期，满足电商与高时效物流需求。',
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '全流程标准化操作与扫描校验机制，结合货物状态记录与轨迹追踪，确保每一票货物安全可控。完善的操作规范与风险管控体系，有效降低丢失、错发与异常风险。',
    },
    {
      icon: CheckCircle,
      title: '专业服务',
      description: '多年跨境物流与海外仓运营经验，熟悉空运、清关、监管及多渠道派送流程，为客户提供稳定、可落地的定制化物流解决方案，持续提升整体履约效率。',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 text-gray-900">关于我们</h2>
            <p className="text-lg text-gray-600 mb-6">
              Rainbow Logistics Inc 是一家位于美国洛杉矶的专业国际物流公司。我们专注于为客户提供高效、可靠的物流解决方案。
            </p>
            <p className="text-lg text-gray-600 mb-6">
              凭借洛杉矶得天独厚的地理位置，我们能够为客户提供海运拆柜、空运提货转派、Y2换单以及一件代发等全方位的物流服务。我们的专业团队拥有丰富的行业经验，致力于为每一位客户提供量身定制的物流方案。
            </p>
            <p className="text-lg text-gray-600">
              我们相信，通过我们的专业服务和不懈努力，能够帮助客户降低物流成本，提高运营效率，在激烈的市场竞争中占据优势。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
