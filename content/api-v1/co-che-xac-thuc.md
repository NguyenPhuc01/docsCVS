---
title: "Cơ Chế Xác Thực"

---

## Cơ Chế Xác Thực

Chúng tôi sử dụng `Basic Authentication` để cấp quyền truy cập vào API.

Cách hoạt động:

1. API access key là một cặp:

- username (api_key): một mã định danh duy nhất của API access key.
- password (api_secret): một mã bí mật của API access key.

Đội ngũ Computer Vision Việt Nam sẽ tạo username và password cho từng khách hàng trước khi tích hợp.

2. Client gửi một request:

Client gửi HTTP requests cùng với `Authorization` header chứa `Basic` theo sau là một khoảng trắng và một mã hoá Base64 `username:password`.
Ví dụ, `demo:p@55w0rd` client sẽ gửi

```
Authorization: Basic ZGVtbzpwQDU1dzByZA==
```
