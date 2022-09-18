const scriptURL = "https://script.google.com/macros/s/AKfycbwag8-BOgKfZIACmZM01bAzzbDfwjOWdl0BFDuLZrjfLo5b8dmvTL4yIEG-A4QuXAXW/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // Tampilkan Alert
      myAlert.classList.toggle("d-none");
      // Hilangkan isi form
      form.reset();
      // Console
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
