# 🎮 Game Toán Lớp 1

Một trò chơi web đơn giản giúp trẻ lớp 1 học phép cộng cơ bản.

## ✨ Features

- ✅ 20 câu hỏi phép cộng random (1+1 đến 10+5)
- ✅ Trắc nghiệm 3 lựa chọn
- ✅ Phản hồi visual ngay lập tức
- ✅ Scoring system
- ✅ Progress bar
- ✅ Responsive design (desktop & mobile)
- ✅ Deploy được lên GitHub Pages

## 🚀 Chạy Game Trên Local

### Cách 1: Dùng Python (Nếu máy có Python)

```bash
cd src/
python -m http.server 8000
```

Rồi mở trình duyệt vào: `http://localhost:8000`

### Cách 2: Dùng Node.js (Nếu máy có Node.js)

```bash
npx http-server src/
```

Rồi mở trình duyệt vào: `http://localhost:8080`

### Cách 3: Dùng Live Server (VS Code Extension)

1. Cài VS Code Extension "Live Server"
2. Chuột phải vào `src/index.html` → "Open with Live Server"

## 📱 Deploy Lên GitHub Pages

### Bước 1: Tạo repository trên GitHub

1. Vào https://github.com/new
2. Tên repo: `game-math-grade1`
3. Chọn "Public"
4. Chọn "Initialize this repository with: Add a README.md"
5. Bấm "Create repository"

### Bước 2: Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/game-math-grade1.git
cd game-math-grade1
```

### Bước 3: Copy game files

Copy tất cả file từ thư mục này vào repository.

### Bước 4: Commit & Push

```bash
git add .
git commit -m "Initial commit: Add math game for grade 1"
git push -u origin main
```

### Bước 5: Bật GitHub Pages

1. Vào Settings repository
2. Tìm "Pages" (trái sidebar)
3. Chọn "Build and deployment"
4. Chọn "Deploy from a branch"
5. Branch: `main`, folder: `/ (root)`
6. Bấm "Save"

### Bước 6: Game sẽ chạy tại

```
https://YOUR_USERNAME.github.io/game-math-grade1/
```

Ví dụ: `https://hongtam2788.github.io/game-math-grade1/`

## 📁 Cấu Trúc Project

```
game-math-grade1/
├── src/
│   ├── index.html          ← Game entry point
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── game.js
├── design/
│   └── game-brief.md       ← Design document
├── README.md
└── .gitignore (optional)
```

## 🎮 Cách Chơi

1. **Bắt đầu**: Trang web sẽ tự hiển thị câu hỏi đầu tiên
2. **Trả lời**: Chọn 1 trong 3 đáp án
3. **Phản hồi**: Bạn sẽ thấy phản hồi ngay lập tức
4. **Tiếp tục**: Tự động chuyển sang câu hỏi tiếp theo
5. **Kết thúc**: Sau 20 câu, hiển thị kết quả và % điểm

## 🛠️ Tùy Chỉnh Game

### Thay đổi phạm vi số học

Mở `src/js/game.js` và tìm:

```javascript
const MAX_NUM1 = 10;    // Số hạng 1: 1-10
const MAX_NUM2 = 5;     // Số hạng 2: 1-5
```

Thay đổi các giá trị này.

### Thay đổi số câu hỏi

```javascript
const TOTAL_QUESTIONS = 20;  // Thay 20 bằng số câu muốn
```

### Thay đổi thời gian chuyển câu

Mở `src/js/game.js`, tìm:

```javascript
setTimeout(() => {
    gameState.currentQuestion++;
    displayQuestion();
}, 1500);  // 1500ms = 1.5 giây
```

Thay đổi `1500` (ms).

### Thay đổi màu sắc

Mở `src/css/style.css` và thay đổi gradient màu:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📝 Design Document

Xem chi tiết tại `design/game-brief.md`

## 🔄 Hướng Mở Rộng

- [ ] Thêm phép trừ, nhân, chia
- [ ] Thêm leaderboard
- [ ] Thêm điều chỉnh độ khó
- [ ] Thêm âm thanh
- [ ] Thêm badges/rewards

## 📄 License

MIT License

## 🤝 Support

Nếu có vấn đề, vui lòng tạo issue trên GitHub.

---

**Chúc bạn chơi vui! 🎉**
