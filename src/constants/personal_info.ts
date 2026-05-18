export const PERSONAL_INFO = {
  name_kr: import.meta.env.VITE_NAME_KR || '',
  name_en: import.meta.env.VITE_NAME_EN || '',
  email: import.meta.env.VITE_EMAIL || '',
  location_kr: import.meta.env.VITE_LOCATION_KR || '',
  location_en: import.meta.env.VITE_LOCATION_EN || '',
  github: import.meta.env.VITE_GITHUB || '',
  linkedin: import.meta.env.VITE_LINKEDIN || '',
  blog: import.meta.env.VITE_BLOG || '',
  university_kr: import.meta.env.VITE_UNIVERSITY_KR || '',
  university_en: import.meta.env.VITE_UNIVERSITY_EN || '',
  cv_path: import.meta.env.VITE_CV_PATH || '', // CV 경로도 환경 변수화
};
