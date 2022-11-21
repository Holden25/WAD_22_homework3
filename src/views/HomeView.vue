<template>

  <div id="flex_container">



<div id = "main_section">
    <aside class = "sidebar">
        <!--boxis on the sides-->
    </aside>

    <main> <!--this is where all the posts go-->


      <!--trying to make posts dynamically-->
        <article class = "post" v-for="post in postList" :key="post.id">

          <div class = "post_header">
                <img class = "icon" src="@/assets/me.png" alt="profiil">
                <p> {{post.date}}</p>
          </div>

            <img v-if="post.picture" style="max-width: 60% ;" src={{post.picture}} alt="pilt">
            <p> {{post.body}}</p>
            <img class  = "icon" src="@/assets/like_button.jpg" alt="like button">

        </article>






        <article class="post">

            <div class = "post_header">
                <img class = "icon" src="res/images/me.png" alt="profiil">
                <p> Oct 22, 2022</p>

            </div>
            <img style="max-width: 60% ;" src="res/images/postitus_1.jpg" alt="pilt">
            <p> Making something cool out of my food, how do you like it? </p>
            <img class  = "icon" src="res/images/like_button.jpg" alt="like button">
            
        </article>

        <article class = "post">

            <div class = "post_header">
                <img class = "icon" src="res/images/me.png" alt="profiil">
                <p> Oct 23, 2022</p>
            </div>

            <img style="max-width: 60% ;" src="res/images/postitus_2.jpg" alt="pilt">
            <p>Everythong becomes much clearer when you bring it into focus dont you think? </p>
            <img class  = "icon" src="res/images/like_button.jpg" alt="like button">
        </article>

        <article class = "post">
            <div class = "post_header">
                <img class = "icon" src="res/images/me.png" alt="profiil">
                <p> Oct 22, 2022</p>

            </div>
            <p> Does anybody have a good tent that I colud lend would be really thnkful! </p>
            <img class  = "icon" src="res/images/like_button.jpg" alt="like button">
        </article>

        <article class = "post">
            <div class = "post_header">
                <img class = "icon" src="res/images/me.png" alt="profiil">
                <p> Oct 22, 2022</p>

            </div>
            <p> “The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart”
                ― Helen Keller </p>
            <img class  = "icon" src="res/images/like_button.jpg" alt="like button">
        </article>

        <article class = "post">
            <div class = "post_header">
                <img class = "icon" src="res/images/me.png" alt="profiil">
                <p> Oct 22, 2022</p>

            </div>
            <img style="max-width: 60% ;" src="res/images/postitus_5.jpg" alt="pilt">
            <p> Shes a cutie isnt she :)? </p>
            <img class  = "icon" src="res/images/like_button.jpg" alt="like button">
        </article>


    </main>

    <aside class = "sidebar">
        <!--boxis on the sides-->
    </aside>
</div>

<footer>
    footer
</footer>

</div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },

  computed: {
    postList(){
      return this.$store.state.posts
    }
  }
}
</script>


<style>


/* whole page */
#flex_container{
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    height: 100%;
}

/* the middle section */
#main_section{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    flex: 4;
    margin: 1em 0.5em;
}

footer {
    padding: 2em;
    border: 0.2em outset rgb(43, 41, 41);
    /*color: red;- */
    background-color: darkgray;
    /* position: sticky; 
    bottom: 0; */
}

nav {
    /*color: blue; */
    border: 0.2em outset rgb(43, 41, 41) ;
    width: 100%;
    /*position: fixed; 
    top: 0;*/

    background-color: darkgray;

    /* flex settings*/
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.sidebar {
    padding: 1em;
    border: 0.2em solid rgb(43, 41, 41);
    border-radius: 5px;
    background-color: darkgrey;
    flex: 1;
}

.icon {
    border-radius: 50%;
    max-width: 5%;
    height: auto;
    margin: 0.2em 0.2em;
}


main article {
    border: 0.2em solid rgb(43, 41, 41);
    margin: 0.5em 0.1em;
}

.post_header {
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0.5em;
    min-height: fit-content;
}


main {
    padding: 3%;
    margin: 0.5em 1em;
    border: 1em solid rgb(43, 41, 41);
    flex: 3;
    overflow: auto;
    height: 80vh;
}

div + img{
    margin: auto;
    display: block;
}


div ~ p{
    color: rgb(43, 41, 41);
}

div > p{
    color:darkblue;
}



</style>
