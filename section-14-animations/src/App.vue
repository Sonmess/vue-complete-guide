<template>
  <transition name="fade-button">
    <router-view></router-view>
  </transition>
</template>  

<script>

export default {
  components: {},
  data() {
    return {
      animatedBlock: false, 
      dialogIsVisible: false,
      showParagraph: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el);
      el.style.opacity = 1;
    },
    animationEnter(el, done) {
      console.log('enter animation');
      console.log(el);
      let counter = 0;
      this.enterInterval = setInterval(() => {
        el.style.opacity = counter * 0.1;
        counter++;
        if (counter > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 100);
    },
    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    leaveAnimation(el, done) {
      console.log('leave animation');
      console.log(el);
      let counter = 10;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = counter * 0.1;
        counter--;
        if (counter < 0) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 100);
    },
    afterLeave(el) {
      console.log('after leave');
      console.log(el);
    },
    enterCancelled() {
      console.log('enter cancelled');
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      console.log('leave cancelled');
      clearInterval(this.leaveInterval);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateSquare() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 1s ease-in; */
  
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  animation: slide-fade 1s ease-out forwards;
}

.custom-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.custom-enter-active {
  transition: all 1s ease-in;
}

.custom-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.custom-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.custom-leave-active {
  transition: all 1s ease-out;
}

.custom-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-button-enter-from, .fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to, .fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(-120px) scale(1.2);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>