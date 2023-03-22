---
title: On-bike car detection system
layout: subpage
tags: ['page', 'project']
modified: 2023-03-12 00:00:00
order: 4
technologies: ['java', 'android', 'C', 'embedded']
eleventyNavigation:
  key: On-bike car detection system
  parent: Projects
---
<div class="project-page">
  Project involved designing and manufacturing prototype of on-bike car detection system. Two devices were used: ESP32 board with distance sensor, and a Android phone.

  <h2>Main goals</h2>
  <ul class="list-disc">
    <li>detect distance to passing cars using ultrasonic sensor</li>
    <li>raise alarm when measured distance was lower than threshold</li>
    <li>make a car photo using Android device, using BT connection to trigger camera</li>
  </ul>
  <h2>Hardware</h2>
  I've used ESP32 board with HC-SR04 ultrasonic sensor.
  <h2>Software</h2>
  I've made an Android app that connects to the ESP32. When ESP32 sends proper signal, app makes photo using phone camera.
  <img src="/images/bike-radar.png"/>


</div>