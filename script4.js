function fun() {
            if (flag) {
                document.getElementById('demo').innerHTML = 'Hello DOM';
                document.querySelector('img').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2DgUIS8uITtF9lKVptYW-vP0_htCZguNvg&s";
            } else {
                document.getElementById('demo').innerHTML = 'Hello Amazon';
            }
            flag = !flag;
        }