var posts=["2024/11/10/hello-world/","2022/07/02/Python-os-listdir-方法/","2022/07/01/warnings —— 警告信息的控制/","2024/11/10/append（）函数的用法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };