const workAllBtn = document.getElementById("work_all");
const workFrontEnd = document.getElementById("work_frontend");
const workMobile = document.getElementById("work_mobile");
const workBackend = document.getElementById("work_backend");
const projectFrontend = Array.from(
  document.getElementsByClassName("project frontend")
);
const projectBackend = Array.from(
  document.getElementsByClassName("project backend")
);
const projectMobile = Array.from(
  document.getElementsByClassName("project mobile")
);
const menuHome = document.getElementById("menuHome");
const menuAbout = document.getElementById("menuAbout");
const menuSkills = document.getElementById("menuSkills");
const menuWork = document.getElementById("menuWork");
const menuLicense = document.getElementById("menuLicense");
const menuContact = document.getElementById("menuContact");

function itemTransition(item) {
  item.style.transition = "none";
  item.style.transform = "translateY(-200px)";
  item.style.opacity = 0;
  item.style.scale = 0;

  setTimeout(() => {
    item.style.transition = "all 400ms ease";
    item.style.transform = "translateY(0px)";
    item.style.opacity = 1;
    item.style.scale = 1;
  }, 0);
}

// 선택 화면 바꾸기
workAllBtn.onclick = () => {
  workAllBtn.className = "category category--selected";
  workBackend.className = "category";
  workFrontEnd.className = "category";
  workMobile.className = "category";

  projectFrontend.forEach((item) => {
    item.style.display = "block";
    itemTransition(item);
  });
  projectBackend.forEach((item) => {
    item.style.display = "block";
    itemTransition(item);
  });
  projectMobile.forEach((item) => {
    item.style.display = "block";
    itemTransition(item);
  });
};

workFrontEnd.onclick = () => {
  workAllBtn.className = "category";
  workBackend.className = "category";
  workFrontEnd.className = "category category--selected";
  workMobile.className = "category";

  projectFrontend.forEach((item) => {
    item.style.display = "block";
    itemTransition(item);
  });
  projectBackend.forEach((item) => {
    item.style.display = "none";
  });
  projectMobile.forEach((item) => {
    item.style.display = "none";
  });
};

workBackend.onclick = () => {
  workAllBtn.className = "category";
  workBackend.className = "category category--selected";
  workFrontEnd.className = "category";
  workMobile.className = "category";

  projectFrontend.forEach((item) => {
    item.style.display = "none";
  });
  projectBackend.forEach((item) => {
    item.style.display = "block";
    itemTransition(item);
  });
  projectMobile.forEach((item) => {
    item.style.display = "none";
  });
};

workMobile.onclick = () => {
  workAllBtn.className = "category";
  workBackend.className = "category";
  workFrontEnd.className = "category";
  workMobile.className = "category category--selected";

  projectFrontend.forEach((item) => {
    item.style.display = "none";
  });
  projectBackend.forEach((item) => {
    item.style.display = "none";
  });
  projectMobile.forEach((item) => {
    item.style.display = "block";
    itemTransition(item);
  });
};

// 시간대에 맞춰 인삿말 바꾸기
function setGreetingMessage() {
  const today = new Date();
  const hour = today.getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "좋은 아침입니다!";
  } else if (hour >= 12 && hour < 18) {
    greeting = "좋은 오후입니다!";
  } else if (hour >= 3 && hour < 5) {
    greeting = "좋은 새벽입니다!";
  } else {
    greeting = "좋은 저녁입니다!";
  }

  const homeTitleElement = document.getElementById("home__title");

  if (homeTitleElement) {
    homeTitleElement.innerHTML += greeting;
  }
}

// 스크립트가 실행될 때 함수 호출
setGreetingMessage();

// 메뉴상단바 하이라이트
menuHome.onclick = () => {
  menuHome.className = "header__menu__item active";
  menuAbout.className = "header__menu__item";
  menuSkills.className = "header__menu__item";
  menuWork.className = "header__menu__item";
  menuLicense.className = "header__menu__item";
  menuContact.className = "header__menu__item";
};

menuAbout.onclick = () => {
  menuHome.className = "header__menu__item";
  menuAbout.className = "header__menu__item active";
  menuSkills.className = "header__menu__item";
  menuWork.className = "header__menu__item";
  menuLicense.className = "header__menu__item";
  menuContact.className = "header__menu__item";
};

menuSkills.onclick = () => {
  menuHome.className = "header__menu__item";
  menuAbout.className = "header__menu__item";
  menuSkills.className = "header__menu__item active";
  menuWork.className = "header__menu__item";
  menuLicense.className = "header__menu__item";
  menuContact.className = "header__menu__item";
};

menuWork.onclick = () => {
  menuHome.className = "header__menu__item";
  menuAbout.className = "header__menu__item";
  menuSkills.className = "header__menu__item";
  menuWork.className = "header__menu__item active";
  menuLicense.className = "header__menu__item";
  menuContact.className = "header__menu__item";
};

menuLicense.onclick = () => {
  menuHome.className = "header__menu__item";
  menuAbout.className = "header__menu__item";
  menuSkills.className = "header__menu__item";
  menuWork.className = "header__menu__item";
  menuLicense.className = "header__menu__item active";
  menuContact.className = "header__menu__item";
};

menuContact.onclick = () => {
  menuHome.className = "header__menu__item";
  menuAbout.className = "header__menu__item";
  menuSkills.className = "header__menu__item";
  menuWork.className = "header__menu__item";
  menuLicense.className = "header__menu__item";
  menuContact.className = "header__menu__item active";
};
