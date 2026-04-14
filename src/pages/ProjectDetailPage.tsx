import { useNavigate } from 'react-router-dom';

const HERO_BG = 'https://www.figma.com/api/mcp/asset/22bbea46-544a-499a-82fd-1bd29ae04ea9';

// ─── Sub-components ────────────────────────────────────────────────────────

const SectionDivider = () => <div className="mx-[80px] h-[8px] border-4 border-[rgba(0,0,0,0.08)]" />;

const SectionTitle = ({ italic = true, children }: { italic?: boolean; children: React.ReactNode }) => (
  <h2
    className="m-0 text-[64px] text-[rgba(18,18,18,0.81)]"
    style={{
      fontFamily: 'Pretendard',
      fontStyle: italic ? 'italic' : 'normal',
      fontWeight: 500,
      lineHeight: '80px',
      textDecoration: italic ? 'underline' : 'none',
    }}>
    {children}
  </h2>
);

interface Paragraph {
  label: string;
  content: string;
}

interface ContentCardProps {
  title: string;
  tags: string[];
  paragraphs: Paragraph[];
}

const ContentCard = ({ title, tags, paragraphs }: ContentCardProps) => (
  <div className="overflow-hidden rounded-[13px] border border-[#9e9e9e] bg-white/80">
    {/* Header */}
    <div className="flex h-[84px] items-center gap-[16px] bg-[rgba(255,254,253,0.81)] px-[40px]">
      <span
        className="text-[28px] whitespace-nowrap text-[#121212]"
        style={{ fontFamily: 'Pretendard', fontWeight: 700, lineHeight: '36px' }}>
        {title}
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex h-[44px] shrink-0 items-center rounded-full border-2 border-[#636363] px-[20px] text-[16px] whitespace-nowrap text-[#636363]"
          style={{ fontFamily: 'Pretendard', fontWeight: 500 }}>
          {tag}
        </span>
      ))}
    </div>
    {/* Divider */}
    <div className="h-px bg-[#9e9e9e]" />
    {/* Body */}
    <div className="flex flex-col gap-[20px] px-[40px] py-[32px]">
      {paragraphs.map((p, i) => (
        <div key={i}>
          <p
            className="mb-0 leading-[28px] text-[rgba(18,18,18,0.81)]"
            style={{ fontFamily: 'Pretendard', fontWeight: 700, fontSize: '18px' }}>
            {p.label}
          </p>
          <p
            className="m-0 leading-[28px] text-[rgba(18,18,18,0.81)]"
            style={{ fontFamily: 'Pretendard', fontWeight: 700, fontSize: '18px' }}>
            {p.content}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const ImagePlaceholder = ({ label, className = '' }: { label: string; className?: string }) => (
  <div className={`flex items-center justify-center bg-[#d9d9d9] ${className}`}>
    <span className="text-[14px] text-[#888]" style={{ fontFamily: 'Pretendard', fontWeight: 400 }}>
      {label}
    </span>
  </div>
);

// ─── Pie Chart ─────────────────────────────────────────────────────────────

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function slicePath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const p1 = polarToCartesian(cx, cy, r, startAngle);
  const p2 = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${p1.x} ${p1.y} A ${r} ${r} 0 ${large} 1 ${p2.x} ${p2.y} Z`;
}

const PieChart = () => {
  const cx = 180;
  const cy = 180;
  const r = 130;
  const lineR = r + 8;
  const labelR = r + 24;

  const data = [
    { label: '나 42%', pct: 42, fill: '#121212' },
    { label: '팀원1 28%', pct: 28, fill: '#666' },
    { label: '팀원2 19%', pct: 19, fill: '#999' },
    { label: '팀원3 11%', pct: 11, fill: '#ccc' },
  ];

  let cumAngle = 0;
  const slices = data.map((d) => {
    const start = cumAngle;
    const span = (d.pct / 100) * 360;
    cumAngle += span;
    const mid = start + span / 2;
    return { ...d, start, end: cumAngle, mid };
  });

  return (
    <svg width="500" height="360" viewBox="0 0 500 360">
      {slices.map((s) => (
        <path key={s.label} d={slicePath(cx, cy, r, s.start, s.end)} fill={s.fill} />
      ))}
      {slices.map((s) => {
        const lineStart = polarToCartesian(cx, cy, lineR, s.mid);
        const lineEnd = polarToCartesian(cx, cy, labelR, s.mid);
        const isRight = lineEnd.x >= cx;
        const textAnchor = isRight ? 'start' : 'end';
        const textX = isRight ? lineEnd.x + 6 : lineEnd.x - 6;
        const strokeColor = s.fill === '#ccc' ? '#aaa' : s.fill;
        return (
          <g key={`lbl-${s.label}`}>
            <line
              x1={lineStart.x}
              y1={lineStart.y}
              x2={lineEnd.x}
              y2={lineEnd.y}
              stroke={strokeColor}
              strokeWidth={1.5}
            />
            <text
              x={textX}
              y={lineEnd.y + 4}
              textAnchor={textAnchor}
              fontSize="12"
              fill={strokeColor}
              fontFamily="Pretendard, sans-serif">
              {s.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// ─── Stat Card ─────────────────────────────────────────────────────────────

const StatCard = ({ label, value, delta }: { label: string; value: string; delta: string }) => (
  <div className="flex flex-col gap-[8px] rounded-[10px] border border-[#e5e7eb] bg-white px-[25px] py-[21px]">
    <p className="m-0 text-[13px] text-[#6b7280]" style={{ fontFamily: 'Pretendard', fontWeight: 500 }}>
      {label}
    </p>
    <div className="flex items-end justify-between">
      <p
        className="m-0 text-[32px] leading-[48px] text-[#111827]"
        style={{ fontFamily: 'Pretendard', fontWeight: 700 }}>
        {value}
      </p>
      <p className="m-0 text-[13px] text-[#10b981]" style={{ fontFamily: 'Pretendard' }}>
        {delta}
      </p>
    </div>
  </div>
);

// ─── Page ──────────────────────────────────────────────────────────────────

const ProjectDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f9f9fd' }}>
      {/* ── Hero ── */}
      <div className="relative h-[820px] overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: 'center top' }}
        />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-[32px] left-[40px] z-10 flex cursor-pointer items-center gap-2 rounded-full border-none bg-white/20 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-white/30"
          style={{ fontFamily: 'Pretendard', fontWeight: 500, fontSize: '15px' }}>
          ← 뒤로
        </button>

        {/* 링큐 */}
        <div className="absolute" style={{ left: '38.3%', top: '238px' }}>
          <p
            className="m-0 whitespace-nowrap text-[#121212]"
            style={{
              fontFamily: 'Pretendard',
              fontWeight: 900,
              fontSize: '180px',
              lineHeight: '270px',
              letterSpacing: '-8px',
            }}>
            링큐
          </p>
        </div>

        {/* Left text block */}
        <div className="absolute flex flex-col gap-[16px]" style={{ left: '13.5%', top: '355px', width: '420px' }}>
          <p
            className="m-0 text-[15px] tracking-[0.5px] text-[#555]"
            style={{ fontFamily: 'Pretendard', fontWeight: 500 }}>
            나의 첫 번째 프로젝트를 소개합니다
          </p>
          <p
            className="m-0 text-[26px] text-[#121212]"
            style={{ fontFamily: 'Pretendard', fontWeight: 700, lineHeight: '39px' }}>
            SEOWON CHANG
          </p>
          <p
            className="m-0 text-[15px] text-[#555]"
            style={{ fontFamily: 'Pretendard', fontWeight: 400, lineHeight: '25.5px' }}>
            Spring Boot 기반 백엔드 개발자로서 LINKU 프로젝트에 참여하며 보안, DB 설계, 인프라 운영까지 폭넓은 경험을
            쌓았습니다.
          </p>
        </div>

        {/* Phone mockup */}
        <div
          className="absolute flex items-center justify-center rounded-[28px] bg-[#c0c0c0]"
          style={{
            left: '70.8%',
            top: '158px',
            width: '300px',
            height: '540px',
            boxShadow: '0px 12px 40px 0px rgba(0,0,0,0.15)',
          }}>
          <span className="text-[14px] text-[#888]" style={{ fontFamily: 'Pretendard' }}>
            App Preview
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="mx-auto max-w-[1600px] px-[100px]">
        {/* Security */}
        <div className="pt-[48px]">
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
                    'Presigned URL도 검토했지만 두 가지 이유로 제외했습니다. 첫째, Presigned URL은 AWS Access Key 기반 서명이 URL 쿼리에 노출되어 Android APK 역분석 시 자격증명 탈취 가능성이 있었습니다. 둘째, 유효시간이 만료될 때마다 백엔드에 재요청이 필요해 앱 사용성이 저하됩니다. CloudFront는 앱 입장에서 URL만 바꾸면 되고, 기존 Spring Boot API 구조를 전혀 건드리지 않아도 되기 때문에 이를 사용하기로 결정했습니다.',
                },
                {
                  label: '(해결) Private 전환과 Origin Access Control(OAC) 적용',
                  content:
                    'S3를 Private로 전환하고 OAC을 적용했습니다. S3 버킷 정책은 CloudFront 배포 ARN에서만 s3:GetObject를 허용하도록 제한했고, Spring Boot 코드에서는 getFileUrl()이 S3 URL 대신 CloudFront 도메인을 반환하도록만 수정했습니다.',
                },
                {
                  label: '(효과) 1.5배 빠른 응답 속도와 구조적 보안 완성',
                  content:
                    '성능 측정 결과, S3 직접 접속 시 평균 0.56s였던 응답 속도가 CloudFront 도입 후 Cache Hit 기준 0.29s로 단축되며 약 1.5배의 성능 향상을 확인했습니다. 전 세계 엣지 로케이션에 파일을 캐싱하는 CDN의 특성 덕분에 반복 요청 시 0.2초대의 안정적인 속도를 유지할 수 있었습니다. 보안 측면에서도 실제 저장소 주소를 노출하지 않아 자동화 봇 공격을 원천 차단했으며, 대학생 팀의 최대 걱정거리였던 무단 트래픽 비용 폭탄 리스크를 구조적으로 제거하는 성과를 거두었습니다.',
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
        </div>

        {/* DB Design */}
        <div className="pt-[80px]">
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
                    '초기 설계에서는 Users 테이블에서 직접 email을 기본 식별자로 관리했습니다. 하지만 카카오, 구글 등 소셜 로그인 기능을 순차적으로 확장하면서 치명적인 한계에 부딪혔습니다. 동일한 사용자가 여러 소셜 서비스로 로그인을 시도할 경우, 이메일을 유니크 키로 사용하면 중복 에러가 발생하여 가입이 막히거나, 반대로 이메일이 다를 경우 동일 인물이 여러 개의 독립된 계정을 가지게 되어 데이터가 파편화되는 문제가 발생했습니다.',
                },
                {
                  label: '(고민) 일반 로그인과 소셜 로그인 프로세스의 구조적 차이',
                  content:
                    '일반 로그인은 회원가입과 로그인 API가 명확히 분리되어 있지만, 소셜 로그인은 하나의 엔드포인트에서 기존 유저인지 신규 유저인지, 로그인인지 회원가입인지 여부를 백엔드가 직접 판별해야 했습니다. 1)완전 신규 유저 생성 2)기존 일반 계정에 소셜 연동 추가 3)단순 로그인 처리로 케이스를 세분화하여 각각 독립된 메소드로 분리해 관리하기로 했습니다.',
                },
                {
                  label: '(해결) 엔티티 분리와 위조 불가능한 식별자(External ID) 도입',
                  content:
                    "하나의 '사람(User)' 엔티티가 여러 개의 '로그인 수단(AuthAccount)'을 가질 수 있도록 1:N 관계로 테이블 구조를 근본적으로 개편하고, 이메일 관리 주체를 Auth 계층으로 옮겼습니다. 또한, 사용자가 언제든 변경할 수 있는 이메일 대신 소셜 서비스가 발급하는 변하지 않는 고유값인 externalId를 핵심 식별자로 활용하도록 비즈니스 로직을 재설계했습니다.",
                },
                {
                  label: '(효과) 유저 경험 향상과 관리 일관성 확보',
                  content:
                    '이러한 설계 변경을 통해 유저는 자신의 소셜 계정들을 하나의 통합된 서비스 계정에 자유롭게 연결하고 관리할 수 있게 되었습니다. 개발 측면에서는 데이터 파편화 문제가 완전히 해소되었으며, 신규 로그인 수단이 추가되더라도 기존 유저 정보의 변경 없이 유연하게 확장할 수 있는 구조를 갖추게 되었습니다.',
                },
              ]}
            />
          </div>
        </div>

        {/* DevOps */}
        <div className="pt-[80px]">
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
                  label: '(문제점) 알 수 없는 외부 IP와의 동기화 실패 및 서비스 중단',
                  content:
                    '애플리케이션이 Redis 서버와 연결되지 않는 문제가 발생하여 redis-server.log를 분석한 결과, Redis가 Standalone(단독) 모드가 아닌 Slave(Replica) 모드로 동작하며 알 수 없는 외부 IP를 MASTER로 인식해 끊임없이 복제 연결을 시도하는 패턴이 발견되었습니다. Redis의 복제 모드 특성상, 지정된 MASTER와의 데이터 동기화(SYNC)가 성공하기 전까지는 읽기 및 쓰기 요청을 정상적으로 처리할 수 없기 때문에 애플리케이션의 모든 Redis 관련 기능이 마비되는 치명적인 장애가 발생했습니다.',
                },
                {
                  label: '(단순 문제 해결) 복제 구성 해제 및 Redis Cloud 마이그레이션',
                  content:
                    '이 문제는 과거의 설정이나 잘못된 초기화 환경의 영향으로 Redis가 엉뚱한 서버를 MASTER로 추종하도록 구성되어 발생한 것으로 추정되었습니다. 급한 불부터 꺼야 했기 때문에 로컬 서버의 설정을 수정하여 복제 구성을 해제해서 해결을 하였습니다.',
                },
                {
                  label: '(고민) 로컬 환경의 복제 설정 잔재와 운영 안정성 확보',
                  content:
                    '하지만 캐시 정합성 문제나 OS 레벨의 메모리 관리 문제가 계속 발생했습니다. 그래서 직접 관리하는 것보다 redis cloud를 사용하여 안정적으로 운영하기로 결정했습니다.',
                },
                {
                  label: '(효과) 인프라 관리 부담 해소와 데이터 정합성 강화',
                  content:
                    '이번 조치를 통해 Redis가 더 이상 유령 MASTER를 찾아 방황하지 않고 단독 서버로서 모든 요청을 정상 처리하게 되었습니다. 실제 애플리케이션 로그에서 Spring Data Redis 초기화와 Repository 스캔이 100ms 이내에 완료되는 것을 확인하며 안정적인 부팅을 검증했습니다. 특히 Redis Cloud로 이전함으로써 복잡한 서버 내부 설정을 관리할 필요가 없어졌으며, 클라우드 대시보드의 실시간 메트릭 모니터링을 통해 30MB의 무료 메모리 사용량을 체계적으로 관리할 수 있게 되었습니다.',
                },
              ]}
            />
          </div>
          <div className="mt-[40px]">
            <ImagePlaceholder label="Redis Cloud Dashboard" className="h-[400px] w-full rounded-[12px]" />
          </div>
        </div>

        {/* MY Contribution */}
        <div className="pt-[80px] pb-[120px]">
          <SectionDivider />
          <div className="mt-[48px] flex items-baseline gap-[24px]">
            <h2
              className="m-0 text-[64px] text-[rgba(18,18,18,0.81)]"
              style={{ fontFamily: 'Pretendard', fontWeight: 700, lineHeight: '80px' }}>
              MY Contribution
            </h2>
            <span
              className="text-[28px] text-[rgba(18,18,18,0.81)]"
              style={{ fontFamily: 'Pretendard', fontWeight: 500, lineHeight: '42px' }}>
              기여도 : 60%
            </span>
          </div>

          <div className="mt-[40px] flex gap-[40px]">
            {/* Pie chart */}
            <div className="w-[500px] shrink-0">
              <p className="mt-0 mb-[8px] text-[20px] text-black" style={{ fontFamily: 'Pretendard', fontWeight: 600 }}>
                팀원별 기여도
              </p>
              <PieChart />
            </div>

            {/* Stats */}
            <div className="flex flex-1 flex-col gap-[16px]">
              <p className="mt-0 mb-0 text-[20px] text-black" style={{ fontFamily: 'Pretendard', fontWeight: 600 }}>
                개발 지표 요약
              </p>
              <StatCard label="총 커밋 수" value="847" delta="+12% from last month" />
              <StatCard label="해결한 이슈" value="156" delta="+8% from last month" />
              <StatCard label="PR 머지 수" value="203" delta="+15% from last month" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
