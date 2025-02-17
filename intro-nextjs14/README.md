# 5. Tìm hiểu về NextJS 14 (App Router)

- Trong dự án này mình sử dụng NextJS 14
- In this project, I use database MongoDB, has name database is `next14`

---

# Có nên sử dụng NextJS để viết API và những điều lưu ý

'/Volumes/HDD-Coding/0. KHOÁ HỌC MIỄN PHÍ/1. Front-end/Nextjs/Khóa học NextJS 14 Reactjs TypeScript thực chiến 2024 PRO/6. Thực chiến xây dựng trang blog với NextJS 14 trong App Router/9. Có nên sử dụng NextJS viết API và vài điều cần lưu ý..mp4'

- ưu điểm:
  - tích hợp dễ dàng, do có api route rồi, nên mình cần dựa vào đó và viết các api thôi, chứ không cần config thêm cái gì nữa
  - tiện lợi: sử dụng nextjs để build frontend và backend (dùng để build nextjs cho dự án fullstack)
- nhược điểm:
  - khó khăn trong việc quản lý code: lúc này khi sử dụng nextjs cho UI và API, quản lý code BE và FE trở nên phức tạp
  - hiệu suất api: chậm hơn, do nextjs dùng để build frontend, nên khi build api thì chậm hơn, do nextjs không chuyên về api
  - khó khăn trong việc debug: check lỗi khó hơn, nextjs ko hỗ trợ nhiều trong việc debug như thằng nodejs
- lời khuyên:
  - nếu bạn đang xây dựng ứng dụng web nhỏ và đơn giản, NextJS có thể là 1 lựa chọn cho tất cả frontend và backend
  - nếu bạn đang xây dựng 1 ứng dụng web lớn và phức tạp, bạn nên cân nhắc sử dụng các framework riêng biệt cho frontend và backend
