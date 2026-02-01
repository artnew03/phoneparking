
import React, { useState } from 'react';

const AboutService: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { question: "앱 사용이 어렵지 않나요? 연세 드신 분들도 계신데..", answer: "저희 앱은 '원터치 방식'으로 설계되어 있습니다. 화면 중앙의 큰 버튼 하나만 누르면 작동하므로 70대 어르신들도 1분이면 사용법을 익히실 수 있습니다." },
    { question: "정전이 되면 어떻게 하나요?", answer: "정전 시 수동으로 차단기를 개방할 수 있는 전용 수동키를 기본 제공해 드립니다. 전기가 들어오지 않아도 차량 입출차에는 전혀 문제가 없습니다." },
    { question: "인터넷이 꼭 연결되어 있어야 하나요?", answer: "네, 실시간 모바일 제어를 위해 와이파이 혹은 LTE 통신 모듈이 필요합니다. 통신 환경이 없는 경우 저희가 저렴한 요금제의 통신사를 연결해 드립니다." },
    { question: "A/S는 어떻게 되나요?", answer: "설치 후 1년간 무상 보증 서비스를 제공합니다. 하드웨어 결함 발생 시 24시간 이내 현장 방문을 원칙으로 하고 있습니다." }
  ];

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-8">기술로 이웃 간의 평화를 만듭니다.</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            '파킹 스마트'는 단순한 기계 설치를 넘어, <br />
            무단 주차로 인한 갈등을 해소하고 쾌적한 주거 환경을 만드는 IT 솔루션 기업입니다.<br />
            전국 500여 개 소규모 빌라/상가의 신뢰를 받고 있습니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-primary font-black text-3xl mb-1">500+</p>
              <p className="text-sm text-gray-500 font-bold uppercase">설치 실적</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-primary font-black text-3xl mb-1">98%</p>
              <p className="text-sm text-gray-500 font-bold uppercase">고객 만족도</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-primary font-black text-3xl mb-1">24h</p>
              <p className="text-sm text-gray-500 font-bold uppercase">A/S 대응</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-primary font-black text-3xl mb-1">12M</p>
              <p className="text-sm text-gray-500 font-bold uppercase">무상 보증</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">자주 묻는 질문 (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === idx && (
                <div className="px-8 pb-8 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutService;
