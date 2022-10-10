---
title: On-bike car detection system
layout: subpage
tags: ['page', 'project']
modified: 2022-01-09 00:00:00
order: 5
technologies: ['java', 'android', 'C', 'embedded']
eleventyNavigation:
  key: On-bike car detection system
  parent: Projects
---
<div class="project-page">
  Project involved designing and manufacturing prototype of on-bike car detection system. Two devices were used: ESP32 board with distance sensor, and a Android phone.
  <h1 class="text-lg bold font-semibold">Main goals</h1>
  <ul class="list-disc">
    <li>detect distance to passing cars using ultrasonic sensor</li>
    <li>raise alarm when measured distance was lower than threshold</li>
    <li>make a car photo using Android device, using BT connection to trigger camera</li>
  </ul>
  <h1 class="text-lg bold font-semibold mt-3 mb-1">Hardware</h1>
  I've used ESP32 board with HC-SR04 ultrasonic sensor.
  <h1 class="text-lg bold font-semibold mt-3 mb-1">Software</h1>
  I've made an Android app that connects to the ESP32. When ESP32 sends proper signal, app makes photo using phone camera.
  <img src="/images/bike-radar.png"/>


</div>