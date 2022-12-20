<template>
    <div class="banniere-container d-flex flex-column">
        <div class="bann d-flex justify-content-center align-items-center">
            
        </div>
    </div>
        
</template>

<style scoped>
.banniere-container{
    min-height:70vh;
}
.bann{
    flex:1 1 100%;
    background-image:url(../assets/vleft.svg), url(../assets/vright.svg), url(../assets/title.svg),
    url(../assets/banniere.svg);
    background-position:bottom left, bottom right, center right 20%,top left 15% ;
    background-repeat: no-repeat;
    background-size: contain, 50%, 25%, contain;
}
.bann h1{
    max-width:350px;
}

</style>