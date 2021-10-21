<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comming Soon</title>
    <link rel="icon" href="public/content/img/css-img/css.png" sizes="any">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="public/content/css/comming-soon.css">
</head>
<body>
    <?php

    if ($_GET['result'] == '1') {
        echo '<script>alert("اطلاعات با موفقیت ثبت شد")</script>';
    } else {
        echo '<script>alert("مشکلی در ثبت اطلاعات وجود دارد")</script>';
    }
    
    ?>
    <!-- ! -------------------------------- wrap --------------------------------- ! -->
    <div class="wrap d-flex flex-row-reverse">
        <!-- ! --------------------------- wrap left box ---------------------------- ! -->
        <div class="wrap-left-box h-100 col-md-7 col-lg-6 d-flex align-items-center justify-content-center">
            <div class="col-xxl-7 col-xl-8 col-lg-10" style="z-index: 9999;">
                <div class="form-wrap">
                    <form action="server/coming-soon.php" method="post" autocomplete="off">
                        <h5 class="text-capitalize text-white form-wrap-title text-center mt-2">Send to your email</h5>
                        <!-- ! ------------------------------ username ------------------------------- ! -->
                        <div class="col-12 mt-4">
                            <div class="input-group border-bottom">
                                <span class="input-group-text"><i class="bi bi-cursor-text"></i></span>
                                <input type="text" class="form-control user-name-inp" placeholder="Name" name="name">
                            </div>
                            <!-- ! --------------------------- validation text --------------------------- ! -->
                            <p class="mt-3 validation-text">please enter the information corrcetly</p>
                        </div>
                        <!-- ! -------------------------------- email -------------------------------- ! -->
                        <div class="col-12 mt-4">
                            <div class="input-group border-bottom">
                                <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                                <input type="text" class="form-control email-inp" placeholder="Email" name="email">
                            </div>
                            <!-- ! --------------------------- validation text --------------------------- ! -->
                            <p class="mt-3 validation-text">please enter the information corrcetly</p>
                        </div>
                        <div class="col-12 mt-5">
                            <input type="submit" class="send-btn" value="SEND" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- ! ---------------------------- wrap right box ---------------------------- ! -->
        <div class="wrap-right-box h-100 d-flex align-items-center col-lg-6 col-md-5">
            <div class="container ps-3 pe-0">
                <h1 class="comming-soon-text">comming soon</h1>
                <a class="back-to-home" type="button" href="home.html">back to home</a>
            </div>
        </div>
    </div>
</body>
</html>