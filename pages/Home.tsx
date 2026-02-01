
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${IMAGES.hero})` }}
      >
        <div className="max-w-4xl px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            외부 차량 스트레스,<br />
            <span className="text-secondary">스마트폰 하나</span>로 끝내세요.
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            리모컨 없이 간편하게, 관리인 없이 철저하게.<br />
            우리 빌라 주차장, 이제 스마트하게 관리하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-transform hover:-translate-y-1"
            >
              무료 방문 견적 신청하기
            </Link>
            <Link 
              to="/smart-features" 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-md border border-white/50 transition-all"
            >
              기능 자세히 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              아직도 무단 주차 때문에 고통받으시나요?
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl text-center border border-gray-100">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">무단 주차 차량</h3>
              <p className="text-gray-600">내 차 세울 곳도 없는데 외부 차량이 떡하니 주차된 스트레스</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl text-center border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">관리의 어려움</h3>
              <p className="text-gray-600">입주민마다 리모컨을 챙겨줘야 하고, 분실 시 매번 재구매</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl text-center border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">비싼 설치 비용</h3>
              <p className="text-gray-600">수백만원을 호가하는 대형 주차 시스템은 부담스럽기만 합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Banner */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                스마트폰 연동,<br />
                가장 확실하고 저렴한 해결책
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="bg-secondary rounded-full p-1"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></span>
                  리모컨 분실 걱정 없는 100% 모바일 연동
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-secondary rounded-full p-1"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></span>
                  입주민 등록/삭제가 터치 한 번으로 끝
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-secondary rounded-full p-1"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></span>
                  기존 방식 대비 설치 비용 30% 절감
                </li>
              </ul>
              <div className="mt-12">
                <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
                  상세 견적 알아보기
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={IMAGES.appControl} 
                alt="App Control" 
                className="rounded-3xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Review/Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              실제 설치 건물주님들의 만족도 98%
            </h2>
            <p className="text-gray-600">더 이상 주차 시비로 이웃과 얼굴 붉히지 마세요.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "김태호 님 (상가주택)", text: "매일 아침 외부 차량이랑 싸우는게 일이었는데 설치하고 나서 마음이 너무 편해요. 리모컨 안줘도 되니까 관리도 편합니다." },
              { name: "이영희 님 (빌라 대표)", text: "비용 걱정 때문에 망설였는데 견적이 생각보다 저렴해서 바로 했습니다. 입주민들도 다들 스마트폰으로 여니 편하다고 난리네요." },
              { name: "박성민 님 (원룸 건물)", text: "새벽에 술 취한 사람들이 주차하고 도망가는 일도 이젠 없네요. 출입 기록까지 다 확인되니까 안심이 됩니다." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <p className="font-bold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            지금 신청하시면 <span className="text-secondary">첫 달 출장 점검</span>이 무료!
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            복잡한 고민은 저희가 할게요. 사장님은 편하게 지켜만 보세요.
          </p>
          <Link to="/contact" className="inline-block bg-secondary hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl">
            무료 상담 및 견적 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
