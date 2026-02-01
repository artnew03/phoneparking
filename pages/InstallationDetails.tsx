
import React from 'react';
import { IMAGES } from '../constants';

const InstallationDetails: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">설치 상세 정보</h1>
          <p className="text-xl opacity-80">어떤 환경이든 3시간이면 시공이 완료됩니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">시공 과정 타임라인</h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "현장 방문 및 실측", desc: "전문 기사가 직접 방문하여 최적의 설치 위치와 각도를 계산합니다." },
                { step: "02", title: "기초 베이스 작업", desc: "차단기가 흔들림 없이 고정되도록 바닥 보강 작업을 수행합니다." },
                { step: "03", title: "하드웨어 장착", desc: "고내구성 차단기 본체와 스마트 수신 모듈을 장착합니다." },
                { step: "04", title: "시스템 세팅", desc: "모바일 연동 테스트 및 입주민 권한 설정 가이드를 제공합니다." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="flex-shrink-0 w-12 h-12 bg-blue-50 text-primary font-black flex items-center justify-center rounded-xl text-xl border border-blue-100">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={IMAGES.installation} alt="Installation" className="rounded-3xl shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
              <p className="text-sm font-bold text-gray-500 mb-1">총 소요 시간</p>
              <p className="text-3xl font-black text-primary">약 180분</p>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <h2 className="text-3xl font-bold text-center mb-12">하드웨어 스펙</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead className="bg-gray-50 text-gray-500 text-sm">
                <tr>
                  <th className="px-8 py-4 font-semibold uppercase">항목</th>
                  <th className="px-8 py-4 font-semibold uppercase">상세 사양</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-900">본체 재질</td>
                  <td className="px-8 py-6 text-gray-600">고강도 아연 도금 강판 (부식 방지 특수 코팅)</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-900">바 넓이</td>
                  <td className="px-8 py-6 text-gray-600">3m ~ 6m 선택 가능 (LED 바 내장형)</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-900">개폐 속도</td>
                  <td className="px-8 py-6 text-gray-600">2.5초 ~ 4초 (설정 조절 가능)</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-900">사용 전압</td>
                  <td className="px-8 py-6 text-gray-600">AC 220V (대기 전력 10W 미만 저전력 설계)</td>
                </tr>
                <tr>
                  <td className="px-8 py-6 font-bold text-gray-900">동작 온도</td>
                  <td className="px-8 py-6 text-gray-600">-30℃ ~ 70℃ (혹한/혹서기 완벽 대응)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationDetails;
