const secondHand = document.querySelector(".second-hand");
      const MinutesHand = document.querySelector(".min-hand");
      const hourHand = document.querySelector(".hour-hand");
      function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondDegrees = (seconds / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;
        // console.log(seconds);

        const mints = now.getMinutes();
        const mintsDegrees = (mints / 60) * 360 + 90;
        MinutesHand.style.transform = `rotate(${mintsDegrees}deg)`;

        const hrs = now.getHours();
        const HoursDegrees = (hrs / 12) * 360 + 90;
        hourHand.style.transform = `rotate(${HoursDegrees}deg)`;
      }
      setInterval(setDate, 1000);