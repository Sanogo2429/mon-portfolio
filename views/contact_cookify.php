<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nos Contact</title>
    <link rel="stylesheet" href="../styles/accueil_cookify.css">
    <style>
        .contact-section {
            padding: 20px;
            text-align: center;
        }
        .contact-section h1 {
            margin-bottom: 10px;
        }
        .contact-section form {
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
        }
        .contact-section form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .contact-section form input,
        .contact-section form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .contact-section form button {
            background-color: #333;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .contact-section form button:hover {
            background-color: #575757;
        }
    </style>
</head>
<body>
<header>
        <div id="logo">
            <form action="accueil_cookify.php" method="get">
            <button class="btn-logo">
                <img src="../images/logo_cookify.jpg" alt="logo d'équipe" width=150px>
            </button>
            </form>
        </div>

        <div class="navlist">
        <nav>
            <ul>
                <a href="recettes_cookify.php">Recettes</a><br>
                <a href="">Cuisinothèque</a><br>
                <a href="">Jeu de quiz</a><br>
                <a href="about_cookify.php">A propos de nous</a><br>
                <a href="contact_cookify.php">Contacts</a><br>
            </ul>
        </nav>
        </div>

        <div class="ligne">

        </div>

        <div class="barre-search">
            <div class="container">
                <input type="text" name="text" class="input" placeholder="Dark Twitch Search">
                <button class="search__btn">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                 <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#efeff1"></path>
                </svg>
                </button>
            </div>
        </div>

        <div class="connecter">
            <button class="btn-co">Se connecter</button>
        </div>
    </header>
    <div class="contact-section">
        <h1>Contactez-nous</h1>
        <form action="#" method="post">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required>

            <label for="email">Email :</label>
            <input type="email" id="email" name="email" placeholder="Votre email" required>

            <label for="message">Message :</label>
            <textarea id="message" name="message" rows="5" placeholder="Votre message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    </div>
</body>
</html>
