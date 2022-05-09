<template>
<div>
    <div class="event">
    <div class="header">
          <div class="header-one" data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
          <p>Our Events</p>
          <h1>Events</h1>
          </div>
      </div>
      </div>

      <div class="about">
          <p>United Scholars Center Events are the world's leading international education networking 
              conferences.We invite international schools to meet with students.  Where each student
               is welcome to ask any question and receive an immediate response.</p>
               <h3>Students Benefits</h3>
               <ul>
                   <li>On spot admissions</li>
                   <li>Meet different educatorsfrom abroad</li>
                   <li>Meet Decision makers from abroad</li>
                   <li>Opportunity for partial scholarship</li>
                   <li>Meet & connect directly with schools & universities abraod.</li>
               </ul>
      </div>

      <!-- <div class="upcoming-event">
      <h1>Upcoming Events</h1>
      </div> -->

 <div class="event-one">

         
          

      </div>

    <div class="event-header">
        <h1>Latest Events</h1>
    </div>

      <div class="event-one">

           <div class="event-one-one">
          <div class="image">
              <img src="/assets/myimages/Education_Fair.jpg" alt="">
          </div>
          <div class="text">
              <h3>Pyhsical Education Fair</h3>
              <p>9pm-12pm | 7-6 MAY 2022</p>
              <br>

              <p>6-7 MAY, 09:00 – 12:00 EAT
              Location: Ubumwe Grande Hotel
               Rwanda-Kigali</p>

               <!-- <button><router-link to="Physical_education_fair" class="link">View More</router-link></button> -->
               
          </div>
          </div>

          <div class="event-one-one">
          <div class="image">
              <img src="/assets/myimages/5.jpg" alt="">
          </div>
          <div class="text">
              <h2>Global Education Fair</h2>
              <p>9pm-12pm | United Scholars Center</p>
              <br>

              <p>22-23Sep, 09:00 – 12:00 EAT
              Location: Kigali Marriott Hotel
               Rwanda-Kigali</p>
               <button>View More</button>
          </div>
          </div>


          <div class="event-one-one">
          <div class="image">
              <img src="/assets/myimages/4.jpg" alt="">
          </div>
          <div class="text">
             <h2> Global Education Fair</h2>
             
<p>9pm-12pm | United Scholars Center
<br><br>
18-19Sep, 09:00 – 12:00 EAT
Location: King's Conference Center
Burundi-Bujumbura</p>
<button>View More</button>
          </div>          
          </div>

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
.about ul{
    padding-left: 20vh;
}
.about h3{
    padding-left: 20vh;
}
.about p{
    padding-right: 20vh;
    padding-left: 20vh;
    padding-bottom: 4vh;
    text-align: justify;
    font-size: 18px;

}
.upcoming-event h1{
    padding-left: 18vh;
    font-size: 40px;
}
.event-header h1{
    padding-left: 18vh;
    font-size: 40px;
}
.event .header{
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
.event-one{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    column-gap: 3%;
    padding: 10vh;
    padding-left: 20vh;
    padding-right: 20vh;
}
.event-one  .event-one-one .image img{
    width: 100%;
}
.event-one  .text h3{
    font-size: 20px;
    font-weight: 600;
}
.event-one  .event-one-one .text {
    transform: translateY(-80px);
    padding: 20px;
    width: 100%;
    background: white;
    border: 1px solid grey;
}
.event-one  .event-one-one {
    height: 400px;
    overflow: hidden;
    
}

.event-one .event-one-one:hover .text{
    transform: translateY(-200px);
    transition: ease-in-out 1s all;
}
.event-one .event-one-one:hover .text button .link{
    text-decoration: none;
    color: white;
}
.event-one .event-one-one:hover .text button{
    width: 150px;
    height: 40px;
    background: #d8172e;
    border-color: #d8172e;
    margin-left: 10vh;
    color: white;
    font-size: 16px;
}
.event-one .event-one-one:hover .text p {
    text-align: center;
}
.event-one .event-one-one p{
    font-size: 16px;
}
@media(max-width: 1024px){
    .event .header{
    background: #0c1f3e;
    width: 100%;
    height: 300%;
}
.header-one h1{
    font-size: 80px;
  text-align: center;
  color: white;
  padding-bottom: 10vh;
}
.header-one p{
     font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 80px;
}
.event-one{
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 3%;
    padding: 5vh;
    padding-left: 20vh;
    padding-right: 20vh;
}
.event-one  .event-one-one .image img{
    width: 100%;
}
.event-one  .event-one-one .text {
    transform: translateY(-20px);
    padding: 20px;
    width: 100%;
    background: white;
    border: 1px solid grey;
}
.event-one  .event-one-one {
    height: 400px;
    overflow: hidden;
    
}

.event-one .event-one-one:hover .text{
    transform: translateY(-130px);
    transition: ease-in-out 1s all;
}
.event-one .event-one-one:hover .text button{
    width: 100px;
    height: 30px;
    background: #d8172e;
    border-color: #d8172e;
    margin-left: 15vh;
    color: white;
    font-size: 16px;
}
.event-one .event-one-one:hover .text p {
    text-align: center;
}
.event-one .event-one-one p{
    font-size: 16px;
}
}
@media(max-width: 768px){
    .event .header{
    background: #0c1f3e;
    width: 100%;
    height: 300%;
}
.header-one h1{
    font-size: 80px;
  text-align: center;
  color: white;
  padding-bottom: 10vh;
}
.header-one p{
     font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 80px;
}
.event-one{
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 3%;
    padding: 5vh;
    padding-left: 10vh;
    padding-right: 10vh;
}
.event-one  .event-one-one .image img{
    width: 100%;
}
.event-one  .event-one-one .text {
    transform: translateY(-20px);
    padding: 20px;
    width: 100%;
    background: white;
    border: 1px solid grey;
}
.event-one  .event-one-one {
    height: 400px;
    overflow: hidden;
    
}

.event-one .event-one-one:hover .text{
    transform: translateY(-130px);
    transition: ease-in-out 1s all;
}
.event-one .event-one-one:hover .text button{
    width: 100px;
    height: 30px;
    background: #d8172e;
    border-color: #d8172e;
    margin-left: 15vh;
    color: white;
    font-size: 16px;
}
.event-one .event-one-one:hover .text p {
    text-align: center;
}
.event-one .event-one-one p{
    font-size: 16px;
}
}
@media(max-width:425px){
  .event .header{
    background: #0c1f3e;
    width: 100%;
    height: 400%;
}
.header-one h1{
    font-size: 70px;
  text-align: center;
  color: white;
  margin-top: -10vh;
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
.event-one{
    display: flex;
    flex-direction: column;
    column-gap: 0%;
    padding: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
}
.event-one  .event-one-one .image img{
    width: 100%;
}
.event-one  .event-one-one .text {
    transform: translateY(-20px);
    padding: 20px;
    width: 100%;
    background: white;
    border: 1px solid grey;
}
.event-one  .event-one-one {
    height: 600px;
    overflow: hidden;
    
}

.event-one .event-one-one:hover .text{
    transform: translateY(-130px);
    transition: ease-in-out 1s all;
}
.event-one .event-one-one:hover .text button{
    width: 100px;
    height: 30px;
    background: #d8172e;
    border-color: #d8172e;
    margin-left: 15vh;
    color: white;
    font-size: 16px;
}
.event-one .event-one-one:hover .text p {
    text-align: center;
}
.event-one .event-one-one p{
    font-size: 16px;
}  
}
@media(max-width: 360px){

    .event .header{
    background: #0c1f3e;
    width: 100%;
    height: 500%;
}
.header-one h1{
    font-size: 50px;
  text-align: center;
  color: white;
  padding-bottom: 10vh;
}
.header-one p{
     font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
  font-weight: 300;
}
.header-one{
    padding-top: 80px;
}
.event-one{
    display: flex;
    flex-direction: column;
    column-gap: 3%;
    padding: 0vh;
    padding-left: 2vh;
    padding-right: 2vh;
}
.event-one  .event-one-one .image img{
    width: 100%;
}
.event-one  .event-one-one .text {
    transform: translateY(-20px);
    padding: 0px;
    width: 100%;
    background: white;
    border: 1px solid grey;
}
.event-one  .event-one-one {
    height: 600px;
    overflow: hidden;
    
}

.event-one .event-one-one:hover .text{
    transform: translateY(-130px);
    transition: ease-in-out 1s all;
}
.event-one .event-one-one:hover .text button{
    width: 100px;
    height: 30px;
    background: #d8172e;
    border-color: #d8172e;
    margin-left: 15vh;
    color: white;
    font-size: 16px;
}
.event-one .event-one-one:hover .text p {
    text-align: center;
}
.event-one .event-one-one p{
    font-size: 16px;
}
}
</style>