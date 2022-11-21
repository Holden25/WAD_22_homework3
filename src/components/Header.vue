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




.icon {
    border-radius: 50%;
    max-width: 5%;
    height: auto;
    margin: 0.2em 0.2em;
}


</style>