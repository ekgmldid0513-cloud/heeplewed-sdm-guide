/* ============================================================
   firebase-config.js
   -------------------------------------------------------------
   여기에 다희님의 새 Firebase 프로젝트 설정값을 붙여넣어 주세요.
   (Firebase 콘솔 > 프로젝트 설정 > 일반 > "내 앱" > SDK 설정 및 구성 > "구성" 선택 시 나오는 값)

   설치가이드.docx 의 "1. Firebase 프로젝트 만들기" 단계를 먼저 진행해 주세요.
   ============================================================ */

const firebaseConfig = {
apiKey: "AIzaSyCaIo9LPaAw4wE6kg9QWoh9oo3p8D42nwk",
  authDomain: "heeplewed-sdm-guide.firebaseapp.com",
  databaseURL: "https://heeplewed-sdm-guide-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "heeplewed-sdm-guide",
  storageBucket: "heeplewed-sdm-guide.firebasestorage.app",
  messagingSenderId: "948466475532",
  appId: "1:948466475532:web:bb9641daa1d398cd9c0429",
  measurementId: "G-627RF7PQXR"
};

// Firebase 초기화 (index.html, admin.html 양쪽에서 공통으로 사용)
// 인터넷 연결 문제 등으로 Firebase SDK 로드가 실패하더라도 페이지 전체가
// 멈추지 않고 샘플 데이터로 동작하도록 안전하게 처리합니다.
let db, auth, storage;
window.FIREBASE_READY = false;
try {
  if (typeof firebase === "undefined") throw new Error("Firebase SDK 스크립트를 불러오지 못했습니다.");
  firebase.initializeApp(firebaseConfig);
  db = firebase.database();
  auth = firebase.auth();
  storage = firebase.storage();
  window.FIREBASE_READY = true;
} catch (e) {
  console.warn("[안내] Firebase 초기화에 실패했습니다. 설정값을 확인해주세요.", e.message);
}
