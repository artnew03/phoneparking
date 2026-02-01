
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  address: string;
  parkingSpots: string;
  message: string;
}
