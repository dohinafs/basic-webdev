function toggleSidebar() {
    var menu = document.getElementById("mymenu");
  
    if (menu.style.width === "250px") {
      menu.style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
     
    } else {
      menu.style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
  }
  }