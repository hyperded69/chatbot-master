# Chatbot tiếng Việt


![](https://img.shields.io/badge/powered%20by-chatscript-blue.svg)

Dự án nghiên cứu về bài toán xây dựng *chatbot tiếng Việt*, được phát triển bởi nhóm nghiên cứu xử lý ngôn ngữ tự nhiên tiếng Việt - [underthesea](https://github.com/undertheseanlp). Chứa mã nguồn các thử nghiệm cho việc xây dựng một chatbot đơn giản, tích hợp với django và có thể triển khai dưới dạng một ứng dụng Web.

**Nhóm tác giả**

* Vũ Anh ([anhv.ict91@gmail.com](anhv.ict91@gmail.com))
* Nguyễn Thị Hậu ([nguyenhau1996mta@gmail.com](nguyenhau1996mta@gmail.com))
* Trương Thị Huyên ([huyenth2110@gmail.com](huyenth2110@gmail.com))
* Cao Thanh Tùng ([caothanhtungst@gmail.com](caothanhtungst@gmail.com))
* Hồ Thanh Luân ([hothanhluan1996@gmail.com](hothanhluan1996@gmail.com))



## Mục lục


* [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
* [Thiết lập môi trường](#thiết-lập-môi-trường)
* [Hướng dẫn sử dụng](#hướng-dẫn-sử-dụng)

.

![](images/chatlog.png)

## Yêu cầu hệ thống

* `Operating Systems: Linux (Ubuntu, CentOS), Mac`
* `Python 3.6+`, `Anaconda 4+`
* `Django==1.11.1`

## Thiết lập môi trường

Tải project bằng cách sử dụng lệnh `git clone`

```
$ git clone https://github.com/undertheseanlp/chatbot.git
```

Tạo môi trường mới và cài đặt các gói liên quan

```
cd chatbot
conda create -n chatbot python=3.6
source activate chatbot
pip install -r requirements.txt
```

## Hướng dẫn sử dụng

### Chạy chương trình chatbot trên trình duyệt 
 
Kích hoạt môi trường 

```
$ cd chatbot
$ source chatbot-env.sh
```

Lệnh `chatbot` đã sẵn sàng

```
$ chabot  

  Console script for chatbot

Options:
  --help  Show this message and exit.

Commands:
  log     Log handling
  server  Server handling
```


**Bước 1: Bật chatscript server**

```
chatbot server cs
```

**Bước 2: Build chatbot**

``` 
chatbot build
```

**Bước 3: Bật web server**

```
chatbot server web 
```

**Hoàn thành!!!**

Sau đó, mở trình duyệt, vào đường dẫn [http://127.0.0.1:8001](http://127.0.0.1:8001) để bắt đầu chat với bot 

### Thử nghiệm chatbot trên terminal

Kích hoạt môi trường 

```
$ cd chatbot
$ source chatbot-env.sh
```

Chạy chatbot trên terminal

```
$ chatbot server cs-local 
```

