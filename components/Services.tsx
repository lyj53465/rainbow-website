import { Ship, Plane, FileText, Package, Check, Zap, TruckIcon, Shield, Settings, Share2, FileCheck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      icon: Ship,
      title: '海运拆柜服务',
      subtitle: '以拆柜与快速转运为核心的海运配套服务',
      description: '我们提供以海运到港拆柜与快速中转为核心的配套型服务，主要承接 40FT / 45FT 海柜的现场拆解与转运需求。通过规范化操作流程与高周转作业模式，协助客户实现货物从港口到下一运输环节的高效衔接，避免不必要的滞港与等待。',
      features: [
        '40FT / 45FT 海运柜拆柜操作',
        '以整柜（FCL）到港拆解为主',
        '按 SKU / PO / 目的地进行基础分拣',
        '拆柜现场拍照与异常情况记录',
        '拆柜后快速转运或短期过渡暂存',
        '对接卡车、UPS、FedEx 等后续出货',
        '以"快进快出"为导向的高周转操作模式',
      ],
      useCases: [
        '海运到港后需快速转空运或快递',
        '项目型或指定客户的海运操作',
        '不涉及长期上架与库存管理的货物',
        '以中转效率为优先的业务需求',
      ],
      tags: ['海运拆柜', '40/45 尺海柜', '快速中转', '港口配套', '高周转操作'],
      image: 'https://images.unsplash.com/photo-1663103746090-2e4274c6c7ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHBvcnR8ZW58MXx8fHwxNzY0NDQ0NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Plane,
      title: '空运提拆转派服务',
      subtitle: '系统驱动 · 高速提货 · 全程可追踪 · 一条龙监管支持',
      description: '覆盖洛杉矶机场及周边货站的空运提拆转派服务，支持普货与高时效货物处理，通过系统化协同实现当日提货、快速拆解、极速转派，缩短整体交付周期并确保全程可控。',
      highlight: '每天都有 UPS / FedEx 大柜出货 · 支持周末不停运\n监管仓 + 系统化操作 · 从提货到出库全程可追踪',
      advantages: [
        { label: '提货快', icon: Zap },
        { label: '出库快', icon: TruckIcon },
        { label: '安全强', icon: Shield },
        { label: '系统化', icon: Settings },
        { label: '渠道多', icon: Share2 },
        { label: '监管支持', icon: FileCheck },
      ],
      features: [
        '空运主单 / 分单提货（MAWB / HAWB）',
        '货站快速提货（Cargo Terminal Pickup）',
        '清关资料协助与文件校验',
        '快速拆解与精准分拣',
        'UPS / FedEx / 本地卡车转派',
        '实时状态更新与追踪',
        '紧急货优先处理机制',
        '监管仓规范作业 & 合规保障',
      ],
      tags: ['空运货物', 'LAX提货', '转运装卸', '时效货物'],
      image: 'https://images.unsplash.com/photo-1713846047266-12aa96cbbb6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMGFpcnBsYW5lJTIwZnJlaWdodHxlbnwxfHx8fDE3NjQ0NDQ1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: FileText,
      title: 'Y2 换单服务',
      subtitle: 'TEMU 合规换单 · 监管仓支持 · 更省税的高速出货方案',
      description: '基于 TEMU 政策推出的专业 Y2 换单服务，支持空运提货后快速换单与转派，帮助客户实现税费优化、渠道灵活切换与高效出货。依托监管仓能力与成熟操作流程，确保从提货到换单再到派送的每一步都安全、合规、顺畅无阻。',
      features: [
        'TEMU 合规换单，支持税费优化',
        '监管仓操作，合规无风险',
        '空运提货 + 仓内快速处理',
        '批量换单与高频出货能力',
        '支持 Gofo / Uniuni / SpeedX 等电商小包渠道',
        '支持 UPS / FedEx 等主流承运商',
        '系统校验 + 标签更换 + 实时反馈',
        '换单后无障碍派送，稳定妥投',
      ],
      tags: ['TEMU 换单', '省税方案', '空运提货', '监管仓操作', '多渠道派送', '高频出货'],
      image: 'https://images.unsplash.com/photo-1644079446600-219068676743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY0MzgxOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Package,
      title: '一件代发',
      subtitle: '多渠道覆盖 · 高频发货 · TEMU 合作仓履约服务',
      description: '面向跨境电商卖家提供灵活稳定的一件代发服务，支持多平台、多渠道派送及高频出货需求。依托 TEMU 合作仓能力与成熟履约体系，实现快速处理、持续发货、稳定妥投，让您的订单在美国市场运转更高效。',
      features: [
        'TEMU 合作仓履约服务',
        '多平台，多电商业务场景支持',
        'Gofo / Uniuni / SpeedX 等小包渠道直连',
        '高频 USPS 出货能力，覆盖全美',
        'UPS / FedEx / 本地派送渠道同步支持',
        '订单自动导入 & 系统化处理',
        '仓内拣货 · 打包 · 贴标一体化',
        '七天无休运营，支持高峰期爆发',
      ],
      tags: ['履约服务', '一件代发', 'TEMU合作仓', '多渠道派送', 'USPS高频', '全周运营'],
      image: 'https://images.unsplash.com/photo-1724770388461-58567b88f395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2NDQ0NDU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">我们的服务</h2>
          <p className="text-xl text-gray-600">为您提供全方位的物流解决方案</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl text-gray-900">{service.title}</h3>
                </div>

                {/* Subtitle */}
                <p className="text-purple-600 mb-4">{service.subtitle}</p>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Highlight */}
                {service.highlight && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-4 mb-6 rounded-r-lg">
                    <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{service.highlight}</p>
                  </div>
                )}

                {/* Advantages */}
                {service.advantages && (
                  <div className="mb-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {service.advantages.map((advantage, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                            <advantage.icon className="w-4 h-4 text-gray-500" />
                          </div>
                          <span className="text-sm">{advantage.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-700">
                        <Check className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                {service.useCases && (
                  <div className="mb-6">
                    <h4 className="text-sm text-gray-900 mb-3">适用场景</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.useCases.map((useCase, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-700">
                          <Check className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
