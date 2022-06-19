var app = new Vue({
   el: "#app",
   data: {
      title: "Welcome to the world👶:",
      utcDate: "",
      myDate: "",
      yourDate: "",
      bod: "",
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
   },
   methods: {
      countdown: function () {
         const second = 1000;
         const minute = second * 60;
         const hour = minute * 60;
         const day = hour * 24;

         let date = new Date();
         this.utcDate = date.toLocaleString("en-US", {
            timeZone: "UTC",
         });
         this.myDate = date.toLocaleString("en-US", {
            timeZone: "Africa/Nairobi",
         });
         this.yourDate = date.toLocaleString();

         let that = this;
         let current = date.getTime();
         let thisYear = date.getFullYear();
         let bod = new Date("7 December " + thisYear).getTime();
         let year = (bod - current) / day < 0 ? thisYear + 1 : thisYear;
         let countDown = new Date("7 December " + year).getTime();

         setInterval(function () {
            let now = new Date().getTime();
            let distance = countDown - now;

            that.days = Math.floor(distance / day);
            that.hours = Math.floor((distance % day) / hour);
            that.minutes = Math.floor((distance % hour) / minute);
            that.seconds = Math.floor((distance % minute) / second);
         }, second);
      },
   },
   beforeMount() {
      this.countdown();
   },
});
