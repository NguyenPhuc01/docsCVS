---
title: 'API v1'
description: 'Tài liệu hướng dẫn tích hợp API Computer Vision Việt Nam'
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

## Dòng Tương Tác

### Flow 1: OCR

[![ocr](https://static.swimlanes.io/591b6e2fea681de2bf8c1e8e3aee30b6.png)](https://swimlanes.io/d/DpmXjqcrp)

### Flow 2: Face Matching

[![face matching](https://static.swimlanes.io/862fcd7dfc64aabe0d9d8b64676856dd.png)](https://swimlanes.io/d/umDCBbU-d)

<!--
### Flow 3: Detect Celeb

[![detect celeb](https://static.swimlanes.io/935e86e95755cebbaa4cbbf47108bc82.png)](https://swimlanes.io/d/Hmr8bv6BN)


### Flow 4: NSFW

[![nsfw](https://static.swimlanes.io/22c021582eee12cf5b0e3c571998cfff.png)](https://swimlanes.io/d/M3acB38bC)

### Flow 5: Smart Crop


[![smart crop](https://static.swimlanes.io/84b3c4cba82880241117861a369569ce.png)](https://swimlanes.io/d/CTONsNbIq)

### Flow 6: Smart Layout


[![smart layout](https://static.swimlanes.io/f88d3af125769a2faf2ed270e3a485d3.png)](https://swimlanes.io/d/JsgaGV2e6)

### Flow 7: Tagging

[![tagging](https://static.swimlanes.io/ea9e9f8879ab48626a7caf8bc641e643.png)](https://swimlanes.io/d/UDuJCMwel) -->

### Flow 3: Face Search

[![face search](https://static.swimlanes.io/9012d6bc5b996fb780c1c1abad6d75d6.png)](https://swimlanes.io/d/INlNJtSgY)

## Danh sách APIs

### OCR

OCR service là hệ thống AI cho phép trích xuất thông tin từ ảnh chứng minh nhân dân, thẻ căn cước của công dân Việt Nam, bằng lái xe, Passport. Hệ thống hỗ trợ nhận diện cả mặt trước và cả mặt sau của chứng minh nhân dân và thẻ căn cước công dân, hỗ trợ bằng lái xe, Passport, hỗ trợ cả chứng minh nhân dân cũ.

1. Trích xuất thông tin hai mặt chứng minh thư thẻ căn cước với đầu vào url ảnh

**API**:

| Method | URL                                                                             |
| ------ | ------------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimat` |

**Params**:

| Key        | Value                              | Mô tả                                      |
| ---------- | ---------------------------------- | ------------------------------------------ |
| `mattruoc` | `https://example.com/mattruoc.png` | url ảnh mặt trước cần trích xuất thông tin |
| `matsau`   | `https://example.com/matsau.png`   | url ảnh mặt sau cần trích xuất thông tin   |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

mattruoc_url = 'mat truoc url'
matsau_url = 'mat sau url'
response = requests.get(
"https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimat?mattruoc=%s&matsau=%s" % (mattruoc_url, matsau_url),
  auth=(api_key, api_secret))

print(response.json())

```

2. Trích xuất thông tin mặt trước chứng minh thư thẻ căn cước với đầu vào url ảnh

**API**:

| Method | URL                                                                               |
| ------ | --------------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_mattruoc` |

**Params**:

| Key   | Value                              | Mô tả                                      |
| ----- | ---------------------------------- | ------------------------------------------ |
| `url` | `https://example.com/mattruoc.png` | url ảnh mặt trước cần trích xuất thông tin |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

image_url = 'https://vemaybaybackinh.net/assets/uploads/2019/01/thẻ-căn-cước.jpg'

response = requests.get(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_mattruoc?url=%s" % image_url,
  auth=(api_key, api_secret))

print(response.json())

```

3. Trích xuất thông tin mặt sau chứng minh thư thẻ căn cước với đầu vào url ảnh.

**API**:

| Method | URL                                                                             |
| ------ | ------------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_matsau` |

**Params**:

| Key   | Value                            | Mô tả                                    |
| ----- | -------------------------------- | ---------------------------------------- |
| `url` | `https://example.com/mausau.png` | url ảnh mặt sau cần trích xuất thông tin |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

image_url = 'https://vemaybaybackinh.net/assets/uploads/2019/01/thẻ-căn-cước.jpg'

response = requests.get(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_matsau?url=%s" % image_url,
  auth=(api_key, api_secret))

print(response.json())

```

4. Trích xuất thông tin hai mặt chứng minh thư thẻ căn cước với đầu vào file ảnh

**API**:

| Method | URL                                                                             | content-type          |
| ------ | ------------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimat` | `multipart/form-data` |

**Body**:

| Key        | Type | Value                  | Mô tả                                       |
| ---------- | ---- | ---------------------- | ------------------------------------------- |
| `mattruoc` | file | `example_mattruoc.jpg` | file ảnh mặt trước cần trích xuất thông tin |
| `matsau`   | file | `example_matsau.jpg`   | file ảnh mặt sau cần trích xuất thông tin   |

**Demo Python**:

```python

import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
mattruoc_path = '/path/to/your/mattruoc.jpg'
matsau_path = '/path/to/your/matsau.jpg'

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimat",
  auth=(api_key, api_secret),
  files={'mattruoc': open(mattruoc_path, 'rb'), 'matsau' : open(matsau_path, 'rb')})

print(response.json())

```

5. Trích xuất thông tin mặt trước chứng minh thư thẻ căn cước với đầu vào file ảnh

**API**:

| Method | URL                                                                               | content-type          |
| ------ | --------------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_mattruoc` | `multipart/form-data` |

**Body**:

| Key     | Type | Value                  | Mô tả                                       |
| ------- | ---- | ---------------------- | ------------------------------------------- |
| `image` | file | `example_mattruoc.jpg` | file ảnh mặt trước cần trích xuất thông tin |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
image_path = '/path/to/your/image.jpg'

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_mattruoc",
  auth=(api_key, api_secret),
  files={'image': open(image_path, 'rb')})

print(response.json())

```

6. Trích xuất thông tin mặt sau chứng minh thư thẻ căn cước với đầu vào file ảnh

**API**:

| Method | URL                                                                             | content-type          |
| ------ | ------------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_matsau` | `multipart/form-data` |

**Body**:

| Key     | Type | Value                | Mô tả                                     |
| ------- | ---- | -------------------- | ----------------------------------------- |
| `image` | file | `example_matsau.jpg` | file ảnh mặt sau cần trích xuất thông tin |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
image_path = '/path/to/your/image.jpg'

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_matsau",
  auth=(api_key, api_secret),
  files={'image': open(image_path, 'rb')})

print(response.json())

```

7. Trích xuất thông tin hai mặt chứng minh thư thẻ căn cước với đầu vào json

**API**:

| Method | URL                                                                                   | content-type       |
| ------ | ------------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimatbase64` | `application/json` |

**Body**:

```json
{
  "mattruoc": "iVBORw0KGgoAAAANSU...", // string base64 của ảnh mặt trước
  "matsau": "iVBORw0KGgoAAAANSU..." // string base64 của ảnh mặt sau
}
```

**Demo Python**:

```python
import base64
import io
import requests
from PIL import Image
def get_byte_img(img):
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
    return encoded_img
api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_mattruoc_path = "/path/to/your/img_mattruoc.jpg"
img_matsau_path = "/path/to/your/img_matsau.jpg"
encode_mattruoc = get_byte_img(Image.open(img_mattruoc_path))
encode_matsau = get_byte_img(Image.open(img_matsau_path))
response = requests.post(
    "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimatbase64",
    auth=(api_key, api_secret),
    json={'mattruoc' : encode_mattruoc, "matsau" : encode_matsau})
print(response.json())
```

8. Trích xuất thông tin mặt trước chứng minh thư thẻ căn cước với đầu vào json

**API**:

| Method | URL                                                                                     | content-type       |
| ------ | --------------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_mattruocbase64` | `application/json` |

**Body**:

```json
{
  "image": "iVBORw0KGgoAAAANSU..." // string base64 của ảnh cần trích xuất
}
```

**Demo Python**:

```python
import base64
import io
import requests
from PIL import Image
def get_byte_img(img):
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
    return encoded_img
api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_name = "path_img"
encode_cmt = get_byte_img(Image.open(img_name))
response = requests.post(
    "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_mattruocbase64",
    auth=(api_key, api_secret),
    json={'image' : encode_cmt})
print(response.json())
```

9. Trích xuất thông tin mặt sau chứng minh thư thẻ căn cước với đầu vào json

**API**:

| Method | URL                                                                                   | content-type       |
| ------ | ------------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_matsaubase64` | `application/json` |

**Body**:

```json
{
  "image": "iVBORw0KGgoAAAANSU..." // string base64 của ảnh cần trích xuất
}
```

**Demo Python**:

```python
import base64
import io
import requests
from PIL import Image
def get_byte_img(img):
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
    return encoded_img
api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_name = "path_img"
encode_cmt = get_byte_img(Image.open(img_name))
response = requests.post(
    "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_matsaubase64",
    auth=(api_key, api_secret),
    json={'image' : encode_cmt})
print(response.json())
```

10. Trích xuất thông tin chứng minh thư, thẻ căn cước với đầu vào file PDF hoặc file ảnh

**API**:

| Method | URL                                                                           | content-type          |
| ------ | ----------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/v1/get_infor` | `multipart/form-data` |

**Body**:

| Key    | Type | Value         | Mô tả                                                                    |
| ------ | ---- | ------------- | ------------------------------------------------------------------------ |
| `file` | file | `example.pdf` | file PDF chứa ảnh CMND, thẻ căn cước, có thể gồm cả mặt trước và mặt sau |

**Demo Python**:

```python

import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
file_path = '/path/to/your/example.pdf'

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/v1/get_infor",
  auth=(api_key, api_secret),
  files={'file': open(file_path, 'rb')})

print(response.json())

```

11. Trích xuất thông tin từ 1 loại bất kỳ CMT mặt trước/mặt sau, CCCD mặt trước/mặt sau, Passport, đầu vào url ảnh.

**API**:

| Method | URL                                                                                |
| ------ | ---------------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_infor_all` |

**Params**:

| Key   | Value                           | Mô tả                                                                  |
| ----- | ------------------------------- | ---------------------------------------------------------------------- |
| `url` | `https://example.com/image.png` | url ảnh bất kỳ CMT mặt trước/mặt sau, CCCD mặt trước/mặt sau, Passport |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

image_url = 'https://example.com/image.png'

response = requests.get(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_infor_all?url=%s" % image_url,
  auth=(api_key, api_secret))

print(response.json())

```

12. Trích xuất thông tin từ 1 loại bất kỳ CMT mặt trước/mặt sau, CCCD mặt trước/mặt sau, Passport, đầu vào file ảnh

**API**:

| Method | URL                                                                                | content-type          |
| ------ | ---------------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_infor_all` | `multipart/form-data` |

**Body**:

| Key     | Type | Value         | Mô tả                                                                   |
| ------- | ---- | ------------- | ----------------------------------------------------------------------- |
| `image` | file | `example.jpg` | file ảnh bất kỳ CMT mặt trước/mặt sau, CCCD mặt trước/mặt sau, Passport |

**Demo Python**:

```python

import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
image_path = '/path/to/your/example.jpg'

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_infor_all",
  auth=(api_key, api_secret),
  files={'image': open(image_path, 'rb')})

print(response.json())

```

13. Trích xuất thông tin từ 1 loại bất kỳ CMT mặt trước/mặt sau, CCCD mặt trước/mặt sau, Passport, đầu vào file json

**API**:

| Method | URL                                                                                      | content-type       |
| ------ | ---------------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_infor_allbase64` | `application/json` |

**Body**:

```json
{
  "image": "iVBORw0KGgoAAAANSU..." // string base64 của ảnh cần trích xuất
}
```

**Demo Python**:

```python
import base64
import io
import requests
from PIL import Image
def get_byte_img(img):
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
    return encoded_img
api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_name = "path_img"
encode_cmt = get_byte_img(Image.open(img_name))
response = requests.post(
    "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_infor_allbase64",
    auth=(api_key, api_secret),
    json={'image' : encode_cmt})
print(response.json())
```

14. Trích xuất thông tin bằng lái xe với đầu vào url ảnh

**API**:

| Method | URL                                                                          |
| ------ | ---------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/blx/get_blx` |

**Params**:

| Key   | Value                         | Mô tả                                        |
| ----- | ----------------------------- | -------------------------------------------- |
| `url` | `https://example.com/blx.png` | url ảnh bằng lái xe cần trích xuất thông tin |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

image_url = 'https://daotaothanhcong.com/wp-content/uploads/2019/10/bang-lai-xe-b1-co-thoi-han-bao-lau.jpg'

response = requests.get(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/blx/get_blx?url=%s" % image_url,
  auth=(api_key, api_secret))

print(response.json())

```

15. Trích xuất thông tin bằng lái xe với đầu vào file ảnh

**API**:

| Method | URL                                                                          | content-type          |
| ------ | ---------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/blx/get_blx` | `multipart/form-data` |

**Body**:

| Key     | Type | Value             | Mô tả                                         |
| ------- | ---- | ----------------- | --------------------------------------------- |
| `image` | file | `example_blx.jpg` | file ảnh bằng lái xe cần trích xuất thông tin |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
image_path = '/path/to/your/image.jpg'

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/blx/get_blx",
  auth=(api_key, api_secret),
  files={'image': open(image_path, 'rb')})

print(response.json())

```

16. Trích xuất thông tin bằng lái xe với đầu vào json

**API**:

| Method | URL                                                                                | content-type       |
| ------ | ---------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/ocr/blx/get_blxbase64` | `application/json` |

**Body**:

```json
{
  "image": "iVBORw0KGgoAAAANSU..." // string base64 của ảnh cần trích xuất
}
```

**Demo Python**:

```python
import base64
import io
import requests
from PIL import Image
def get_byte_img(img):
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
    return encoded_img
api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_name = "path_img"
encode_cmt = get_byte_img(Image.open(img_name))
response = requests.post(
    "https://cloud.computervision.com.vn/backend/api/v1/request/ocr/blx/get_blxbase64",
    auth=(api_key, api_secret),
    json={'image' : encode_cmt})
print(response.json())
```

17. Trích xuất line text trong văn bản scan với đầu vào url ảnh.

**API**:

| Method | URL                                                                                      |
| ------ | ---------------------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/text_photostory/get_scan_a4` |

**Params**:

| Key   | Value                           | Mô tả                |
| ----- | ------------------------------- | -------------------- |
| `url` | `https://example.com/image.png` | url ảnh văn bản scan |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

image_url = 'https://example.com/image.png'

response = requests.get(
  "https://cloud.computervision.com.vn/backend/api/v1/request/text_photostory/get_scan_a4?url=%s" % image_url,
  auth=(api_key, api_secret))

print(response.json())

```

18. Trích xuất line text trong văn bản scan với đầu vào file ảnh

**API**:

| Method | URL                                                                                      | content-type          |
| ------ | ---------------------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/text_photostory/get_scan_a4` | `multipart/form-data` |

**Body**:

| Key     | Type | Value         | Mô tả                                |
| ------- | ---- | ------------- | ------------------------------------ |
| `image` | file | `example.jpg` | file ảnh văn bản scan cần trích xuất |

**Demo Python**:

```python

import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
image_path = '/path/to/your/example.jpg'

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/text_photostory/get_scan_a4",
  auth=(api_key, api_secret),
  files={'image': open(image_path, 'rb')})

print(response.json())

```

19. Thông tin trả về

Phản hồi sẽ là một JSON với định dạng sau:

```json
{
  "type": [xxxx],
  "data": [xxxx],
  "valid": string, // False nếu ảnh đầu vào mờ, che hoặc có dấu hiệu giả mạo, ngược lại True
  "errorCode": string, // mã lỗi
  "errorMessage": string // thông báo lỗi
}
```

_Chú ý_: Trường hợp trích xuất thông tin bằng lái xe và trích xuất từ file PDF không có trường `valid`.

`type`: Loại giấy tờ tùy thân được trích xuất thông tin, trong trường hợp `get_haimat` sẽ không có trường này.

    - `cmt`: ứng với mặt trước của chứng minh nhân dân.
    - `tcc`: ứng với mặt trước thẻ căn cước công dân.
    - `matsaucmt`: ứng với mặt sau của chứng minh nhân dân.
    - `matsautcc`: ứng với mặt sau của thẻ căn cước.
    - `blx`: ứng với bằng lái xe.
    - `pdf`: ứng với upload file PDF.

`data`: Bao gồm các thông tin được trích xuất từ ảnh đầu vào có giấy tờ tùy thân, với mỗi loại giấy tờ tùy thân thì sẽ có những thông tin trả về khác nhau.

Mặt trước chứng minh nhân dân.

    - `id`: số chứng minh thư.
    - `name`: họ và tên.
    - `born`: ngày sinh.
    - `country`: quê quán.
    - `address`: thường trú

Mặt trước thẻ căn cước công dân.

    - `id`: số thẻ.
    - `name`: họ và tên.
    - `born`: ngày sinh.
    - `country`: quê quán
    - `sex`: giới tính.
    - `duedate`: ngày hết hạn.
    - `quoctich`: quốc tịch.
    - `dantoc`: dân tộc.
    - `address`: thường trú.

Mặt sau chứng minh nhân dân.

    - `dantoc`: dân tộc.
    - `date`: ngày cấp.
    - `dauvet`: dấu vết riêng và dị hình.
    - `tongiao`: tôn giáo.
    - `noicap`: nơi cấp

Mặt sau thẻ căn cước công dân.

    - `dauvet`: đặc điểm nhận dạng
    - `date`: ngày cấp.

Bằng lái xe.

    - `id`: số thẻ.
    - `name`: họ và tên.
    - `born`: ngày sinh.
    - `class`: hạng.
    - `nation`: quốc tịch.
    - `dateissue`: ngày phát hành.
    - `duedate`: ngày hết hạn.
    - `address`: nơi cư trú.

Trong trường hợp `get_haimat`, `data` sẽ có gồm các thông tin sau:

```json
"data": {
  "mattruoc": [xxxx], // gồm các trường đã nếu ở trên
  "matsau": [xxxx] // gồm các trường đã nêu ở trên
}
```

Trong trường hợp trích xuất thông tin từ file PDF, `data` gồm các thông tin sau:

```json
"data": [
  {
    "type": [xxxx], // loại giấy tờ nhận dạng được, đã nêu ở trên
    "data": [xxxx], // các trường thông tin tương ứng với loại giây tờ
  },
  ...
]
```

Trong trường hợp trích xuất thông tin từ văn bản scan, phản hồi gồm các thông tin sau:

```json
{
  "result": [xxxx], // mảng các line text trong văn bản, nếu không có trả về null
  "time": [xxxx] // thời gian xử lý
}
```

Bảng mã lỗi:

| Mã lỗi | Message                            | Mô tả                                                |
| ------ | ---------------------------------- | ---------------------------------------------------- |
| 0      | Thành công                         | Trích xuất thông tin thành công                      |
| 1      | Ảnh không chứa nội dung            | Ảnh đầu vào không có giấy tờ tùy thân cần trích xuất |
| 2      | Url của ảnh không khả dụng         | Download ảnh bị lỗi khi dùng GET                     |
| 3      | Ảnh sai format                     | Upload ảnh bị lỗi khi dùng POST                      |
| 4      | Hết số lượng request hữu dụng      | Hết số lượng request                                 |
| 5      | Api_key hoặc api_secret không đúng | Khi api_key hoặc api_secret sai                      |

### Face Matching

Matching service là hệ thống AI cho phép so sánh độ tương đồng giữa khuôn mặt có trong chứng minh nhân dân, thẻ căn cước của người chủ sở hữu với khuôn mặt được chụp trực tiếp của cùng một người đó.

1. So khớp khuôn mặt ảnh trên CMND, CCCD và ảnh chân dung với đầu vào url ảnh

**API**:

| Method | URL                                                                                 |
| ------ | ----------------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matching` |

**Params**:

| Key          | Value                            | Mô tả                                    |
| ------------ | -------------------------------- | ---------------------------------------- |
| `img_cmt`    | `https://example.com/cmt.png`    | url ảnh chứng minh thư hoặc thẻ căn cước |
| `img_person` | `https://example.com/person.png` | url ảnh khuôn mặt cần so khớp            |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_cmt = 'link_url_img_cmt'
img_person = 'link_url_person'

response = requests.get("https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matching?img_cmt=%s&img_person=%s"
  % (img_cmt, img_person),
  auth=(api_key, api_secret))

print(response.json())
```

2. So khớp khuôn mặt ảnh trên CMND, CCCD và ảnh chân dung với đầu vào file ảnh

**API**:

| Method | URL                                                                                 | content-type          |
| ------ | ----------------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matching` | `multipart/form-data` |

**Body**:

| Key          | Type | Value                | Mô tả                                     |
| ------------ | ---- | -------------------- | ----------------------------------------- |
| `img_cmt`    | file | `example_cmt.jpg`    | file ảnh chứng minh thư hoặc thẻ căn cước |
| `img_person` | file | `example_person.jpg` | file ảnh khuôn mặt cần so khớp            |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_cmt_path = '/path/to/your/img_cmt.jpg'
img_person_path = '/path/to/your/img_person.jpg'

response = requests.post(
 	"https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matching",
 	auth=(api_key, api_secret),
 	files={'img_cmt': open(img_cmt_path, 'rb'), 'img_person': open(img_person_path, 'rb')})

print(response.json())

```

3. So khớp khuôn mặt ảnh trên CMND, CCCD và ảnh chân dung với đầu vào json

**API**:

| Method | URL                                                                                       | content-type       |
| ------ | ----------------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matchingbase64` | `application/json` |

**Body**:

```json
{
  "img_cmt": "iVBORw0KGgoAAAANSU...", // string base64 của ảnh chứng minh thư/thẻ căn cước
  "img_person": "iVBORw0KGgoAAAANSU..." // string base64 của ảnh khuôn mặt cần so khớp
}
```

**Demo Python**:

```python
import base64
import io
import requests
from PIL import Image
def get_byte_img(img):
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
    return encoded_img
api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_cmt_path = '/path/to/your/img_cmt.jpg'
img_person_path = '/path/to/your/img_person.jpg'
encode_cmt = get_byte_img(Image.open(img_cmt_path))
encode_person = get_byte_img(Image.open(img_person_path))
response = requests.post(
    "https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matchingbase64",
    auth=(api_key, api_secret),
    json={'img_cmt' : encode_cmt, "img_person" : encode_person})
print(response.json())
```

4. So khớp hai ảnh chân dung đầu vào url ảnh

**API**:

| Method | URL                                                                                      |
| ------ | ---------------------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/face_matching` |

**Params**:

| Key     | Value                           | Mô tả                      |
| ------- | ------------------------------- | -------------------------- |
| `face1` | `https://example.com/face1.png` | url ảnh chân dung thứ nhất |
| `face2` | `https://example.com/face2.png` | url ảnh chân dung thứ hai  |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_face1 = 'link_url_face1'
img_face2 = 'link_url_face2'

response = requests.get("https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/face_matching?face1=%s&face2=%s"
  % (img_face1, img_face2),
  auth=(api_key, api_secret))

print(response.json())
```

5. So khớp hai ảnh chân dung đầu vào file ảnh

**API**:

| Method | URL                                                                                      | content-type          |
| ------ | ---------------------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/face_matching` | `multipart/form-data` |

**Body**:

| Key     | Type | Value               | Mô tả                       |
| ------- | ---- | ------------------- | --------------------------- |
| `face1` | file | `example_face1.jpg` | file ảnh chân dung thứ nhất |
| `face2` | file | `example_face2.jpg` | file ảnh chân dung thứ hai  |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_face1_path = '/path/to/your/img_face1.jpg'
img_face2_path = '/path/to/your/img_face2.jpg'

response = requests.post(
 	"https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/face_matching",
 	auth=(api_key, api_secret),
 	files={'face1': open(img_face1_path, 'rb'), 'face2': open(img_face2_path, 'rb')})

print(response.json())

```

6. So khớp hai ảnh chân dung đầu vào json

**API**:

| Method | URL                                                                                            | content-type       |
| ------ | ---------------------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/face_matchingbase64` | `application/json` |

**Body**:

```json
{
  "face1": "iVBORw0KGgoAAAANSU...", // string base64 của ảnh chân dung thứ nhất
  "face2": "iVBORw0KGgoAAAANSU..." // string base64 của ảnh chân dung thứ hai
}
```

**Demo Python**:

```python
import base64
import io
import requests
from PIL import Image
def get_byte_img(img):
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
    return encoded_img
api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_face1_path = '/path/to/your/img_face1.jpg'
img_face2_path = '/path/to/your/img_face2.jpg'
encode_face1 = get_byte_img(Image.open(img_face1_path))
encode_face2 = get_byte_img(Image.open(img_face2_path))
response = requests.post(
    "https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/face_matchingbase64",
    auth=(api_key, api_secret),
    json={'face1' : encode_face1, "face2" : encode_face2})
print(response.json())
```

7. Kiểm tra giả mạo khuôn mặt với đầu vào là 4 file ảnh, ảnh mặt thẳng, ảnh mặt quay trái, ảnh mặt quay phải, ảnh giấy tờ tùy thân

**API**:

| Method | URL                                                                                         | content-type          |
| ------ | ------------------------------------------------------------------------------------------- | --------------------- |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matchingliveness` | `multipart/form-data` |

**Body**:

| Key       | Type | Value               | Mô tả                                                        |
| --------- | ---- | ------------------- | ------------------------------------------------------------ |
| `img_cmt` | file | `example_cmt.jpg`   | file ảnh chứng minh thư hoặc thẻ căn cước hoặc ảnh chân dung |
| `mid`     | file | `example_mid.jpg`   | file ảnh giữa khuôn mặt                                      |
| `left`    | file | `example_left.jpg`  | file ảnh mặt quay trái                                       |
| `right`   | file | `example_right.jpg` | file ảnh mặt quay phải                                       |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_mid = '/path/to/your/img_mid.jpg'
img_left = '/path/to/your/img_left.jpg'
img_right = '/path/to/your/img_right.jpg'
img_cmt  = '/path/to/your/img_cmt.jpg'

response = requests.post(  "https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matchingliveness"
    auth=(api_key, api_secret),
    files={'mid': open(img_mid, 'rb'), 'left': open(img_left, 'rb'), 'right': open(img_right, 'rb'),
    'img_cmt' : open(img_cmt, 'rb')})

print(response.json())

```

8. Kiểm tra giả mạo khuôn mặt với đầu vào là json của 4 ảnh dạng base64, ảnh mặt thẳng, ảnh mặt quay trái, ảnh mặt quay phải, ảnh giấy tờ tùy thân

**API**:

| Method | URL                                                                                               | content-type       |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matchinglivenessbase64` | `application/json` |

**Body**:

```json
{
  "img_cmt": "iVBORw0KGgoAAAANSU...", // string base64 của ảnh chứng minh thư/thẻ căn cước
  "mid": "iVBORw0KGgoAAAANSU...", // string base64 của ảnh giữa khuôn mặt
  "left": "iVBORw0KGgoAAAANSU...", // string base64 của ảnh mặt quay trái
  "rihgt": "iVBORw0KGgoAAAANSU..." // string base64 của ảnh mặt quay phải
}
```

**Demo Python**:

```python

import requests
import io
import base64
from PIL import Image

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
img_mid = '/path/to/your/img_mid.jpg'
img_left = '/path/to/your/img_left.jpg'
img_right = '/path/to/your/img_right.jpg'
img_cmt  = '/path/to/your/img_cmt.jpg'
def get_byte_img(img):
  img_byte_arr = io.BytesIO()
  img.save(img_byte_arr, format='PNG')
  encoded_img = base64.encodebytes(img_byte_arr.getvalue()).decode('ascii')
  return encoded_img

encode_mid = get_byte_img(Image.open(img_mid))
encode_left = get_byte_img(Image.open(img_left))
encode_right = get_byte_img(Image.open(img_right))
encode_img_cmt = get_byte_img(Image.open(img_cmt))
response = requests.post(     "https://cloud.computervision.com.vn/backend/api/v1/request/face_matching/matchinglivenessbase64",
      auth=(api_key, api_secret),
      json={'mid' : encode_mid, 'left' : encode_left, 'right' : encode_right, 'img_cmt' : encode_img_cmt})

print(response.json())

```

9. Thông tin trả về

Đối với dịch vụ so khớp khuôn mặt trong chứng minh thư, thẻ căn cước, phản hồi sẽ là một JSON với định dạng sau:

```json
{
  "data": {
    "matching": string, // phần trăm giống nhau giữa hai ảnh đầu vào
    "img_cmt": string, // ảnh khuôn mặt chứng minh thư
    "img_person": string, // ảnh khuôn mặt chân dung
    "valid": string // False nếu ảnh chân dung mờ, che hoặc có dấu hiệu giả mạo, ngược lại True
  },
  "error_code": string, // mã lỗi
  "error_message": string // thông báo lỗi
}
```

Đối với dịch vụ so khớp hai ảnh chân dung, phản hồi sẽ một JSON với định dạng sau:

```json
{
  "data": {
    "matching": string, // phần trăm giống nhau giữa hai ảnh đầu vào
    "img_person1": string, // ảnh khuôn mặt chân dung thứ nhất
    "img_person2": string, // ảnh khuôn mặt chân dung thứ hai
    "valid": string, // False nếu ảnh chân dung mờ, che hoặc có dấu hiệu giả mạo, ngược lại True
    "match": string // 1: chắc chắn cùng một người, 2: nghi ngờ, 3: không cùng một người
  },
  "error_code": string, // mã lỗi
  "error_message": string // thông báo lỗi
}
```

Đối với dịch vụ kiểm tra giả mạo khuôn mặt, phản hồi sẽ một JSON với định dạng sau:

```json
{
  "data": {
    "matching": string, // phần trăm giống nhau
    "valid": string, // True trong trường hợp đầu vào không giả mạo, ngược lại False
    "errors": string // lỗi khi xác minh chống giả mạo
  },
  "error_code": string, // mã lỗi
  "error_message": string // thông báo lỗi
}
```

Bảng mã lỗi:

| Mã lỗi | Message                            | Mô tả                            |
| ------ | ---------------------------------- | -------------------------------- |
| 0      | Thành công                         | So khớp thành công               |
| 1      | Ảnh sai format                     | Upload ảnh bị lỗi khi dùng POST  |
| 2      | Url của ảnh không khả dụng         | Download ảnh bị lỗi khi dùng GET |
| 3      | Ảnh không chứa nội dung            | Tồn tại ảnh không có mặt người   |
| 4      | Api_key hoặc api_secret không đúng | Khi api_key hoặc api_secret sai  |
| 5      | Hết số lượng request hữu dụng      | Hết số lượng request             |

### Face Search

1. Xem toàn bộ ảnh

**API**:

| Method | URL                                                                                     |
| ------ | --------------------------------------------------------------------------------------- |
| GET    | `https://cloud.computervision.com.vn/backend/api/v1/request/face_search/get_all_images` |

**Params**:

| Key      | Value | Mô tả                       |
| -------- | ----- | --------------------------- |
| `offset` | `100` | số bản ghi sẽ bỏ qua        |
| `limit`  | `50`  | số bản ghi tối đa sẽ trả về |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

offset = 100
limit = 50

response = requests.get(
  "https://cloud.computervision.com.vn/backend/api/v1/request/face_search/get_all_images?offset=%s&limit=%s"
  % (offset, limit),
  auth = (api_key, api_secret)
)

print(response.json())

```

2. Tìm kiếm khuôn mặt

**API**:

| Method | URL                                                                             | content-type       |
| ------ | ------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_search/search` | `application/json` |

**Body**:

```json
{
  "image": {
    "base64": string
  }
}
```

Trong đó:

| Key      | Type      | Bắt buộc | Mô tả                      |
| -------- | --------- | -------- | -------------------------- |
| `image`  | ImageData | có       | ảnh dùng để tìm kiếm       |
| `base64` | string    | có       | mã hoá base64 của hình ảnh |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
payload = "{\"image\":{\"base64\":\"iVBORw0KGgoAAAANSU...\"}}"

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/face_search/search",
  auth=(api_key, api_secret),
  data = payload

print(response.json())
```

3. Thêm ảnh

**API**:

| Method | URL                                                                          | content-type       |
| ------ | ---------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_search/add` | `application/json` |

**Body**:

```json
{
  "image": {
    "base64": string,
    "metadata": json
  }
}
```

Trong đó:

| Key        | Type       | Bắt buộc | Mô tả                                                                         |
| ---------- | ---------- | -------- | ----------------------------------------------------------------------------- |
| `image`    | ImageData  | có       | ảnh muốn thêm                                                                 |
| `base64`   | string     | có       | mã hoá base64 của hình ảnh                                                    |
| `metadata` | dictionary | không    | bất kỳ metadata key-value nào để lưu cùng với ảnh, key và value ở dạng string |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
payload = "{\"image\":{\"base64\":\"iVBORw0KGgoAAAANSU...\"}}"

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/face_search/add",
    auth=(api_key, api_secret),
    data = payload

print(response.json())
```

4. Cập nhật metadata

**API**:

| Method | URL                                                                                    | content-type       |
| ------ | -------------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_search/edit_metadata` | `application/json` |

**Body**:

```json
{
  "image_id": 123456,
  "metadata": {
    "name": "example",
    "label": "for bar"
    ...
  }
}
```

| Key        | Bắt buộc | Mô tả                                                                                                                     |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `image_id` | có       | id ảnh cần cập nhật metadata                                                                                              |
| `metadata` | không    | bất kỳ metadata key-value nào để lưu cùng với ảnh, trừ những key `"user"`, `"encoding"`, `"_id"` đã được hệ thống sử dụng |

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
payload = "{\"image_id\":123456,\"metadata\":{\"name\":\"example\",\"label\":\"for bar\"}}"

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/face_search/edit_metadata",
  data = payload,
  auth = (api_key, api_secret)
)

print(response.json())

```

5. Xoá nhiều ảnh

**API**:

| Method | URL                                                                             | content-type       |
| ------ | ------------------------------------------------------------------------------- | ------------------ |
| POST   | `https://cloud.computervision.com.vn/backend/api/v1/request/face_search/delete` | `application/json` |

**Body**:

```json
{
  "ids": [
    123456, // id ảnh cần xoá
    987654, // id ảnh cần xoá
    ...
  ]
}
```

**Demo Python**:

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'
payload = "{\"ids\":[<image-id-you-want-to-delete>,<image-id-you-want-to-delete>,...]}"

response = requests.post(
  "https://cloud.computervision.com.vn/backend/api/v1/request/face_search/delete",
  data = payload,
  auth = (api_key, api_secret)
)

print(response.json())

```

6. Thông tin trả về

Phản hồi sẽ là một JSON với định dạng sau:

```json
{
  "result": [xxxx],
  "status_code": int, // mã lỗi
  "message": string // thông báo lỗi
}
```

Mỗi api khác nhau sẽ trả về kết quả khác nhau.

Xem toàn bộ ảnh.

    - `result`: mảng chứa các phần tử ảnh, mỗi phần tử gồm id của ảnh và url ảnh tương ứng
    <!-- - `origin_image`: `Get all images` -->

Tìm kiếm khuôn mặt.

    - `result`: mảng chứa các phần tử ảnh phù hợp, mỗi phần tử gồm id của ảnh và url ảnh tương ứng
    <!-- - `origin_image`: url ảnh trong trường hợp `GET`, `Upload` trong trường hợp `POST` -->

Thêm ảnh.

    - `result`: json chứa thông tin ảnh mới được thêm vào
    <!-- - `origin_image`: `Add` -->

Xoá nhiều ảnh.

    - `result`: `None`
    <!-- - `origin_image`: `Delete` -->

Bảng mã lỗi:

| Mã lỗi | Message                            |
| ------ | ---------------------------------- |
| 0      | Thành công                         |
| 1      | Ảnh sai format                     |
| 2      | Url của ảnh không khả dụng         |
| 3      | Ảnh không chứa nội dung            |
| 4      | Api_key hoặc api_secret không đúng |
| 5      | Hết số lượng request hữu dụng      |
| 6      | Lỗi khi thực hiện truy vấn         |
| 7      | Id không hợp lệ                    |
