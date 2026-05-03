function checkEmail() {
        let email = document.querySelector("#emailfield").value;
        if (!email.includes("@")) alert("Нет символа @");
        else if (!email.includes(".")) alert("Нет символа.");
        else alert("Все отлично");
      }

