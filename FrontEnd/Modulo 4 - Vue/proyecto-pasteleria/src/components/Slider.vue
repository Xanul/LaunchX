<template>
    <div class="sliderContainer">
        <!-- <img src="../assets/chocoCake.jpg" alt="" width="500" height="500" class="mySlides">
        <img src="../assets/guayabaCake.webp" alt="" width="500" height="500" class="mySlides">
        <img src="../assets/manzanaCake.webp" alt="" width="500" height="500" class="mySlides">
        <img src="../assets/cheeseCake.jpg" alt="" width="500" height="500" class="mySlides"> -->

        <!-- <button class="displayLeft"></button>
        <button class="displayRight"></button> -->
        <div class="mySlides fade">
            <div class="numberText">1/3</div>
            <img src="../assets/chocoCake.jpg" alt="" width="500" height="500">
            <div class="text">Caption text</div>
        </div>
        <div class="mySlides fade">
            <div class="numberText">2/3</div>
            <img src="../assets/manzanaCake.webp" alt="" width="500" height="500">
            <div class="text">Caption text</div>
        </div>
        <div class="mySlides fade">
            <div class="numberText">3/3</div>
            <img src="../assets/guayabaCake.webp" alt="" width="500" height="500">
            <div class="text">Caption text</div>
        </div>

        <a class="prev" onclick='plusSlides(-1)'>&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>

        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'slider',
    data () {
        return {
            slideIndex: 0,
        }
    },
    methods: {
        showSlides() {
            let i;
        }
    }
}


</script>

<style scoped>
* {
    box-sizing: border-box;
}

.sliderContainer {
    max-width: 1000px;
    position: relative;
    margin: auto;
}

.mySlides {
    display: none;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

</style>