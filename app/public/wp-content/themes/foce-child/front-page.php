<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <img class="banner__background hidden" src="<?php echo get_theme_file_uri() . '/banner.png'; ?>" alt="">
        <video class="banner__video" width="1440" autoplay="autoplay" muted="" loop="infinite">
            <source src="<?php echo get_theme_file_uri() . '\Studio+Koukaki-vidéo+header+sans+son+(1).mp4'; ?>"
                type="video/mp4">
        </video>
        <img class="banner__logo hidden" src="<?php echo get_theme_file_uri() . '/Image logo en paralax.png'; ?>"
            alt="Logo fleurs d'oranger & chats errants">
    </section>

    <section id="story" class="story hidden">
        <h2><span class="story__title slide1 hidden">L'histoire</span></h2>
        <article id="" class="story__article">
            <p>
                <?php echo get_theme_mod('story'); ?>
            </p>
        </article>
        
    
        <?php
        get_template_part('slider');
        ?>

        <article id="place" class="place hidden">
            <div class="place">
                <h3><span class="place__title slide1 hidden">Le Lieu</span></h3>
                <p>
                    <?php echo get_theme_mod('place'); ?>
                </p>
            </div>

        </article>
    </section>


    <section id="studio" class="studio hidden">
        <h2><span class="studio__title slide1 hidden">Studio</span><span class="studio__title slide2 hidden">
                Koukaki</span></h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue
                des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections
                en activité : le long métrage et le court métrage. Nous développons des films fantastiques,
                principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et
                commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable
                dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise
                sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats
                errants”.</p>
        </div>
    </section>

    <!-- inclus section oscars -->
    <?php get_template_part('/oscars'); ?>



</main><!-- #main -->

<?php
get_footer();