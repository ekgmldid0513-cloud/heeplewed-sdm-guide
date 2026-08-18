/* ============================================================
   seed-data.js
   -------------------------------------------------------------
   1) index.html 이 Firebase 연결 전(또는 연결 실패 시) 미리보기용으로
      쓰는 "더미 데이터" 입니다.
   2) admin.html 의 "샘플 데이터 업로드" 버튼을 누르면 이 데이터를
      그대로 Firebase에 올려서, 실제 데이터를 등록하기 전에도
      전체 페이지 흐름을 바로 확인할 수 있게 해줍니다.
   실제 업체 데이터로 교체하실 때는 admin.html 에서 항목을 삭제/추가하시면 됩니다.
   이미지 URL은 무료 placeholder 이미지(picsum.photos)를 임시로 사용했습니다.
   ============================================================ */
 
const SAMPLE_VENDORS = {
  studios: [
    {
      name: "무드로 스튜디오",
      peopleBg: ["people"],
      space: ["indoor"],
      rooms: ["소파씬", "통창", "센터피스(스튜디오보유)"],
      product: ["regular"],
      price: 135,
      images: [
        { url: "https://picsum.photos/seed/studio1a/800/1000" },
        { url: "https://picsum.photos/seed/studio1b/800/1000" },
      ],
      note: "인물 위주 담백한 톤, 신부님 만족도 높은 채광 좋은 통창 씬 보유",
    },
    {
      name: "라피네 스튜디오",
      peopleBg: ["balance"],
      space: ["indoor_garden"],
      rooms: ["정원", "플라워가득", "계단씬"],
      product: ["allday"],
      price: 210,
      images: [
        { url: "https://picsum.photos/seed/studio2a/800/1000" },
        { url: "https://picsum.photos/seed/studio2b/800/1000" },
      ],
      note: "정원 씬이 강점, 올데이 촬영으로 여유롭게 진행 가능",
    },
    {
      name: "블랑제 스냅",
      peopleBg: ["concept"],
      space: ["outdoor"],
      rooms: ["노을씬", "시티뷰"],
      product: ["semi"],
      price: 320,
      images: [
        { url: "https://picsum.photos/seed/studio3a/800/1000" },
      ],
      note: "야외 스냅 전문, 감성적인 노을 씬으로 유명",
    },
  ],
 
  shootConcepts: [
    { tags: ["노을씬", "야외스냅"], studioName: "블랑제 스냅", imageUrl: "https://picsum.photos/seed/shoot1/600/800" },
    { tags: ["쇼파씬", "심플인물중심"], studioName: "무드로 스튜디오", imageUrl: "https://picsum.photos/seed/shoot2/600/800" },
    { tags: ["웨딩케이크", "센터피스컷"], studioName: "무드로 스튜디오", imageUrl: "https://picsum.photos/seed/shoot3/600/800" },
    { tags: ["정원씬", "플라워아치"], studioName: "라피네 스튜디오", imageUrl: "https://picsum.photos/seed/shoot4/600/800" },
  ],
 
  dressShops: [
    { name: "메종드블랑", price: 130 },
    { name: "아틀리에 로렌", price: 220 },
    { name: "스칼렛브라이드", price: 340 },
    { name: "메르시드레스", price: 420 },
  ],
 
  dresses: [
    {
      shopName: "메종드블랑",
      shopPrice: 130,
      type: "본식",
      material1: ["튤"],
      material2: [],
      material3: ["글리터,펄"],
      topLine: ["오프숄더"],
      skirtLine: ["A라인"],
      etcKeyword: [],
      shootColors: [],
      imageUrl: "https://picsum.photos/seed/dress1/600/800",
    },
    {
      shopName: "아틀리에 로렌",
      shopPrice: 220,
      type: "본식",
      material1: ["미카도 실크"],
      material2: ["아플리케레이스"],
      material3: [],
      topLine: ["브이넥"],
      skirtLine: ["머메이드라인"],
      etcKeyword: ["딥브이"],
      shootColors: [],
      imageUrl: "https://picsum.photos/seed/dress2/600/800",
    },
    {
      shopName: "스칼렛브라이드",
      shopPrice: 340,
      type: "촬영2부",
      material1: [],
      material2: [],
      material3: ["화려한 비즈(스톤비즈or스와로브스키 등)"],
      topLine: [],
      skirtLine: [],
      etcKeyword: ["미니드레스"],
      shootColors: ["블랙"],
      imageUrl: "https://picsum.photos/seed/dress3/600/800",
    },
  ],
 
  makeup: [
    { styleKey: "clean", imageUrl: "https://picsum.photos/seed/mk1/600/750" },
    { styleKey: "dewy", imageUrl: "https://picsum.photos/seed/mk2/600/750" },
    { styleKey: "chic", imageUrl: "https://picsum.photos/seed/mk3/600/750" },
  ],
 
  hair: [
    { categoryKey: "firstHair", subKey: "물결 펌", imageUrl: "https://picsum.photos/seed/hair1/600/750" },
    { categoryKey: "bunPony", subKey: "로우포니테일", imageUrl: "https://picsum.photos/seed/hair2/600/750" },
    { categoryKey: "veil", subKey: "로우번&미들번 (정석위치)", imageUrl: "https://picsum.photos/seed/hair3/600/750" },
  ],
};
