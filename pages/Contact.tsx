
import React, { useState } from 'react';
import { CONTACT_PHONE } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real logic would send to API
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">견적 신청이 완료되었습니다!</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          담당 기사가 영업시간 기준 1시간 이내에 전화를 드려 상세 상담 및 방문 일정을 조율해 드립니다.
        </p>
        <button 
          onClick={() => window.location.hash = "/"}
          className="bg-primary text-white px-8 py-4 rounded-lg font-bold"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-black mb-6">무료 방문 견적 신청</h1>
            <p className="text-xl text-gray-600 mb-12">
              정확한 견적을 위해 전문 기사가 현장을 방문하여 실측해 드립니다.<br />
              (방문 및 견적 도출 비용 0원)
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 text-primary flex items-center justify-center rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">전화 상담</h4>
                  <p className="text-2xl font-black text-primary">{CONTACT_PHONE}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-50 text-yellow-600 flex items-center justify-center rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">카카오톡 1:1 상담</h4>
                  <p className="text-gray-600 underline">@파킹스마트_상담봇</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">성함</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">연락처</label>
                  <input required type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="010-0000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">설치 희망 주소</label>
                <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="서울시 강남구..." />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">주차 면수 (대략적으로)</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none">
                  <option>5대 미만</option>
                  <option>5~10대</option>
                  <option>10~20대</option>
                  <option>20대 이상</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">문의 내용</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="문의하실 내용을 입력해 주세요."></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input required type="checkbox" className="mt-1" id="privacy" />
                <label htmlFor="privacy" className="text-xs text-gray-500 leading-normal">
                  개인정보 수집 및 이용에 동의합니다. (수집항목: 이름, 연락처, 주소 | 수집목적: 상담 및 방문 일지 조율)
                </label>
              </div>
              <button type="submit" className="w-full bg-secondary hover:bg-orange-600 text-white font-black py-4 rounded-xl text-lg transition-all shadow-lg active:scale-95">
                견적 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
