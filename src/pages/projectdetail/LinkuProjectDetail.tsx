import { useNavigate } from 'react-router-dom';
import HeaderCom from '../..//components/headers/HeaderCom';
import HERO_BG from '../../assets/imgs/projects/LINKU/head-bg.png';
import {
  ProjectHero,
  SectionDivider,
  SectionTitle,
  ContentCard,
  ImagePlaceholder,
  PieChart,
  StatCard,
} from '../../components/projects/detail';
import type { PieSlice } from '../../components/projects/detail';

const PIE_DATA: PieSlice[] = [
  { label: '나 42%', pct: 42, fill: '#121212' },
  { label: '팀원1 28%', pct: 28, fill: '#666' },
  { label: '팀원2 19%', pct: 19, fill: '#999' },
  { label: '팀원3 11%', pct: 11, fill: '#ccc' },
];

const LinkuProjectDetail = () => {
  const navigate = useNavigate();

  // 헤더 메뉴 클릭 시 처리 로직
  const handleHeaderAction = (name: string) => {
    if (name === 'Projects') {
      // 이미 프로젝트 상세이므로 최상단으로 이동
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // 메인 페이지의 해당 섹션으로 이동
      navigate('/');
      // 메인 페이지 이동 후 특정 섹션 스크롤 로직은
      // MainPage의 useEffect나 Global State로 처리하는 것이 일반적입니다.
    }
  };

  return (
    <div className="min-h-screen font-['Pretendard']" style={{ backgroundColor: '#f9f9fd' }}>
      {/* ── 고정 헤더 ── */}
      <HeaderCom activeSection="Projects" setActiveSection={handleHeaderAction} />

      {/* 헤더 높이(86px)만큼 pt를 주어 콘텐츠가 가려지지 않게 함 */}
      <div className="pt-[86px]">
        {/* ── Hero 영역 ── */}
        <ProjectHero bgImage={HERO_BG} />

        {/* ── 메인 콘텐츠 영역 ── */}
        <main className="mx-auto max-w-[1600px] px-[100px]">
          {/* 1. Security Section */}
          <section className="pt-[48px]">
            <SectionDivider />
            <div className="pt-[48px]">
              <SectionTitle>Security</SectionTitle>
            </div>
            <div className="mt-[48px]">
              <ContentCard
                title="AWS CloudFront를 활용해 이미지 보안"
                tags={['Security EXP+']}
                paragraphs={[
                  {
                    label: '(문제점) Public S3의 보안 리스크와 비용 위협',
                    content:
                      '기존 LINKU 프로젝트는 S3를 Public으로 열어 이미지 URL을 직접 서빙했습니다. UMC 백엔드 컨퍼런스를 통해 이 구조의 리스크를 인식하게 됐는데, URL 열거 공격, S3Scanner·Shodan 같은 자동화 봇의 버킷 스캔, 그리고 악성 사이트의 Hotlinking으로 인한 비용 폭탄이 실제로 발생 가능한 위협이었습니다.',
                  },
                  {
                    label: '(고민) 보안과 사용성 사이의 트레이드오프(Trade-off)',
                    content:
                      'Presigned URL도 검토했지만 두 가지 이유로 제외했습니다. 첫째, Presigned URL은 AWS Access Key 기반 서명이 URL 쿼리에 노출되어 Android APK 역분석 시 자격증명 탈취 가능성이 있었습니다. 둘째, 유효시간이 만료될 때마다 백엔드에 재요청이 필요해 앱 사용성이 저하됩니다.',
                  },
                  {
                    label: '(해결) Private 전환과 Origin Access Control(OAC) 적용',
                    content:
                      'S3를 Private로 전환하고 OAC을 적용했습니다. S3 버킷 정책은 CloudFront 배포 ARN에서만 s3:GetObject를 허용하도록 제한했고, Spring Boot 코드에서는 getFileUrl()이 S3 URL 대신 CloudFront 도메인을 반환하도록 수정했습니다.',
                  },
                  {
                    label: '(효과) 1.5배 빠른 응답 속도와 구조적 보안 완성',
                    content:
                      '성능 측정 결과, S3 직접 접속 시 평균 0.56s였던 응답 속도가 CloudFront 도입 후 Cache Hit 기준 0.29s로 단축되었습니다. 보안 측면에서도 실제 저장소 주소를 노출하지 않아 자동화 봇 공격을 원천 차단했습니다.',
                  },
                ]}
              />
            </div>
            <div className="mt-[40px] flex h-[400px] gap-[24px]">
              <ImagePlaceholder
                label="CloudFront vs S3 Public 응답 비교 (차트)"
                className="h-[400px] w-[688px] shrink-0 rounded-[12px]"
              />
              <ImagePlaceholder label="AWS CloudFront Console" className="h-[400px] flex-1 rounded-[12px]" />
            </div>
          </section>

          {/* 2. DB Design Section */}
          <section className="pt-[80px]">
            <SectionDivider />
            <div className="pt-[48px]">
              <SectionTitle>DB Design</SectionTitle>
            </div>
            <div className="mt-[48px] flex h-[600px] gap-[40px]">
              <ImagePlaceholder label="Phone Mockup" className="h-[600px] w-[480px] shrink-0 rounded-[24px]" />
              <ImagePlaceholder label="Study Log" className="h-[600px] flex-1 rounded-[12px]" />
            </div>
            <div className="mt-[40px]">
              <ContentCard
                title="DB 설계의 중요성; 소셜로그인과 회원가입 로직"
                tags={['Security EXP+', 'DB Design EXP+']}
                paragraphs={[
                  {
                    label: '(문제점) 1:1 매칭의 한계와 데이터 파편화',
                    content:
                      '초기 설계에서는 Users 테이블에서 직접 email을 기본 식별자로 관리했습니다. 소셜 로그인 확장 시 동일 사용자가 여러 경로로 가입할 때 데이터가 파편화되는 문제가 발생했습니다.',
                  },
                  {
                    label: '(해결) 엔티티 분리와 위조 불가능한 식별자(External ID) 도입',
                    content:
                      '하나의 User가 여러 AuthAccount를 가질 수 있도록 1:N 관계로 개편했습니다. 변하지 않는 고유값인 externalId를 핵심 식별자로 활용하도록 재설계했습니다.',
                  },
                ]}
              />
            </div>
          </section>

          {/* 3. DevOps Section */}
          <section className="pt-[80px]">
            <SectionDivider />
            <div className="pt-[48px]">
              <SectionTitle>DevOps</SectionTitle>
            </div>
            <div className="mt-[48px]">
              <ContentCard
                title="Redis cloud 적용기"
                tags={['DevOps EXP+', 'AWS EXP+']}
                paragraphs={[
                  {
                    label: '(문제점) 알 수 없는 외부 IP와의 동기화 실패',
                    content:
                      'Redis가 Standalone이 아닌 Slave 모드로 동작하며 외부 IP를 MASTER로 인식해 동기화가 무한 반복되는 장애가 발생했습니다.',
                  },
                  {
                    label: '(해결) Redis Cloud 마이그레이션',
                    content:
                      '로컬 환경의 불안정한 설정을 벗어나 안정적인 운영을 위해 Redis Cloud로 이전했습니다. 클라우드 대시보드를 통해 실시간 메트릭 모니터링이 가능해졌습니다.',
                  },
                ]}
              />
            </div>
            <div className="mt-[40px]">
              <ImagePlaceholder label="Redis Cloud Dashboard" className="h-[400px] w-full rounded-[12px]" />
            </div>
          </section>

          {/* 4. MY Contribution Section */}
          <section className="pt-[80px] pb-[120px]">
            <SectionDivider />
            <div className="mt-[48px] flex items-baseline gap-[24px]">
              <h2 className="m-0 text-[64px] leading-[80px] font-bold text-[rgba(18,18,18,0.81)]">MY Contribution</h2>
              <span className="text-[28px] leading-[42px] font-medium text-[rgba(18,18,18,0.81)]">기여도 : 60%</span>
            </div>

            <div className="mt-[40px] flex gap-[40px]">
              {/* Pie chart */}
              <div className="w-[500px] shrink-0">
                <p className="mt-0 mb-[8px] text-[20px] font-semibold text-black">팀원별 기여도</p>
                <PieChart data={PIE_DATA} />
              </div>

              {/* Stats Summary */}
              <div className="flex flex-1 flex-col gap-[16px]">
                <p className="mt-0 mb-0 text-[20px] font-semibold text-black">개발 지표 요약</p>
                <StatCard label="총 커밋 수" value="847" delta="+12% from last month" />
                <StatCard label="해결한 이슈" value="156" delta="+8% from last month" />
                <StatCard label="PR 머지 수" value="203" delta="+15% from last month" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LinkuProjectDetail;
