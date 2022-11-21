<template>
    <div>This is a header</div>


    <nav>
        <div id="navigation">
            <a href="index.html">Home</a>
            <a href="addPost.html">add Post</a>
        </div>


        <img class = "icon" id="profile_pic" src="@/assets/me.png" alt="profile picture">
    </nav>
    
</template>
    
<script>
    
    export default {
        name : "Header"
    }
    
    
</script>


<style>


nav {
    width: 100%;
    /* flex settings*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.icon {
    border-radius: 50%;
    max-width: 5%;
    height: auto;
    margin: 0.2em 0.2em;
}

a {
    color: #000000;
    text-decoration: none;
}


.template {
    padding-top: .5em;
    padding-bottom: .5em;
    padding-left: .5em;
    background-color: #b6b3b3;
    position: sticky;
    width: 100%;
    top: 0;
    border-radius: 5px;
}


</style>