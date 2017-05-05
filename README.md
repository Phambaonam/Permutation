# Đề bài: Cho 1 mảng số, dùng hoán vị ,tìm tất các kết quả có được .
# Bài toán sử dụng đệ quy và thuật toán quay lui.
## Đặc điểm bài toán:
* Hoán đổi vị trí từng phần tử trong mảng sao cho không có mảng nào giống mảng trước đó, dùng phép gán biến tạm:
```javascript
   let arr = [1,2] 
   let temp =arr[0]
   arr[0] = arr[1]
   arr[1] = temp 
   // arr = [2,1]
```
* Phần tử đầu tiên sẽ được giữ cố định, chỉ đảo vị trí ở các phần tử phía sau.
* Code demo:
```javascript
    let arr = [1, 2, 3];
    swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
    }
    permute = (arr, startIndex, endIndex) => {
    if (startIndex === endIndex) {
        console.log(arr);
        // console.log(arr.join(''));
     } else {
        for (let i = startIndex; i <= endIndex; i++) {
            swap(arr, startIndex, i);
            permute(arr, startIndex + 1, endIndex);
            swap(arr, startIndex, i); // backtrack
           }
        }
      }
      permute(arr, 0, arr.length - 1);
```
* Tìm được dãy số thứ nhất ```[ 1, 2, 3 ] ``` thì phải chạy qua các bước:
*  Đảo vị trí phần tử đầu tiên là ```1``` và phần tử tiếp theo:
```javascript
     swap(arr, startIndex, i);
```
*  Chạy  lại đệ quy 1 lần nữa , lúc này là phần tử đầu tiên sẽ là ```2```
```javascript
    permute(arr, startIndex + 1, endIndex)
```
* Điều kiện ``` startIndex === endIndex``` là để kiểm tra có chạy hết các phần tử trong mảng hay không.
* Sau đó sẽ quay lại ```  swap(arr, startIndex, i); // backtrack``` để chạy lại lượt tiếp theo.
## Cách chạy:
* git clone https://github.com/Phambaonam/Permutation.git
* cd Permutation
* node index.js 