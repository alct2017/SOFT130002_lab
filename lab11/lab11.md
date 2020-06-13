# lab11

姓名：刘乔升
学号：19300200019

## Answer 1

Cookie and Session both store data and thus tracking or identifying users. Cookie stores data in the client browser while Session does in server side.

## Answer 2

Cookie will be sent with HTTP request every time, so it might be a waste of network traffic. Since Cookie store in client side, the security of data isn't guaranteed.

Session, on the contrary, saves network traffic at the cost of server's memory. It's much safer to store sensitive information via Session.