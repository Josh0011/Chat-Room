//
const menuItems = document.querySelectorAll(".menu-item");
const messageNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#messages-search");
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
// const = document.querySelectorAll(.)

// Hightlight the message bos=x
messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = " 0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// /////// THIS IS FOR THE SIDEBAR //// /////// /////
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// ///// // //  // // /  MESSAGES SEARCH ///// ///// // // /

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelectorAll(".h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

// // // //  THEME CUSTOMIZATION /// //  // // // //
//   /// THIS IS FOR THE OPEN
let openThemeModal = () => {
  themeModal.style.display = "grid";
};
//  THIS IS FOR THE CLOSE
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);

// ////
theme.addEventListener("click", openThemeModal);

// ////// FONT SIZE /////////////////

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "21px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  });
});

// COLOR CHNAGE /////

// COLOR BG REMOVED

const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveColorClass();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// THEME BG VALUES

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// CHANGE BG FUNCTION COLOR

const ChangeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  darkColorLightness = " 95%";
  whiteColorLightness = "20%";
  lightColorLightness = "0%";

  // Active class  add
  Bg2.classList.add("active");
  // Active class  removed
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");

  window.location.reload();
});
Bg2.addEventListener("click", () => {
  darkColorLightness = " 95%";
  whiteColorLightness = "20%";
  lightColorLightness = "0%";

  // Active class  add
  Bg2.classList.add("active");
  // Active class  removed
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  ChangeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = " 95%";
  whiteColorLightness = "20%";
  lightColorLightness = "0%";

  // Active class  add
  Bg2.classList.add("active");
  // Active class  removed
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  ChangeBG();
});
