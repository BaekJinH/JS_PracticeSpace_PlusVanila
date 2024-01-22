const { remove } = require("animejs");

!(function () {
  let sections = Array.from(document.querySelectorAll('section'));
  let skList = Array.from(document.querySelectorAll('.skillPart .right li'));
  let leftSkList = Array.from(document.querySelectorAll('.left .progsList li')) ;
  let excepSection = document.querySelector('.skillPart');
  let detailSk = {
      skHtml: 70,
      skCss: 70,
      skJs: 50,
      skTs: 10,
      skJq: 60,
      skVue: 20,
  };
  let count = 0;
  const SKILL_IMG = [
      {
          bg: `background:url()` ,
      },
      {
          bg: `background:url()` ,
      },
      {
          bg: `background:url()` ,
      },
      {
          bg: `background:url()` ,
      },
      {
          bg: `background:url()` ,
      },
  ]
  // section1 nextbtn 클릭 시 skillpart Top이 뷰포트 헤드로 가게
  const nxtBtn = document.querySelector('#down-arrow') ;

  nxtBtn.addEventListener('click' , e => {
      window.scrollTo({behavior:'smooth' , top:excepSection.offsetTop }) ;
      const skillKeys = Object.keys(detailSk);
      console.log(skillKeys[0], detailSk[skillKeys[0]]);
  }) ;


  skList.forEach(e => {
      e.style.height = window.innerHeight + 'px';
  });

  sections.filter(section => section !== excepSection).forEach(e => {
      e.style.height = window.innerHeight + 'px';
  });

  window.addEventListener('resize', () => {
      sections.filter(section => section !== excepSection).forEach(e => {
          e.style.height = window.innerHeight + 'px';
      });
  });

  const skArray = Array.from(document.querySelectorAll('.skillPart .right li'));
  let currentLiIndex = 0;
  let isScrolling = false;

  skArray[currentLiIndex].classList.add('current');
  leftSkList[currentLiIndex].classList.add('current');

  function moveToLi(index) {
      if (index >= 0 && index < skArray.length) {
          const skillKeys = Object.keys(detailSk);  // detailSk의 모든 속성 이름을 배열로 가져옵니다.
          const currentSkillKey = skillKeys[index];
          const currentSkillValue = detailSk[currentSkillKey];
          const currentBar = document.querySelector(`.left .progsList .${currentSkillKey} .bar`);

          currentBar.style.width = currentSkillValue + "%";
          console.log(skillKeys[index], detailSk[skillKeys[index]]);

          // right li에 대한 클래스 제거 및 추가
          skArray[currentLiIndex].classList.remove('current');
          skArray[index].classList.add('current');

          // left li에 대한 클래스 제거 및 추가
          leftSkList[currentLiIndex].classList.remove('current');
          leftSkList[index].classList.add('current');  // index를 사용하도록 수정

          const targetTop = skArray[index].getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({ top: targetTop, behavior: 'smooth' });
          currentLiIndex = index;
      }
  }

  window.addEventListener('wheel', function (e) {
      if (isScrolling) return;

      const skillpart = document.querySelector('.skillPart');
      const skillpartRect = skillpart.getBoundingClientRect();

      if (skillpartRect.top <= 0 && skillpartRect.bottom >= window.innerHeight) {
          if (currentLiIndex === 0 && !isScrolling) {
              const skillKeys = Object.keys(detailSk);
              console.log(skillKeys[currentLiIndex], detailSk[skillKeys[currentLiIndex]]);
          }

          isScrolling = true;

          if (e.deltaY > 0 && currentLiIndex < skArray.length - 1) {
              moveToLi(currentLiIndex + 1);
          } else if (e.deltaY < 0 && currentLiIndex > 0) {
              moveToLi(currentLiIndex - 1);
          }

          e.preventDefault();

          setTimeout(() => {
              isScrolling = false;
          }, 500);
      }
  }, { passive: false });
})();

!(function () {
  init() ;
})() ;


function init () {
  const { sections , excepSection , skArray } = getDOMElements();
  const { detailSk , skillKeys } = getCommonVar() ;
 
  adjustHeight(sections , excepSection , skArray );
  eventBundle(sections , excepSection , detailSk , skillKeys , skArray ) ;
}

// DOMEL 가져오기
function getDOMElements () {
  return {
    sections : Array.from(document.querySelectorAll('section')) ,
    excepSection : document.querySelector('.skillPart') ,
    skArray : Array.from(document.querySelectorAll('.skillPart .right li')),
  } ;
}

// 공통 변수 가져오기
function getCommonVar ( ) {
  return {
    detailSk : {
      'skHtml': 70,
      'skCss': 70,
      'skJs': 50,
      'skTs': 10,
      'skJq': 60,
      'skVue': 20,
    },
    skillKeys : Object.keys(detailSk),

  }
}

// 높이 설정 함수
function adjustHeight (sections , excepSection) {
  sections.forEach( section => {
    section.style.height = window.innerHeight + "px" ;
  });
  window.addEventListener('resize' , () => {
    sections.filter(section => section !== excepSection).forEach(e => {
      e.style.height = window.innerHeight + 'px' ;
    });
  });
  skArray.forEach( e => {
    e.style.height = window.innerHeight + 'px' ;
  });
}

function eventBundle ( sections, excepSection, skArray, detailSk, skillKeys ) {
  scrollEvent( sections , excepSection );
  clickEvent( sections , excepSection );
  wheelEvent( excepSection , skArray , detailSk , skillKeys );
  timeEvent(  );

  function clickEvent (  ) {
    nextSk();

    function nextSk () {
      let nxtBtn = document.querySelector('#down-arrow');

      nxtBtn.addEventListener('click' , e => {
        window.scrollTo({behavior : "smooth" , top:excepSection.offsetTop});
      })
    }
  };

  function timeEvent () {
    pageLoad() ;

    const DEFAULT_TIME = 1000 ;

    const pageLoad = ( e ) => {
      let dom = e.querySelector('.test')
      e.addEventListener("DOMContentLoaded", removeMotion() );

      function removeMotion () {
        setTimeout(() => {
          dom.classList.remove('event');
          return false ;
        } , DEFAULT_TIME ) ;
      }
    }
  }

  function wheelEvent (  ) {
    skillPart();
    
    function skillPart ( excepSection ) {
      // 애니메이션 시간 0.5초
      const ANIMATION_COUNT_VALUE = 500;
      let isScrolling = false ;
      let currentLiIdx = 0;

      const moveToLi = function (idx) {
        let leftSkList = Array.from(document.querySelectorAll('.left .progsList li')) ;
        let targetTop = skArray[idx].getBoundingClientRect().top + window.pageXOffset;

        if ( idx >= 0 && idx < skArray.length ) {
          let currentSkillKey = skillKeys[idx] ;
          let currentSkillValue = detailSk[currentSkillKey] ;
          let currentBar = document.querySelector(`.left .progsList .${currentSkillKey} .bar`) ;

          currentBar.style.width = currentSkillValue + "%";

          skArray[currentLiIdx].classList.remove('current');
          skArray[idx].classList.add('current');

          leftSkList[currentLiIdx].classList.remove('current');
          leftSkList[idx].classList.add('current');

          window.scrollTo({ top : targetTop, behavior : 'smooth' }) ;
          currentLiIdx = idx;
        }
      };

      window.addEventListener('wheel' , function(e) {
        if ( isScrolling ) return ;
        
        let skillPartRect = excepSection.getBoundingClientRect() ;

        if ( skillPartRect,top <= 0 && skillPartRect.bottom >= window.innerHeight ) {
          if ( currentLiIdx === 0 && !isScrolling ) {
            
          }

          isScrolling = true;

          if ( e.deltaY > 0 && currentLiIdx < skArray.length -1 ) {
            moveToLi(currentLiIdx + 1);
          } else if ( e.deltaY < 0 && currentLiIdx > 0 ) {
            moveToLi(currentLiIdx - 1);
          };

          e.preventDefault();

          setTimeout(() => {
            isScrolling = false;
          }, ANIMATION_COUNT_VALUE );
        }
        
      }, { passive : false } )
    }

  }
}
