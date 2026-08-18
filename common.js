/* ============================================================
   common.js
   -------------------------------------------------------------
   index.html(고객용) / admin.html(관리자용) 양쪽에서 공통으로 쓰는
   카테고리 정의 + 유틸 함수 모음입니다.
   카테고리 문구를 바꾸고 싶으면 이 파일의 TAGS 부분만 수정하면
   양쪽 페이지에 동시에 반영됩니다.
   ============================================================ */
 
/* ---------------- 카테고리 정의 ---------------- */
 
const TAGS = {
  studio: {
    peopleBg: [
      { key: "people", label: "깔끔한 인물중심 위주의 촬영" },
      { key: "balance", label: "인물중심+배경중심 적당한 비율 촬영" },
      { key: "concept", label: "배경&컨셉을 조금 더 다양하게 촬영" },
    ],
    space: [
      { key: "indoor", label: "실내 위주의 촬영" },
      { key: "indoor_garden", label: "실내+야외(정원) 촬영" },
      { key: "indoor_river", label: "실내+야외(한강 or 공원) 촬영" },
      { key: "outdoor", label: "야외 위주의 촬영 (=스냅촬영)" },
    ],
    rooms: [
      "정원", "테라스(루프탑)", "시티뷰", "노을씬", "센터피스(스튜디오보유)",
      "플라워가득", "소파씬", "통창", "계단씬", "분수대", "케이크(스튜디오보유)", "빔프로젝터",
    ],
    product: [
      { key: "regular", label: "정규촬영 (4-5시간)" },
      { key: "allday", label: "올데이 촬영 가능 스튜디오(6시간이상)" },
      { key: "semi", label: "세미촬영 가능 스튜디오(2시간)" },
    ],
    priceTier: [
      { key: "t1", label: "100만원대 초중반 (100~150만원)", min: 100, max: 150 },
      { key: "t2", label: "100만원대 중후반 (150~190만원)", min: 150, max: 190 },
      { key: "t3", label: "200만원대 (200~290만원)", min: 200, max: 290 },
      { key: "t4", label: "300만원 이상~", min: 300, max: 999999 },
    ],
  },
 
  concept: [
    "폴라로이드or필름카메라", "리본", "직업의상", "풍선", "웨딩케이크", "컨페티",
    "어릴적 사진", "서로가 좋아하는 물건", "한복", "커플룩(캐주얼룩)", "드레스+워커",
    "캡모자", "패스트푸드", "기타",
  ],
 
  dress: {
    material1: ["미카도 실크", "오간자실크", "튤", "타프타", "새틴 실크", "자카드실크"],
    material2: ["아플리케레이스", "블망레이스", "캐미컬레이스", "기타레이스"],
    material3: ["글리터,펄", "맑은 비즈", "화려한 비즈(스톤비즈or스와로브스키 등)"],
    topLine: ["일자탑", "하트탑", "상체디테일탑", "오프숄더", "스퀘어넥", "하트스퀘어넥", "브이넥", "홀터넥", "하이넥", "라운드넥", "반팔소매", "긴팔소매"],
    skirtLine: ["A라인", "벨라인", "머메이드라인", "세미라인", "미니멀스타일(발이 보이는 기장)"],
    etcKeyword: ["레이어드스커트", "캉캉스커트", "트임드레스", "미니드레스", "딥브이", "백포인트(등파임)"],
    shootColors: ["핑크", "블랙", "블루", "화이트", "옐로우", "바이올렛", "피치", "오렌지", "기타"],
  },
 
  makeup: [
    { key: "clean", label: "깔끔+단아+청순" },
    { key: "soft_color", label: "깔끔+과하지 않은 음영&컬러감" },
    { key: "dewy", label: "뽀용 과즙" },
    { key: "chic", label: "세련+음영+펄감" },
  ],
 
  hair: {
    firstHair: { label: "촬영 시 첫 헤어(풀은 웨이브 헤어)", sub: ["물결 펌", "s컬 펌", "히피펌"] },
    bunPony: { label: "번 or 포니테일", sub: ["클래식로우번", "내추럴번", "가시번", "슬립번", "하이번", "로우포니테일", "하이포니테일"] },
    halfBraid: { label: "반묶음 or 땋은머리", sub: ["반묶음", "한쪽 땋기", "양갈래 땋기", "퐁퐁헤어"] },
    straight: { label: "생머리", sub: null },
    bob: { label: "단발 스타일링", sub: ["생머리", "반묶음", "웨이브", "꽁지머리", "플라워연출"] },
    veil: { label: "베일 위치 (본식)", sub: ["로우번&미들번 (정석위치)", "하이번(높은 위치)", "숏베일(야외웨딩)"] },
  },
 
  budget: [
    { key: "b1", label: "가성비 있게 최대한 아껴서 진행 하고 싶어요.", range: "300만원대, 400만원 이하" },
    { key: "b2", label: "평균적으로! 하지만, 요즘 인기있는 업체들로 구성해서 진행하고 싶어요.", range: "400만원대, 600만원 이하" },
    { key: "b3", label: "스드메만큼은 아쉬움 없이 원하는 대로 진행 하고 싶어요.", range: "500-600만원대, 1000만원 이상도 생각해요!" },
  ],
};
 
/* ---------------- 가격대 계산 유틸 ---------------- */
 
// 스튜디오 기준금액(만원) -> priceTier key 배열 (구간이 겹치는 t1/t2 등은 모두 매치되도록 배열 반환)
function studioPriceTiers(price) {
  return TAGS.studio.priceTier.filter(t => price >= t.min && price <= t.max).map(t => t.key);
}
 
// 드레스샵 기준금액(만원) -> 태그 문구
function dressPriceTierLabel(price) {
  if (price <= 150) return "합리적인 금액 & 가성비갑";
  if (price <= 260) return "신부님들이 먼저 찾는 인기업체";
  if (price <= 380) return "안목있는 분들이 찾는 하이엔드";
  return "하이퀄리티 & 지정추천";
}
 
/* ---------------- 공통 유틸 ---------------- */
 
function uid(prefix = "id") {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
 
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
 
// Firebase Storage에 이미지 업로드 후 다운로드 URL 반환
async function uploadImage(file, path) {
  const ref = storage.ref().child(`${path}/${uid("img")}_${file.name}`);
  const snap = await ref.put(file);
  return await snap.ref.getDownloadURL();
}
 
// object -> array 변환 (Firebase RTDB는 push key 기반 object로 저장되므로 배열처럼 다루기 위함)
function toArray(obj) {
  if (!obj) return [];
  return Object.entries(obj).map(([id, val]) => ({ id, ...val }));
}
