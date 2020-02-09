var switch_flg = true;
$("#a").on("click", function () {
  if (switch_flg == true) {
    var num = Math.floor(Math.random() * 3);
    $(".instruction").fadeOut(0);
    if (num == 0) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/グー.png");
      $(".action").after("<p class='result'>あいこ</p>");
    } else if (num == 1) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/チョキ.png");
      $(".action").after("<p class='result'>勝ち！</p>");
    } else if (num == 2) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/パー.png");
      $(".action").after("<p class='result'>負け！</p>");
    }
    switch_flg = false;
  } else if (switch_flg == true) {
    $(".action").off();
    switch_flg = true;
  }
})

$("#b").on("click", function () {
  if (switch_flg == true) {
    var num = Math.floor(Math.random() * 3);
    $(".instruction").fadeOut(0);
    if (num == 0) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/グー.png");
      $(".action").after("<p class='result'>負け！</p>");
    } else if (num == 1) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/チョキ.png");
      $(".action").after("<p class='result'>あいこ</p>");
    } else if (num == 2) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/パー.png");
      $(".action").after("<p class='result'>勝ち！</p>");
    }
    switch_flg = false;
  } else if (switch_flg == true) {
    $(".action").off();
    switch_flg = true;
  }
})

$("#c").on("click", function () {
  if (switch_flg == true) {
    var num = Math.floor(Math.random() * 3);
    $(".instruction").fadeOut(0);
    if (num == 0) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/グー.png");
      $(".action").after("<p class='result'>勝ち！</p>");
    } else if (num == 1) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/チョキ.png");
      $(".action").after("<p class='result'>負け！</p>");
    } else if (num == 2) {
      $(".action").attr("src", "/Users/yosuke/Desktop/エンジニアブートキャンプ/第3回/課題/img/パー.png");
      $(".action").after("<p class='result'>あいこ</p>");
    }
    switch_flg = false;
  } else if (switch_flg == true) {
    $(".action").off();
    switch_flg = true;
  }
})
