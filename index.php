<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thaddeus Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
</head>
<body>
    <!-- HEADER start -->
    <header id="main_header"></header>
    <!-- HEADER end -->

    <!-- Hero start -->
    <div class="container" id="hero">
        <div class="hero-shadow"></div>
        <div id="particles-js"></div>
        <div class="row" id="hero_row"></div>
    </div>
    <!-- Hero end -->

    <!-- BackToTopButton end -->
    <div id="back-to-top-btn" class="btnEntrance" style="display: inline-block;">
        <i class="fa fa-angle-up"></i>
    </div>
    <!-- BackToTopButton end -->

    <!-- About me start -->
    <div class="container" id="about_me"></div>
    <!-- About me end -->

    <!-- Services start -->
    <div class="container" id="skills"></div>    
    <!-- Services end -->

    <!-- Hire me start -->
    <div class="container" id="hire_me"></div>
    <!-- Hire me end -->

    <!-- Portfolio start -->
    <div class="container" id="portfolio"></div>
    <!-- Portfolio end -->

    <!-- Testimonials start -->
    <!-- <div class="container" id="testimonials">
        <div class="row">
            Testimonials
        </div>
    </div> -->
    <!-- Testimonials end -->

    <!-- Contacts start -->
    <div class="container" id="contacts">
        <div class="row">
            <div class="col-12">
                <div class="heading">
                    <h2 class="section-title">Get in touch</h2>
                    <p class="section-description">Feel free to contact me anytime</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12" style="text-align: center;">
                <form action="mailto:someone@example.com?subject=subject" method="post" enctype="text/plain">
                    Name:<br>
                        <input type="text" name="name"><br>
                    E-mail:<br>
                        <input type="text" name="mail"><br>
                    Subject:<br>
                        <input type="text" name="subject"><br>
                    Comment:<br>
                        <input type="text" name="comment" size="50"><br><br>
                        <input type="submit" value="Send">
                        <input type="reset" value="Reset">
                </form>
            </div>
        </div>
        <div class="row" id="portfolio-content"></div>
    </div>
    <!-- Contacts end -->

    <!-- Footer start -->
    <div class="container" id="footer"></div>
    <!-- Footer end -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="./js/main.js" type="module"></script>
    <script src="./js/particles/particles.js"></script>
    <script src="./js/particles/app.js"></script>
</body>
</html>