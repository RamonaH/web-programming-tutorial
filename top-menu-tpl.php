
    <header>
        <div>
            <a id="logo" href="." title="FastTrackIT">
                <img src="<?php echo get_template_directory_uri() ?>/img/logo.png" alt="FastTrackIT" title="FastTrackIT">
            </a>
            <h1><?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?></h1>
        </div>
    </header>

    <div id="top-menu">
        <div>
            <button id="secondary-toggle" class="genericon genericon-menu">Widgets</button>

            <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
<!--            <ul>-->
<!--                <li><a href="index.php" title="welcome home">HOME</a></li>-->
<!--                <li><a href="https://www.linkedin.com/in/nicolaematei" title="my personal projects" target="_blank">Projects</a></li>-->
<!--                <li><a href="https://www.linkedin.com/in/nicolaematei" title="about me" target="_blank">About</a></li>-->
<!--                <li><a href="https://www.linkedin.com/in/nicolaematei" title="contact me" target="_blank">Contact</a></li>-->
<!--                <li><a href="agenda.php">Agenda</a></li>-->
<!--            </ul>-->
        </div>
    </div>




