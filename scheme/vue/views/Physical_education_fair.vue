<template>
<div class="contact">
  <div class="header">
          <div class="header-one" data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
          <p>Phsical Education Fair</p>
          <h1>EDUCATION FAIR</h1>
          </div>
      </div>

      <div class="education-fair">
          <div class="education-fair-one">
              <img src="/assets/myimages/Education_Fair.jpg" alt="">
          </div>
          <div class="education-fair-two">
              <p> 6th-7th May 2022 |  Ubumwe Grande Hotel</p>
              <h3>PHYSICAL EDUCATION FAIR</h3>
              <p>If you're thinking about studying abroad, don't miss our Physical Education Fair.</p>
              <button><a href="https://forms.gle/iUDDvoh3vqJuerPw8"> Apply Now</a></button>
          </div>
      </div>
      <div class="education-fair-section">
          <h3>Time & Location</h3>
          <p>6th - 7th May, 09:30 – 12:30 EAT</p>
          <p>Ubumwe Grande Hotel</p>
          <h3>Student Benefit</h3>
          <ul>
              <li>On sport admissions</li>
              <li>Meet different educators from abraod</li>
              <li>Meet decision makers from abroad</li>
              <li>opportunity for partial scholarships</li>
              <li>Meet & connect directly with schools & universities abraod.</li>
          </ul>

      </div>


      

      <Footer />
      </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    components: {
        Footer
    }
}
</script>

<style scoped>
.education-fair-section{
    margin-left: 30vh;
}
.education-fair-section h3{
    font-size: 30px;
}
.education-fair-section p{
    font-size: 17px;
}
.education-fair-one img{
    width: 100%;
    padding: 5vh;
}
.education-fair-two button a{
    color: white;
}
.education-fair-two button{
    width: 150px;
    height: 40px;
    background: #d8172e;
    color: white;
    border-radius: 100px;
    border-color: #d8172e;
}
.education-fair-two p{
    font-size: 17px;
}
.education-fair-two h3{
font-size: 30px;
}
.education-fair-two{
    padding: 5vh;
    padding-top: 15vh;
}
.contact {
    background:#eaeaea;
}
.contact .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 100px;
  text-align: center;
  color: white;
  padding-bottom: 10vh;
}
.header-one p{
     font-size: 30px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 80px;
}
.education-fair{
    display: grid;
    grid-template-columns: 50% 50%;
    padding-left: 10vh;
}

@media (max-width: 425px){
        .education-fair-section{
    margin-left: 7vh;
}
.education-fair-section h3{
    font-size: 30px;
}
.education-fair-section p{
    font-size: 17px;
}
.education-fair-one img{
    width: 100%;
    padding: 5vh;
}
.education-fair-two button a{
    color: white;
}
.education-fair-two button{
    width: 150px;
    height: 40px;
    background: #d8172e;
    color: white;
    border-radius: 100px;
    border-color: #d8172e;
}
.education-fair-two p{
    font-size: 17px;
}
.education-fair-two h3{
font-size: 30px;
}
.education-fair-two{
    padding: 5vh;
    padding-top: 7vh;
}
.contact {
    background:#eaeaea;
}
.contact .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 50px;
  text-align: center;
  color: white;
  padding-bottom: 9vh;
}
.header-one p{
     font-size: 30px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
  padding-bottom: 5vh;
}
.header-one{
    padding-top: 80px;
}
.education-fair{
    display: flex;
    flex-direction: column;
    padding-left: 4vh;
}
}
</style>