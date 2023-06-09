<script>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="dmidContainer">
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
                    which leads to 16 potential rhythms.
                </p>
                <p>
                    I had the idea to use plastic cups just randomly when thinking of household objects that could be
                    a part of the instrument. Later, I had the idea to give a 'magician' theme to the instrument and to
                    have the handholds look like magician clothes that could be used in a trick to make something disappear.
                    Once I had this theming, I came up with the name to frame the instrument like a magic trick of its own.
                </p>
                <p>
                    Originally, I wanted the sound to play from each cup only when it WAS covered. However, after coming
                    up with this theming, I decided to reverse this so that I could make the notes 'disappear' upon covering
                    each cup with the cloth.
                </p>
                <p>
                    For, the notes themselves, I got inspiration from the song that plays in
                    <a href="https://www.youtube.com/watch?v=u3x83kP7wXc" target="_blank">Drip Drop Galaxy</a>
                    from Super Mario Galaxy. The first 2 sets of notes are from this song (in a different key). The
                    third set I chose myself through experimentation.
                </p>
                <img src="../../assets/images/DMID/dmid-left.png" />
                <h3>Features</h3>
                <p>
                    The main features of 'The Amazing Disappearing Notes' instrument are the notes that play from each cup.
                    Each cup is assigned a note and a beat (1-4). The notes will play in order 1, 2, 3, 4, and then repeat.
                    However, whenever a note is about to be played, it is only played if the corresponding cup is uncovered.
                    This is measured using a photoresistor in each cup.
                </p>
                <p>
                    On the right handhold, there is a force sensor where the thumb should be positioned. As the user presses
                    on this, the notes will change for each cup. There are 3 different sets of 4 notes that can play out of
                    the cups. These correspond to no force, medium force, and max force on this force sensor. One
                    challenge of the instrument is mastering the medium force on this sensor - it can be difficult to judge
                    what
                    is medium vs max.
                </p>
                <p>
                    On the left handhold, there is another force sensor under the thumb. This sensor controls reverb. With
                    no
                    force, there will be 0 reverb. And as force increases, the reverb increases proportionally. The scale is
                    continuous on this sensor, making it a little less finicky than the right handhold's sensor.
                </p>
                <img src="../../assets/images/DMID/dmid-right.png" />
                <h3>Wiring</h3>
                <p>
                    The instrument is wired on an Arduino UNO. The main wiring takes place on a breadboard hidden inside the
                    box that the cups are mounted on. The Arduino UNO contains 6 'Analog Input' ports which allows the 6
                    sensors
                    of this instrument (4 photoresistors, 2 force sensors) to all be read.
                </p>
                <div class="multiimage">
                    <img class="halfimage" src="../../assets/images/DMID/arduino.png" />
                    <img class="halfimage" src="../../assets/images/DMID/boxinside.png" />
                </div>
                <p>
                    For the force sensors, long wires are attached from the breadboard, out the back of the box, and hidden
                    under
                    the fabric to get to the thumb position. For the photoresistors, wires were soldered onto each one and
                    then ran
                    through the box through holes directly under each cup.
                </p>
                <div class="multiimage">
                    <img class="halfimage" src="../../assets/images/DMID/handhold.png" />
                    <img class="halfimage" src="../../assets/images/DMID/cupinterior.png" />
                </div>
                <p>
                    Below is a full circuit diagram of the Arduino wiring:
                </p>
                <div class="multiimage">
                    <img class="halfimage" src="../../assets/images/DMID/circuitdiag.png" />
                </div>
                <h3>Code</h3>
                <p>
                    A picture of the Max patch is available below, and a link to download it and the Arduino code can be
                    found <a href="https://drive.google.com/drive/folders/1lsqLdr0CN2IX2run1E8c-s_LmpALVjUm?usp=sharing"
                        target="_blank">Here</a>.
                    For the Max patch, on the left side there is a 'metro' object that runs continuously to cycle through
                    the
                    notes. The 'counter' object helps with the 1, 2, 3, 4, repeating pattern of notes. On the right side of
                    the
                    patch, there is a 'serial' object to receive data from the Arduino. Since 6 values are sent (one for
                    each sensor)
                    at each time step, the values are grouped into a 'zl.group' array. Then, the values are split up -
                    indices 0-3
                    are used to determine if each note is on. Then, indices 4-5 are for the force sensors - one to decide
                    the preset of notes
                    and another to decide the reverb. The 'yafr2' object is used for reverb. And finally, the 'cycle~'
                    object is used
                    to produce the notes.
                </p>
                <img src="../../assets/images/DMID/maxpatch.png" />
                <p>
                    The Arduino code is rather simple. In the 'setup', each sensor is calibrated. This is particularly
                    important for
                    the photoresistors so that the instrument can be played with the same effect in various lighting
                    environments.
                    Calibration is also done for the force sensors in case one user is used to pressing harder than another
                    user.
                    The loop block simply grabs values from all 6 sensors and sends them to Max serially. After all 6 are
                    sent, the value '255'
                    is sent to indicate all values have been sent. All real values max out at 254.
                </p>
                <h3>Conclusion</h3>
                <p>
                    Overall, this was a very fun project and I'm really happy with how my instrument came out! As a computer
                    science major, it's not every day that
                    I get to make something physical, so this was a nice change of pace. I went into this class having
                    never soldered anything, so that was one major thing I learned. It was also interesting using Max - a
                    completely unfamiliar
                    tool to me before this. Thanks to Stephan for teaching this class and to
                    everyone else for making it a fun and meaningful experience!
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pageContainer {
    max-width: 900px;
    margin: auto;
    padding: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
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
    background-position: center center;
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
    background-color: aqua;
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
    width: 90%;
    margin: auto;
    display: block;
}

.halfimage {
    width: 45%;
    margin: 10px;
    min-width: 200px;
}

.multiimage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.dmidContainer{
    background-color: mistyrose;
}

h3 {
    font-size: 1.4em;
}
</style>
