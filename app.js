const allRead = document.querySelector(".all-read");
const userNotif = document.querySelectorAll(".user-notif");
const iconPlace = document.querySelectorAll(".icon-place");
const unread = document.querySelectorAll(".unread");
const numberNotif = document.querySelector(".number-notif");

numberNotif.innerText = unread.length;

allRead.addEventListener("click", () => {
  userNotif.forEach((e) => e.classList.remove("unread"));
  iconPlace.forEach((e) => e.classList.remove("icon"));
  const newUnread = document.querySelectorAll(".unread");
  numberNotif.innerText = newUnread.length;
});

userNotif.forEach((e) =>
  e.addEventListener("click", () => {
    e.classList.remove("unread");
    const newUnread = document.querySelectorAll(".unread");
    numberNotif.innerText = newUnread.length;
  })
);
