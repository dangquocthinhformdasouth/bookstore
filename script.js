window.onload = function() {
    fadeOut()
}

function loader() {
    document.querySelector(".loader-container").style.display = "none"
}

function fadeOut() {
    setTimeout(loader, 4000)
}

function h() {
    var nut = document.getElementById("dee")
    var bod = document.getElementById("body")
    if (nut.checked == true)
        bod.style.background = "black"
    else
        bod.style.background = "white"
}

function nuthien() {
    document.getElementById("menu").style.display = "block"
    document.getElementById("nuthien").style.display = "none"
}

function nutan() {
    document.getElementById("menu").style.display = "none"
    document.getElementById("nuthien").style.display = "block"
}

function dangnhap() {
    var tendangnhap = document.getElementById("tendangnhap").value
    var matkhaudangnhap = document.getElementById("matkhaudangnhap").value
    if (tendangnhap == "") {
        alert("Vui lòng nhập tên tài khoản !")
    }
    if (matkhaudangnhap == "") {
        alert("Vui lòng nhập mật khẩu !")
    } else {
        alert("Đăng nhập thành công !")
    }
}

function dangky() {
    var tentaikhoan = document.getElementById("tentaikhoan").value
    var matkhau = document.getElementById("matkhau").value
    var nhaplaimatkhau = document.getElementById("nhaplaimatkhau")
    var gioitinhnam = document.getElementById("gioitinh1")
    var gioitinhnu = document.getElementById("gioitinh2")
    var quequan = document.getElementById("quequan").value
    var nutcheck = document.getElementById("nutcheck")
    var rangbuoc1 = /[a-zA-Z0-9]/
    if (tentaikhoan == "") {
        alert("Không được bỏ trống tên tài khoản")
        return
    }
    var dem1 = 0;
    for (var i = 0; i < tentaikhoan.length; i++) {
        if (!tentaikhoan[i].match(rangbuoc1)) {
            dem1++
        }
    }
    if (dem1 != 0) {
        alert("Tên tài khoản không hợp lệ")
        return
    }

    if (matkhau == "") {
        alert("Không được bỏ trống mật khẩu")
        return
    }
    if (matkhau.length < 9) {
        alert("Mật khẩu phải nhiều hơn 8 ký tự")
        return
    }
    if (nhaplaimatkhau.value == "") {
        alert("Không được bỏ trống nhập lại mật khẩu")
        return
    }
    if (matkhau != nhaplaimatkhau.value) {
        alert("Nhập lại mật khẩu không trùng khớp")
        return
    }
    if (gioitinhnam.checked != true && gioitinhnu.checked != true) {
        alert("Vui lòng chọn giới tính")
        return
    }
    if (!(quequan != 0)) {
        alert("Bạn chưa chọn quê quán")
        return
    }
    if (nutcheck.checked != true) {
        alert("Bạn chưa đồng ý vói điều khoản sử dụng")
        return
    }
    alert("Đăng ký tài khoản thành công. Cảm ơn bạn đã tham gia cùng chúng tôi !!!")
}

function on_close_eye() {
    var ip = document.querySelector(".ip")
    var eyeMo = document.querySelector(".eyeMo")
    var eyeDong = document.querySelector(".eyeDong")

    eyeMo.addEventListener("click", function() {
        eyeMo.classList.add("hidden")
        eyeDong.classList.remove("hidden")
        ip.setAttribute("type", "password")
    })
    eyeDong.addEventListener("click", function() {
        eyeDong.classList.add("hidden")
        eyeMo.classList.remove("hidden")
        ip.setAttribute("type", "text")
    })
}
on_close_eye()

function formbody() {
    var fb = document.querySelector(".formbody")
    fb.addEventListener("mouseover", function() {
        fb.style.backgroundImage = "linear-gradient(to left, rgba(255, 0, 0, 0), #888)"
    })
    fb.addEventListener("mouseleave", function() {
        fb.style.backgroundImage = "linear-gradient(to right, rgba(255, 0, 0, 0), #888)"
    })
}
formbody()