<script>
import { RouterView } from 'vue-router';
</script>

<template>
  <h1 class="title">The Amazing Disappearing Notes</h1>
  <div class="pageContainer">
    <div>
        <h3>Overview</h3>
        <p>
            The 'Amazing Disappearing Notes' is an instrument I made as part of my project for the class Digital
            Musical Instrument Design (CS 497) at Northwestern University. The instrument runs on an Arduino with
            several sensors sending data to my laptop. The data is then processed by Max MSP which creates the
            sound. Below is a video of my performance on this instrument and a short demo on its features.
        </p>
        <iframe src="https://youtube.com/embed/8-YHaLy-oxY" class="video" frameborder="0" allowfullscreen>
        </iframe>
        <h3>Inspiration & Design</h3>
        <p>
            One of the main goals of this instrument was to take just a few building block features and allow
            for creative uses of those features. Rhythm especially was one domain I wanted to experiment with
            quite a bit. With just 4 possible notes, there are 16 different combinations of notes being on/off
            which leads to 16 different potential rhythms.
        </p>
        <p>
            I had the idea to use plastic cups just randomly when thinking of household objects that could be
            a part of the instrument. Later, I had the idea to give a 'magician' theme to the instrument and to
            have the handholds look like magician clothes that could be used in a trick to make something disappear.
            Once I had this theming, I came up with the name to frame the instrument like a magic trick of its own.
        </p>
        <p>
            Originally, I wanted the sound to play from each cup only when it was NOT covered. However, after coming
            up with this theming I decided to reverse this so that I could make the notes 'disappear' upon covering
            each cup with the cloth.
        </p>
        <p>
            The notes themselves, I got inspiration from the song that plays in 
            <a href="https://www.youtube.com/watch?v=u3x83kP7wXc" target="_blank">Drip Drop Galaxy</a>
            from Super Mario Galaxy. The first 2 sets of notes are from this sond (in a different key). The 
            third set I chose myself to go with the other two.
        </p>
        <img src="../../assets/images/DMID/dmid-left.png"/>
        <h3>Features</h3>
        <p>
            The main features of 'The Amazing Disappearing Notes' instrument are the notes that play from each cup.
            Each cup is assigned a note and a beat (1-4). The notes will play in order 1, 2, 3, 4, and then repeat.
            However, whenever a note is about to be played, it is only played if the corresponding cup is uncovered.
            This is measured using a photoresistor in each cup.
        </p>
        <p>
            On the right handhold, there is a pressure sensor where the thumb should be positioned. As the user presses 
            on this, the notes will change for each cup. There are 3 different sets of 4 notes that can play out of
            the cups. These correspond to no pressure, medium pressure, and max pressure on this pressure sensor. One 
            challenge of the instrument is mastering the medium pressure on this sensor - it can be difficult to judge what
            is medium vs max.
        </p>
        <p>
            On the left handhold, there is another pressure sensor under the thumb. This sensor controls reverb. With no 
            pressure, there will be 0 reverb. And as pressure increases, the reverb increases proportionally. The scale is 
            consinuous on this sensor, making it a little less finicky than the right handhold's sensor.
        </p>
        <img src="../../assets/images/DMID/dmid-right.png"/>
        <h3>Wiring</h3>
        <p>
            The instrument is wired on an Arduino UNO. The main wiring takes place on a breaboard hidden inside the 
            box that the cups are mounted on. The Arduino UNO contains 6 'Analog Input' ports which allows the 6 sensors 
            of this instrument (4 photoresistors, 2 pressure sensors) to all be read.
        </p>
        <div class="multiimage">
            <img class="halfimage" src="../../assets/images/DMID/arduino.png"/>
            <img class="halfimage" src="../../assets/images/DMID/boxinside.png"/>
        </div>
        <p>
            For the pressure sensors, long wires are attached from the breadboard, out the back of the box, and hidden under 
            the fabric to get to the thumb position. For the photoresistors, wires were soldered onto each one and then ran 
            through the box through holes directly under each cup.
        </p>
        <div class="multiimage">
            <img class="halfimage" src="../../assets/images/DMID/handhold.png"/>
            <img class="halfimage" src="../../assets/images/DMID/cupinterior.png"/>
        </div>
        <h3>Coding</h3>
    </div>
  </div>
</template>

<style scoped>
.pageContainer {
    max-width: 900px;
    margin: auto;
    padding: 30px;
}

.title {
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: calc(3vw + 25px);
    margin: 0;
    text-align: center;
    padding-right: 30px;
    padding-left: 30px;
}

.title::before {
    background-image: url(../../assets/images/DMID/dmid_front.png);
    background-size: cover;
    background-position:center center;
    filter: brightness(40%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    z-index: -1;
}

body {
    padding-top: 0px;
}

.video {
    width: 80vw;
    height: 45vw;
    max-width: 800px;
    max-height: 450px;
    display: block;
    margin: auto;
}

img {
    width: 100%;
}

.halfimage {
    width: 45%;
    max-width: 350px;
    margin: 10px;
    min-width: 200px;
}

.multiimage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>
