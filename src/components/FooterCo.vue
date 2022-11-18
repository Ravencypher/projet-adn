<template>
    <footer>
        <div class="justify-content-start">
            <a href="#">ADN
                <img src="../assets/l-leaf-w.png" alt="logo ADN" />
            </a>
        </div>
        <div class="copyright justify-content-center">TOUS DROITS RÉSERVÉS © CUATRO</div>
        <div class="contact justify-content-end">
            <font-awesome-icon icon="fa-solid fa-envelope" size="2x" />
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    background-color: var(--vert-c);
    height: 75px;
    display: flex;
    color: var(--blanc);
    align-items: center;
    position:absolute;
    bottom:0px;
}

footer > div {
    margin: 0 1rem;
    display: flex;
    flex: 1 1 33.33%;
    align-items: center; 
}

footer > div:first-child a {
    font-family: 'northerncaps';
    font-size: 3em;
    color: var(--blanc);
}

footer > div:first-child img {
    width: 22%;
    margin-left: -15px;
}

.copyright {
    font-weight: 600;
    font-family: 'Josefin Sans', sans-serif;
    text-align:center;
}
.contact{
    font-size:1em;
}
</style>