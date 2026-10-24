# Endogenism Web

Trang web quảng bá toàn diện hệ thống tư tưởng và toàn bộ bài viết của **Chủ nghĩa Nội sinh (Endogenism)**, kết nối trực tiếp với ứng dụng thực hành **Anam** và hệ sinh thái video **YouTube / TikTok**.

## 🌿 Điểm Nhấn Kiến Trúc## 🌿 Mục đích
Trang đọc 150 bài viết của endo-book, và dẫn người đọc sang app **Anam** (anam.app) để thực hành. Web không làm thay việc của app.

- **Giao diện**: đồng bộ với Anam — nền `#0F141C`, sage `#2A9D8F`, màu riêng cho từng Mạch (`ZenTheme.getCircuitColor`), Lora + Plus Jakarta Sans, kính mờ bo tròn.
- **Trang chủ**: tuyên ngôn cốt lõi, bài của hôm nay, hai loại giá trị, 5 Mạch kèm câu hỏi của từng chặng, lối vào theo tâm trạng.
- **Trang bài**: số bài / 150, thời gian đọc thật, câu hỏi tự vấn cuối bài kèm nút mở Anam.
- **Tiến trình đọc**: "Đọc tiếp" và dấu đã đọc, chỉ lưu trong localStorage của người đọc.
- `/noi-sinh`: render `index.md` (phần giới thiệu Endogenism).



```bash
# Cài đặt thư viện
npm install

# Khởi chạy môi trường phát triển (Local Dev)
npm run dev

# Biên dịch tĩnh siêu tốc (SSG)
npm run build

# Xem trước bản build
npm run preview
```

## 📂 Cấu Trúc Thư Mục
- `src/content/posts/`: Toàn bộ kho tàng 150 bài viết thuộc 5 Mạch tư tưởng.
- `src/lib/journey.ts`: thứ tự 150 bài, cấu hình 5 Mạch, thời gian đọc, trích câu hỏi tự vấn.
- `src/lib/remark-strip-book-chrome.mjs`: gỡ H1 / dòng "Bài N / Mạch" / "Bài tiếp theo" có sẵn trong bản sách.
- `src/components/`: Header, Footer, DailyPebble, FiveArteriesJourney, MoodSelector, AnamPracticeBridge...
- `src/layouts/`: BaseLayout và PostLayout (chuyên biệt cho việc đọc sách tập trung).
- `src/pages/`:
  - `index.astro`: Trang chủ Cánh Cổng Tĩnh Lặng.
  - `posts/index.astro`: Toàn bộ mục lục 150 bài viết kèm tìm kiếm trực tiếp.
  - `posts/[...slug].astro`: Trang đọc bài.
  - `noi-sinh.astro`: Endogenism là gì.
  - `mach/[mach].astro`: Bộ lọc bài viết theo từng Mạch riêng biệt.
  - `media.astro`: Trung tâm YouTube & TikTok.
