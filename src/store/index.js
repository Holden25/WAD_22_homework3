import { createStore } from 'vuex'

export default createStore({
  state: {

    count: 0,



    counts: [0,0,0,0,0,0,0,0,0,0],


    posts:[{
      "userId": 1,
      "id": 1,
      "date": "Oct 22, 2022",
      "body": "Making something cool out of my food, how do you like it?",
      "picture": "@/assets/postitus_1.jpg",
      "likes": 0
  },
  {
      "userId": 1,
      "id": 2,
      "date": "Oct 22, 2022",
      "body": "Everythong becomes much clearer when you bring it into focus dont you think?",
      "picture": "@/assets/postitus_2.jpg",
      "likes": 0
  },
  {
      "userId": 1,
      "id": 3,
      "date": "Oct 22, 2022",
      "body": "Does anybody have a good tent that I colud lend would be really thankful!",
      "picture": null,
      "likes": 0
  },
  {
      "userId": 1,
      "id": 4,
      "date": "Oct 22, 2022",
      "body": "“The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart” ― Helen Keller",
      "picture": null,
      "likes": 0
  },
  {
      "userId": 1,
      "id": 5,
      "date": "Oct 22, 2022",
      "body": "Shes a cutie isnt she :)?",
      "picture": "@/assets/postitus_5.jpg",
      "likes": 0
  },
  {
      "userId": 1,
      "id": 6,
      "date": "Oct 22, 2022",
      "body": "shoudlnt everybody sometimes take soem time off",
      "picture": null,
      "likes": 0
  },
  {
      "userId": 1,
      "id": 7,
      "date": "Oct 22, 2022",
      "body": "What is happening with the electricity prices lately, seriously does somebody wanna explain this to me?",
      "picture": null,
      "likes": 0
  },
  {
      "userId": 1,
      "id": 8,
      "date": "Oct 22, 2022",
      "body": "We don’t read and write poetry because it’s cute. We read and write poetry, because we are members of the human race. \\n And the human race is filled with passion. Medicine, law, business, engineering. These are noble pursuits, necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for. \\n To quote from Whitman. “O me, O life, of the questions of these recurring. Of the endless trains of the faithless. Of cities filled with the foolish. What good, amid these, O me, O Life? Answer: That you are here. That life exists an identity.\\n That the powerful play goes on and you may contribute a verse,” That the powerful play goes on and you may contribute a verse. What will your verse be?",
      "picture": null,
      "likes": 0
  },
  {
      "userId": 1,
      "id": 9,
      "date": "Oct 22, 2022",
      "body": "Hey who else is making Tacos this tueasday?",
      "picture": null,
      "likes": 0
  },
  {
      "userId": 1,
      "id": 10,
      "date": "Oct 22, 2022",
      "body": "Everybody who is supporting Ukraine right now is a real hero!!!",
      "picture": null,
      "likes": 0
  }]
  },
  getters: {
    
  },
  mutations: {
    resetCount: state => {
        state.count = 0;
    },
    increaseCount: state => {
        state.count += 1;
    }
  },
  actions: {
  },
  modules: {
  }
})
