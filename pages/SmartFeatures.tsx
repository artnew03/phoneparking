
import React from 'react';
import { IMAGES } from '../constants';

const SmartFeatures: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">손가락 하나로 열리는 주차장</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            복잡한 설정 필요 없이, 누구나 쉽게 사용할 수 있는 스마트 주차 앱을 제공합니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-6 bg-black flex justify-center">
                <div className="w-20 h-4 bg-gray-800 rounded-b-xl"></div>
              </div>
              <div className="p-4 pt-10 h-full flex flex-col bg-blue-600 text-white">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold">PARKING SMART</span>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                    <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm10 15a1 1 0 110-2 1 1 0 010 2z"/></svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">우리집 주차장</h4>
                  <p className="text-blue-100 text-sm mb-8">현재 닫힘 상태</p>
                  <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-transform">
                    문 열기
                  </button>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-xs text-blue-200 mb-2 uppercase font-bold tracking-widest">최근 기록</p>
                  <div className="space-y-3">
                    <div className="bg-white/10 p-3 rounded-lg text-xs flex justify-between">
                      <span>방문차량 (123가 4567)</span>
                      <span>14:32</span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-xs flex justify-between">
                      <span>201호 입주민</span>
                      <span>12:10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-10">스마트 앱 주요 기능</h2>
            <div className="space-y-10">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">원격 개폐 기능</h3>
                  <p className="text-gray-600 leading-relaxed">전국 어디서나 인터넷만 된다면 터치 한 번으로 차단기를 열고 닫을 수 있습니다. 방문자가 왔을 때 멀리서도 문을 열어주세요.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">가족/입주민 권한 공유</h3>
                  <p className="text-gray-600 leading-relaxed">입주민들의 전화번호만 등록하면 별도의 가입 없이도 바로 사용할 수 있습니다. 이사 갈 때는 삭제도 간편합니다.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">출입 기록 실시간 조회</h3>
                  <p className="text-gray-600 leading-relaxed">누가 언제 차단기를 열었는지 실시간으로 로그가 기록됩니다. 보안 사고 발생 시 증거 자료로 활용 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartFeatures;
