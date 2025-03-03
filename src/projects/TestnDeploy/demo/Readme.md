hướng dẫn test với jest:

```javascript:src/projects/TestnDeploy/demo/README.md
# Hướng dẫn Test với Jest

## Cấu trúc file
- `sum.js`: File chứa hàm cần test
- `sum.test.js`: File test cho hàm sum
- `README.md`: File hướng dẫn này

## Cách chạy test

### 1. Chạy test cho toàn bộ thư mục demo:
```bash
npm run test:demo
```

### 2. Chạy test cho file cụ thể:
```bash
npx jest src/projects/TestnDeploy/demo/sum.test.js
```

## Thêm test case mới

Để thêm test case mới, mở file `sum.test.js` và thêm các test như sau:

```javascript
test('mô tả test case', () => {
  expect(sum(a, b)).toBe(kết_quả_mong_đợi);
});
```

Ví dụ:
```javascript
test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds negative numbers', () => {
  expect(sum(-1, -2)).toBe(-3);
});
```

## Cấu hình Jest

Trong package.json đã được cấu hình:
```json
{
  "scripts": {
    "test": "jest --config jest.config.js",
    "test:demo": "jest src/projects/TestnDeploy/demo --config jest.config.js"
  }
}
```

## Lưu ý
- Đảm bảo đã cài đặt Jest: `npm install --save-dev jest`
- Mỗi file test nên có tên kết thúc bằng `.test.js`
- Có thể thêm nhiều test case trong cùng một file test
- Sử dụng `expect()` và các matcher như `toBe()`, `toEqual()` để kiểm tra kết quả
```

Bạn có thể chạy lệnh sau để tạo file:

```bash
echo "# Hướng dẫn Test với Jest..." > src/projects/TestnDeploy/demo/README.md
```

