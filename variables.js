function kingdom() {
    if (true) {
    var king = "Arthur";
    }
    console.log(king); // 👑 Still the king of the whole kingdom
}
kingdom();

function kingdom() {
    if (true) {
    let prince = "Lancelot";
      console.log(prince); // Output: Lancelot
    }
    console.log(prince); // Output: ❌ Error
    // Prince has no power outside his region
}
kingdom();