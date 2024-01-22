// 즉시 실행 함수로 코드를 감싸서 전역 스코프 오염을 방지합니다. --- 해당 함수는 로컬 스토리지에 theme를 확인하고 해당 key.value 를 가져오기만 하는 함수임 ---
! function () {
  try {
    // HTML 문서의 루트 요소(documentElement)와 클래스 리스트를 가져옵니다.
    var d = document.documentElement,
      c = d.classList;

    // 루트 요소에서 'light'와 'dark' 클래스를 제거합니다.
    c.remove('light', 'dark');

    // 로컬 스토리지에서 'theme' 값을 가져옵니다.
    var e = localStorage.getItem('theme');

    // 'theme' 값이 'system'이거나 값이 없고 시스템 설정을 따르도록 설정된 경우
    if ('system' === e || (!e && true)) {
      // 시스템 다크 모드 설정을 감지하기 위한 미디어 쿼리
      var t = '(prefers-color-scheme: dark)',
        m = window.matchMedia(t);

      // 시스템 다크 모드가 활성화되어 있으면 다크 모드로 설정
      if (m.media !== t || m.matches) {
        d.style.colorScheme = 'dark';
        c.add('dark');
      } else { // 그렇지 않으면 라이트 모드로 설정
        d.style.colorScheme = 'light';
        c.add('light');
      }
    } else if (e) { // 로컬 스토리지에 'theme' 값이 있는 경우 해당 테마를 적용
      c.add(e || '');
    }

    // 'theme' 값이 'light' 또는 'dark'인 경우 colorScheme 속성을 설정
    if (e === 'light' || e === 'dark') d.style.colorScheme = e;
  } catch (e) {} // 오류 발생 시 아무것도 하지 않음
}()



// dialog 창 출력 관련 / 캡슐화 , 구조 분해 할당이 잘 되어있어 가져옴
!(function () {

  const dialog = document.querySelector('dialog#myDialog'); // dialog 태그를 dialog 상수에 담음.
  const message = document.querySelector('#message'); // message 상수에 대화상자가 닫혔을 때 쓰일 결과를 표시할 영역 p#message 태그를 가져옴.

  // 구조 분해 할당, 변수 선언 키워드인 const나 let을 쓰고, 배열 형식으로 이름을 작성하고, 배열 수에 맞게, 배열 순서에 원하는 값을 넣어 대입
  const [btnOpen, btnClose, btnAnswerNegative, btnAnswerPostive, typeName] = [
    document.querySelector('#btnOpen'), // btnOpen에 담김 (body button#btnOpen)
    document.querySelector('#btnClose'), // btnClose에 담김 (dialog button#btnClose)
    document.querySelector('#negative'), // btnAnswerNegative에 담김 (dialog button#negative)
    document.querySelector('#postive'), // btnAnswerPostive에 담김 (dialog button#postive)
    document.querySelector('#typeName') // typeName에 담김 (input#typeName)
  ];

  // 여는 함수 / 닫는 함수, 굳이 안 만들어도 되지만 조금 더 타이핑을 줄이기 위해...
  function close() {
    dialog.close();
  }

  function show() {
    dialog.showModal();
  }

  // 여는 이벤트 구현
  // HTMLDialogElement.show()로 열면 비모달 대화상자, HTMLDialogElement.showModal()로 열면 모달 대화상자가 열림. show()함수에 showModal() 메소드가 사용됨
  btnOpen.addEventListener('click', function () {
    show();
  })

  // X 버튼을 눌러 닫으면
  btnClose.addEventListener('click', function () {
    close(); // close 버튼이 눌리면 닫는 함수 동작.
  })


  // 편집창 값 바뀔 때 긍정 버튼의 value 속성을 바꿔서 반환시킨다.
  typeName.addEventListener('keydown', function (evt) { // typeName 입력 서식에서 키보드 이벤트를 수신, 함수의 evt 인수는 이벤트 객체를 의미함. 키값을 인식하거나, 이벤트 기본값을 제거하거나 할 때 참조해야 하기 때매 필요함.
    switch (evt.code) { // evt.code 값을 참조
      case "Enter": // evt.code의 반환값이 "Enter" 스트링이면,
        evt.preventDefault(); //preventDefault로 기본 키 동작을 무시
        dialog.querySelector(".default").click(); // Enter가 눌리면 dialog의 기본 응답 동작을 무시하고, default 클래스가 부여된 버튼이 눌리도록함.
        break;
    }
  })


  dialog.addEventListener('close', function () { // dialog가 닫혔을 때에 대한 Event
    switch (dialog.returnValue) {
      case "cancel":
        return false; // Cancel이면 아무 동작이 없음.
      case "negative": // 부정적인 답변을 하면, 아래 메시지를 뱉음.
        message.innerHTML = "Come again anytime if you're possible.";
        break;
      case "postive": // 긍정적인 답변을 하면 input 값을 반환하며 닫힘.
        dialog.returnValue = typeName.value; //postive 값의 버튼이 눌리면,
        if (dialog.returnValue) { // returnValue값(이름을 묻는 input 값)이 비어 있지 않다면
          message.innerHTML = `Hello, ${dialog.returnValue} :)`;
        } else { // returnValue값(이름을 묻는 input 값)이 비어있다면,
          message.innerHTML = "Are you really have no name? If you are not, you don't want to tell me your name?"
        }
        break;
    }
  })
})()