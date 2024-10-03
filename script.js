document.getElementById('createBtn').addEventListener('click', function() {
    // フォームの入力を取得
    const bgColor = document.getElementById('bgColor').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const boldText = document.getElementById('boldText').checked ? 'bold' : 'normal';
    const imageURL = document.getElementById('imageURL').value;
    const chapterTitle = document.getElementById('chapterTitle').value;
    const buttonText = document.getElementById('buttonText').value;
    const buttonLink = document.getElementById('buttonLink').value;

    // HTMLコードを生成
    const generatedHTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${chapterTitle}</title>
    <style>
        body {
            background-color: ${bgColor};
            font-size: ${fontSize};
            font-weight: ${boldText};
        }
    </style>
</head>
<body>
    <h1>${chapterTitle}</h1>
    <p>これは生成された段落です。</p>
    <img src="${imageURL}" alt="画像">
    <a href="${buttonLink}" class="btn">${buttonText}</a>
</body>
</html>
    `;

    // 生成されたコードを画面に表示
    document.getElementById('generatedCode').innerText = generatedHTML;
});
