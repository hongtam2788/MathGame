# Game Toán Lớp 1 - Design Brief

## Mục tiêu Game

Giúp trẻ lớp 1 học phép cộng cơ bản thông qua trò chơi tương tác. Game được thiết kế để vừa mang tính giáo dục vừa thú vị, khuyến khích trẻ học hỏi toán học.

## Thông số kỹ thuật

| Yếu tố | Chi tiết |
|--------|---------|
| **Tên game** | Game Toán Lớp 1 |
| **Độ tuổi** | 6-7 tuổi (Lớp 1) |
| **Nền tảng** | Web (HTML/CSS/JavaScript) |
| **Thời lượng chơi** | 5-10 phút |
| **Số câu hỏi** | 20 câu |
| **Loại bài toán** | Phép cộng (1+1 đến 10+5) |

## Gameplay Loop

1. **Hiển thị câu hỏi**: Hiển thị phép toán dưới dạng `num1 + num2 = ?`
2. **Người chơi chọn đáp án**: 3 lựa chọn trắc nghiệm
3. **Phản hồi ngay lập tức**: 
   - ✅ Đúng: Hiển thị "Đúng rồi!" và tô xanh nút
   - ❌ Sai: Hiển thị "Chưa đúng" và tô đỏ nút, highlight đáp án đúng
4. **Chuyển sang câu tiếp theo**: Tự động sau 1.5 giây
5. **Kết quả cuối cùng**: Hiển thị tổng số câu đúng, tỷ lệ phần trăm

## Features

### Core Features
- ✅ 20 câu hỏi phép cộng random
- ✅ Trắc nghiệm 3 lựa chọn
- ✅ Phản hồi visual (màu sắc)
- ✅ Scoring system
- ✅ Progress bar
- ✅ Chơi lại

### Visual Design
- 🎨 Gradient màu tím (lôi cuốn trẻ em)
- 🎨 Font lớn, dễ đọc
- 🎨 Responsive design (mobile-friendly)
- 🎨 Animation mượt mà

### Accessibility
- ✓ Văn bản rõ ràng, dễ đọc
- ✓ Kích thước nút phù hợp cho trẻ
- ✓ Màu sắc có độ tương phản cao
- ✓ Không yêu cầu sound (có thể thêm sau)

## Phạm vi Bài toán

### Số học
- **Số hạng 1**: 1 đến 10
- **Số hạng 2**: 1 đến 5
- **Kết quả**: 2 đến 15

### Ví dụ câu hỏi
- 1 + 1 = ?
- 5 + 3 = ?
- 10 + 5 = ?

## Hạn Chế Hiện Tại

- 🚫 Chỉ có phép cộng (chưa có trừ, nhân, chia)
- 🚫 Chưa có leaderboard
- 🚫 Chưa có setting độ khó
- 🚫 Chưa có âm thanh

## Hướng Mở Rộng Tương Lai

1. **Thêm phép toán**: Trừ, nhân, chia
2. **Leaderboard**: Lưu điểm cao
3. **Điều chỉnh độ khó**: Easy/Normal/Hard
4. **Âm thanh**: Hiệu ứng âm thanh cho đáp án đúng/sai
5. **Badges & Rewards**: Huy hiệu cho từng mức thành tích
6. **Multiplayer**: Chơi cùng bạn bè

## Acceptance Criteria

✅ Game có thể chơi trên web
✅ 20 câu hỏi phép cộng random
✅ 3 lựa chọn trắc nghiệm
✅ Feedback visual ngay lập tức
✅ Scoring chính xác
✅ Responsive trên mobile
✅ Deploy được lên GitHub Pages
