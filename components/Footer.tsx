
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-800 pb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">PARKING SMART</h3>
            <p className="text-sm leading-relaxed">
              소규모 빌라 및 상가 건물의 주차 고민을 기술로 해결합니다.<br />
              대한민국 No.1 모바일 연동 주차 시스템 전문 기업
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">메뉴</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/installation-details" className="hover:text-white transition-colors">설치 상세 정보</a></li>
              <li><a href="#/smart-features" className="hover:text-white transition-colors">스마트 기능</a></li>
              <li><a href="#/about-service" className="hover:text-white transition-colors">서비스 소개</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">견적 문의</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">고객 지원</h4>
            <p className="text-sm">고객센터: 1588-0000</p>
            <p className="text-sm">평일: 09:00 - 18:00 (주말/공휴일 휴무)</p>
            <p className="text-sm">이메일: support@parkingsmart.com</p>
          </div>
        </div>
        <div className="text-xs text-gray-500">
          <p>© 2024 Parking Smart Co., Ltd. All rights reserved.</p>
          <p className="mt-2">사업자등록번호: 000-00-00000 | 대표이사: 홍길동 | 주소: 서울특별시 강남구 테헤란로 123</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
