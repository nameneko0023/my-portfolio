
// ファイル選択ダイアログを開く
document.getElementById("openFile").addEventListener("click", function() {
  document.getElementById("fileInput").click();
});

// ファイル選択時の処理
document.getElementById("fileInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
  const allowedTypes = [".pdb", ".dcd"];
  if (!allowedTypes.includes(file.type)) {
    alert("対応していないファイル形式です");
    return;
  }
  console.log("選択されたファイル:", file.name);

    // ここでファイルの処理を続けられます（アップロードなど）
  }
});